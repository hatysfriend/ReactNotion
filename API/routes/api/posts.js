const express = require('express')
const router = express.Router();

//posts model
const Posts = require('../../Models/Posts');
const PageModel = require('../../Models/Page')



//get all posts
router.get('/', async (req, res) => {
    try {
        const posts = await PageModel.find();
        if (!posts) throw Error('No items');
        res.status(200).json(posts);

    } catch (err) {
        res.status(400).json({ msg: err })

    }
});

//create a post 
router.post('/', async (req, res) => {
    const newPage = new PageModel(req.body);
    try {
        const page = await newPage.save();
        if (!page) throw Error('something went wrong while saving the post ');
        res.status(200).json(page);

    } catch (err) {
        res.status(400).json({ msg: err })
    }
});

//delete a post 
router.delete('/:id', async (req, res) => {
    try {
        const post = await PageModel.findByIdAndDelete(req.params.id);
        if (!post) throw Error('No selected item found');
        res.status(200).json({ success: true });

    } catch (err) {
        res.status(400).json({ msg: err })
    }
});

//update a post 
router.patch('/:id', async (req, res) => {
    try {
        const post = await PageModel.findByIdAndUpdate(req.params.id, req.body);
        if (!post) throw Error('something went wrong while updating the post');
        res.status(200).json({ success: true });

    } catch (err) {
        res.status(400).json({ msg: err })

    }
});

//get a post
router.get('/:id', async (req, res) => {
    try {
        const post = await PageModel.findById(req.params.id);
        if (!post) throw Error('something went wrong while updating the post');
        res.status(200).json(post);

    } catch (err) {
        res.status(400).json({ msg: err })

    }
});

module.exports = router;