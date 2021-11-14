import React from 'react';
import Footer from '../../Shared/Footer/Footer';

import Navigation2 from '../../Shared/Navigation2/Navigation2';
import Banner from '../Banner/Banner';
import ProductsLimite from '../ProductsLimite/ProductsLimite';
import ReviewInfo from '../ReviewInfo/ReviewInfo';
import ShopBrand from '../ShopBrand/ShopBrand';

const Home = () => {
    return (
        <div>

            <Navigation2></Navigation2>
            <Banner></Banner>
            <ProductsLimite></ProductsLimite>
            <ReviewInfo></ReviewInfo>
            <ShopBrand></ShopBrand>
            <Footer></Footer>

        </div>
    );
};

export default Home;