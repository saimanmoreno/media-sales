import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import User from 'App/Models/User';

export default class UsersController {

    public async index() {

        const users = await User.all();

        return users;
    }

    public async show({ params }: HttpContextContract) {

        const user = await User.find(params.id);

        return user;
    }

    public async store({ request }: HttpContextContract) {

        const data = request.only(['email', 'password', 'cargo']);

        const user = await User.create(data);

        return user;
    }

    public async update({ params, request }: HttpContextContract) {

        const data = request.only(['email', 'password', 'cargo']);

        const user = await User.findOrFail(params.id);

        user.merge(data);
        await user.save();

        return user;
    }

    public async destroy({ params }: HttpContextContract) {

        const user = await User.findOrFail(params.id);

        await user.delete();

        return { message: 'Usuário excluído com sucesso.' };
    }
}
