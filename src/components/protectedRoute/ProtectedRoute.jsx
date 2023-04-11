import { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { useAccountDispatch, useAccount } from "../../context/AccountContext";

function ProtectedRoute({ children }) {
  const account = useAccount();
  if (!account) {
    return <Navigate to="/" replace />;
  }
  return children;
}

export default ProtectedRoute;
