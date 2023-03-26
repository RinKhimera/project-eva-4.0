import { toggleDarkMode } from "@/redux/darkModeReducer";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./store";

export default function App({ Component, pageProps }: AppProps) {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleDarkMode());
  };
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
