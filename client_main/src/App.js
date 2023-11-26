import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import store from "./utils/store";
import { Provider } from "react-redux";
import WatchList from "./components/watchlist/WatchList";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <React.Fragment>
                <Header />
                <Main />
                <Footer />
              </React.Fragment>
            }
          />
          <Route
            path="/cart"
            element={
              <React.Fragment>
                <Header />
                <Cart />
              </React.Fragment>
            }
          />
          <Route
            path="/watchlist"
            element={
              <React.Fragment>
                <Header />
                <WatchList />
              </React.Fragment>
            }
          />
          <Route
            path="/product_details/:id"
            element={
              <React.Fragment>
                <Header />
                <ProductDetails />
              </React.Fragment>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/profile"
            element={
              <React.Fragment>
                <Header />
                <Profile />
              </React.Fragment>
            }
          />
          <Route path="*" element={<Header />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
