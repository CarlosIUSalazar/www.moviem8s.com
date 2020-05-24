import React from "react";
import LoginPage from "./components/LoginPage/LoginPage";
import DeckPage from "./components/DeckPage/DeckPage";
import Table from "./components/Table/Table";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import firebase from "firebase";
import fbInitialization from "./fbInitialization";

import {LoginProvider} from "./context/LoginState";


function App() {

  const bodyElt = document.querySelector("body");
  // bodyElt.style.overflow = "hidden";

  if (!firebase.apps.length) {
    firebase.initializeApp(fbInitialization);
}

  const fbConfig = firebase.firestore();

  return (
    <>
    <LoginProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage}/>
          <Route exact path="/deck"
          render={(props) => <DeckPage {...props} db={fbConfig} />}
          />
          <Route exact path="/favorite-movies"
            render={(props) => <Table {...props} db={fbConfig} />}
          />
        </Switch>
      </Router>
    </LoginProvider>
    </>
  );
}

export default App;
