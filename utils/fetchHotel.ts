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
    const hotel = fetchedData.data

    // Data is array, so return first element of it
    return hotel[0]
}