import React from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from '../routers/ProtectedRoute';
import Courses from "../pages/students/Courses/Courses";
import CoursesStructurePage from "../pages/students/Courses/CoursesStructurePage";
import Homepage from "../pages/students/Homepage";
import Signin from "../pages/students/Signin";
import Signup from "../pages/students/Signup";
import TopicsPage from "../pages/students/Topics/Topics";
import Inbox from "../pages/students/Inbox/Inbox";
import EditProfile from "../pages/students/Profile/MyProfile/Edit/EditProfile";
import Profile from "../pages/students/Profile/MyProfile/Profile";
import ProfileUser from "../pages/students/Profile/OtherProfile/ProfileUser";
import DailyNews from "../pages/students/DailyNews/DailyNews";
import People from "../pages/students/People/People";
import Account from "../pages/students/Account/Account";
import DashboardPage from "../pages/teachers/Dashboard/Dashboard";
import UserPage from "../pages/teachers/Dashboard/Users/Users";
import CreateUsersPage from "../pages/teachers/Dashboard/Users/CreateUsers";
import CoursesPages from "../pages/teachers/Dashboard/Courses/Courses";
import CreateCoursesPage from "../pages/teachers/Dashboard/Courses/CreateCourses";
import CreateSectionsPage from "../pages/teachers/Dashboard/Sections/CreateSections";
import SectionsPage from "../pages/teachers/Dashboard/Sections/Sections";
import EditSectionsPage from "../pages/teachers/Dashboard/Sections/EditSections";
import EditCoursesPage from "../pages/teachers/Dashboard/Courses/EditCourses";
import Lessons from "../pages/teachers/Dashboard/Lessons/Lessons";
import SingleCoursePage from "../pages/teachers/Dashboard/Courses/SingleCourse";
import QuizPage from "../pages/teachers/Dashboard/Quiz/Quiz";
import AssignmentPage from "../pages/teachers/Dashboard/Assignment/Assignment";
import CreateLessonsPage from "../pages/teachers/Dashboard/Lessons/CreateLessons";
import LessonPage from "../pages/teachers/Dashboard/Courses/LessonPage";
import CreateLesson from "../pages/teachers/Dashboard/Courses/CreateLesson";
import SigninTeacher from "../pages/teachers/Signin";
import SignupTeacher from "../pages/teachers/Signup";
import OffersPage from "../pages/teachers/Dashboard/Sales/Offer/Offers";
import NewOffer from "../pages/teachers/Dashboard/Sales/Offer/NewOffer";
import BannerNewOfferPage from "../pages/teachers/Dashboard/Sales/Offer/BannerNewOffer";
import PaymentPage from "../pages/teachers/Dashboard/Settings/Payment";
import EditOfferPage from "../pages/teachers/Dashboard/Sales/Offer/EditOffer";
import CouponsPage from "../pages/teachers/Dashboard/Sales/Coupons/Coupons";
import BannerNewCouponPage from "../pages/teachers/Dashboard/Sales/Coupons/BannerNewCoupon";
import NewCouponsPage from "../pages/teachers/Dashboard/Sales/Coupons/NewCoupons";
import EditCouponsPage from "../pages/teachers/Dashboard/Sales/Coupons/EditCoupons";
import BannerNewPaymentPage from "../pages/teachers/Dashboard/Sales/Payments/BannerNewPayment";
import AffiliatesPage from "../pages/teachers/Dashboard/Sales/Affiliates/Affiliates";
import { UseAuthState } from "../context/Context";
import CustomersPage from "../pages/teachers/Dashboard/Customers/CustomersPage";
import CustomersTagsPage from "../pages/teachers/Dashboard/Customers/CustomersTagsPage";
import CustomersSinglePage from "../pages/teachers/Dashboard/Customers/CustomersSinglePage";
import SettingPage from "../pages/teachers/Dashboard/Settings/SettingPage";
import SiteDetailsPage from "../pages/teachers/Dashboard/Settings/SiteDetails";
import DripSettings from "../pages/teachers/Dashboard/Settings/DripSettings";
import DripSettingsPage from "../pages/teachers/Dashboard/Settings/DripSettings";
import DomainSettingPage from "../pages/teachers/Dashboard/Settings/Domain/DomainSetting";
import DNSSettingPages from "../pages/teachers/Dashboard/Settings/Domain/DNSSetting";

