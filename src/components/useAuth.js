import axios from "axios";
import React, { useState, useContext, createContext, useEffect } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isAuth: false,
    member: {
      users_id: 0,

      user_imageHead: "",
      user_imagePage: "",
      users_name: "",
      users_account: "",
      users_main_product: "",
      users_aside_pictur: "",
      users_password: "",
      users_phone: "",
      users_email: "",
      users_create_time: "",
      users_valid: "",
      users_slogan: "",
      users_introduce: "",
      users_valid_role: "",
      users_birth: "",
      users_city: "",
      users_township: "",
      users_street: "",
      
    },
  });

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
