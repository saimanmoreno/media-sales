import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class Notificacao extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public tipoNotificacao: string

  @column()
  public mensagem: string

  @column()
  public estado: string

  @column({ columnName: 'user_id' })
  public userId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  // -----------------------RELATIONSHIPS-------------------------------

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  // Define o nome da tabela associada a este modelo
  public static table = 'notificacoes'
}
