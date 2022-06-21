import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./components/UI/Layout";
import { AuthContextProvider } from '../context/AuthContext'
import "bootstrap/dist/css/bootstrap.min.css"
import ProtectedRoute from "./components/ProtectedRoute"
import { useRouter } from 'next/router'

const noAuthRequired = ['/', '/login', '/signup']

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
      <>
        <AuthContextProvider>
          <Layout >
          {noAuthRequired.includes(router.pathname) ? (
            <Component {...pageProps} />
          ) : (
            <ProtectedRoute>
              <Component {...pageProps} />
            </ProtectedRoute>
          )}
          </Layout>
        </AuthContextProvider>
      </>
  );
}

export default MyApp;
