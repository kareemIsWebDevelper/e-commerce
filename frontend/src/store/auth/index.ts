export const LOCAL_STORAGE_KEY = "user";
export const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

interface UserI {
  token: string;
  user: {
    username: string;
    password: string;
    isAdmin: boolean;
  };
}

export interface UserState {
  isDisabled: boolean;
  loading: boolean;
  error: string | null;
  message: string;
  userData: UserI | null;
}

const retrieveUserData = () => {
  if (typeof localStorage !== "undefined") {
    const isUser = localStorage.getItem("user");

    if (isUser) {
      const userData = JSON.parse(isUser);
      return userData;
    }
  }

  return null;
};

export const initialState: UserState = {
  isDisabled: false,
  loading: false,
  error: null,
  message: "",
  userData: retrieveUserData(),
};
