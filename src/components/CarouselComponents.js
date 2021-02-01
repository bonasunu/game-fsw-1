import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { Button } from 'react-bootstrap'
import styles from './CarouselComponents.module.css'
import { useRouter } from 'next/router'

const CarouselComponents = () => {
  const router = useRouter()
  const handlePlay = () => {
    router.push(`/games/5`)
  }
  return (
    <div>
      <div className={styles.carouselIndicator}>
        <Carousel>
          <Carousel.Item>
            <img
              className={`d-block w-100 ${styles.size}`}
              src="https://image.freepik.com/free-vector/rock-paper-scissors-vector-cartoon-hand-design_48644-5.jpg"
              alt="Third slide"
            />

            <Carousel.Caption className={styles.centering}>
              <h3 className={styles.sizeFont}>Rock Paper Scissor</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
              <Button
                type="button"
                className={`mt-5 btn btn-warning text-white`}
                onClick={handlePlay}
              >
                Play Now
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={`d-block w-100 ${styles.size}`}
              src="https://staticg.sportskeeda.com/editor/2020/09/2e881-16000838182781-800.jpg"
              alt="First slide"
            />
            <Carousel.Caption className={styles.centering}>
              <h3 className={styles.sizeFont}>Among Us</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <Button
                type="button"
                className={`mt-5 btn btn-warning text-white`}
              >
                Play Now
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={`d-block w-100 ${styles.size}`}
              src="https://image-cdn.essentiallysports.com/wp-content/uploads/20201022182041/call-of-duty-black-ops-cold-war-multiplayer-maps-header.jpg"
              alt="Third slide"
            />

            <Carousel.Caption className={styles.centering}>
              <h3 className={styles.sizeFont}>Call of Duty</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <Button
                type="button"
                className={`mt-5 btn btn-warning text-white`}
              >
                Play Now
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  )
}

export default CarouselComponents
