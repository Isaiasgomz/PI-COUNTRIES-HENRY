const { Router } = require("express");
const {Activity} = require('../db')

const router = Router()

router.post('/', async (req,res)=>{
    
    try {
        const  {name, difficulty, duration, season} = req.body
        const newActivity = await Activity.create({
        name,
        difficulty,
        duration,
        season
    })
    res.json(newActivity)

    } catch (error) {
        res.status(404).json(error)
    }
})



module.exports= router
