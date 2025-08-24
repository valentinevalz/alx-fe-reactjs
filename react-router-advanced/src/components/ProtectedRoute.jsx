import { Navigate } from "react-router-dom";

// Fake auth (replace with real auth later)
const isAuthenticated = false; 

function ProtectedRoute({ children }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default ProtectedRoute;
