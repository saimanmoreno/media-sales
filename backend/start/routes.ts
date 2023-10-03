/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

// Rotas de autenticação
Route.group(() => {
  Route.post('login', 'AuthController.login')
  Route.post('register', 'AuthController.register')
  Route.post('reset-password', 'AuthController.resetPassword')
}).prefix('auth')


// Rotas protegidas por autenticação
Route.group(() => {

  // Rotas de usuários
  Route.resource('users', 'UsersController').apiOnly()

  // Rotas de anunciantes
  Route.resource('anunciantes', 'AnunciantesController').apiOnly()

  // Rotas de tipos de propostas
  Route.resource('tipopropostas', 'TipoPropostasController').apiOnly()

  // Rotas de títulos
  Route.resource('titulos', 'TitulosController').apiOnly()

  // Rotas de propostas
  Route.resource('propostas', 'PropostasController').apiOnly()

  // Rotas de notificações
  Route.resource('notificacoes', 'NotificacoesController').apiOnly()

  // Rota para atualizar a senha do usuário autenticado
  Route.put('update-password', 'AuthController.updatePassword')

  // Rota de logout
  Route.post('logout', 'AuthController.logout')

}).prefix('api').middleware('auth')