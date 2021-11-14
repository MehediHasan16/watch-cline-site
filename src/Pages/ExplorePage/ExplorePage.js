import React from 'react';
import ExploreAllProducts from '../Home/ExploreAllProducts/ExploreAllProducts';
import Footer from '../Shared/Footer/Footer';
import Navigation2 from '../Shared/Navigation2/Navigation2';

const ExplorePage = () => {
    return (
        <div>
            <Navigation2></Navigation2>
            <ExploreAllProducts></ExploreAllProducts>
            <Footer></Footer>
        </div>
    );
};

export default ExplorePage;