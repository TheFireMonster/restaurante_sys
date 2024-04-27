import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/cnxsequelize';

interface IngredienteAttributes {
    id_ingrediente: number;
    quantidade_ingrediente?: number;
    unidade_medida?: string;
    nome_ingrediente?: string;
}

class Ingrediente extends Model{
        public id_ingrediente!: number;
        public quantidade_ingrediente?: number;
        public unidade_medida?: string;
        public nome_ingrediente?: string;
    
        public readonly createdAt!: Date;
        public readonly updatedAt!: Date;
    }
    
    Ingrediente.init({
        id_ingrediente: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        quantidade_ingrediente: {
            type: DataTypes.INTEGER
        },
        unidade_medida: {
            type: DataTypes.STRING(2)
        },
        nome_ingrediente: {
            type: DataTypes.STRING(50)
        }
    }, {
        sequelize,
        modelName: 'Ingrediente',
        indexes: [
            {
                unique: true,
                fields: ['id_ingrediente']
            }
        ]
    });
    
    Ingrediente.sync();
    
    export default Ingrediente;
