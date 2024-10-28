import { FC, useState } from 'react';
import ProductCard from "@/components/ProductCard/ProductCard.tsx";
import burger from './burger-bar.png';
import ButtonBuy from "@/components/ButtonBuy/ButtonBuy.tsx";

export const IndexPage: FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleCardClick = (index: number) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap" }}>
                {[...Array(5)].map((_, index) => (
                    <ProductCard
                        key={index}
                        title="Burger"
                        image={burger}
                        price={9.39}
                        isActive={activeIndex === index}
                        onClick={() => handleCardClick(index)}
                    />
                ))}
            </div>
            <br />
            <ButtonBuy />
        </>
    );
};
