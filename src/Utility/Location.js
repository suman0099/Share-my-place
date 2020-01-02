export async function getCoordsFromAddress(address) {
    const urlAddress = encodeURI(address); // get url friendly address by removing white spaces
    const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${urlAddress}&key=${YOUR_API_KEY}`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch coordinates. Please try again!");
    }

    const data = await response.json();
    if (data.error_message) {
        throw new Error(data.error_message);
    }

    const coordinates = data.results[0].geometry.location;
    return coordinates;
}
