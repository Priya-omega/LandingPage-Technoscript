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

                        <img src="img/embedded course.webp" alt="embedded course in pune" className={styles.Courseimg} />
                        <div className={styles.imgoverlay}></div>
                    </div>

                    <h3> <Link href="https://technoscripts.in/embedded-institute-in-pune"> Advanced Embedded System</Link></h3>
                    <div className={styles.rating}>
                        <div> <FaStar className={styles.Courseicon} /> <FaStar className={styles.Courseicon} /> <FaStar className={styles.Courseicon} /> <FaStar className={styles.Courseicon} /> <FaStar className={styles.Courseicon} /> 4.9 Star (21,500 <BsPeopleFill /> )
                        </div>
                    </div>


                    <div className={styles.text}>

                        <div className={styles.read}>
                            <button className={styles.readbtn}>
                                <Link href="https://technoscripts.in/embedded-institute-in-pune" className="link">Download Pdf..</Link>
                            </button>
                        </div>

                    </div>


                </div>

                <div className={styles.Coursecard}>
                    <div className={styles.figure}>
                        <img src="img/Automotive embedded course.webp" alt="Automotive embedded course" className={styles.Courseimg} />
                        <div className={styles.imgoverlay}></div>
                    </div>
                    <h3> <Link href="https://technoscripts.in/Embedded-diploma-course"> PG Diploma in Embedded</Link> </h3>
                    <div className={styles.rating}>
                        <div> <FaStar className={styles.Courseicon} /> <FaStar className={styles.Courseicon} /> <FaStar className={styles.Courseicon} /> <FaStar className={styles.Courseicon} />  <FaStar className={styles.Courseicon} /> 4.9 Star (19,800 <BsPeopleFill /> )
                        </div>
                    </div>


                    <div className={styles.text}>

                        <div className={styles.read}>
                            <button className={styles.readbtn}>
                                <Link href="https://technoscripts.in/Embedded-diploma-course" className="link">Download Pdf..</Link>
                            </button>
                        </div>

                    </div>



                </div>

                <div className={styles.Coursecard}>
                    <div className={styles.figure} >
                        <img src="img/iot course in pune.webp" alt="iot course in pune" className={styles.Courseimg} />
                        <div className={styles.imgoverlay}></div>
                    </div>
                    <h3> <Link href="https://technoscripts.in/iot-training-courses"> IOT Internet of Things </Link> </h3>
                    <div className={styles.rating}>
                        <div> <FaStar className={styles.Courseicon} /> <FaStar className={styles.Courseicon} /> <FaStar className={styles.Courseicon} /> <FaStar className={styles.Courseicon} /> <FaStarHalfAlt className={styles.Courseicon} /> 4.8 Star (17,425 <BsPeopleFill /> )
                        </div>
                    </div>


                    <div className={styles.text}>

                        <div className={styles.read}>
                            <button className={styles.readbtn}>
                                <Link href="https://technoscripts.in/iot-training-courses" className="link">Download Pdf..</Link>
                            </button>
                        </div>

                    </div>

                </div>

            </div>
        </>


    )
}

export default Courses;