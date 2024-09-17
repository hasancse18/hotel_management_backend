const express = require('express');
const router = express.Router();
const menu = require('./../models/Menu');


router.post('/',async(req,res)=>{
    try {
        const data = req.body;
    const newMenu = new menu(data);

    const response = await newMenu.save();
    res.status(200).json(response);
    console.log("Data Saved");
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Internal Server Error'});
    }
})
router.get('/',async(req,res)=>{
    try {
        const data =await menu.find();
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Internal Server Error'});
    }
})

module.exports = router;