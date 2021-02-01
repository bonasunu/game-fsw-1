import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Card, Container, Row } from 'react-bootstrap'
import { getAllGamesId, getSelectedGames } from '../../src/libs/gameLists'
import FooterComponents from '../../src/components/FooterComponents'
import NavbarComponent from '../../src/components/NavbarComponent'
import withAuth from '../../src/hocs/withAuth'
import styles from '../../styles/gameDetail.module.css'

import ReactPlayer from 'react-player'

export async function getStaticPaths() {
  const paths = getAllGamesId()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const data = getSelectedGames(+params.id)
  return {
    props: { data },
  }
}

const gameDetail = ({ data }) => {
  const router = useRouter()

  const handlePlay = () => {
    if (data.id === 5) {
      router.push('/lobipage')
    }
  }

  return (
    <>
      <Head>
        <title>{data.game}</title>
      </Head>
      <NavbarComponent />
      <Container className={styles.containerGameDetail}>
        <Row>
          <div
            className='col-md-6 col-sm-12 game-col'
            id={styles.idGamePicture}
          >
            <div className={styles.gamePicture}>
              <ReactPlayer
                className={styles.gameVideo}
                url={data.video}
                controls
                width='inherit'
                height='inherit'
              />
            </div>
          </div>
          <div className='col-md-6 col-sm-12 game-col'>
            <div className={styles.detailContainer}>
              <h2 className={styles.gameTitle}>{data.game}</h2>
              <div className={styles.gameGenres}>
                {data.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className={styles.label}
                    style={
                      genre.id === 1
                        ? { backgroundColor: '#ef709d' }
                        : { backgroundColor: '#733572' }
                    }
                  >
                    {genre.label}
                  </span>
                ))}
              </div>
              <div className={styles.gameDescription}>{data.description}</div>
            </div>
            <button className={styles.buttonPlay} onClick={handlePlay}>
              Play
            </button>
          </div>
        </Row>
        <Row className={styles.navSection}>
          <div className='col-6 col-sm-4 col-md-3'>
            <div className={styles.navButton}>
              <div className={styles.labelButton}>Previous</div>
              <div className={styles.labelName}>Among Us</div>
            </div>
          </div>
          <div className='col-6 col-sm-4 col-md-3 next'>
            <div className={`${styles.navButton} ${styles.navButtonRight}`}>
              <div className={styles.labelButton}>Next</div>
              <div className={styles.labelName}>Call of Duty</div>
            </div>
          </div>
        </Row>
      </Container>
      <FooterComponents />
    </>
  )
}

export default withAuth(gameDetail)
