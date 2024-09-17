const express = require('express');
const router = express.Router();
const menu = require('./../models/Menu');

//create
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
//read
router.get('/',async(req,res)=>{
    try {
        const data =await menu.find();
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Internal Server Error'});
    }
})

//read using id
router.get('/:tastes',async(req,res)=>{
    try {
        const menuTaste = req.params.tastes;
        

        if(menuTaste == 'sweet' || menuTaste == 'spicy' || menuTaste == 'sour')
        {
            const response =await menu.find({taste:menuTaste});
            res.status(200).json(response);
            console.log("Data Send");
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Internal Server Error'});
    }
})


//update

router.put('/:id',async(req,res)=>{
    try {
        const menuId = req.params.id;
        const updateBody = req.body;
        if(menuId)
        {
            const response = await menu.findByIdAndUpdate(menuId,updateBody,{
                new: true,
                runValidators: true
            })
            if(!response){
                return res.status(404).json({error: 'Person Not Found'});
            }
            console.log("data Updated");
            res.status(200).json(response);
        }
    }  catch (error) {
        console.log(error);
        res.status(500).json({error: 'Internal Server Error'});
    }
})

//delete
router.delete('/:id',async(req,res)=>{
    try {
        const deleteId = req.params.id;
    const response = await menu.findByIdAndDelete(deleteId);
    if(!response){
        return res.status(404).json({error: 'Person Not Found'});
     
      }
    res.status(200).json(response);
    console.log('delete Data')
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Internal Server Error'});
    }
})


module.exports = router;