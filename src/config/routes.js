import React from "react";
import { Navigate } from "react-router-dom";
import MainLayout from "layout/MainLayout";
import NotFound from "page/common/NotFound";
import Intro from "page/common/Intro";

const routes = [
    {
        path: "main",
        children: [
            { path: "", element: <Intro /> },
            { path: "404", element: <NotFound /> },
            { path: "*", element: <Navigate to="/404" /> },
        ],
    },
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: "", element: <Navigate to="/main" /> }, // 플랫폼 초기 진입시 main으로
            //{ path: "signin", element: <SignIn /> }, // 로그인
            //{ path: "signup", element: <SignUp /> }, // 회원가입
            //{ path: "sign-completed", element: <SignCompleted /> }, // 회원가입 성공
            //{ path: "find-password", element: <FindPassword /> }, // 비밀번호 찾기
            { path: "404", element: <NotFound /> },
            { path: "*", element: <Navigate to="/404" /> },
        ],
    },
    //{
    //    path: "app",
    //    element: <DashboardLayout />,
    //    children: [
    //        { path: "", element: <Dashboard /> },
    //        { path: "receivables/:state", element: <Receivables /> },
    //        { path: "receivables/details/:id", element: <ReceivableDetails /> },
    //        { path: "payables/:state", element: <TradePayables /> },
    //        { path: "payables/details/:id", element: <PayableDetails /> },
    //        { path: "assignments/:state", element: <Assignments />, },
    //        { path: "assignments/request/:id", element: <AssignmentRequest /> },
    //        //   { path: "assignments/approve", element: <AssignmentApprove /> }, // 기존 채권양도 계약서
    //        { path: "transfers/:state", element: <TradeTransfers /> },
    //        // { path: "transfers/approve", element: <TransferApprove /> },
    //        { path: "transfers/contract/:id", element: <TransferRequest /> },
    //        { path: "mypage", element: <Mypage /> },
    //        { path: "partnership", element: <Partnership /> },
    //        { path: "calender", element: <Calender /> },
    //        { path: "*", element: <Navigate to="/404" /> },
    //    ],
    //},
    
    //{
    //    path: "admin",
    //    element: <AdminLayout />,
    //    children: [
    //        { path: "", element: <AdminHome /> },
    //        { path: "users/list", element: <AdminUsers /> },
    //        { path: "users/create", element: <AdminUserForm /> },
    //        { path: "receivables/list/:state", element: <AdminReceivableList /> },
    //        { path: "receivables/create", element: <AdminReceivableForm /> },
    //        { path: "members/list", element: <MemberList /> },
    //        { path: "members/create", element: <MemberCreate /> },
    //        { path: "codes/create", element: <CodeCreate /> },
    //        { path: "assignments/:state", element: <AdminAssignmentList /> },
    //        { path: "transfers/:state", element: <AdminTransferList /> },
    //        { path: "partnership/:category/:state", element: <PartnershipInquiryList /> },
    //        { path: "email-logs", element: <EmailList /> },
    //        { path: "pending-confirmations", element: <AdminPendingConfirmationList /> },
    //        { path: "codes", element: <CodeList /> },
    //        { path: "reports/:dateType", element: <AdminReportContainer /> },
    //        //{ path: "reports/day", element: <AdminReportContainer /> },
    //        //{ path: "reports/week", element: <AdminReportWeek /> },
    //        //{ path: "reports/month", element: <AdminReportMonth /> },
    //        { path: "404", element: <NotFound /> },
    //        { path: "", element: <Navigate to="/main/" /> }, // 플랫폼 초기 진입시 main으로
    //        { path: "*", element: <Navigate to="/404" /> },
    //    ],
    //},
];

export default routes;