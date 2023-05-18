export const AddCourse = (dispatch, payloadCourse) => {
  dispatch({
    type: 'ADD_COURSE',
    course: payloadCourse,
  });
  localStorage.setItem('course', JSON.stringify(payloadCourse));
  return payloadCourse;
};
