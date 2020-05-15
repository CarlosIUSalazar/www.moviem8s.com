import React from "react";
import LoginPage from "./components/LoginPage/LoginPage";
import DeckPage from "./components/DeckPage/DeckPage";
import Table from "./components/Table/Table";
import firebase from "firebase";

import fbInitialization from "./fbInitialization";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  firebase.initializeApp(fbInitialization);
  const fbConfig = firebase.firestore();

  return (
      <Router>
        <h1>MovieM8S</h1>
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
  );
}

export default App;
