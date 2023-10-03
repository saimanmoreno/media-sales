import { DateTime } from 'luxon'
import { BaseModel, HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Proposta from './Proposta'

export default class Anunciante extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public contato: string

  @column()
  public endereco: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  // -----------------------RELATIONSHIPS-------------------------------

  @hasMany(() => Proposta)
  public propostas: HasMany<typeof Proposta>
}
