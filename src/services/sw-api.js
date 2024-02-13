const BASE_URL = "https://swapi.dev/api"
const SwApi = {
   get: async(endpoint) => {
    try {
        const response = await fetch (`${BASE_URL}/${endpoint}`);
        const data = await response.json();
        return data;
    } catch (error){
        console.error('Error fetching data: ', error);
        throw error;
    }
   },
   getAllStarships: async () => {
    try {
        const result = await SwApi.get('starships');
        return result;
    } catch (error) {
        console.error('Error fetching starships: ', error);
        throw error;
    }
}

}
export const getAllStarships = SwApi.getAllStarships;
export default SwApi;