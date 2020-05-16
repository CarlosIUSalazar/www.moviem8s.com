import React from "react";
import LoginPage from "./components/LoginPage/LoginPage";
import DeckPage from "./components/DeckPage/DeckPage";
import Table from "./components/Table/Table";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import firebase from "firebase";
import fbInitialization from "./fbInitialization";

import {LoginProvider} from "./context/LoginState";


function App() {
  if (!firebase.apps.length) {
    firebase.initializeApp(fbInitialization);
 }
  
  const fbConfig = firebase.firestore();
  console.log("fbConfig",fbConfig)
  const [favMovies, setFavMovies] = React.useState([])

  React.useEffect(() => {
    const fetchData = async () => {
    //const db = firebase.firestore();
    const data = await fbConfig.collection("RealTable").get()
    setFavMovies(data.docs.map(doc => doc.data()))
    }
    fetchData()
  },[])

  return (
    <LoginProvider>
      <Router>
        <h1>MovieM8S</h1>
        <Switch>
          <Route exact path="/" component={LoginPage}/>
          <Route exact path="/deck"
          render={(props) => <DeckPage {...props} db={fbConfig} />}
          />
          <Route exact path="/favorite-movies"
            render={(props) => <Table {...props} db={fbConfig} favMovies={favMovies} />}
          />
        </Switch>
      </Router>
    </LoginProvider>
  );
}

export default App;
