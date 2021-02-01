import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { profileActions } from '../../redux/actions/profileActions'
import styling from '../../styles/Profile.module.css'
import { Card, Col, Row, Image } from 'react-bootstrap'
import EditProfile from './EditComponents'

function ProfileComponents() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(profileActions(localStorage.getItem('binar.access.token')))
  }, [])
  const profile = useSelector((state) => state.profileUser.profile)
  return (
    <div>
      {profile && (
        <Card
          className={`${styling.binarColorProfile} ${styling.bodyCardRadius} ${styling.bodyCenter}`}
        >
          <Row className="mt-3">
            <Col className="text-center">
              <h1 className={`${styling.fontSize20}`}>Contact Info</h1>
              <Image
                rounded
                src={profile.profile_picture}
                className={`${styling.photoProfile} my-3`}
              />
            </Col>
            <Col className="my-5">
              <h1 className={`${styling.fontSize20}`}>
                {profile.first_name + ' ' + profile.last_name}
              </h1>
              <div className="mt-4 mb-5">
                <div className="d-flex align-items-center">
                  <h1 className={`${styling.fontSize16}`}>
                    {' '}
                    {profile.username}
                  </h1>
                </div>
                <div className="d-flex align-items-center">
                  <h1 className={`${styling.fontSize16}`}> {profile.email}</h1>
                </div>
              </div>
              <div className="text-center">
                <EditProfile />
              </div>
            </Col>
          </Row>
        </Card>
      )}
    </div>
  )
}

export default ProfileComponents
