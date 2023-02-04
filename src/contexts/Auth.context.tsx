import { useState, createContext, ReactNode, useEffect } from "react";
import { api } from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

type AuthContextProps = {
  user: UserProps;
  isAuthenticated: boolean;
  signIn: (credentials: SignInProps) => Promise<void>;
  signOut: () => Promise<void>;
  loading: boolean;
  loadingAuth: boolean;
};

type UserProps = {
  id: string;
  name: string;
  email: string;
  token: string;
};

type AuthProviderProps = {
  children: ReactNode;
};

type SignInProps = {
  email: string;
  password: string;
};

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
  const initialUser: UserProps = {
    id: "",
    name: "",
    email: "",
    token: "",
  };

  const [user, setUser] = useState<UserProps>(initialUser);

  const isAuthenticated = !!user.token;
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  function setApiToken(token: string) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  useEffect(() => {
    async function getUser() {
      const storage = await AsyncStorage.getItem("@pizzadev");

      if (storage) {
        const data = JSON.parse(storage);

        if (Object.keys(data).length > 0) {
          setApiToken(data.token);
          setUser(data);
        }
      }

      setLoading(false);
    }

    getUser();
  }, []);

  async function signIn({ email, password }: SignInProps) {
    setLoadingAuth(true);

    try {
      const response = await api.post("/session", {
        email,
        password,
      });

      const { id, name, token } = response.data;

      const data = {
        id,
        name,
        email,
        token,
      };

      setUser(data);
      setApiToken(token);
      await AsyncStorage.setItem("@pizzadev", JSON.stringify(data));

      // setLoadingAuth(false);
    } catch (err) {
      console.log("ERROR SIGNIN ", err);
      // setLoadingAuth(false);
    }

    setTimeout(() => {
      setLoadingAuth(false);
    }, 3000);
  }

  async function signOut() {
    await AsyncStorage.clear();
    setUser(initialUser);
  }

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, signIn, signOut, loading, loadingAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
}
