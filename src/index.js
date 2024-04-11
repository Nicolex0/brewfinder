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