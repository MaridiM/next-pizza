import { FC } from 'react';

interface IProps {
    productId: string;
}

const ProductScreen: FC<IProps> = ({ productId }) => {
    return (
        <div>
            <h1>ProductScreen {productId}</h1>
        </div>
    );
};

export default ProductScreen;
