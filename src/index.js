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