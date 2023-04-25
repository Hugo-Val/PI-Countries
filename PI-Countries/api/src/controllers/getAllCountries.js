

 async function getAllCountries (req, res)  {
    // return await res.send("hu");
    try {
        const { data } =  axios.get(`${API_URL}`);
        const apiCountries =  data.map((country) => {
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
                    // currencies: country.currencies,
                    // languages: country.languages ? country.languages : 'No tiene lenguajes',
                    // translations: country.translations,
                    // borders: country.borders,
                },
            });
        });
        res.status(200).json(apiCountries);
      } catch (e) {
        res.status(500).json({ error: e.message });
      }
};

module.exports = getAllCountries;