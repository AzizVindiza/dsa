import { FC } from "react";
import './ProductCard.css';

export type ProductCardProps = {
    title: string;
    image: string;
    price: number;
    isActive: boolean;
    onClick: React.MouseEventHandler<HTMLDivElement>;
};

const ProductCard: FC<ProductCardProps> = ({ title, image, price, isActive, onClick }) => {
    return (
        <div
            className={`ProductCard ${isActive ? 'ProductCard__active' : ''}`}
            onClick={onClick}
        >
            <img
                className="ProductCard__img"
                src={image}
                alt={title}
            />
            <p className="ProductCard__text">
                {title} {'\u00A0'} {price}$
            </p>
        </div>
    );
};

export default ProductCard;
