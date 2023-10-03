import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Hash from '@ioc:Adonis/Core/Hash'

import User from "App/Models/User";

export default class AuthController {

    public async login({ request, auth }: HttpContextContract) {

        const { email, password } = request.body()

        const token = await auth.use("api").attempt(email, password, {
            expiresIn: "10 days",
        });

        return token.toJSON();
    }

    public async register({ request, auth }: HttpContextContract) {

        const { email, password, cargo } = request.body()

        const user = new User();

        user.email = email;
        user.password = password;
        user.cargo = cargo;

        await user.save();

        const token = await auth.use("api").login(user, {
            expiresIn: "10 days",
        });

        return token.toJSON();
    }

    async updatePassword({ request, response, auth }) {

        const user = await auth.authenticate();

        const { password, newPassword, confirmPassword } = request.all()

        const verifyPassword = await Hash.verify(user.password, password)

        if (!verifyPassword) {
            return response.status(400).json({
                error: 'Palavra-passe errada! Tente Novamente.'
            })
        }

        if (newPassword === password) {
            return response.status(400).json({
                error: 'Nova palavra-passe igual a antiga! Tente Novamente'
            })
        }

        if (newPassword !== confirmPassword) {
            return response.status(400).json({
                error: 'Palavra-passe não correspondem! Tente novamente.'
            })
        }

        user.password = newPassword
        await user.save()

        return response.status(200).json({
            message: 'Palavra-passe atualizada com sucesso!'
        })
    }

    async resetPassword({ request, response, auth }) {

        const user = await auth.authenticate();

        const { password } = request.all()

        user.password = password
        await user.save()

        return response.status(200).json({
            message: 'Palavra-passe redefinido com sucesso!'
        })
    }

    public async logout({ auth, response }: HttpContextContract) {
        await auth.logout()
        return response.status(200).json({ message: 'Logout realizado com sucesso.' })
    }
}