import React, { useContext } from 'react'
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import { AuthContext } from '../auth/AuthContext';
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { LoginScreen } from "../components/login/LoginScreen";
import { NotFound404 } from "../components/ui/NotFound404";
import { DashboardRoutes } from "./DashboardRoutes";

export const AppRouter = () => {
  const { user } = useContext( AuthContext );
  const isAuthenticated = user?.logged || false;
  
  return (
    <Router>
        <Switch>
            <PublicRoute  isAuthenticated={ isAuthenticated } path="/login" exact component={ LoginScreen } />
            <PublicRoute  isAuthenticated={ isAuthenticated } path="/404NotFound" exact component={ NotFound404 } />
            <PrivateRoute isAuthenticated={ isAuthenticated } path="/" component={ DashboardRoutes } />
        </Switch>
    </Router>
  );
};
