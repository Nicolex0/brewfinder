// Function to fetch data from the Open Brewery DB API
async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
  }

  // Function to display brewery data on the webpage
function displayBreweries(breweries) {
    // Clear previous results
  const resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = '';

  if (breweries.length === 0) {
    resultsContainer.innerHTML = '<p>No results found.</p>';
} else {
    // Loop through the breweries and create HTML elements to display them
    breweries.forEach(brewery => {
        const breweryElement = document.createElement('div');
        breweryElement.classList.add('brewery');

        // Add brewery information to the element
        breweryElement.innerHTML = `
        <h3>${brewery.name}</h3>
        <p>Location: ${brewery.city}, ${brewery.state}</p>
        <p>Country: ${brewery.country}</p>
        <p>Type: ${brewery.brewery_type}</p>
        <p>Phone: ${brewery.phone}</p>
        <p>Website: <a href="${brewery.website_url}" target="_blank">${brewery.website_url}</a></p>
    `;

    // Append the brewery element to the results container
    resultsContainer.appendChild(breweryElement);
});
}
}

// Event listener for search form submission
document.getElementById('search-form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent form submission
  
    const searchInput = document.getElementById('search-input').value.trim();
    if (searchInput !== '') {
        const apiUrl = `https://api.openbrewerydb.org/v1/breweries?by_state=${searchInput}`;
        
        // Fetch data based on search input
        const breweries = await fetchData(apiUrl);
        displayBreweries(breweries);
    } else {
        // If search input is empty, hide the results container
        document.getElementById('results').innerHTML = '';
    }
  });

  // Event listener for reset button click
document.getElementById('reset-button').addEventListener('click', function() {
    document.getElementById('search-input').value = ''; // Clear search input
    document.getElementById('results').innerHTML = ''; // Clear search results
  });