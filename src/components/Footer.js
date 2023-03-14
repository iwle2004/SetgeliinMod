import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {brands} from '@fortawesome/fontawesome-svg-core/import.macro'
import cga from '../images/cga.jpeg'
import "./Footer.css";



export default function Footer() {
  return (
    <MDBFooter className='footer1 text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
          <MDBIcon  icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
          <MDBIcon  icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
          <MDBIcon icon="google" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
              <MDBIcon  icon="mdb" />
                  Сэтгэлийн мод
              </h6>
              <p>Хүн болгон хөгжиж хөгжсөн бүхэн сэтгэлтэй байг.</p>
              
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'></h6>
              <p>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSc33PPlgdUDeG6kneXjMkoppfE4ZTpkv7GTPX3J6NVYWcFetQ/viewform?usp=sf_link" target="_blank" className='text-reset'>
                  Элсэлт
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Хамтран ажилладаг байгуулгууд</h6>
              <img id='cga-img' src={cga}></img>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Холбоо барих</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Ulaanbaatar, Mongolia
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                bolderdenez40@gmail.com
              </p>
              <p>
              <MDBIcon icon="phone" className='me-3' />+976 94162323
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> +976 90099103
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          сэтгэлийн мод
        </a>
      </div>
    </MDBFooter>
  );
}




