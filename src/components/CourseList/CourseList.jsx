import Course from '../Course/Course';
import './courseList.css';

const courses = [
    {
        id: 1,
        title: "React js course",
        description: "this is React js courses to learning",
        imageURL: "../../public/images/react-blue.png",
        rate: 4.5,
        tags: ["rect-js", "javascript", "front-end"],
        start: "",
        status: "Completed"
    },
    {
        id: 2,
        title: "website developer",
        description: "this is React js courses to learning",
        imageURL: "../../public/images/web.jpg",
        rate: 4.3,
        tags: ["html 5", "css", "front-end", "tailwind"],
        start: "",
        status: "UpComing"
    },
    {
        id: 3,
        title: "javascript course",
        description: "this is React js courses to learning",
        imageURL: "../../public/images/react-js.png",
        rate: 4.7,
        tags: ["rect-js", "javascript", "front-end"],
        start: "",
        status: "Active"
    }
]

export default function CourseList() {
    return <div className='course-list'>
        {courses.map(course =>  <Course course={course} key={course.id} />
        )}
    </div>
}