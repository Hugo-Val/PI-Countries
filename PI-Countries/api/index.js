//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
// En una primera instancia, al levantar tu servidor se deberá hacer una petición a la API, y se tendrán que guardar todos los países dentro
// de tu base de datos. Una vez guardados, toda tu aplicación utilizará la información sólo de tu base de datos.
require('dotenv').config();
const axios = require('axios');
const { Country } = require('./src/db.js');
const { API_URL } = process.env;


// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
    async function loadApiToDB() {
      try {
        const { data } = await axios.get(`${API_URL}`);
        const apiCountries = data.map((country) => {
            return {
                id: country.cca3,
                name: country.name.common,
                image: country.flags[1],
                continent: country.region,
                capital: country.capital?.[0],
                subregion: country.subregion,
                area: country.area,
                population: country.population,
                currencies: country.currencies,
                languages: country.languages,
                translations: country.translations,
                borders: country.borders,
            };
        });
        apiCountries.forEach((country) => {
            Country.findOrCreate({
                where: {
                    id: country.id,
                    name: country.name,
                    image: country.image,
                    continent: country.continent,
                    capital: country.capital ? country.capital : 'No tiene capital',
                    subregion: country.subregion ? country.subregion : 'No tiene subregion',
                    area: country.area,
                    population: country.population,
                    
                },
            });
        });
        condition = false;
      } catch (e) {
          console.log(e);
      
      }
    }
    
    let condition = true;
    if (condition) {
      loadApiToDB(); 
    }
    
    
    
    
    
    
  });
})
.catch(err => console.log(err));









