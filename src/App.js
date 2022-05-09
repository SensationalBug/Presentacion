import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./components/home";
import { Login } from "./components/login";

const App = () => {
  const [user, setUser] = useState(false);
  console.log(user);
  return <>{user ? <Home /> : <Login setUser={setUser} />}</>;
};

export default App;
