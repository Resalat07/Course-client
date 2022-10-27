import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Course = () => {
    const [courses ,setCourse] = useState([])
    useEffect(()=>{
        fetch('https://course-server-resalat07.vercel.app/course-categories')
        .then(res=>res.json())
        .then(data=>setCourse(data))
    },[])
    return (
        <div>
            here course : {courses.length}
            <div>
                {
                    courses.map(course=><p key={course.id}>
                        <Link to={`/courseDetail/${course.id}`}>{course.name}</Link>
                    </p>)
                }
            </div>
            
        </div>
    );
};

export default Course;