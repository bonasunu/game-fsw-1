import React, { useState, Fragment } from 'react'
import { Button, Modal, Form, Row, Col, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { editprofileActions } from '../../redux/actions/editprofileActions'
import styling from '../../styles/Profile.module.css'
import Loader from './Loader'
function EditComponents() {
  const [show, setShow] = useState(false)
  const [user, setUser] = useState(
    useSelector((state) => state.profileUser.profile)
  )
  const [constantaUser, setConstanta] = useState(
    useSelector((state) => state.profileUser.profile)
  )
  const onUserChange = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }
  const handleClose = () => {
    setShow(false)
    setUser(constantaUser)
  }
  const handleShow = () => {
    setShow(true)
    setUser(constantaUser)
  }
  const dispatch = useDispatch()
  const userProfileRedux = useSelector((state) => state.editProfile)
  const { loading } = userProfileRedux
  const onSubmitted = () => {
    let data = {
      first_name: user.first_name,
      last_name: user.last_name,
      username: user.username,
      email: user.email,
      profile_picture: user.profile_picture,
    }
    // console.log(data)
    // console.log(localStorage.getItem('token'))

    dispatch(
      editprofileActions(localStorage.getItem('binar.access.token'), data)
    )
      .then(() => {
        window.location = '/profile'
        localStorage.setItem('navbarInfo', data.username) //bona-navbar
      })
      .catch((error) => {
        console.log(error.response)
      })
  }

  // bona-navbar
  // const navbarInfo = localStorage.getItem('navbarInfo')
  // console.log({ navbarInfo })

  return (
    <Fragment>
      <button className={`${styling.btnEdit}`} onClick={handleShow}>
        Edit Profile
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image
            src={user.profile_picture}
            rounded
        className={`${styling.bodyCenterImg} photo-profile my-3 body-center-img text-center`}
          />
          <Form>
            <Form.Group as={Row} controlId="formPlaintextFirstName">
              <Form.Label column sm="2">
                First Name
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  name="first_name"
                  value={user.first_name}
                  onChange={(e) => onUserChange(e)}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formPlaintextLastName">
              <Form.Label column sm="2">
                Last Name
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  name="last_name"
                  value={user.last_name}
                  onChange={(e) => onUserChange(e)}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formPlaintextLastName">
              <Form.Label column sm="2">
                Username
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  value={user.username}
                  name="username"
                  onChange={(e) => onUserChange(e)}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formPlaintextLastName">
              <Form.Label column sm="2">
                Email
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="email"
                  value={user.email}
                  name="email"
                  onChange={(e) => onUserChange(e)}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formPlaintextLastName">
              <Form.Label column sm="2">
                Photo
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  value={user.profile_picture}
                  name="profile_picture"
                  onChange={(e) => onUserChange(e)}
                />
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={onSubmitted}
            type="submit"
            disabled={loading}
          >
            {loading ? <Loader /> : 'Save Changes'}
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  )
}

export default EditComponents
