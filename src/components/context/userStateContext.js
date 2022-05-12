import React, { createContext, useEffect, useState } from "react";
import { app } from "../../firebaseConfig/firebaseConfig";

export const UserStateContext = createContext();

const UserStateProvider = (props) => {
  const [user, setUser] = useState();
  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user.uid);
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
