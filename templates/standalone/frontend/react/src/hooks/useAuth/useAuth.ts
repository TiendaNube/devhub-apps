import { IAuth } from "./useAuth.types";

const useAuth = (): { auth: IAuth | null; setAuth: (auth: IAuth) => void } => {
  const storage = localStorage.getItem("auth");
  const auth = storage ? (JSON.parse(storage as string) as IAuth) : null;

  const setAuth = (auth: IAuth) => {
    localStorage.setItem("auth", JSON.stringify(auth));
  };

  return { auth, setAuth };
};

export default useAuth;
