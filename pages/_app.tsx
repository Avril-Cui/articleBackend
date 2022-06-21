import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./components/UI/Layout";
import { AuthContextProvider } from '../context/AuthContext'
import ProtectedRoute from "./components/ProtectedRoute"
import { useRouter } from 'next/router'
import PageButtom from "./components/PageButtom/PageButtom";

const AuthRequired = ['/dashboard']

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
      <>
        <AuthContextProvider>
          <Layout >
          {AuthRequired.includes(router.pathname) ? (
              <ProtectedRoute>
                <Component {...pageProps} />
              </ProtectedRoute>
            ) : (
              <Component {...pageProps} />
            )}
          </Layout>
          <PageButtom/>
        </AuthContextProvider>
      </>
  );
}

export default MyApp;
