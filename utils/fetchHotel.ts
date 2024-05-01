export const fetchHotel = async (
    hotelID: string,
    IATAcode: string
) => {
    const requestOptions = {
        method: "GET",
        headers: {
            "Content-type": "application/json"
        }
    }
    const response = await fetch(`/api/hotels/${IATAcode}/${hotelID}`, requestOptions);

    // Response sends back hotel in data field
    const fetchedData = await response.json()

    console.log(fetchedData)
    if (fetchedData.ratings) {
        return {
            hotel: fetchedData.hotel[0],
            ratings: fetchedData.ratings
        }
    }
    // Data is array, so return first element of it
    return {
        hotel: fetchedData.hotel[0]
    }
}