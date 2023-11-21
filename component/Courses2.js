import React from 'react'
import styles from '../styles/Courses.module.scss'
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa'
import { BsPeopleFill } from 'react-icons/bs'
import { AiTwotoneCalendar } from 'react-icons/ai'
import Link from 'next/link'


function Courses() {
    return (
        <>
            <div className={styles.Coursecontainer}>
                <div className={styles.Coursecard}>
                    <div className={styles.figure}>


                        <img src="img/course/Embedded STM32 ARM Cortex training.webp" alt="Embedded STM32 ARM Cortex training" className={styles.Courseimg} />


                        <div className={styles.imgoverlay}></div>
                    </div>

                    <h3> <Link href="https://technoscripts.in/stm32-training-online-pune"> STM32 ARM Cortex </Link>  </h3>
                    <div className={styles.rating}>
                        <div> <FaStar className={styles.Courseicon} /> <FaStar className={styles.Courseicon} /> <FaStar className={styles.Courseicon} /> <FaStar className={styles.Courseicon} /> <FaStar className={styles.Courseicon} /> 5 Star (55 <BsPeopleFill /> )
                        </div>
                    </div>

                    <div className={styles.text}>

                        <div className={styles.read}>
                            <button className={styles.readbtn}>
                                <Link href="https://technoscripts.in/stm32-training-online-pune" className="link">Download Pdf..</Link>
                            </button>
                        </div>

                    </div>
                </div>

                <div className={styles.Coursecard}>
                    <div className={styles.figure}>
                        <img src="img/course/IOT With Nodemcu training.webp" alt="IOT With Nodemcu training" className={styles.Courseimg} />

                        <div className={styles.imgoverlay}></div>
                    </div>
                    <h3> <Link href="https://technoscripts.in/iot-online-training-with-nodemcu-esp8266"> IOT With Nodemcu </Link> </h3>
                    <div className={styles.rating}>
                        <div> <FaStar className={styles.Courseicon} /> <FaStar className={styles.Courseicon} /> <FaStar className={styles.Courseicon} /> <FaStar className={styles.Courseicon} /> <FaRegStar className={styles.Courseicon} /> 4 Star (155 <BsPeopleFill /> )
                        </div>
                    </div>


                    <div className={styles.text}>

                        <div className={styles.read}>
                            <button className={styles.readbtn}>
                                <Link href="https://technoscripts.in/iot-online-training-with-nodemcu-esp8266" className="link">Download Pdf..</Link>
                            </button>
                        </div>

                    </div>



                </div>

                <div className={styles.Coursecard}>
                    <div className={styles.figure} >
                        <img src="img/course/IOT Training With Raspberry Pi.webp" alt="IOT Training With Raspberry Pi" className={styles.Courseimg} />

                        <div className={styles.imgoverlay}></div>
                    </div>
                    <h3> <Link href="https://technoscripts.in/iot-using-raspberry-pi-online-training">  IOT Training With Raspberry Pi </Link> </h3>
                    <div className={styles.rating}>
                        <div> <FaStar className={styles.Courseicon} /> <FaStar className={styles.Courseicon} /> <FaStar className={styles.Courseicon} /> <FaStar className={styles.Courseicon} /> <FaStarHalfAlt className={styles.Courseicon} /> 4.5 Star (250 <BsPeopleFill /> )
                        </div>
                    </div>

                    <div className={styles.text}>

                        <div className={styles.read}>
                            <button className={styles.readbtn}>
                                <Link href="https://technoscripts.in/iot-using-raspberry-pi-online-training" className="link">Download Pdf..</Link>
                            </button>
                        </div>

                    </div>

                </div>

            </div>
        </>


    )
}

export default Courses;