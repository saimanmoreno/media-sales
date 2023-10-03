import { DateTime } from 'luxon'
import { BaseModel, column, BelongsTo, belongsTo } from '@ioc:Adonis/Lucid/Orm'
import Anunciante from './Anunciante'
import TipoProposta from './TipoProposta'
import Titulo from './Titulo'
import User from './User'

export default class Proposta extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome_projeto: string

  @column()
  public origem: string

  @column()
  public canal: string

  @column()
  public estado: string

  @column.dateTime()
  public data_inicio: DateTime

  @column()
  public valor_tabela: number

  @column()
  public desconto: number

  @column()
  public valor_negociado: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  // -----------------------RELATIONSHIPS-------------------------------
  
  @belongsTo(() => Anunciante)
  public anunciante: BelongsTo<typeof Anunciante>

  @belongsTo(() => TipoProposta)
  public tipo_proposta: BelongsTo<typeof TipoProposta>

  @belongsTo(() => Titulo)
  public titulo: BelongsTo<typeof Titulo>

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>
}
