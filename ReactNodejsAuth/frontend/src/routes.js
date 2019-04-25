// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
// import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
// import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "./views/Dashboard/Dashboard";
import UserProfile from "./views/UserProfile/UserProfile.jsx";
// import TableList from "./views/TableList/TableList.jsx";
import Typography from "./views/Typography/Typography.jsx";
import Icons from "./views/Icons/Icons.jsx";
// import Maps from "./views/Maps/Maps.jsx";
import NotificationsPage from "./views/Notifications/Notifications.jsx";
import UpgradeToPro from "./views/UpgradeToPro/UpgradeToPro.jsx";
// core components/views for RTL layout
// import RTLPage from "./views/RTLPage/RTLPage.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/dashboard/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    icon: Person,
    component: UserProfile,
    layout: "/dashboard/admin"
  },
  // {
  //   path: "/table",
  //   name: "Table List",
  //   icon: "content_paste",
  //   component: TableList,
  //   layout: "/dashboard/admin"
  // },
  {
    path: "/file-upload",
    name: "File Upload",
    icon: LibraryBooks,
    component: Typography,
    layout: "/dashboard/admin"
  },
  {
    path: "/history",
    name: "Upload History",
    icon: BubbleChart,
    component: Icons,
    layout: "/dashboard/admin"
  },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: LocationOn,
  //   component: Maps,
  //   layout: "/dashboard/admin"
  // },
  {
    path: "/notifications",
    name: "Notifications",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/dashboard/admin"
  },
  {
    path: "/upgrade-to-pro",
    name: "Upgrade To PRO",
    icon: Unarchive,
    component: UpgradeToPro,
    layout: "/dashboard/admin"
  },
  // {
  //   path: "/rtl-page",
  //   name: "RTL Support",
  //   icon: Language,
  //   component: RTLPage,
  //   layout: "/rtl"
  // }
];

export default dashboardRoutes;
