import { Link, useNavigate, useParams } from 'react-router-dom';
import courses from '../data/courses';
import { useEffect } from 'react';

const SingleCourse = () => {
  const { courseSlug } = useParams();
  const navigate = useNavigate();

  const course = courses.find((course) => course.slug === courseSlug);

  useEffect(() => {
    if (!course) {
      navigate('..', { relative: 'path' });
    }
  }, [course, navigate]);

  return (
    <>
      <h1>{course?.title}</h1>
      <h2>{course?.slug}</h2>
      <h3>id: {course?.id}</h3>
      {/* <Link to="/courses">All Courses</Link> */}
      <Link to=".." relative="path">
        All Courses
      </Link>
    </>
  );
};

export default SingleCourse;
