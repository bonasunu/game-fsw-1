import React, { useEffect } from 'react'
import { Container, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { loadLeaderBoard } from '../redux/actions/leaderboardActions'
import NavbarComponent from '../src/components/NavbarComponent'
import styles from '../styles/Leaderboard.module.css'

function leaderboard() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadLeaderBoard())
  }, [])

  const leader = useSelector((state) => state.leaderBoard.leader)
  var ranking = 0
  return (
    <>
      <NavbarComponent />
      <Container>
        <h1 className="text-center mt-5 mb-4">leaderboard</h1>
        <Table striped bordered hover>
          <thead className={`${styles.thColor}`}>
            <tr>
              <th>No</th>
              <th>Username</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {leader &&
              leader.map((data) => (
                <tr key={data.id}>
                  <td>{(ranking = ranking + 1)}</td>
                  <td>{data.username}</td>
                  <td>{data.score}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </>
  )
}

export default leaderboard
