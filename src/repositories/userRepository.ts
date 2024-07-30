import Usuario from '../../models/Usuario';

export const userRepository = {
    findByEmail: async (email: string) => {
        return await Usuario.findOne({
            where: {
                email_usuario: email
            },
            attributes: [
                'id_usuario', 
                'senha_usuario', 
                'nome_usuario', 
                'cpf_usuario', 
                'telefone_usuario', 
                'email_usuario', 
                'tipo_usuario',
                'createdAt',
                'updatedAt'
            ]
        });
    }
};
