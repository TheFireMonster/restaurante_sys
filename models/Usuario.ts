import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/cnxsequelize';
import bcrypt from 'bcrypt';

interface UsuarioAttributes {
    id_usuario: number;
    senha_usuario: string;
    nome_usuario: string;
    cpf_usuario: string;
    telefone_usuario: string;
    email_usuario: string;
    tipo_usuario?: string;
}

interface UsuarioCreationAttributes extends Omit<UsuarioAttributes, 'id_usuario'> 
{
    id_usuario: number;
    senha_usuario: string;
    nome_usuario: string;
    cpf_usuario: string;
    telefone_usuario: string;
    email_usuario: string;
    tipo_usuario?: string;
}


class Usuario extends Model implements UsuarioAttributes {
    public id_usuario!: number;
    public senha_usuario!: string;
    public nome_usuario!: string;
    public cpf_usuario!: string;
    public telefone_usuario!: string;
    public email_usuario!: string;
    public tipo_usuario!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;


    validPassword(senha_usuario: string) {
        return bcrypt.compareSync(senha_usuario, this.senha_usuario);
    }
}


Usuario.init({
    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    senha_usuario: {
        type: DataTypes.STRING(60),
        allowNull: false,
        set(this: Usuario, value: string) {
            if (this.isNewRecord || this.changed('senha_usuario')) {
                const hash = bcrypt.hashSync(value, 11);
                this.setDataValue('senha_usuario', hash);
            }
        }
    },
    nome_usuario: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    cpf_usuario: {
        type: DataTypes.STRING(14),
        allowNull: false
    },
    telefone_usuario: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    email_usuario: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    tipo_usuario: {
        type: DataTypes.STRING(15),
        defaultValue: 'garçom'
    }
}, {
    sequelize,
    modelName: 'Usuario',
    indexes: [
        {
            unique: true,
            fields: ['id_usuario']
        }
    ]
});

/* Usuario.sync({ alter: true })
    .then(() => {
        console.log('Modelo Usuario sincronizado com o banco de dados.');
    })
    .catch((error) => {
        console.error('Erro ao sincronizar modelo Usuario com o banco de dados:', error);
    }); */

export default Usuario;

