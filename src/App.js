import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';


import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PurchaseProduct from './Pages/PurchaseProduct/PurchaseProduct/PurchaseProduct';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import AddProducts from './Pages/Shared/AddProducts/AddProducts';
import ExploreAllProducts from './Pages/Home/ExploreAllProducts/ExploreAllProducts';
import ProductDetaile from './Pages/ProductDetaile/ProductDetaile/ProductDetaile';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import ExplorePage from './Pages/ExplorePage/ExplorePage';
import PurchasePage from './Pages/PurchasePage/PurchasePage';
import Error from './Pages/Error/Error';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>

            <Route path="/exploreProducts">
              <ExplorePage></ExplorePage>
            </Route>
            <PrivateRoute path="/purchase">
              <PurchaseProduct></PurchaseProduct>
            </PrivateRoute>
            <PrivateRoute path="/productDetaile/:productId">
              <PurchasePage></PurchasePage>
            </PrivateRoute>
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
            <Route path="*">
              <Error></Error>
            </Route>

          </Switch>

        </Router>
      </AuthProvider>
    </div>


  );
}

export default App;
