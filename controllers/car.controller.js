import Car from "../models/car.model.js";

export const getEntries = async (req, res) => {
    try {
        const cars = await Car.find({});
        if (cars.length > 0) {
            res.status(200).json({ success: true, data: cars, message: 'These are all car collections you have!' });
        } else {
            res.status(200).json({ success: true, message: 'OOPS! You have not added any cars in your collection yet.' })
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
};

export const addEntry = async (req, res) => {
    const car = req.body;

    const carEntry = new Car(car);

    try {
        await carEntry.save();
        res.status(201).json({ success: true, data: carEntry, message: 'Entry created successfully!' })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
};

export const deleteEntry = async (req, res) => {
    const { id } = req.params;
    try {
        const car = await Car.findById(id);
        if (!car) {
            res.status(404).json({ success: true, message: "There is no entry with this ID!" })
        } else {
            await Car.findByIdAndDelete(id);
            res.status(200).json({ success: true, message: "Entry deleted successfully!" })
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
};

export const updateEntry = async (req, res) => {
    const { id } = req.params;
    try {
        const car = await Car.findById(id);
        if (!car) {
            res.status(404).json({ success: true, message: "There is no entry with this ID!" })
        } else {
            const newCar = req.body;
            const updatedCar = await Car.findByIdAndUpdate(id, newCar, { new: true });
            res.status(200).json({ success: true, data: updatedCar, message: "Entry updated successfully!" })
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
};