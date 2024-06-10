import React from 'react';
import './footer.css';

const Footer = () => {
  return (

    <footer className='footer'>

        <div className="footer__container container">

            <h1 className="footer__title">omkar</h1>

            <ul className="footer__list">

                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#qualification" className="footer__link">Qualifications</a>
                </li>

            </ul>

            <div className="footer__social">

                <a href='https://www.linkedin.com/in/omkar-shinde-33237422a/' className='footer__social-link' target='_blank'><i className='bx bxl-linkedin'></i></a>

                <a href='https://www.instagram.com/_omkar_3905/' className='footer__social-link' target='_blank'><i className='bx bxl-instagram'></i></a>

                <a href='https://github.com/omkar3905/' className='footer__social-link' target='_blank'><i className='bx bxl-github'></i></a>

            </div>

            <span className="footer__copy">
                &#169; OMKAR. All right reserved
            </span>


        </div>
    </footer>

  )
}

export default Footer
