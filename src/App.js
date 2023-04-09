import "./App.css";
// import { CDBModal } from 'cdbreact';
import Nav from "./component/navBar/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import GameDetails from "./component/GameDetailes/GameDetails";
import Home from "./component/Home/Home";
import {
  BrowserRouter ,
  Switch,
  Route,
} from "react-router-dom";
import FavouriteGame from "./component/FavouriteGamePage/FavouriteGame";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <section className="app text-light">
      <BrowserRouter>
      <Nav />

<ToastContainer toastStyle={{background:'linear-gradient(to right, #b92b27, #1565c0)'}} position="top-right"
autoClose={3000}
hideProgressBar
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"/>

      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/detailes">
            <GameDetails />
          </Route>

          <Route path="/favouritesGames">
            <FavouriteGame />
          </Route>

          
           
        </Switch>
      </BrowserRouter>

    </section>
  );
}
export default App;
