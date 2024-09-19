import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

function ProtectedRoute({ children, adminOnly = false }) {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();


  useEffect(() => {
    if(!loading && !user) {
      toast("Vous devez être connecté.", { theme: "dark", type: "error" });
    }
  }, [loading, user, adminOnly])


  if (loading) {
    return <div>Chargement</div>;
  }

  if (!user) {
    return <Navigate to="/connexion" state={{ from: location }} replace />;
  }

  if(adminOnly && user?.role !== "administrateur") {
    return <Navigate to={"/"} replace/>
  }

  return children;
}

export default ProtectedRoute;
