import axios from "axios";


export interface Course {
    id: string;
    name: string;
    image: string;
    bgColor: string;
    tags: string[];
}

// interface TransformedCourse {
//     id: string;
//     name: string;
//     image: string;
//     bgColor: string;
//     tags: string[];
// }

const useCoursesService = () => {

    const _apiBase = 'https://logiclike.com/docs/courses.json'

    const getAllCourses = async () : Promise<Course[]> => {
        const result = await axios.get(_apiBase);
        return result.data;

    }

    return { getAllCourses }
}

export default useCoursesService