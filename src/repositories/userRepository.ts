import Usuario  from "../../models/Usuario";

export const userRepository = {
    findByEmail: async (email_usuario: string) => {
        return await Usuario.findOne({
            where: {email_usuario}
        });
    },
}
