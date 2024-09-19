import { RouterProvider } from "react-router-dom";
import AuthProvider from "./context/AuthContext.jsx";

import router from "./router.jsx";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </AuthProvider>
    </>
  );
}

export default App;
