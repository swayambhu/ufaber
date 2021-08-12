/** @format */
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
    <Switch>
      <Route exact path='/'>
        <SignUp />
      </Route>
      <Route path='/upsc'>
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
