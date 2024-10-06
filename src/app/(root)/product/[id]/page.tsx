import { FC } from 'react';
import { ProductScreen } from '@/screens';

interface IProps {
    params: { id: string };
}
const Product: FC<IProps> = ({ params }) => <ProductScreen productId={params.id} />;

export default Product;
