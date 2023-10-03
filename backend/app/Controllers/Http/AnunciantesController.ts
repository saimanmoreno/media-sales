import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Anunciante from 'App/Models/Anunciante';

export default class AnunciantesController {

    public async index() {

        const anunciantes = await Anunciante.all();

        return anunciantes;
    }

    public async show({ params }: HttpContextContract) {

        const anunciante = await Anunciante.find(params.id);

        return anunciante;
    }

    public async store({ request }: HttpContextContract) {

        const data = request.only(['nome', 'contato', 'endereco']);

        const anunciante = await Anunciante.create(data);

        return anunciante;
    }

    public async update({ params, request }: HttpContextContract) {

        const data = request.only(['nome', 'contato', 'endereco']);

        const anunciante = await Anunciante.findOrFail(params.id);

        anunciante.merge(data);
        await anunciante.save();

        return anunciante;
    }

    public async destroy({ params }: HttpContextContract) {

        const anunciante = await Anunciante.findOrFail(params.id);

        await anunciante.delete();
        
        return { message: 'Anunciante excluído com sucesso.' };
    }
}
