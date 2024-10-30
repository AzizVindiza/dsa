import { useEffect, useState } from 'react';
import IProduct from "@/types/IProduct.ts";
import { getProducts } from "@/api/api.ts";

const useProducts = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProducts();
                setProducts(data);
            } catch (err) {
                console.error("Error fetching products:", err);
                setError("Failed to load products.");
            }
        };

        fetchProducts();
    }, []);

    return { products, error };
};

export default useProducts;
