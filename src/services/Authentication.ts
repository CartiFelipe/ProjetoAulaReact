import { redirect } from "react-router-dom";

const handleProtection = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return redirect("/signin");
  }
};
