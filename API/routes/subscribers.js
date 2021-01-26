const express = require('express');
const router = express.Router();

//getting all 
router.get('/', (req, res)=>{
    res.send('hello world');
    console.log('did we get here?')
})

//getting one 
router.get('/:id', (req, res)=>{
    //req.params.id
    res.send('hello world: ' + req.params.id);
})

//creating one 
router.post('/', (req, res)=>{
    
})

//updating one 
router.patch('/:id', (req, res)=>{
    
})

//deleting one 
router.delete('/:id', (req, res)=>{
    
})

module.exports = router