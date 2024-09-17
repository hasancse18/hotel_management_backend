const express = require('express');
const router = express.Router();
const Person = require('./../models/Person');

router.post('/',async(req,res)=>{
    try
    {
      const data = req.body;
      const newPerson =new Person(data);
  
      //save the data to the databse;
      const response = await newPerson.save();
      console.log("Data Saved");
      res.status(200).json(response);
    }
    catch(error)
    {
      console.log(error);
      res.status(500).json({error: 'Internal Server Error'});
    }
    
  })

router.get('/',async(req,res)=>{
try {
    const data = await Person.find();
    console.log("Data Served");
    res.status(200).json(data);
} catch (error) {
    console.log(error);
    res.status(500).json({error: 'Internal Server Error'});
    console.log("Fetcjed successfully")
}
})

router.get('/:workType', async(req,res)=>{
    try {
      const workType = req.params.workType;
      if(workType=='chef' || workType== 'waiter' || workType=='manager'){
        const response = await Person.find({work:workType});
        res.status(200).json(response);
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({error: 'Internal Server Error'});
    }
  })


router.put('/:id',async(req,res)=>{
    try {
        const personId = req.params.id;
        const updatedpersonData = req.body;

        const response = await Person.findByIdAndUpdate(personId,updatedpersonData,{
            new: true,
            runValidators: true
        })

        if(!response){
            return res.status(404).json({error: 'Person Not Found'});
        }
        console.log("data Updated");
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Internal Server Error'});
    }
})

  module.exports = router;
  