import React, { useState } from 'react'
import { Row } from 'react-bootstrap'
import Image from 'next/image'
import RestartLeaderboard from '../src/components/RestartLeaderboardComponent'
import Navbar from '../src/components/NavbarComponent'
import withAuth from '../src/hocs/withAuth'

import axios from 'axios'

const Games = () => {
  const [gamePoint, setGamePoint] = useState([])
  const [gameCount, setGameCount] = useState(0)
  const [gameResult, setGameResult] = useState('')
  const [endGameResult, setEndGameResult] = useState('')
  const [showResult, setShowResult] = useState(true)
  const [hoverEnable, setHoverEnable] = useState(true)
  const [finish, setFinish] = useState(false)

  const changeBackground = (e) => {
    if (hoverEnable) {
      e.target.style.background = '#d4d4d4'
    }
  }
  const resetBackground = (e) => {
    if (hoverEnable) {
      e.target.style.background = '#fff'
    }
  }

  const changeBackgroundRefresh = (e) => {
    if (!hoverEnable) {
      e.target.style.background = '#d4d4d4'
    }
  }
  const resetBackgroundRefresh = (e) => {
    if (!hoverEnable) {
      e.target.style.background = '#fff'
    }
  }

  const runGame = (e) => {
    if (!hoverEnable) return 0

    setGameCount(gameCount + 1)

    // player choice
    const player_choice = e.target.alt
    e.target.style.background = 'red'

    // COM choice
    const comChoice = Math.floor(Math.random() * 3) + 1
    document.querySelectorAll('.resizeimg')[
      2 + comChoice
    ].style.backgroundColor = 'red'
    const com_choice = document.querySelectorAll('.resizeimg')[2 + comChoice]
      .alt

    //game logic
    switch (true) {
      case player_choice === 'batu' && com_choice === 'batu':
        setGameResult('draw')
        setGamePoint([...gamePoint, 'draw'])
        setShowResult(true)
        break
      case player_choice === 'batu' && com_choice === 'gunting':
        setGameResult('win')
        setGamePoint([...gamePoint, 'win'])
        setShowResult(true)
        break
      case player_choice === 'batu' && com_choice === 'kertas':
        setGameResult('lose')
        setGamePoint([...gamePoint, 'lose'])
        setShowResult(true)
        break
      case player_choice === 'gunting' && com_choice === 'batu':
        setGameResult('lose')
        setGamePoint([...gamePoint, 'lose'])
        setShowResult(true)
        break
      case player_choice === 'gunting' && com_choice === 'gunting':
        setGameResult('draw')
        setGamePoint([...gamePoint, 'draw'])
        setShowResult(true)
        break
      case player_choice === 'gunting' && com_choice === 'kertas':
        setGameResult('win')
        setGamePoint([...gamePoint, 'win'])
        setShowResult(true)
        break
      case player_choice === 'kertas' && com_choice === 'batu':
        setGameResult('win')
        setGamePoint([...gamePoint, 'win'])
        setShowResult(true)
        break
      case player_choice === 'kertas' && com_choice === 'gunting':
        setGameResult('lose')
        setGamePoint([...gamePoint, 'lose'])
        setShowResult(true)
        break
      case player_choice === 'kertas' && com_choice === 'kertas':
        setGameResult('draw')
        setGamePoint([...gamePoint, 'draw'])
        setShowResult(true)
        break
      default:
        break
    }

    // disable player input
    setHoverEnable(false)
  }

  const runRefresh = () => {
    for (let i = 0; i < 6; i++) {
      document.querySelectorAll('.resizeimg')[i].style.backgroundColor = '#fff'
    }
    setHoverEnable(true)
    document.querySelectorAll('.resizeimg')[6].style.backgroundColor = '#fff'

    setShowResult(false)
    cekEndGame()
  }

  const cekEndGame = async () => {
    const w = gamePoint.filter((point) => point === 'win')
    const d = gamePoint.filter((point) => point === 'draw')
    const l = gamePoint.filter((point) => point === 'lose')

    if (gameCount > 2) {
      let postData
      if (w.length >= 2 || (d.length > 1 && w.length === 1)) {
        setEndGameResult('Player Win')
        postData = 'W'
      } else if (l.length >= 2 || (d.length > 1 && l.length === 1)) {
        setEndGameResult('COM Win')
        postData = 'L'
      } else {
        setEndGameResult('Draw')
        postData = 'D'
      }

      const postaxios = { result: postData }
      const headerData = {
        headers: {
          Authorization: localStorage.getItem('binar.access.token'),
        },
      }

      try {
        await axios.post(
          'https://pacific-taiga-53059.herokuapp.com/api/game-result',
          postaxios,
          headerData
        )
        console.log('posting some data')
      } catch (error) {
        alert(error)
      }

      setHoverEnable(false)
      setFinish(true)
    }
  }

  return (
    <>
      <Navbar />
      <div className='container'>
        <br />
        <div className='text-center py-3'>
          <Image
            src='/logo/primary-logo.png'
            width={300}
            height={100}
            alt='Binar Gaming Industry'
          />
        </div>
        <br />
        <Row>
          <div className='col-5 text-center'>
            <span className='player'>Player 1</span>
            <div className='py-3'>
              <Image
                src='/batu.png'
                className='resizeimg'
                alt='batu'
                width='64'
                height='64'
                onMouseEnter={changeBackground}
                onMouseLeave={resetBackground}
                onClick={runGame}
              />
            </div>
            <div className='py-3'>
              <Image
                src='/kertas.png'
                className='resizeimg'
                alt='kertas'
                width='64'
                height='64'
                onMouseEnter={changeBackground}
                onMouseLeave={resetBackground}
                onClick={runGame}
              />
            </div>
            <div className='py-3'>
              <Image
                src='/gunting.png'
                className='resizeimg'
                alt='gunting'
                width='64'
                height='64'
                onMouseEnter={changeBackground}
                onMouseLeave={resetBackground}
                onClick={runGame}
              />
            </div>
          </div>
          <div className='col-2 text-center player pb-5 '>
            VS
            <br />
            <br />
            <p>{showResult && gameResult}</p>
          </div>
          <div className='col-5 text-center'>
            <span className='player'>COM</span>
            <div className='py-3'>
              <Image
                src='/batu.png'
                className='resizeimg'
                alt='batu'
                width='64'
                height='64'
              />
            </div>
            <div className='py-3'>
              <Image
                src='/kertas.png'
                className='resizeimg'
                alt='kertas'
                width='64'
                height='64'
              />
            </div>
            <div className='py-3'>
              <Image
                src='/gunting.png'
                className='resizeimg'
                alt='gunting'
                width='64'
                height='64'
              />
            </div>
          </div>
        </Row>
        <div className='pt-4 text-center'>
          <Image
            src='/refresh.png'
            className='resizeimg'
            alt='refresh'
            width='64'
            height='64'
            onMouseEnter={changeBackgroundRefresh}
            onMouseLeave={resetBackgroundRefresh}
            onClick={runRefresh}
          />
        </div>
        <div className='pt-4 text-center'>
          <p>{endGameResult}</p>
        </div>
        {finish && <RestartLeaderboard />}
      </div>
    </>
  )
}

export default withAuth(Games)
