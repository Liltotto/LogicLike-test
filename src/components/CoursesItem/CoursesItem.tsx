import { Course } from "../../service/CoursesService";




function CoursesItem({ course }: { course: Course }) {
    return (
        <div className="courses__item">
            <div className="courses__item-image" style={{ backgroundColor: course.bgColor }}>
                <img src={course.image} alt={course.name} />
            </div>

            <p className="courses__item-title">{course.name}</p>
        </div>
    );
}

export default CoursesItem;