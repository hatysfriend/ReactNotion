const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now,
    },
    content:{
        type:Array,
        default: [{array:'defalt'}]

    }

});
module.exports = mongoose.model('Posts', PostSchema);