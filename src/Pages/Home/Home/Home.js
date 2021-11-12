import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import ProductsLimite from '../ProductsLimite/ProductsLimite';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <ProductsLimite></ProductsLimite>
        </div>
    );
};

export default Home;