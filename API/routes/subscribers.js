const express = require('express'); //scan express
const router = express.Router();    //using Router() from express




//getting all 
router.get('/', (req, res)=>{
    console.log('did we get here?')
    res.send('hello world');
})

//getting one 
router.get('/:id', (req, res)=>{
    //req.params.id
    res.send( req.params.id);
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
module.exports = router            //making the router function export
