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
import ProtectedRoute from '../routers/ProtectedRoute';
import { UseAuthState } from '../context/Context';

const Routers = () => {
	const { user } = UseAuthState();
	return (
		<Routes>
			<Route exact path="/" element={
				<ProtectedRoute user={user} redirectPath='/login'>
					<Homepage />
				 </ProtectedRoute>
			} />
			<Route path="/courses" element={
				<ProtectedRoute user={user} redirectPath='/login'>
					<Courses />
				</ProtectedRoute>

			} />
			<Route path="/login" element={<Signin />} />
			<Route path="/signup" element={<Signup />} />


			<Route path="/courses/:course_id" element={
				<ProtectedRoute user={user} redirectPath='/login'>
					<CoursesStructurePage />
				</ProtectedRoute>

			} />
			<Route path="/courses/:course_id/sections/:section_id" element={
				<ProtectedRoute user={user} redirectPath='/login'>
					<TopicsPage />
				</ProtectedRoute>

			} />
			<Route path="/courses/:course_id/sections/:section_id/lesson/:lesson_id" element={
				<ProtectedRoute user={user} redirectPath='/login'>
					<LessonPage />
				</ProtectedRoute>

			} />
			<Route path="/courseStructure" element={
				<ProtectedRoute user={user} redirectPath='/login'>
					<CoursesStructurePage />
				</ProtectedRoute>

			} />
			<Route path="/topics/:title" element={
				<ProtectedRoute user={user} redirectPath='/login'>
					<TopicsPage />
				</ProtectedRoute>

			} />

			<Route path="/profile" element={
				<ProtectedRoute user={user} redirectPath='/login'>
					<Profile />
				</ProtectedRoute>

			} />
			<Route path="/profile/:id" element={
				<ProtectedRoute user={user} redirectPath='/login'>
					<ProfileUser />
				</ProtectedRoute>

			} />
			<Route path="/inbox" element={
				<ProtectedRoute user={user} redirectPath='/login'>
					<Inbox />
				</ProtectedRoute>

			} />
			<Route path="/news" element={
				<ProtectedRoute user={user} redirectPath='/login'>
					<DailyNews />
				</ProtectedRoute>

			} />
			<Route path="/people" element={
				<ProtectedRoute user={user} redirectPath='/login'>
					<People />
				</ProtectedRoute>

			} />
			<Route path="/profile/edit" element={
				<ProtectedRoute user={user} redirectPath='/login'>
					<EditProfile />
				</ProtectedRoute>

			} />
			<Route path="/account" element={
				<ProtectedRoute user={user} redirectPath='/login'>
					<Account />
				</ProtectedRoute>

			} />

			<Route path="/teacher/dashboard" element={
				<ProtectedRoute user={user.role === "teacher"} redirectPath='/'>
					<DashboardPage />
				</ProtectedRoute>

			} />

			<Route path="/teacher/courses" element={
				<ProtectedRoute user={user.role === "teacher"} redirectPath='/'>
					<CoursesPages />
				</ProtectedRoute>

			} />
			<Route path="/teacher/courses/create" element={
				<ProtectedRoute user={user.role === "teacher"} redirectPath='/'>
					<CreateCoursesPage />
				</ProtectedRoute>

			} />
			<Route path="/teacher/courses/:id" element={
				<ProtectedRoute user={user.role === "teacher"} redirectPath='/'>
					<SingleCoursePage />
				</ProtectedRoute>

			} />
			<Route path="/teacher/courses/edit" element={
				<ProtectedRoute user={user.role === "teacher"} redirectPath='/'>
					<EditCoursesPage />
				</ProtectedRoute>

			} />

			{/* course - section - lesson */}
			<Route path="/teacher/sections" element={
				<ProtectedRoute user={user.role === "teacher"} redirectPath='/'>
					<SectionsPage />
				</ProtectedRoute>

			} />
			<Route path="/teacher/sections/create" element={
				<ProtectedRoute user={user.role === "teacher"} redirectPath='/'>
					<CreateSectionsPage />
				</ProtectedRoute>

			} />
			<Route path="/teacher/sections/edit" element={
				<ProtectedRoute user={user.role === "teacher"} redirectPath='/'>
					<EditSectionsPage />
				</ProtectedRoute>

			} />

			<Route path="/teacher/lessons" element={
				<ProtectedRoute user={user.role === "teacher"} redirectPath='/'>
					<Lessons />
				</ProtectedRoute>

			} />
			<Route path="/teacher/lessons/create" element={
				<ProtectedRoute user={user.role === "teacher"} redirectPath='/'>
					<CreateLessonsPage />
				</ProtectedRoute>

			} />

			<Route path="/teacher/users" element={
				<ProtectedRoute user={user.role === "teacher"} redirectPath='/'>
					<UserPage />
				</ProtectedRoute>

			} />
			<Route path="/teacher/users/create" element={
				<ProtectedRoute user={user.role === "teacher"} redirectPath='/'>
					<CreateUsersPage />
				</ProtectedRoute>

			} />

			<Route path="/teacher/quiz" element={
				<ProtectedRoute user={user.role === "teacher"} redirectPath='/'>
					<QuizPage />
				</ProtectedRoute>

			} />

			<Route path="/teacher/assignment" element={
				<ProtectedRoute user={user.role === "teacher"} redirectPath='/'>
					<AssignmentPage />
				</ProtectedRoute>

			} />
		</Routes>
	);
};

export default Routers;
