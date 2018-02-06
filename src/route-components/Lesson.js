import React from 'react';
import lessons from 'constants/lessons';

const mappedSlugs = {};
lessons.forEach(lesson => {
  mappedSlugs[lesson.slug] = lesson;
});

export default function Lesson({ response }) {
  const { lessonSlug } = response.params;
  if (!lessonSlug || !mappedSlugs[lessonSlug]) {
    return <div>Lesson not found</div>;
  }

  const Lesson = mappedSlugs[lessonSlug].component;
  return <Lesson />;
}
