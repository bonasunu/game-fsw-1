import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
// import { useForm } from 'react-hook-form'
// import Message from '../components/Message'
import Loader from '../src/components/Loader'
// import FormContainer from '../components/FormContainer'
import { register } from '../redux/actions/userActions'
import styles from '../styles/register.module.css'
import Link from 'next/link'
import NavbarComponent from '../src/components/NavbarComponent'

const Register = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const dispatch = useDispatch()

  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error, userInfo } = userRegister

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert('Passwords do not match')
    } else {
      const gambar = 'https://sequelize.org/master/image/github.png'
      dispatch(register(firstName, lastName, email, username, password, gambar))
    }
  }

  return (
    <>
      <NavbarComponent />
      <div className={styles.containerAll}>
        <img
          src={'/secondary-logo.png'}
          className={styles.authLogo}
          alt='Binar Logo'
        />
        <div className={styles.greyDisplay}>
          <div className={styles.greyContainer}>
            <h1>Sign Up</h1>
            {/* {loading && <Loader />} */}
            <Form onSubmit={submitHandler}>
              <Form.Row>
                <Col>
                  <Form.Group
                    controlId='firstName'
                    className={styles.formGroup}
                  >
                    <Form.Control
                      type='name'
                      placeholder='Enter first name'
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId='lastName'>
                    <Form.Control
                      type='name'
                      placeholder='Enter last name'
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                </Col>
              </Form.Row>
              <Form.Group controlId='email' className={styles.formGroup}>
                <Form.Control
                  className='container'
                  type='email'
                  placeholder='Enter email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId='username' className={styles.formGroup}>
                <Form.Control
                  type='name'
                  placeholder='Enter username'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId='password' className={styles.formGroup}>
                <Form.Control
                  type='password'
                  placeholder='Enter password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group
                controlId='confirmPassword'
                className={styles.formGroup}
              >
                <Form.Control
                  type='password'
                  placeholder='Confirm password'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <button
                type='submit'
                className={`${styles.btn} container py-3`}
                disabled={loading}
              >
                {loading && <Loader />}
                {!loading && <span>Submit</span>}
              </button>
            </Form>
          </div>
        </div>
        <Row className='py-3'>
          <Col className={styles.authRedirect}>
            Have an Account?{' '}
            <Link href='/login'>
              <a className={styles.authLinkCustom}>login here</a>
            </Link>
            {/* <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
            Login
          </Link> */}
          </Col>
        </Row>
        <style jsx>
          {`
            h1 {
              font-weight: 800;
              font-family: Nunito;
              color: #733572;
              margin-bottom: 10px;
            }
          `}
        </style>
      </div>
    </>
  )
}

export default Register
