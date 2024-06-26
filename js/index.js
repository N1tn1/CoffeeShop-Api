const hotLink = document.getElementById('hot-link');
const coldLink = document.getElementById('cold-link');
const beverageList = document.getElementById('beverage-list');

function fetchBeverages(endpoint) {
    fetch(endpoint)
        .then(response => response.json())
        .then(beverages => {
            // Clear existing list items
            beverageList.innerHTML = '';
            // Create and append list items for each beverage
            beverages.forEach(beverage => {
                const listItem = document.createElement('li');
                listItem.textContent = beverage.title;
                beverageList.appendChild(listItem);
            });
            // Show the beverage list
            beverageList.style.display = 'block';
        })
        .catch(error => console.error('Error fetching beverages:', error));
}

// Activate menu listeners
function activateMenuListeners() {
    hotLink.addEventListener('click', function(event) {
        event.preventDefault();
        fetchBeverages('https://api.sampleapis.com/coffee/hot');
    });

    coldLink.addEventListener('click', function(event) {
        event.preventDefault();
        fetchBeverages('https://api.sampleapis.com/coffee/iced');
    });
}

// Close menu when clicked outside
document.body.addEventListener('click', function(event) {
    const target = event.target;
    const isMenuClicked = target === hotLink || target === coldLink || target === beverageList;
    if (!isMenuClicked) {
        // Hide Beverage List
        beverageList.style.display = 'none';
    }
});

// Initialize menu listeners
activateMenuListeners();
