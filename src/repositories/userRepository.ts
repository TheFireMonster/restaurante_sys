import Usuario  from "../../models/Usuario";

export const userRepository = {
    findById: async (id: number) => {
        return await Usuario.findByPk(id)

    },
    findByEmail: async (email_usuario: string) => {
        return await Usuario.findOne({
            where: {email_usuario}
        });
    },
    findByRole: async (tipo_usuario: string) => {
        return await Usuario.findOne({
            where: {tipo_usuario}
        });
    }
}
