import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/cnxsequelize'; // Assuming sequelize is properly imported

interface MesaAttributes {
    id_mesa: number;
}

class Mesa extends Model<MesaAttributes> implements MesaAttributes {
    public id_mesa!: number;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Mesa.init({
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

Mesa.sync();

export default Mesa;