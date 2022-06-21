import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./components/UI/Layout";
import { AuthContextProvider } from '../context/AuthContext'
import "bootstrap/dist/css/bootstrap.min.css"
import ProtectedRoute from "./components/ProtectedRoute"

const noAuthRequired = ['/', '/login', '/signup']

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
        <AuthContextProvider>
          <Layout />
          {noAuthRequired.includes(router.pathname) ? (
            <Component {...pageProps} />
          ) : (
            <ProtectedRoute>
              <Component {...pageProps} />
            </ProtectedRoute>
          )}
        </AuthContextProvider>
      </>
  );
}

export default MyApp;
