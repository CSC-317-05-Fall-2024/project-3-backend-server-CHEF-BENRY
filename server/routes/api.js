import express from 'express';
const router = express.Router();
import {createRestaurant, deleteRestaurant} from './data/restaurants.js';

// Add routes here

router.post('/createRestaurant', (req, res) => {
    const restaurantData = req.body;
    try {
        const restaurant = createRestaurant(restaurantData);
        res.status(200).json(restaurant)
    } catch (error) {
        console.log(error)
        res.status(500).json({"message": `${error}`})
    }
});

router.delete('/deleteRestaurant', (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const restaurant = deleteRestaurant(id);
        res.status(200).json(restaurant)
    } catch (error) {
        res.status(500).json({"message": `${error}`})
    }
});

export {router as backendRouter};