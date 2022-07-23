const { Router } = require("express");
const {Activity, Country} = require('../db')

const router = Router()


router.get('/', async (req,res) =>{
    try {
    const {name} = req.query
    if(name){
        const response =  await Country.findAll({
            include: Activity
        }) 
    
         const rta = response.filter(item =>{
            for (let index = 0; index < item.activities.length; index++) {
                const element = item.activities[index].name
                if(element === name){
                    return true
                }else{
                    return false
                }
                
            }
         })       
        
           
        rta.length ? res.json(rta) : res.json('name of activity not equal country exist')
    }else{
        
        const allActivities = await Activity.findAll()
        res.json(allActivities)
            
    }
    } catch (error) {
     res.status(404).json(error)   
    }
})




router.post('/', async (req,res)=>{
    
    try {
        const  {name, difficulty, duration, season, countries} = req.body
        const newActivity = await Activity.create({
        name,
        difficulty,
        duration,
        season
    })

    const countriesInDataBase = await Country.findAll({
        where:{
            name: countries
        }
    })

    newActivity.addCountries(countriesInDataBase)

    res.json('Actividad creada correctamente')

    } catch (error) {
        res.status(404).json(error)
    }
})



module.exports= router
