import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

import LoaderScreen from "../components/LoaderScreen";

export default function Routes() {
  const isAuthenticated = false;
  const loading = true;

  return loading ? (
    <LoaderScreen />
  ) : isAuthenticated ? (
    <AppRoutes />
  ) : (
    <AuthRoutes />
  );
}
