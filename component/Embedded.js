import React from 'react'
import { FaRegHandPointRight, FaDownload } from 'react-icons/fa'
import Course from './Course'
import Courses2 from './Courses2'

export default function Courses() {
    return (
        <div className='pageContainer'>
            <div className="heading">
                <h1>Embedded System Courses</h1>
            </div>

            <div className='para'>
                <p> <FaRegHandPointRight className='hand-icon' /> We are one of the best embedded systems training institute for advance courses. </p>
                <p> <FaRegHandPointRight className='hand-icon' /> embedded systems advanced course is a Career Oriented Technical course that builds on the knowledge and skills acquired in embedded systems. It is designed to provide students with a deeper understanding of the principles and techniques used to design, develop, and implement complex embedded systems.</p>
                <p> <FaRegHandPointRight className='hand-icon' /> The course includes implementation of minimum two Live projects to gain hands on practice plus lots of coding practices and project practice during training. The total duration of course is 4 months & it can be completed in regular or fast track batches. for working professionals early morning, late evening and weekend batches also available </p>

                <p><b>Duration :</b> 4 months </p>
                <p><b>Mode of training :</b> We provide classroom training, online classes or hybrid model.</p>
            </div>

            <Course />
            <Courses2 />


        </div>
    )
}
