import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import NotificationPage from "./pages/AccountPage/NotificationPage";
import CoursePage from "./pages/CoursePage/CoursePage";
import NotFound from "./pages/NotfoundPage/NotFound";
import MyCoursePage from "./pages/MyCoursePage/MyCoursePage";
import VideoPage from "./pages/VideoPage/VideoPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import OTPPage from "./pages/OTPPage/OTPPage";
import SuccessBuyPage from "./pages/SuccessBuyPage/SuccessBuyPage";
import ChangePasswordPage from "./pages/AccountPage/ChangePasswordPage";
import UserPage from "./pages/AccountPage/UserPage";
import HistoryPayment from "./pages/AccountPage/HistoryPayment";
import BuyPage from "./pages/BuyPage/BuyPage";
import ResetPasswordPage from "./pages/ResetPasswordPage/ResetPasswordPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/course/:userId" element={<CoursePage />} />
          <Route path="/mycourse/:userId" element={<MyCoursePage />} />
          <Route path="/notif" element={<NotificationPage />} />
          <Route path="/user/:userId" element={<UserPage />} />
          <Route path="/changepassword" element={<ChangePasswordPage />} />
          <Route path="/historypayment" element={<HistoryPayment />} />
          <Route path="/video/:userId/:courseId" element={<VideoPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/otp/:userId" element={<OTPPage />} />
          <Route path="/success" element={<SuccessBuyPage />} />
          <Route
            path="/reset-password/:userId"
            element={<ResetPasswordPage />}
          />
          <Route path="/payment" element={<BuyPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
