// database/migrations/timestamp_add_expires_at_to_api_tokens.js

import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AddExpiresAtToApiTokens extends BaseSchema {
  protected tableName = 'api_tokens'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.timestamp('expires_at', { useTz: true }).nullable()
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('expires_at')
    })
  }
}
