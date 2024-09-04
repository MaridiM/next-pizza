import { useState, useEffect } from 'react';
import { Api } from '../config/api-client';

export const useIngredients = () => {
    const [ingredients, setIngredients] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getImgredients() {
            try {
                setLoading(true);
                const response = await Api.ingredients.getAll();
                setIngredients(response);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        getImgredients();
    }, []);

    return {
        loading,
        ingredients,
    };
};
