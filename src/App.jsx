import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/Store/Store";


const App = () => {
  return (
    <Provider store={store}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow bg-black-700">
          <Outlet />
        </main>
        <Footer />
      </div>
    </Provider>
  );
};

export default App;
