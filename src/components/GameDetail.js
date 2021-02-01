import React from 'react'
import NavbarComponent from './NavbarComponent'
import FooterComponents from '../components/FooterComponents'
import { Card, Container, Row } from 'react-bootstrap'
import { useState } from 'react'
import styles from '../../styles/gameDetail.module.css'
import { render } from 'react-dom'

const GameDetail = ({}) => {
  // console.log('Data: ')
  const [data] = useState({
    title: "Paper Rock Scissors",
    genres: [
      { id: 1, label: "Action" },
      { id: 2, label: "Arcade" },
    ],
    description:
      "Di game ini Anda akan melawan computer. Ada 3 ronde pada game ini. Anda harus memilih batu / gunting / kertas di setiap rondenya. Hasil game akan ditentukan saat semua ronde telah selesai. ",
  })

  return (
    <div>
    <Container className={styles.containerGameDetail}>
      <Row>
        <div className="col-md-6 col-sm-12 game-col" id={styles.idGamePicture}>
          <Card className={styles.gamePicture}></Card>
        </div>
        <div className="col-md-6 col-sm-12 game-col">
          <div className={styles.detailContainer}>
            <h2 className={styles.gameTitle}>{data.title}</h2>
            <div className={styles.gameGenres}>
              {data.genres.map((genre) => (
                <span key={genre.id} className={`${styles.label} ${genre.label}`}>
                  {genre.label}
                </span>
              ))}
            </div>
            <div className={styles.gameDescription}>{data.description}</div>
          </div>
          <button
            className={styles.buttonPlay}
            onClick={() => props.history.push('/game/lobbi')}
          >
            Play
          </button>
        </div>
      </Row>
      <Row className={styles.navSection}>
        <div className="col-6 col-sm-4 col-md-3">
          <div className={styles.navButton}>
            <div className={styles.labelButton}>Previous</div>
            <div className={styles.labelName}>Among Us</div>
          </div>
        </div>
        <div className="col-6 col-sm-4 col-md-3 next">
          <div className={styles.navButton}>
            <div className={styles.labelButton}>Next</div>
            <div className={styles.labelName}>Call of Duty</div>
          </div>
        </div>
      </Row>
    </Container>
    <FooterComponents />
    </div>

  )
}

export default GameDetail
