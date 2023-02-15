import axios from "axios";
import React, { useState, useContext, createContext, useEffect, useLayoutEffect } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isAuth: false,
    member: {
      users_id: 0,
      user_imageHead:'',
    },
  });

  useLayoutEffect(() => {
    async function getAuth() {
      let response = await axios.get(`http://localhost:3001/users/checkusers`, {
        // 為了跨源存取 cookie
        withCredentials: true,
      })
      if (response.data.users_id) {
        const {
          users_id,
          user_imageHead

        } = response.data
        setAuth({
          users: {
            user_imageHead: user_imageHead,
            users_id: users_id,

          },
          isAuth: true,
        })
      }
    }
    getAuth()
  }, [])

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
