import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { profileActions } from '../redux/actions/profileActions'
import { Tabs, Tab, Container } from 'react-bootstrap'
import ProfileComponents from '../src/components/ProfileComponents'
import HistoryComponents from '../src/components/HistoryComponents'
import withAuth from '../src/hocs/withAuth'
import NavbarComponent from '../src/components/NavbarComponent'

function profile() {

  // const leader = useSelector((state) => state.p.leader)
  return (
    <>
      <NavbarComponent />
      <Container className="mt-5">
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          <Tab eventKey="profile" title="Profile">
            <ProfileComponents />
          </Tab>
          <Tab eventKey="history" title="History">
            <HistoryComponents />
          </Tab>
        </Tabs>
      </Container>
    </>
  )
}

export default withAuth(profile);
