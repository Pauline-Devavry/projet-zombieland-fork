import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

function ProtectedRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  useEffect(() => {
    if(!loading && !user) {
      toast("Vous devez être connecté.", { theme: "dark", type: "error" });
    }
  })

  if (loading) {
    return <div>Chargement</div>;
  }

  if (!user) {
    return <Navigate to="/connexion" state={{ from: location }} replace />;
  }
  return children;
}

export default ProtectedRoute;