import PaymentPages from "../pages/teachers/Dashboard/Sales/Payments/Payment";
import AccountDetailsPages from "../pages/teachers/Dashboard/Settings/AccountDetails";
import AccountUserPages from "../pages/teachers/Dashboard/Settings/AccountUser/AccountUser";
import NewAccountPages from "../pages/teachers/Dashboard/Settings/AccountUser/NewAccount";
// import Pagespage from "../pages/teachers/Dashboard/Pages/Pagespage";
import Page from "../pages/teachers/Dashboard/Pages/Page";
import CreatePage from "../pages/teachers/Dashboard/Pages/CreatePage";
import PaymentPageV2 from "../pages/all/PaymentPageV2";
import DesignPage from "../pages/teachers/Dashboard/Pages/DesignPage";

const Routers = () => {
	const { user } = UseAuthState();
	return (
		<Routes>
			<Route
				exact
				path="/"
				element={
					<ProtectedRoute user={user} redirectPath="/login">
						<Homepage />
					</ProtectedRoute>
				}
			/>
			<Route
				path="/courses"
				element={
					<ProtectedRoute user={user} redirectPath="/login">
						<Courses />
					</ProtectedRoute>
				}
			/>
			<Route path="/login" element={<Signin />} />
			<Route path="/signup" element={<Signup />} />

			<Route
				path="/courses/:course_id"
				element={
					<ProtectedRoute user={user} redirectPath="/login">
						<CoursesStructurePage />
					</ProtectedRoute>
				}
			/>

			<Route
				path="/courses/:course_id/lesson/:lesson_id"
				element={<CoursesStructurePage />}
			/>
			<Route
				path="/courses/:course_id/sections/:section_id"
				element={<TopicsPage />}
			/>
			<Route
				path="/courses/:course_id/sections/:section_id/lesson/:lesson_id"
				element={<LessonPage />}
			/>
			<Route
				path="/courseStructure"
				element={<CoursesStructurePage />}
			/>
			<Route path="/topics/:title" element={<TopicsPage />} />

			<Route
				path="/courses/:course_id/sections/:section_id"
				element={
					<ProtectedRoute user={user} redirectPath="/login">
						<TopicsPage />
					</ProtectedRoute>
				}
			/>
			<Route
				path="/courses/:course_id/sections/:section_id/lesson/:lesson_id"
				element={
					<ProtectedRoute user={user} redirectPath="/login">
						<LessonPage />
					</ProtectedRoute>
				}
			/>
			<Route
				path="/courseStructure"
				element={
					<ProtectedRoute user={user} redirectPath="/login">
						<CoursesStructurePage />
					</ProtectedRoute>
				}
			/>
			<Route
				path="/topics/:title"
				element={
					<ProtectedRoute user={user} redirectPath="/login">
						<TopicsPage />
					</ProtectedRoute>
				}
			/>

			<Route
				path="/profile"
				element={
					<ProtectedRoute user={user} redirectPath="/login">
						<Profile />
					</ProtectedRoute>
				}
			/>
			<Route
				path="/profile/:id"
				element={
					<ProtectedRoute user={user} redirectPath="/login">
						<ProfileUser />
					</ProtectedRoute>
				}
			/>
			<Route
				path="/inbox"
				element={
					<ProtectedRoute user={user} redirectPath="/login">
						<Inbox />
					</ProtectedRoute>
				}
			/>
			<Route
				path="/news"
				element={
					<ProtectedRoute user={user} redirectPath="/login">
						<DailyNews />
					</ProtectedRoute>
				}
			/>
			<Route
				path="/people"
				element={
					<ProtectedRoute user={user} redirectPath="/login">
						<People />
					</ProtectedRoute>
				}
			/>
			<Route
				path="/profile/edit"
				element={
					<ProtectedRoute user={user} redirectPath="/login">
						<EditProfile />
					</ProtectedRoute>
				}
			/>
			<Route
				path="/account"
				element={
					<ProtectedRoute user={user} redirectPath="/login">
						<Account />
					</ProtectedRoute>
				}
			/>

			<Route
				path="/teacher/dashboard"
				element={
					<ProtectedRoute
						user={user?.role === "teacher"}
						redirectPath="/"
					>
						<DashboardPage />
					</ProtectedRoute>
				}
			/>

			<Route
				path="/teacher/courses"
				element={
					<ProtectedRoute
						user={user?.role === "teacher"}
						redirectPath="/"
					>
						<CoursesPages />
					</ProtectedRoute>
				}
			/>
			<Route
				path="/teacher/courses/create"
				element={
					<ProtectedRoute
						user={user?.role === "teacher"}
						redirectPath="/"
					>
						<CreateCoursesPage />
					</ProtectedRoute>
				}
			/>
			<Route
				path="/teacher/courses/:id"
				element={
					<ProtectedRoute
						user={user?.role === "teacher"}
						redirectPath="/"
					>
						<SingleCoursePage />
					</ProtectedRoute>
				}
			/>
			<Route
				path="/teacher/courses/:id/lesson/:lessonId"
				element={
					<ProtectedRoute
						user={user?.role === "teacher"}
						redirectPath="/"
					>
						<CreateLesson />
					</ProtectedRoute>
				}
			/>
			<Route
				path="/teacher/courses/edit"
				element={
					<ProtectedRoute
						user={user?.role === "teacher"}
						redirectPath="/"
					>
						<EditCoursesPage />
					</ProtectedRoute>
				}
			/>

			{/* ======================================================================== */}
			<Route path="/teacher/login" element={<SigninTeacher />} />
			<Route path="teacher/signup" element={<SignupTeacher />} />
			<Route
				path="/teacher/courses"
				element={
					<ProtectedRoute
						user={user?.role === "teacher"}
						redirectPath="/"
					>
						<CoursesPages />
					</ProtectedRoute>
				}
			/>
			<Route
				path="/teacher/courses/create"
				element={
					<ProtectedRoute
						user={user?.role === "teacher"}
						redirectPath="/"
					>
						<CreateCoursesPage />
					</ProtectedRoute>
				}
			/>
			<Route
				path="/teacher/courses/:id"
				element={
					<ProtectedRoute
						user={user?.role === "teacher"}
						redirectPath="/"
					>
						<SingleCoursePage />
					</ProtectedRoute>
				}
			/>
			<Route
				path="/teacher/courses/:id/lesson/:lessonId"
				element={
					<ProtectedRoute
						user={user?.role === "teacher"}
						redirectPath="/"
					>
						<CreateLesson />
					</ProtectedRoute>
				}
			/>
			<Route
				path="/teacher/courses/edit"
				element={
					<ProtectedRoute
						user={user?.role === "teacher"}
						redirectPath="/"
					>
						<EditCoursesPage />
					</ProtectedRoute>
				}
			/>
			{/* ======================================================================== */}
			<Route
				path="/teacher/customers"
				element={
					<ProtectedRoute
						user={user?.role === "teacher"}
						redirectPath="/"
					>
						<CustomersPage />
					</ProtectedRoute>
				}
			/>
			<Route
				path="/teacher/customers/tags"
				element={
					<ProtectedRoute
						user={user?.role === "teacher"}
						redirectPath="/"
					>
						<CustomersTagsPage />
					</ProtectedRoute>
				}
			/>
			<Route
				path="/teacher/customers/:id"
				element={
					<ProtectedRoute
						user={user?.role === "teacher"}
						redirectPath="/"
					>
						<CustomersSinglePage />
					</ProtectedRoute>
				}
			/>

			{/* ======================================================================== */}
			<Route
				path="/teacher/settings"
				element={
					<ProtectedRoute
						user={user?.role === "teacher"}
						redirectPath="/"
					>
						<SettingPage />
					</ProtectedRoute>
				}
			/>
			<Route
				path="/teacher/customers/tags"
				element={
					<ProtectedRoute
						user={user?.role === "teacher"}
						redirectPath="/"
					>
						<CustomersTagsPage />
					</ProtectedRoute>
				}
			/>
			<Route
				path="/teacher/customers/:id"
				element={
					<ProtectedRoute
						user={user?.role === "teacher"}
						redirectPath="/"
					>
						<CustomersSinglePage />
					</ProtectedRoute>
				}
			/>

			{/* ======================================================================== */}
			<Route
				path="/teacher/pages"
				element={
					<ProtectedRoute
						user={user?.role === "teacher"}
						redirectPath="/"
					>
						<Page />
					</ProtectedRoute>
				}
			/>
			<Route
				path="/teacher/pages/:id"
				element={
					<ProtectedRoute
						user={user?.role === "teacher"}
						redirectPath="/"
					>
						<CreatePage />
					</ProtectedRoute>
				}
			/>
			<Route
				path="/teacher/pages/:id/design"
				element={
					<ProtectedRoute
						user={user?.role === "teacher"}
						redirectPath="/"
					>
						<DesignPage />
					</ProtectedRoute>
				}
			/>

			{/* ======================================================================== */}

			{/* course - section - lesson */}
			<Route
				path="/teacher/sections"
				element={
					<ProtectedRoute
						user={user?.role === "teacher"}
						redirectPath="/"
					>
						<SectionsPage />
					</ProtectedRoute>
				}
			/>
			<Route
				path="/teacher/sections/create"
				element={
					<ProtectedRoute
						user={user?.role === "teacher"}
						redirectPath="/"
					>
						<CreateSectionsPage />
					</ProtectedRoute>
				}
			/>
			<Route
				path="/teacher/sections/edit"
				element={
					<ProtectedRoute
						user={user?.role === "teacher"}
						redirectPath="/"
					>
						<EditSectionsPage />
					</ProtectedRoute>
				}
			/>

			<Route
				path="/teacher/lessons"
				element={
					<ProtectedRoute
						user={user?.role === "teacher"}
						redirectPath="/"
					>
						<Lessons />
					</ProtectedRoute>
				}
			/>
			<Route
				path="/teacher/lessons/create"
				element={
					<ProtectedRoute
						user={user?.role === "teacher"}
						redirectPath="/"
					>
						<CreateLessonsPage />
					</ProtectedRoute>
				}
			/>

			<Route
				path="/teacher/users"
				element={
					<ProtectedRoute
						user={user?.role === "teacher"}
						redirectPath="/"
					>
						<UserPage />
					</ProtectedRoute>
				}
			/>
			<Route
				path="/teacher/users/create"
				element={
					<ProtectedRoute
						user={user?.role === "teacher"}
						redirectPath="/"
					>
						<CreateUsersPage />
					</ProtectedRoute>
				}
			/>

			<Route
				path="/teacher/quiz"
				element={
					<ProtectedRoute
						user={user?.role === "teacher"}
						redirectPath="/"
					>
						<QuizPage />
					</ProtectedRoute>
				}
			/>

			<Route
				path="/teacher/assignment"
				element={
					<ProtectedRoute
						user={user?.role === "teacher"}
						redirectPath="/"
					>
						<AssignmentPage />
					</ProtectedRoute>
				}
			/>

			<Route path="/teacher/assignment" element={<AssignmentPage />} />
			<Route path="/teacher/offers/new" element={<NewOffer />} />

			<Route path="/teacher/offers" element={<OffersPage />} />
			<Route
				path="/teacher/offers/new/banner"
				element={<BannerNewOfferPage />}
			/>
			<Route path="/teacher/payments" element={<PaymentPages />} />
			<Route
				path="/teacher/settings/payments"
				element={<PaymentPage />}
			/>

			<Route
				path="/teacher/offers/:id/edit"
				element={<EditOfferPage />}
			/>
			<Route path="/teacher/coupons" element={<CouponsPage />} />
			<Route
				path="/teacher/coupons/new"
				element={<NewCouponsPage />}
			/>

			<Route
				path="/teacher/coupons/new/banner"
				element={<BannerNewCouponPage />}
			/>
			<Route
				path="/teacher/coupons/:id/edit"
				element={<EditCouponsPage />}
			/>
			<Route
				path="/teacher/payments/new/banner"
				element={<BannerNewPaymentPage />}
			/>
			<Route path="/teacher/affiliates" element={<AffiliatesPage />} />
			<Route
				path="/teacher/settings/site-detail"
				element={<SiteDetailsPage />}
			/>
			<Route
				path="/teacher/settings/drip-setting"
				element={<DripSettingsPage />}
			/>
			<Route
				path="/teacher/settings/domain"
				element={<DomainSettingPage />}
			/>
			<Route
				path="/teacher/settings/dns/:id"
				element={<DNSSettingPages />}
			/>
			<Route
				path="/teacher/settings/account-detail"
				element={<AccountDetailsPages />}
			/>
			<Route
				path="/teacher/settings/account-users"
				element={<AccountUserPages />}
			/>
			<Route
				path="/teacher/settings/account-users/new"
				element={<NewAccountPages />}
			/>

			<Route
				path="/payment"
				element={<PaymentPageV2 />}
			/>
		</Routes>
	);
};

export default Routers;
