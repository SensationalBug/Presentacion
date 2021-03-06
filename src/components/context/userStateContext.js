import React, { createContext, useEffect, useState } from "react";
import { app } from "../../firebaseConfig/firebaseConfig";

export const UserStateContext = createContext();

const UserStateProvider = (props) => {
  const [user, setUser] = useState(false);
  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      }
    });
  });

  return (
    <UserStateContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserStateContext.Provider>
  );
};

export default UserStateProvider;
