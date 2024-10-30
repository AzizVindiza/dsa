import { FC, useState } from 'react';
import ProductCard from "@/components/ProductCard/ProductCard.tsx";
import ButtonBuy from "@/components/ButtonBuy/ButtonBuy.tsx";
import useProducts from "@/hooks/useProducts.ts";

export const IndexPage: FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const { products, error } = useProducts();

    const handleCardClick = (id: number) => {
        setActiveIndex((prev) => (prev === id ? null : id));
    };

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap" }}>
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        isActive={activeIndex === product.id}
                        onClick={() => handleCardClick(product.id)}
                    />
                ))}
            </div>
            <br />
            <ButtonBuy />
        </>
    );
};
