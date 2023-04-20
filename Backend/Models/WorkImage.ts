import { Model, DataTypes, UUIDV4 } from 'sequelize';
import { require } from '../Globals/GlobalDeclarations';
const sequelize = require('../config/connection')
class WorkImage extends Model {};

WorkImage.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id',
        },
        allowNull: false,
    },
    image_id: {
        type: DataTypes.UUIDV4,
        defaultValue: new UUIDV4(),
    },
    file_path: {
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

export default WorkImage;