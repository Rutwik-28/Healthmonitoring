import "./App.css";
import { Space } from "antd";
import AppHeader from "./Components/AppHeader";
import SideMenu from "./Components/SideMenu";
import PageContent from "./Components/PageContent";
import AppFooter from "./Components/AppFooter";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "./Login";
import LogoutButton from "./LogOut";
import Homepage from "./HomePage";
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Login from './Components/login.component';
// import SignUp from './Components/signup.component';

function App() {
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (!isAuthenticated) {
    return (
      <div className="Login and Logout">
        <Homepage />
      </div>
    );
  } else {
    return (
      <div className="contains">
        {isAuthenticated && (
          <div className="App">
            <AppHeader />
            <Space className="SideMenuAndPageContent">
              <SideMenu></SideMenu>
              <PageContent></PageContent>
            </Space>
            <AppFooter />
          </div>
        )}
      </div>
    );
  }
}

export default App;
