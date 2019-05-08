// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Home from "@material-ui/icons/Home";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
// import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
// import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from './views/Dashboard/Dashboard.jsx';
import DashboardHomePage from './views/Dashboard/Home.jsx';
import UserProfile from "./views/UserProfile/UserProfile.jsx";
// import TableList from "./views/TableList/TableList.jsx";
import Typography from "./views/Typography/Typography.jsx";
import Icons from "./views/Icons/Icons.jsx";
// import Maps from "./views/Maps/Maps.jsx";
import NotificationsPage from "./views/Notifications/Notifications.jsx";
import { Description } from "@material-ui/icons";
import { logoutUser } from "./actions/authentication.js";
// core components/views for RTL layout
// import RTLPage from "./views/RTLPage/RTLPage.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Home",
    icon: Home,
    component: DashboardHomePage,
    layout: "/admin"
  },
  {
    path: "/models",
    name: "Models",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  // {
  //   path: "/user",
  //   name: "User Profile",
  //   icon: Person,
  //   component: UserProfile,
  //   layout: "/admin"
  // },
  {
    path: "/file-upload",
    name: "File Upload",
    icon: LibraryBooks,
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/history",
    name: "Malware Info",
    icon: BubbleChart,
    component: Icons,
    layout: "/admin"
  },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: Notifications,
  //   component: NotificationsPage,
  //   layout: "/admin"
  // },
];

export default dashboardRoutes;
