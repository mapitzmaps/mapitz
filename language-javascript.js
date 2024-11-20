const attractions = [
    { name: "Central Park", description: "A large public park in New York City." },
    { name: "Eiffel Tower", description: "An iconic symbol of Paris." },
    { name: "Great Wall of China", description: "A series of fortifications made of various materials." }
];

const restaurants = [
    { name: "The Gourmet Kitchen", description: "Fine dining with a seasonal menu." },
    { name: "Pizza Paradise", description: "Best pizza in town." },
    { name: "Sushi World", description: "Authentic Japanese sushi experience." }
];

const events = [
    { name: "Music Festival", date: "2023-09-15", description: "A festival featuring various artists." },
    { name: "Art Exhibition", date: "2023-10-01", description: "Showcasing local artists." },
    { name: "Food Fair", date: "2023-11-20", description: "Taste dishes from around the world." }
];

function displayAttractions() {
    const attractionList = document.getElementById('attraction-list');
    attractions.forEach(attraction => {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${attraction.name}</h3><p>${attraction.description}</p>`;
        attractionList.appendChild(div);
    });
}

function displayRestaurants() {
    const restaurantList = document.getElementById('restaurant-list');
    restaurants.forEach(restaurant => {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${restaurant.name}</h3><p>${restaurant.description}</p>`;
        restaurantList.appendChild(div);
    });
}

function displayEvents() {
    const eventList = document.getElementById('event-list');
    events.forEach(event => {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${event.name}</h3><p>Date: ${event.date}</p><p>${event.description}</p>`;
        eventList.appendChild(div);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displayAttractions();
    displayRestaurants();
    displayEvents();
});
