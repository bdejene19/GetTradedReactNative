import { Model, DataTypes, UUIDV4 } from 'sequelize';

class WorkLocations extends Model {};

WorkLocations.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id',
        }
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
},  {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'work_locations',
    }   
)