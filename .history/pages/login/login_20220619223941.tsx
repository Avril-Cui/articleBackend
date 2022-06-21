import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import styles from "./style.module.css"

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
      <form onSubmit={handleLogin}>
        <label className="mb-3">
          <span className={styles.email_text} style={{marginBottom:100}}>Account Email Address</span>
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
        </label>

        <label className="mb-3" >
          <span>Password</span>
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
        </label>
        <input type="submit" className={styles.submit_button}/>
      </form>
    </div>
    </div>
  )
}

export default Login