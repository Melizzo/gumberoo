import React from "react";
import PropTypes from "prop-types";
import QuestionCard from "../LessonPreview/QuestionCard/QuestionCard";
import './LessonDetails.scss'

const LessonDetails = ({ lesson, lessonAverage }) => {
  const lessonCardDetails = lesson.questions.map((question) => {
    return (
      <QuestionCard
        id={question.id}
        key={question.id}
        question={question.question}
        allAnswers={question.answers}
        reading={question.reading}
        deleteQuestion={null}
      />
    );
  });

  return (
    <section className='lesson-results'>
      <h3 className="lesson-details-h3">{lesson.name}</h3>
      <p className="lesson-details-p">
        <span>Assessment Link: </span>
        <a href={`https://gumberoo.netlify.app/${lesson.teacher.id}/${lesson.id}`}>
          https://gumberoo.netlify.app/{lesson.teacher.id}/{lesson.id}
        </a>
      </p>
      {!lessonAverage.average_score ? (
        <p>No responses collected</p>
      ) : (
        <p>Average Assessment: {lessonAverage.average_score}%</p>
      )}
      {lessonCardDetails}
    </section>
  );
};

export default LessonDetails;

LessonDetails.propTypes = {
  lesson: PropTypes.object.isRequired,
  lessonAverage: PropTypes.object.isRequired,
};
