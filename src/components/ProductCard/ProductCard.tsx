import { FC } from "react";
import './ProductCard.css';
import IProduct from "@/types/IProduct.ts";

export type ProductCardProps = {
    product: IProduct;
    isActive: boolean;
    onClick: React.MouseEventHandler<HTMLDivElement>;
};

const ProductCard: FC<ProductCardProps> = ({ product,isActive, onClick }) => {
    return (
        <div
            className={`ProductCard ${isActive ? 'ProductCard__active' : ''}`}
            onClick={onClick}
        >
            <img
                className="ProductCard__img"
                src={product.image}
                alt={product.title}
            />
            <p className="ProductCard__text">
                {product.title} {'\u00A0'} {product.price}Exp
            </p>
        </div>
    );
};

export default ProductCard;
