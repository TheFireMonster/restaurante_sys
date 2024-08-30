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
    tableName: 'usuario',
    timestamps: false,
});

export default Usuario;
