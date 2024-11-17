import { redirect } from "react-router-dom";

export const handleProtection = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    alert("You must be signed in to access this page.");
    return redirect("/signin");
  } else {
    return null;
  }
};
