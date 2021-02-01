import React from 'react'
import Link from 'next/link'
import styles from './Gamecard.module.css'
import { Card, Button } from 'react-bootstrap'

function GameItemComponent({ title, id, image }) {
  return (
    <div className={`${styles.wrapper} col-md-3`}>
      <Card className={styles.cardLoop}>
        <Card.Body style={{ textAlign: 'center' }}>
          <div style={{ height: 120, marginBottom: 10 }}>
            <Card.Img
              className="cardImage"
              src={`/image/${image}.png`}
              style={{
                marginBottom: '10px',
                maxWidth: '100%',
                maxHeight: '100%',
              }}
            />
          </div>
          <Link href={`/games/${id}`}>
            <Button
              className={`${styles.cardButton} variant=secondary size=sm`}
            >
              Play Now
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <h5 className={styles.cardTitle}>{title}</h5>
    </div>
  )
}

export default GameItemComponent
