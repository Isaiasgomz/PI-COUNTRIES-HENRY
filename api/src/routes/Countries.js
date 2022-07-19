const { Router } = require("express");
const axios = require('axios')
const router = Router()
const {Op,Country, Activity} = require('../db')


const apiInfo = async () =>{
    const AllApi = await axios.get('https://restcountries.com/v3/all')
  
        const allCountries = AllApi.data.map(item =>{
            return {
                id:item.cca3,
                name:item.name.common,
                flag:item.flags[0],
                continent:item.continents[0],
                capital: item.capital ? item.capital[0] : 'doesnt have capital',
                subregion:item.subregion,
                area:item.area,
                population:item.population

            }
        })
        await Country.bulkCreate(allCountries) 
    
}




router.get('/' , async (req,res)=>{
    try {
        const {name} = req.query
        if(name){
            const data = await Country.findAll({
                where:{
                     name
                }
            })
            data ? res.json(data) : res.json('name of city not equal country exist')

        }else{
            await apiInfo()
            const data = await Country.findAll()
            res.json(data)
        }
    } catch (error) {
        res.json(error)
    }
})
 




router.get('/:id', async (req,res) =>{
   try {
    const {id} = req.params
    const data = await Country.findByPk(id,{
        include: Activity
    })
   
    if(data){
        res.json(data)
    }else{
        res.json('id of city not found, please write id valid')
    }

   } catch (error) {
        res.status(404).json(error)
   }
    
})



    





module.exports = router
