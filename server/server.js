import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { restaurantData } from './data/restaurants.js';

const app = express();
const PORT = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/attractions', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'attractions.html'));
});

app.get('/restaurants', (req, res) => {
    res.render('restaurants', { restaurants: restaurantData });
});

app.get("/newPage",(req, resp) => {
    resp.sendFile(path.join(__dirname, "public", 'newPage.html'));
})

app.post('/createRestaurant', express.json(), (req, res) => {
    const { name, address, address1, number } = req.body;

    const newRestaurant = {
        id: restaurantData.length + 1,
        name: name,
        phone: number,
        address: `${address}, ${address1}`,
        photo: '/images/default.jpg' 
    };

    restaurantData.push(newRestaurant);
    res.status(201).json(newRestaurant);
});


app.delete('/restaurants/delete/:index', (req, res) => {
    const index = req.params.index;

    if (index >= 0 && index < restaurantData.length) {
        restaurantData.splice(index, 1);
        res.sendStatus(200);
    } else {
        res.sendStatus(404);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
