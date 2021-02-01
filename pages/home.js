import React, { Fragment, useState } from 'react'
import NavbarComponent from '../src/components/NavbarComponent'
import CarouselComponents from '../src/components/CarouselComponents'
import GameItemComponent from '../src/components/GameItemComponents'
import FooterComponents from '../src/components/FooterComponents'
import { Container } from 'react-bootstrap'
import withAuth from '../src/hocs/withAuth'
import getAllGames from '../src/libs/gameLists'

export async function getStaticProps() {
  let games = getAllGames()
  let hotGames = games.filter((game) => game.id !== 5)
  return {
    props: { data: hotGames },
  }
}

const Home = ({ data }) => {
  const [gameList] = useState(data)
  return (
    <>
      <NavbarComponent />
      <Container>
        <CarouselComponents />
        <section style={{ margin: '50px 20px' }}>
          <div style={{ fontSize: '1.5rem' , paddingLeft: '20px', color: '#733572', fontWeight: '600', paddingBottom: '10px' }}>Hot Games</div>
          <div className="d-flex">
            {gameList.map((game) => (
              <Fragment key={game.id}>
                <GameItemComponent title={game.game} id={game.id} image={game.image} />
              </Fragment>
            ))}
          </div>
        </section>
      </Container>
      <FooterComponents />
    </>
  )
}

export default withAuth(Home)
