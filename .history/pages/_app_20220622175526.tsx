import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/UI/Layout";
import { AuthContextProvider } from '../context/AuthContext'
import ProtectedRoute from "../components/ProtectedRoute"
import { useRouter } from 'next/router'
import PageButtom from "../components/PageButtom/PageButtom";
import styles from "../components/UI//Layout.module.css";

const AuthRequired = ['/dashboard']

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
      <div className={styles.layout}>
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
      </div>
  );
}

export default MyApp;