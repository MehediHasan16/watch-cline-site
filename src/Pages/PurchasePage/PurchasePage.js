import React from 'react';
import ProductDetaile from '../ProductDetaile/ProductDetaile/ProductDetaile';
import Footer from '../Shared/Footer/Footer';
import Navigation2 from '../Shared/Navigation2/Navigation2';

const PurchasePage = () => {
    return (
        <div>
            <Navigation2></Navigation2>
            <ProductDetaile></ProductDetaile>
            <Footer></Footer>
        </div>
    );
};

export default PurchasePage;