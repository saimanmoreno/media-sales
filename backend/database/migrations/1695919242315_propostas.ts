import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'propostas'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome_projeto').notNullable()
      table.string('origem').notNullable()
      table.string('canal').notNullable()
      table.string('estado').notNullable()
      table.date('data_inicio').notNullable()
      table.decimal('valor_tabela', 10, 2).notNullable()
      table.decimal('desconto', 5, 2).notNullable()
      table.decimal('valor_negociado', 10, 2).notNullable()
      // foreigns keys
      table.integer('anunciante_id').unsigned().references('id').inTable('anunciantes').onDelete('CASCADE')
      table.integer('tipo_proposta_id').unsigned().references('id').inTable('tipo_propostas').onDelete('CASCADE')
      table.integer('titulo_id').unsigned().references('id').inTable('titulos').onDelete('CASCADE')
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.timestamps(true, true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
