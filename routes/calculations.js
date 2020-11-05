const express = require('express');
const calculcationController = require('../controllers/calculcationController');
const Calculation = require('../models/calculation');
const router = express.Router();

router.route('/')
.get(calculcationController.lastTen)

router.post('/add', async (req, res) => {

    const calculation = new Calculation({
        calculation: req.body.calculation
    })

    try{
        const calc = await calculation.save()
        res.json(calc)
    }catch(err){
        res.send(err)
    }
})

module.exports = router;