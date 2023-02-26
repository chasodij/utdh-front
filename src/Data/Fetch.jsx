const BASE_URL = "https://localhost:7275/";

export const FetchProducts = async () => {
    try {
        const response = await fetch(`${BASE_URL}cameras/cards`, {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
            },
        });
        return response;
    }
    catch (error) {
        console.log(error);
        return error;
    }
}

export const FetchProduct = async (productId) => {
    try {
        const response = await fetch(`${BASE_URL}cameras/${productId}`, {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
            },
        });
        return response;
    }
    catch (error) {
        console.log(error);
        return error;
    }
}