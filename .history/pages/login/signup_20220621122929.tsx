import React, { useState } from 'react'
import { useRouter } from 'next/router'
// import { Button, Form } from 'react-bootstrap'
// import "bootstrap/dist/css/bootstrap.min.css"
import { useAuth } from '../../context/AuthContext'
import styles from "../../styles/login/style.module.css"

const Signup = () => {
const router = useRouter()
  const { user, signup } = useAuth()
  console.log(user)
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const handleSignup = async (e: any) => {
    e.preventDefault()

    try {
      await signup(data.email, data.password)
      router.push('/dashboard')
    } catch (err) {
      console.log(err)
    }

    console.log(data)
  }

  return (
    <div className={styles.container}>
    <div className={styles.login_container}>
      <h1 className={styles.login_text}>Sign Up To Website</h1>
      <div className={styles.log_in}>
      <form onSubmit={handleSignup}>
        <div className={styles.email_input}>
        <span className={styles.show_text}>Account Email Address</span>
        <div style={{marginTop:10}}>
          <input
            className={styles.input_name}
            type="email"
            placeholder="Enter email"
            required
            onChange={(e: any) =>
              setData({
                ...data,
                email: e.target.value,
              })
            }
            value={data.email}
          />
        </div>
        </div>

        <div className={styles.password_input}>
          <span className={styles.show_text}>Password</span>
          <div style={{marginTop:10}}>
          <input
            className={styles.input_name}
            type="password"
            placeholder="Password"
            required
            onChange={(e: any) =>
              setData({
                ...data,
                password: e.target.value,
              })
            }
            value={data.password}
          />
        </div>
        </div>
        <input type="submit" className={styles.submit_button} value="Sign Up"/>
      </form>
      </div>
    </div>
    </div>
  )
}

export default Signup