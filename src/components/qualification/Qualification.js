import React, {useState} from 'react';
import './qualification.css';

const Qualification = () => {

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {

        setToggleState(index);
    }

  return (

    <section className="qualification section" id="qualification">

        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>

        <div className='qualification__container container'>

            <div className='qualification__tabs'>

                <div className={toggleState===1 ? 'qualification__button button--flex qualification__active' : 'qualification__button button--flex'} onClick={() => toggleTab(1)}>

                    <i className='uil uil-graduation-cap qualification__icon'></i>
                    Education

                </div>

                <div className={toggleState===2 ? 'qualification__button button--flex qualification__active' : 'qualification__button button--flex'} onClick={() => toggleTab(2)}>

                    <i className='uil uil-briefcase-alt qualification__icon'></i>
                    Experience

                </div>                

            </div>

            <div className='qualification__sections'>

                <div className={toggleState===1 ? 'qualification__content qualification__content-active' : 'qualification__content'}>

                    <div className='qualification__data'>

                        <div>

                            <h3 className='qualification__title'>B.E. (Computer Engineering)</h3>
                            <span className='qualification__subtitle'>Pune Institute of Computer Technology, Pune</span>
                            <div className='qualification__calender'>
                                <i className='uil uil-calendar-alt'></i>2021 - 2025
                            </div>

                        </div>

                        <div>

                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>

                        </div>

                    </div>

                    <div className='qualification__data'>

                        <div>


                        </div>

                        <div>

                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>

                        </div>                    

                        <div>

                            <h3 className='qualification__title'>Higher Secondary (HSC)</h3>
                            <span className='qualification__subtitle'>Kalasagar Academy and Jr. College, Wai </span>
                            <div className='qualification__calender'>
                                <i className='uil uil-calendar-alt'></i>2019 - 2021
                            </div>

                        </div>

                    </div>

                    <div className='qualification__data'>

                        <div>

                            <h3 className='qualification__title'>Secondary (SSC)</h3>
                            <span className='qualification__subtitle'>Dnyandeep English Medium School, Wai</span>
                            <div className='qualification__calender'>
                                <i className='uil uil-calendar-alt'></i>2008 - 2019
                            </div>

                        </div>

                        <div>

                            <span className='qualification__rounder'></span>
                            <div className='qualification__line'></div>

                        </div>

                    </div>
                    
                </div>

                <div className={toggleState===2 ? 'qualification__content qualification__content-active' : 'qualification__content'}>

                    <div className='qualification__data'>

                        <div>

                            <h3 className='qualification__title'>Backend Development Intern</h3>
                            <span className='qualification__subtitle'>Visanka Technologies PVT LTD</span>
                            <div className='qualification__calender'>
                                <i className='uil uil-calendar-alt'></i>Dec 2023 - Jan 2024
                            </div>

                        </div>

                        <div>

                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>

                        </div>

                    </div>
                    
                </div>

            </div>


        </div>


    </section>



  )
}

export default Qualification
