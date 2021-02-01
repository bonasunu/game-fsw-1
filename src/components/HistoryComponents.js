import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { historyActions } from '../../redux/actions/historyActions'
import { Table } from 'react-bootstrap'
import Moment from 'moment'
import styling from '../../styles/Profile.module.css'
function HistoryComponents() {
  const DateFormatter = (date) => {
    return Moment(date).format('DD MMMM YYYY, h:mm a')
  }
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(historyActions(localStorage.getItem('binar.access.token')))
  }, [])
  const history = useSelector((state) => state.historyProfile.history)
  return (
    <div>
      <Table striped bordered hover className="mt-5">
        <thead className={`${styling.thColor}`}>
          <tr>
            <th>Date</th>
            <th>Game</th>
            <th>Score</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {history &&
            history
              .map((x) => (
                <tr
                  key={x.id}
                  className={
                    x.score >= 3
                      ? `${styling.backgroundWin}`
                      : x.score === 0
                      ? `${styling.backgroundLose}`
                      : ''
                  }
                >
                  <td>{DateFormatter(x.createdAt)}</td>
                  <td>{x.game}</td>
                  <td>{x.score}</td>
                  <td>
                    {x.score >= 3 ? 'Menang' : x.score >= 1 ? 'Draw' : 'Kalah'}
                  </td>
                </tr>
              ))
              .reverse()}
        </tbody>
      </Table>
    </div>
  )
}

export default HistoryComponents
