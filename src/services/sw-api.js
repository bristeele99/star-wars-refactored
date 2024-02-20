// const BASE_URL = "https://swapi.dev/api"
// const SwApi = {
//    get: async(endpoint) => {
//     try {
//         const response = await fetch (`${BASE_URL}/${endpoint}`);
//         const data = await response.json();
//         return data;
//     } catch (error){
//         console.error('Error fetching data: ', error);
//         throw error;
//     }
//    },
//    getAllStarships: async () => {
//     try {
//         const result = await SwApi.get('starships');
//         return result;
//     } catch (error) {
//         console.error('Error fetching starships: ', error);
//         throw error;
//     }
// },

// getAllFilms: async() => {
//     try {
//         const result = await SwApi.get('films/1')
//         return result;
//     } catch (error) {
//         console.error('Error fetching films:', error);
//         throw error;
//     }
// },
    

// }
// export const getAllStarships = SwApi.getAllStarships;
// export const getAllFilms = SwApi.getAllFilms;
// export default SwApi;

export async function getAllStarships(BASE_URL) {
    try{
        const res = await fetch(BASE_URL)
        if(!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const starshipData =await res.json();
        return starshipData;
    } catch (error){
        console.error('Error fetching starships:', error);
        throw error; 
    }
}

export async function getAllFilms() {
    try{
        const res = await fetch('https://swapi.dev/api/films')
        if(!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const filmData = await res.json();
        return filmData;
    } catch (error) {
        console.error('Error fetching films:', error);
        throw error;
    }
}

export async function getAllPeoples() {
    try{
        const res = await fetch('https://swapi.dev/api/peoples')
        if(!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const peopleData = await res.json();
        return peopleData;
    } catch (error) {
        console.error('Error fetching films:', error);
        throw error;
    }
}