import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Titulo from 'App/Models/Titulo';

export default class TitulosController {

    public async index() {

        const titulos = await Titulo.all();

        return titulos;
    }

    public async show({ params }: HttpContextContract) {

        const titulo = await Titulo.find(params.id);

        return titulo;
    }

    public async store({ request }: HttpContextContract) {

        const data = request.only(['nome']);

        const titulo = await Titulo.create(data);

        return titulo;
    }

    public async update({ params, request }: HttpContextContract) {

        const data = request.only(['nome']);

        const titulo = await Titulo.findOrFail(params.id);

        titulo.merge(data);
        await titulo.save();

        return titulo;
    }

    public async destroy({ params }: HttpContextContract) {

        const titulo = await Titulo.findOrFail(params.id);

        await titulo.delete();

        return { message: 'Título excluído com sucesso.' };
    }
}
