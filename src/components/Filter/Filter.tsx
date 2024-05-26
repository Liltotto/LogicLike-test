import { useEffect, useState } from "react";
import useCoursesService from "../../service/CoursesService";

import './filter.scss'


function Filter({ filter, setFilter }: { filter: string, setFilter: (filter: string) => void }) {

    const [tags, setTags] = useState<string[]>(['Все темы']);

    const { getAllCourses } = useCoursesService();

    useEffect(() => {
        getAllCourses().then(data => {
            const newTags: string[] = ['Все темы'];
            data.forEach(course => {
                course.tags.forEach(tag => {
                    if (!newTags.includes(tag)) {
                        newTags.push(tag);
                    }
                })
            })
            setTags(newTags);
        })
    }, []);



    return (
        <div className="filter">
            {
                tags.map((tag) => 
                <button 
                    className={`filter__tag ${tag === filter ? 'filter__tag_active' : ''}`} 
                    key={tag}
                    onClick={() => {
                        setFilter(tag);
                    }}
                    >
                        {tag}
                    </button>
            )
            }
        </div>
    );
}

export default Filter;