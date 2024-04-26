// Function for fetching data for cities in Header

export const fetchIataCodes = async (searchQuery: string) => {
    // Fetch data using the provided searchQuery
    const response = await fetch(`api/getIataCode/${searchQuery}`);
    const data = await response.json();
    console.log(data); // Do something with the fetched data
};