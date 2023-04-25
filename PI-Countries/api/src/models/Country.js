const { DataTypes } = require('sequelize');
const { Country } = require('../db.js');
require('dotenv').config();

const { API_URL } = process.env;
const axios = require('axios');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
    sequelize.define('Country', {
        id: {
            type: DataTypes.STRING(3),
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            
        },
        image: { 
            type: DataTypes.STRING,
            
        },
        continent: {
            type: DataTypes.STRING,
            
        },
        capital: {
            type: DataTypes.STRING,
            
        },
        subregion: {
            type: DataTypes.STRING,
            
        },
        area: {
            type: DataTypes.INTEGER,
            
        },
        population: {
            type: DataTypes.INTEGER,
            
        },
        // currencies: {
        //     type: DataTypes.JSON,
            
        // },
        // languages: {
        //     type: DataTypes.JSON,
        // },
        // translations: {
        //     type: DataTypes.JSON,
            
        // },
        // borders: {
        //     type: DataTypes.ARRAY(DataTypes.STRING),
            
        // },
  });
};
