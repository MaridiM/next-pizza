import { ProductScreen } from '@/screens';
import { FC } from 'react';

interface IProps {
    params: { id: string }
}
const Product: FC<IProps> = ({ params }) => {
    return <ProductScreen productId={params.id} />;
};

export default Product;
