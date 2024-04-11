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
        <p>Type: ${brewery.brewery_type}</p>
        <p>Phone: ${brewery.phone}</p>
        <p>Website: <a href="${brewery.website_url}" target="_blank">${brewery.website_url}</a></p>
    `;