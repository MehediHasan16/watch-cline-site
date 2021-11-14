import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import ProductsLimite from '../ProductsLimite/ProductsLimite';
import ReviewInfo from '../ReviewInfo/ReviewInfo';
import ShopBrand from '../ShopBrand/ShopBrand';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <ProductsLimite></ProductsLimite>
            <ReviewInfo></ReviewInfo>
            <ShopBrand></ShopBrand>
        </div>
    );
};

export default Home;