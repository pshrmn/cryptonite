import React from 'react';
import { Link } from '@curi/react';
import lessons from 'constants/lessons';

const LessonList = props => (
  <div>
    <h1>Lessons</h1>
    <ol>
      {
        lessons.map(lesson => (
          <li key={lesson.slug}>
            <Link to='Lesson' params={{ 'lessonSlug': lesson.slug }}>
              {lesson.title}
            </Link>
          </li>
        ))
      }
    </ol>
  </div>
);


export default LessonList;