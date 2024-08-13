import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Man1 from "./components/Man1";
import DefaultLayout from "./Layout/DefaultLayout";
import React, { Suspense } from "react";
import ProtectedRoute from "./components/protectedRoute";
import RouterApp from "./routes";
// import "./scss/";
function App() {
  return (
    <div className="App" style={{ width: "100%" }}>
      <Suspense fallback={<div>Loading ....</div>}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/register"
              element={<div>đây là trang register</div>}
            />
            <Route path="/login" element={<div>đây là trang login</div>} />
            <Route
              path="/*"
              element={
                <ProtectedRoute>
                  <RouterApp />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
