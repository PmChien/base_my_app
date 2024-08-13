import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: ReactNode; // Đảm bảo kiểu dữ liệu là ReactNode, bao gồm mọi thứ có thể render được
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const isAuthenticated = true; // logic kiểm tra xác thực, nên được thay thế bằng logic thật

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>; // Bọc children trong Fragment để đảm bảo ReactNode có thể được render đúng cách
};

export default ProtectedRoute;
