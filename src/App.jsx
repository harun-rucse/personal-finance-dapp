// import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import { AccountProvider } from "./context/AccountContext";
import AppProvider from "./context/AppContext";

function App() {
  return (
    <AccountProvider>
      <AppProvider>
        <div className="div">
          <Routes>
            <Route exact path="/" Component={Home} />
            <Route exact path="/login" Component={Login} />
            <Route exact path="/registration" Component={Registration} />
          </Routes>
        </div>
      </AppProvider>
    </AccountProvider>
  );
}

export default App;
