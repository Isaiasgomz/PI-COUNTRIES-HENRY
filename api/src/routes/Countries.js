const { Router } = require("express");
 
const axios = require('axios')


const router = Router()

router.get('/', async (req,res)=>{
    axios.get('https://restcountries.com/v3/all')
        .then(res  =>  {
            const allCountries = res.data
            console.log(allCountries)
        })
    
        res.json(allCountries)
})




module.exports = router
// [ ] GET /countries:
// En una primera instancia deberán traer todos los países desde restcountries y guardarlos en su propia base de datos y luego ya utilizarlos desde allí (Debe retonar sólo los datos necesarios para la ruta principal)
// Obtener un listado de los paises.
// [ ] GET /countries/{idPais}:
// Obtener el detalle de un país en particular
// Debe traer solo los datos pedidos en la ruta de detalle de país
// Incluir los datos de las actividades turísticas correspondientes
// [ ] GET /countries?name="...":
// Obtener los países que coincidan con el nombre pasado como query parameter (No necesariamente tiene que ser una matcheo exacto)
// Si no existe ningún país mostrar un mensaje adecuado