import express from 'express';
import { getEntries, addEntry, deleteEntry, updateEntry } from "../controllers/car.controller.js"

const router = express.Router();

router.get('/allEntries', getEntries);
router.post('/addEntry', addEntry);
router.delete('/deleteEntry/:id', deleteEntry);
router.put('/updateEntry/:id', updateEntry);

export default router;