import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import User from 'App/Models/User';

export default class UsersController {

    public async index() {

        const users = await User.all();

        return users;
    }

    public async show({ params }: HttpContextContract) {

        const user = await User.findOrFail(params.id);

        return user;
    }

    public async store({ request }: HttpContextContract) {

        const data = request.only(['email', 'password', 'cargo']);

        /**
         * TODO: ao criar o user deve ser enviado o link para o email registado para definir a password
         */

        const user = await User.create(data);

        return user;
    }

    public async update({ params, request }: HttpContextContract) {

        const data = request.only(['email', 'cargo']);

        const user = await User.findOrFail(params.id);

        user.merge(data);
        await user.save();

        return user;
    }

    public async destroy({ response, params, auth }: HttpContextContract) {

        const user = await User.findOrFail(params.id);

        // Verifique se o usuário autenticado é um administrador
        const isAdmin = auth.user?.cargo === 'admin';

        // Verifique se o usuário autenticado não está tentando remover a si mesmo
        const isSelfRemoval = auth.user?.id === user.id;

        // Se o usuário não for um administrador ou estiver tentando remover a si mesmo, retorne um erro
        if (isSelfRemoval) {
            return response.status(403).json({ error: 'Não podes remover a si mesmo maluco!' });
        }

        if (!isAdmin) {
            return response.status(403).json({ error: 'Acesso não autorizado.' });
        }

        await user.delete();

        return { message: 'Usuário removido com sucesso.' };
    }

}
