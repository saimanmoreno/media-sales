import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import UserFactory from 'Database/factories/UserFactory';

export default class extends BaseSeeder {
  public async run() {

    const users = await UserFactory.merge([
      { email: 'foo@medianove.com' },
      { email: 'bar@medianove.com' },
      { email: 'john@medianove.com' },
    ]).createMany(3)
  }
}
