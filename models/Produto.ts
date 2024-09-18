import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../config/cnxsequelize'

interface ProdutoAttributes {
    id_produto?: number;
    nome_produto: string;
    descricao_produto: string;
    preco_produto: number;
    quantidade_produto?: number;
    tipo_produto?: string;
    produto_transformacao?: boolean;
}

class Produto extends Model<ProdutoAttributes> implements ProdutoAttributes {
    public id_produto!: number;
    public nome_produto!: string;
    public descricao_produto!: string;
    public preco_produto!: number;
    public quantidade_produto?: number;
    public tipo_produto?: string;
    public produto_transformacao?: boolean;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Produto.init({
    id_produto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome_produto: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 50]
        }
    },
    descricao_produto: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 50]
        }
    },
    preco_produto: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 20]
        }
    },
    quantidade_produto: {
        type: DataTypes.INTEGER
    },
    tipo_produto: {
        type: DataTypes.STRING,
        validate: {
            len: [0, 15]
        }
    },
    produto_transformacao: {
        type: DataTypes.BOOLEAN
    }
}, {
    sequelize,
    modelName: 'Produto',
    indexes: [
        {
            unique: true,
            fields: ['id_produto']
        }
    ]
})

Produto.sync()
    .then(() => {
        console.log('Modelo Produto sincronizado com o banco de dados.');
    })
    .catch((error) => {
        console.error('Erro ao sincronizar modelo Produto com o banco de dados:', error);
    });


export default Produto;