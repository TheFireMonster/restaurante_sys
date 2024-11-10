import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db/banco/old/config/cnxsequelize';

interface ProdutoAttributes {
    id_produto?: number;
    nome_produto: string;
    descricao_produto: string;
    preco_produto: number;
    quantidade_produto?: number;
    tipo_produto?: string;
    produto_transformacao?: boolean;
    imagem_produto: string | null;
}

class Produto extends Model<ProdutoAttributes> implements ProdutoAttributes {
    public id_produto!: number;
    public nome_produto!: string;
    public descricao_produto!: string;
    public preco_produto!: number;
    public quantidade_produto?: number;
    public tipo_produto?: string;
    public produto_transformacao?: boolean;
    public imagem_produto: string | null;

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
            len: [1, 255]
        }
    },
    preco_produto: {
        type: DataTypes.DECIMAL(8, 2),
        allowNull: false
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
    },
    imagem_produto: {  
        type: DataTypes.STRING,
        allowNull: true 
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

export default Produto;
