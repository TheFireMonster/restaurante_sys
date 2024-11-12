import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db/banco/old/config/cnxsequelize';

interface MesaAttributes {
    id_mesa: number;
}

class mesas extends Model<MesaAttributes> implements MesaAttributes {
    public id_mesa!: number;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

mesas.init({
    id_mesa: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Mesa'
});

export default mesas;
