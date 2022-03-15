import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import { store } from "./store";
import { Provider } from "react-redux";

import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Provider store={store}>
          <Routes>
            <Route path="login" element={<Login />} />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Provider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
