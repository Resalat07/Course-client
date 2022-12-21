import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import FadeLoader from "react-spinners/FadeLoader";


const Course = () => {
    const [courses, setCourse] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://course-server-resalat07.vercel.app/course-categories')
            .then(res => res.json())
            .then(data => {
                setCourse(data)
                setLoading(false)

            })
    }, [])
    return (
        <div >
            {
                loading ?

                    <FadeLoader
                        // color="#3671d6"
                        // height={28}
                        // width={7}
                    />

                    :

                    <div className='mt-5'>
                        {
                            courses.map(course => <p key={course.id}>
                                <Link className='font-text' to={`/courseDetail/${course.id}`}>{course.name}</Link>
                            </p>)
                        }
                    </div>

            }







        </div>
    );
};

export default Course;