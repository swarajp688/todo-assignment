// create Todo model
const mongoose = require('mongoose');
const Task = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        pinned: {
            type: Boolean,
            default: false
        },
    },{collection}
)