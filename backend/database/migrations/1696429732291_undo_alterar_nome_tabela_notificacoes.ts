import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected newTableName = 'notificacaos'
  protected oldTableName = 'notificacoes'

  public async up() {
    this.schema.renameTable(this.newTableName, this.oldTableName)

  }

  public async down() {
    this.schema.renameTable(this.oldTableName, this.newTableName)
  }
}
