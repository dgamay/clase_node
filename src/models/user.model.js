const {Model,DataTypes}= require("sequelize");
const sequelize = require('./dbconection');

class User extends Model{}
User.init({
    id:{
    type:DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement :true,

    },

    firstname:{
        type:DataTypes.STRING(50),
        allowNull: false,
    },

    lastname:{
        type:DataTypes.STRING(50),
        allowNull: false,
    },

    email:{
        type:DataTypes.STRING(100),
        allowNull: false,
        unique:true,
        validate:{
            isEmail:true
        }
    },

    password:{
        type:DataTypes.STRING(25),
        allowNull: false,
    },
    isActive:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:true,
    },
},

{
    sequelize,
    modelName: "User",
    tableName: "users",
    timestamps:true,
}
);
/* Exportar el modelo */
module.exports= User;