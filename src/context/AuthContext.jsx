import React, {createContext, useContext, useState} from "react";

const authContextDefaultValues = {
  user: null,
  setUser: () => {
  },
};

const AuthContext = createContext(authContextDefaultValues);

export function AuthProvider({children}) {
  const [user, setUser] = useState(null);

  const value = {
    user,
    setUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
