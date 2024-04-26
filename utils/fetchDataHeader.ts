// Function for fetching data for cities in Header

export const fetchIataCodes = async (searchQuery: string) => {
    // Fetch data using the provided searchQuery
    const response = await fetch(`api/getIataCode/${searchQuery}`);
    const data = await response.json();
    console.log("Data fetched! Search is: " + searchQuery)
    // If there are no warnings in response, return data
    if (!data.warnings) return data.data.data
};