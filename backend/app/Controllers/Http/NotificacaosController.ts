import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Notificacao from 'App/Models/Notificacao';

export default class NotificacoesController {

  public async index() {

    const notificacoes = await Notificacao.all();

    return notificacoes;
  }

  public async show({ params }: HttpContextContract) {

    const notificacao = await Notificacao.find(params.id);

    return notificacao;
  }

  public async store({ request }: HttpContextContract) {

    const data = request.only(['tipo_notificacao', 'mensagem', 'estado', 'user_id']);

    const notificacao = await Notificacao.create(data);

    return notificacao;
  }

  public async update({ params, request }: HttpContextContract) {

    const data = request.only(['tipo_notificacao', 'mensagem', 'estado', 'user_id']);

    const notificacao = await Notificacao.findOrFail(params.id);

    notificacao.merge(data);
    await notificacao.save();

    return notificacao;
  }

  public async destroy({ params }: HttpContextContract) {

    const notificacao = await Notificacao.findOrFail(params.id);

    await notificacao.delete();
    
    return { message: 'Notificação excluída com sucesso.' };
  }
}
