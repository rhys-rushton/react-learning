import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
    
    const params = useParams();

    
    
    
    return <h1>Product Details! {params.productId}</h1>
}

export default ProductDetailPage;