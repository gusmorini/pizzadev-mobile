import { useContext } from "react";
import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

import LoaderScreen from "../components/LoaderScreen";

import { AuthContext } from "../contexts/Auth.context";

export default function Routes() {
  const { loading, isAuthenticated } = useContext(AuthContext);

  return loading ? (
    <LoaderScreen />
  ) : isAuthenticated ? (
    <AppRoutes />
  ) : (
    <AuthRoutes />
  );
}
