const mongoose = require('mongoose');

const tourSchema = mongoose.Schema({
    title:String,
    noOfDays:String,
    price:String,
});

const Tour = mongoose.model("Tour", tourSchema);
module.exports = Tour;