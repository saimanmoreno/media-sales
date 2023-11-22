import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import TipoProposta from 'App/Models/TipoProposta';

export default class TipoPropostasController {

    public async index() {

        const tiposProposta = await TipoProposta.all();

        return tiposProposta;
    }

    public async show({ params }: HttpContextContract) {

        const tipoProposta = await TipoProposta.find(params.id);

        return tipoProposta;
    }

    public async store({ request }: HttpContextContract) {

        const data = request.only(['nome']);

        const tipoProposta = await TipoProposta.create(data);

        return tipoProposta;
    }

    public async update({ params, request }: HttpContextContract) {

        const data = request.only(['nome']);

        const tipoProposta = await TipoProposta.findOrFail(params.id);

        tipoProposta.merge(data);
        await tipoProposta.save();

        return tipoProposta;
    }

    public async destroy({ params }: HttpContextContract) {

        const tipoProposta = await TipoProposta.findOrFail(params.id);

        await tipoProposta.delete();

        return { message: 'Tipo de Proposta excluído com sucesso.' };
    }
}
