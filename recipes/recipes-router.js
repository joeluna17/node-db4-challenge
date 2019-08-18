const express = require('express');
const router = express.Router();
const recipesmod = require('./recipes-model')


router.get('/', async (req, res)=>{

    try{
        const recipes = await recipesmod.getRecipes()
        res.json(recipes)
    }
    catch({message}){

        res.status(500).json(message);
    }
 
})

router.get('/shoppinglist/:id', async (req, res) => {
    const {id} = req.params;
    try{
        const shoppingList = await recipesmod.getshoppingList(id);
        res.status(200).json(shoppingList);
    }
    catch({message}){
        res.status(500).json(message);
    }
})

router.get('/instructions/:id', async (req, res) => {
    const {id} = req.params;

    try{
        const instructions = await recipesmod.getInstructions(id);
        res.status(200).json(instructions);
    }
    catch({message}){
        res.status(500).json(message);
    }
})





module.exports = router;