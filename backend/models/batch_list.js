const mongoose = require('mongoose');


const batchListSchema = new mongoose.Schema({
firstName: { type: String, required: true, trim: true },
country: { type: String, default: null },
probability: { type: Number, default: null },
status: { type: String, enum: ['Verified','To Check'] },
synced:{type:Boolean,default:false},
});


module.exports = mongoose.model('batch_list', batchListSchema);