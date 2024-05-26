import { useEffect, useState } from "react";
import useCoursesService, { Course } from "../../service/CoursesService";

import './courses.scss'
import CoursesItem from "../CoursesItem/CoursesItem";


function Courses({filter} : {filter: string}) {

    const [courses, setCourses] = useState<Course[]>([]);

    const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);

    const { getAllCourses } = useCoursesService();

    useEffect(() => {
        getAllCourses().then(data => {
            setCourses(data);
        })
    }, []);


    useEffect(() => {
        setFilteredCourses(courses.filter(course => course.tags.includes(filter) || filter === 'Все темы'));
    }, [filter, courses]);

    return (
        <div className="courses">
            {
                filteredCourses.map((course) => <CoursesItem course={course} key={course.id} />)
            }
        </div>
    );
}

export default Courses;