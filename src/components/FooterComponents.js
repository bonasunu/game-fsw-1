import React from 'react'
import { Container } from 'react-bootstrap'
import styles from './Footer.module.css'

const FooterComponents = () => {
  return (
    <div className={styles.footer}>
      <Container>
        <div className={`row mb-5 mt-3`}>
          {/* column 1 */}
          <div className={`col-6`}>
            <img
              className={`${styles.picsize} mb-3`}
              src="/logo/primary-logo.png"
              alt="logo_binar"
            />
            <h1 className={`list-unstyled ${styles.styleList}`}>
              <li className={`mb-1`}>Pacific Century Place, SCBD Lt 99,</li>
              <li className={`mb-3`}>
                Jl Jend Sudirman Kav. 1-100, Jakarta Selatan 12190
              </li>
              <li>Tel: +62 21 12128787</li>
            </h1>
          </div>
          {/* column 2 */}
          <div className={`col`}>
            <h6 className={styles.color}>Company</h6>
            <ul className={`list-unstyled ${styles.styleList}`}>
              <li>Who we are</li>
              <li>Karir</li>
            </ul>
          </div>
          {/* column 3 */}
          <div className={`col`}>
            <h6 className={styles.color}>Platform</h6>
            <ul className={`list-unstyled ${styles.styleList}`}>
              <li>Binar Mobile</li>
              <li>Binar PC</li>
            </ul>
          </div>
          {/* column 4 */}
          <div className={`col`}>
            <h6 className={styles.color}>Service</h6>
            <ul className={`list-unstyled ${styles.styleList}`}>
              <li>Support</li>
              <li>Akun saya</li>
            </ul>
          </div>
        </div>
        <hr className={styles.space1} />
        <div className={`row mt-3 pb-2 font-weight-light`}>
          <div className={`col-8`}>
            <p className={`col-sm`}>
              Copyright &copy; Binar Gaming. Trademarks belong to their
              respective owners. All rights reserved
            </p>
          </div>
          <div className={`col`}>
            <p>Terms of service</p>
          </div>
          <div className={`col`}>
            <p>Privacy Policy</p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default FooterComponents
