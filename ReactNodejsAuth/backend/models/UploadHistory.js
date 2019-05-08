const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UploadHistorySchema = new Schema({
    id: {
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const UploadHistory = mongoose.model('UploadHistory', UploadHistorySchema, 'UploadHistory');

module.exports = UploadHistory;