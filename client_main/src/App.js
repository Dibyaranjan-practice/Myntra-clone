import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import store from "./utils/store";
import { Provider } from "react-redux";
import WatchList from "./components/watchlist/WatchList";

function App() {
  return (
    <Provider store={store}>
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
          <Route path="*" element={<Header />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
