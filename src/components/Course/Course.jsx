import "./course.css";

export default function Course({ course }) {
    return <div className='course-item'>
        <div className='course-item__image'>
            <img src={course.imageURL} alt={course.title} />
        </div>
        <div className='course-item__details'>
            <CourseCardBody course={course} />
            <CourseCardFooter course={course} />

        </div>
    </div>
}

function CourseCardBody({ course }) {
    return <div className="course-item__body">
        <h3 className='title'>{course.title}</h3>
        <p className='desc'>{course.description}</p>
        <span className='rate'>{course.rate}</span>
    </div>
}

function CourseCardFooter({ course }) {
    return <div className="course-item__footer">
        <div className="tags">
            {course.tags.map(tag => {
                return <span key={course.id + tag} className="badge badge--secondary">{tag}</span>
            })}
        </div>
        <div className="caption">
            <div className='date'>
                {new Date().toLocaleDateString('en-US', {
                    year: "numeric",
                    month: "short",
                    day: "numeric"
                })}
            </div>
            <span className={`badge ${
                course.status === "Active" ?
                    "badge--primary" :
                    course.status === "UpComing" ?
                    "badge--danger" : 
                    "badge--third"
                }`}>{course.status}</span>
        </div>
    </div>
}