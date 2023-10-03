import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Proposta from 'App/Models/Proposta';

export default class PropostasController {

    public async index() {

        const propostas = await Proposta.all();

        return propostas;
    }

    public async show({ params }: HttpContextContract) {

        const proposta = await Proposta.find(params.id);

        return proposta;
    }

    public async store({ request }: HttpContextContract) {

        const data = request.only([
            'nome_projeto',
            'origem',
            'canal',
            'estado',
            'data_inicio',
            'valor_tabela',
            'desconto',
            'valor_negociado',
            'anunciante_id',
            'tipo_proposta_id',
            'titulo_id',
            'user_id',
        ]);

        const proposta = await Proposta.create(data);

        return proposta;
    }

    public async update({ params, request }: HttpContextContract) {

        const data = request.only([
            'nome_projeto',
            'origem',
            'canal',
            'estado',
            'data_inicio',
            'valor_tabela',
            'desconto',
            'valor_negociado',
            'anunciante_id',
            'tipo_proposta_id',
            'titulo_id',
            'user_id',
        ]);

        const proposta = await Proposta.findOrFail(params.id);

        proposta.merge(data);
        await proposta.save();

        return proposta;
    }

    public async destroy({ params }: HttpContextContract) {

        const proposta = await Proposta.findOrFail(params.id);

        await proposta.delete();

        return { message: 'Proposta excluída com sucesso.' };
    }
}
