import React, { useEffect, useState } from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../styles/historyAfterGame.module.css'
import {historyActions} from '../redux/actions/historyActions'
import {profileActions} from '../redux/actions/profileActions'
import NavbarComponent from '../src/components/NavbarComponent'
import withAuth from '../src/hocs/withAuth'


function HistoryAfterGame() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(historyActions(localStorage.getItem('binar.access.token')))
    dispatch(profileActions(localStorage.getItem('binar.access.token')))
  }, [])
  const histories = useSelector((state) => state.historyProfile.history)
  const uname = useSelector((state) => state.profileUser.profile)
  console.log(uname);
  
  return (
    <>
    <NavbarComponent />
    <Container>
      <div className={styles.centerBody}>
        <h1 className={styles.fontSizeH1}>Paper Rock Scissors</h1>
  <h5 className="my-3">{uname && uname.username}</h5>
        <Button className="start-button-history my-5" href="/home">
          Back
        </Button>
        <Table striped bordered hover>
          <thead className={styles.thColor}>
            <tr>
              <th>Id Game</th>
              <th>Game</th>
              <th>Score</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            {histories && histories
              .map((data) => (
                <tr key={data.id}>
                  <td>{data.id}</td>
                  <td>{data.game}</td>
                  <td>{data.score}</td>
                  <td>
                    {data.score == 3
                      ? 'Menang'
                      : data.score == 1
                      ? 'Draw'
                      : 'Kalah'}
                  </td>
                </tr>
              ))
              .reverse()}
          </tbody>
        </Table>
      </div>
      <style jsx global>
        {`
        body {
          font-family: Nunito;
          color: #733572;
        }

        h1 {
          font-weight: bold;
        }
        `}
      </style>
    </Container>
    </>
  )
}

export default withAuth(HistoryAfterGame)
