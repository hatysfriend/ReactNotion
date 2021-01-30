const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

const PageSchema = new Schema({
    title:{
        type:String,
        default: null
    },
    path:{
        type:String,
        default: null
    },
    content:{
        type:Array,
        default: null
    },
    subNav:{
        type:Array,
        default:null
    }

});
module.exports = mongoose.model('Page', PageSchema);
