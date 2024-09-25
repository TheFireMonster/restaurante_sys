import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/cnxsequelize';

class Usuario extends Model {
    public id_usuario!: number;
    public senha_usuario!: string;
    public nome_usuario!: string;
    public cpf_usuario!: string;
    public telefone_usuario!: string;
    public email_usuario!: string;
    public tipo_usuario!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Usuario.init({
    id_usuario: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    senha_usuario: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nome_usuario: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cpf_usuario: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefone_usuario: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    email_usuario: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tipo_usuario: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    sequelize,
    modelName: 'Usuario',
    tableName: 'Usuarios',
    timestamps: true,
});

Usuario.sync()
    .then(() => {
        console.log('Modelo Usuario sincronizado com o banco de dados.');
    })
    .catch((error) => {
        console.error('Erro ao sincronizar modelo Usuario com o banco de dados:', error);
    });

export default Usuario;
