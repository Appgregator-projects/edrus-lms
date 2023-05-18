import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Courses from '../pages/students/Courses/Courses';
import CoursesStructurePage from '../pages/students/Courses/CoursesStructurePage';
import Homepage from '../pages/students/Homepage';
import Signin from '../pages/students/Signin';
import Signup from '../pages/students/Signup';
import TopicsPage from '../pages/students/Topics/Topics';
import Inbox from '../pages/students/Inbox/Inbox';
import EditProfile from '../pages/students/Profile/MyProfile/Edit/EditProfile';
import Profile from '../pages/students/Profile/MyProfile/Profile';
import ProfileUser from '../pages/students/Profile/OtherProfile/ProfileUser';
import DailyNews from '../pages/students/DailyNews/DailyNews';
import People from '../pages/students/People/People';
import Account from '../pages/students/Account/Account';
import DashboardPage from '../pages/teachers/Dashboard/Dashboard';
import UserPage from '../pages/teachers/Dashboard/Users/Users';
import CreateUsersPage from '../pages/teachers/Dashboard/Users/CreateUsers';
import CoursesPages from '../pages/teachers/Dashboard/Courses/Courses';
import CreateCoursesPage from '../pages/teachers/Dashboard/Courses/CreateCourses';
import CreateSectionsPage from '../pages/teachers/Dashboard/Sections/CreateSections';
import SectionsPage from '../pages/teachers/Dashboard/Sections/Sections';
import EditSectionsPage from '../pages/teachers/Dashboard/Sections/EditSections';
import EditCoursesPage from '../pages/teachers/Dashboard/Courses/EditCourses';
import Lessons from '../pages/teachers/Dashboard/Lessons/Lessons';
import SingleCoursePage from '../pages/teachers/Dashboard/Courses/SingleCourse';
import QuizPage from '../pages/teachers/Dashboard/Quiz/Quiz';
import AssignmentPage from '../pages/teachers/Dashboard/Assignment/Assignment';
import CreateLessonsPage from '../pages/teachers/Dashboard/Lessons/CreateLessons';
import LessonPage from '../pages/teachers/Dashboard/Courses/LessonPage';

const Routers = () => {
	return (
		<Routes>
			<Route exact path="/" element={<Homepage />} />
			<Route path="/courses" element={<Courses />} />
			<Route path="/login" element={<Signin />} />
			<Route path="/signup" element={<Signup />} />


			<Route path="/courses/:course_id" element={<CoursesStructurePage />} />
			<Route path="/courses/:course_id/sections/:section_id" element={<TopicsPage />} />
			<Route path="/courses/:course_id/sections/:section_id/lesson/:lesson_id" element={<LessonPage />} />
			<Route path="/courseStructure" element={<CoursesStructurePage />} />
			<Route path="/topics/:title" element={<TopicsPage />} />

			<Route path="/profile" element={<Profile />} />
			<Route path="/profile/:id" element={<ProfileUser />} />
			<Route path="/inbox" element={<Inbox />} />
			<Route path="/news" element={<DailyNews />} />
			<Route path="/people" element={<People />} />
			<Route path="/profile/edit" element={<EditProfile />} />
			<Route path="/account" element={<Account />} />

			<Route path="/teacher/dashboard" element={<DashboardPage />} />

			<Route path="/teacher/courses" element={<CoursesPages />} />
			<Route path="/teacher/courses/create" element={<CreateCoursesPage />} />
			<Route path="/teacher/courses/:id" element={<SingleCoursePage />} />
			<Route path="/teacher/courses/edit" element={<EditCoursesPage />} />

			{/* course - section - lesson */}
			<Route path="/teacher/sections" element={<SectionsPage />} />
			<Route path="/teacher/sections/create" element={<CreateSectionsPage />} />
			<Route path="/teacher/sections/edit" element={<EditSectionsPage />} />

			<Route path="/teacher/lessons" element={<Lessons />} />
			<Route path="/teacher/lessons/create" element={<CreateLessonsPage />} />

			<Route path="/teacher/users" element={<UserPage />} />
			<Route path="/teacher/users/create" element={<CreateUsersPage />} />

			<Route path="/teacher/quiz" element={<QuizPage />} />

			<Route path="/teacher/assignment" element={<AssignmentPage />} />
		</Routes>
	);
};

export default Routers;
