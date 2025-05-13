import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter a value for name!"]
    },
    make: {
        type: Number,
        required: [true, "Please enter a value for make!"]
    },
    company: {
        type: String,
        required: [true, "Please enter a value for company!"]
    },
    number: {
        type: String,
        required: [true, "Please enter a value for number!"]
    },
    image: {
        type: String,
        required: false
    }
}, {
    timestamps: true
});

const Car = mongoose.model('Car', carSchema);

export default Car;