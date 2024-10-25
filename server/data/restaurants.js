// Fill this in
let restaurantData = [
    { 
        id: 1,
        name: "House of Prime Rib",
        phone: "(415) 885-4605",
        address: "1906 Van Ness Ave, San Francisco, CA 94109",
        photo: "/images/d7.jpg"
    },
    { 
        id: 2,
        name: "Saison",
        phone: "(415) 828-7990",
        address: "178 Townsend St, San Francisco, CA 94107",
        photo: "/images/saison.jpg"
    },
    { 
        id: 3,
        name: "Foreign Cinema",
        phone: "(415) 648-7600",
        address: "2534 Mission St, San Francisco, CA 94110",
        photo: "/images/foreigncinema.jpg"
    },
    { 
        id: 4,
        name: "Nopa",
        phone: "(415) 864-8643",
        address: "560 Divisadero St, San Francisco, CA 94117",
        photo: "/images/nopa.jpg"
    },
    { 
        id: 5,
        name: "R&G Lounge",
        phone: "(415) 982-7877",
        address: "631 Grant Ave, San Francisco, CA 94108",
        photo: "/images/rng.jpg"
    },
    { 
        id: 6,
        name: "Dim Sum Club",
        phone: "(415) 592-8938",
        address: "2237 Taraval St, San Francisco, CA 94116",
        photo: "/images/dimsumclub.jpg"
    },
    { 
        id: 7,
        name: "U:Dessert Story",
        phone: "(415) 796-3633",
        address: "3489 16th St, San Francisco, CA 94114",
        photo: "/images/udessert.jpg"
    },
    { 
        id: 8,
        name: "House of Nanking",
        phone: "(415) 421-1429",
        address: "919 Kearny St, San Francisco, CA 94133",
        photo: "/images/honk.jpeg"
    }
];

let lastId = restaurantData.length;

const getNextId = () => {
    lastId += 1;
    return lastId;
};


// Get a list of restaurants
const getRestaurants = () => {
    return restaurantData;
};


// Get a restaurant by id
const getRestaurant = (id) => {
    return restaurantData.find(restaurant => restaurant.id === id);
};

// Create a new restaurant entry
const createRestaurant = (data) => {
    console.log(data)
    const newRes = {
        id: getNextId(),
        name: data.name,
        address: data.add,
        phone: data.num,
        photo: data.photo,
    }
    console.log(newRes);
    restaurantData.push(newRes);
    return newRes;
};

// Delete a restaurant by id
const deleteRestaurant = (id) => {
    const resToDelete = restaurantData.find(restaurant => restaurant.id === id);
    if (!resToDelete) {
        throw Error(`Restaurant ${id} not found!`);
    }
    restaurantData = restaurantData.filter(restaurant => restaurant.id !== id);
    return resToDelete;
};

export { restaurantData, getRestaurants, getRestaurant, createRestaurant, deleteRestaurant };

