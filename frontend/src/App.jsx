import { Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import HomePage from "./Pages/home/HomePage";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { userAuthStore } from "./store/authUser";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Loader } from "lucide-react";

export default function App() {
  const { user, isCheckingAuth, authCheck } = userAuthStore();
  console.log("auth user is here", user);

  useEffect(() => {
    authCheck();
  }, [authCheck]);

  if (isCheckingAuth) {
    return (
      <div className="h-screen">
        <div className="flex justify-center items-center bg-black h-full">
          <Loader className="animate-spin text-purple-600 size-10" />
        </div>
      </div>
    );
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/login"
          element={!user ? <LoginPage /> : <Navigate to={"/"} />}
        />
        <Route
          path="/signup"
          element={!user ? <SignupPage /> : <Navigate to={"/"} />}
        />
      </Routes>
      <Footer />
      <Toaster />
    </>
  );
}
