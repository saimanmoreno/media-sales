import { DateTime } from 'luxon'
import { BaseModel, HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Proposta from './Proposta'

export default class Titulo extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  // -----------------------RELATIONSHIPS-------------------------------

  @hasMany(() => Proposta)
  public propostas: HasMany<typeof Proposta>
}
