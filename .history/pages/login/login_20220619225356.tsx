import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import styles from "./style.module.css"
import Link from "next/link";

const Login = () => {
  const router = useRouter()
  const { user, login } = useAuth()
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const handleLogin = async (e: any) => {
    e.preventDefault()

    console.log(user)
    try {
      await login(data.email, data.password)
      router.push('/dashboard')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className={styles.container}>
    <div className={styles.login_container}>
      <h1 className={styles.login_text}>Log in to Website</h1>
      <div className={styles.log_in}>
      <form onSubmit={handleLogin}>
        <div className={styles.email_input}>
          <span className={styles.show_text}>Account Email Address</span>
          <div style={{marginTop:10}}>
          <input
            onChange={(e: any) =>
              setData({
                ...data,
                email: e.target.value,
              })
            }
            className={styles.input_name}
            value={data.email}
            required
            type="email"
            placeholder="Enter email"
          />
          </div>
        </div>

        <div className={styles.password_input}>
          <span className={styles.show_text}>Password</span>
          <div style={{marginTop:10}}>
          <input
            onChange={(e: any) =>
              setData({
                ...data,
                password: e.target.value,
              })
            }
            className={styles.input_name}
            value={data.password}
            required
            type="password"
            placeholder="Password"
          />
          </div>
        </div>
        <input type="submit" className={styles.submit_button} value="Log In"/>
      </form>
    </div>
    </div>

    <Link href="/login/signup">
      <a className={styles.sign_in}>
        New user? <span className={styles.register}>Register</span> an account.
      </a>
    </Link>

    </div>
  )
}

export default Login