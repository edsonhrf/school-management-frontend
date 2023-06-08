import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
// import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import UserImage from "../../assets/user.png";

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Home");
  const navigate = useNavigate();

  const handleLogout = () => {
    const token = localStorage.getItem("token");
    localStorage.removeItem("token");

    fetch("http://localhost:5000/user/auth/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ token }),
    })
      .then((response) => {
        if (response.ok) {
          navigate("/login");
        } else {
          console.log("Logout failed");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINIS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={UserImage}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Edson Henrique
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Web Developer
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <MenuItem
              active={selected === "Home"}
              style={{
                color: colors.grey[100],
              }}
              onClick={() => {
                setSelected("Home");
                navigate("/home");
              }}
              icon={<HomeOutlinedIcon />}
            >
              <Typography>Home</Typography>
              <Link to="/home" />
            </MenuItem>

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Informations
            </Typography>
            <MenuItem
              active={selected === "Manage Team"}
              style={{
                color: colors.grey[100],
              }}
              onClick={() => {
                setSelected("Manage Team");
                navigate("/team");
              }}
              icon={<PeopleOutlinedIcon />}
            >
              <Typography>Manage Team</Typography>
              <Link to="/team" />
            </MenuItem>

            <MenuItem
              active={selected === "Contacts Information"}
              style={{
                color: colors.grey[100],
              }}
              onClick={() => {
                setSelected("Contacts Information");
                navigate("/contacts");
              }}
              icon={<ContactsOutlinedIcon />}
            >
              <Typography>Contacts Information</Typography>
              <Link to="/contacts" />
            </MenuItem>

            <MenuItem
              active={selected === "Invoices Balances"}
              style={{
                color: colors.grey[100],
              }}
              onClick={() => {
                setSelected("Invoices Balances");
                navigate("/invoices");
              }}
              icon={<ReceiptOutlinedIcon />}
            >
              <Typography>Invoices Balances</Typography>
              <Link to="/invoices" />
            </MenuItem>

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Registrations
            </Typography>

            <MenuItem
              active={selected === "Enroll Person"}
              style={{
                color: colors.grey[100],
              }}
              onClick={() => {
                setSelected("Enroll Person");
                navigate("/enroll-person");
              }}
              icon={<PersonAddIcon />}
            >
              <Typography>Enroll Person</Typography>
              <Link to="/enroll-person" />
            </MenuItem>

            <MenuItem
              active={selected === "Create User"}
              style={{
                color: colors.grey[100],
              }}
              onClick={() => {
                setSelected("Create User");
                navigate("/create-user");
              }}
              icon={<PersonAddIcon />}
            >
              <Typography>Create User</Typography>
              <Link to="/create-user" />
            </MenuItem>

            {/* <MenuItem
              active={selected === "Calendar"}
              style={{
                color: colors.grey[100],
              }}
              onClick={() => {
                setSelected("Calendar");
                navigate("/calendar");
              }}
              icon={<CalendarTodayOutlinedIcon />}
            >
              <Typography>Calendar</Typography>
              <Link to="/calendar" />
            </MenuItem> */}

            <MenuItem
              active={selected === "FAQ Page"}
              style={{
                color: colors.grey[100],
              }}
              onClick={() => {
                setSelected("FAQ Page");
                navigate("/faq");
              }}
              icon={<HelpOutlineOutlinedIcon />}
            >
              <Typography>FAQ Page</Typography>
              <Link to="/faq" />
            </MenuItem>

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>

            <MenuItem
              active={selected === "Bar Chart"}
              style={{
                color: colors.grey[100],
              }}
              onClick={() => {
                setSelected("Bar Chart");
                navigate("/bar");
              }}
              icon={<BarChartOutlinedIcon />}
            >
              <Typography>Bar Chart</Typography>
              <Link to="/bar" />
            </MenuItem>
            {/* <MenuItem
              active={selected === "Pie Chart"}
              style={{
                color: colors.grey[100],
              }}
              onClick={() => {
                setSelected("Pie Chart");
                navigate("/pie");
              }}
              icon={<PieChartOutlineOutlinedIcon />}
            >
              <Typography>Pie Chart</Typography>
              <Link to="/pie" />
            </MenuItem>

            <MenuItem
              active={selected === "Line Chart"}
              style={{
                color: colors.grey[100],
              }}
              onClick={() => {
                setSelected("Line Chart");
                navigate("/line");
              }}
              icon={<TimelineOutlinedIcon />}
            >
              <Typography>Line Chart</Typography>
              <Link to="/line" />
            </MenuItem>

            <MenuItem
              active={selected === "Geography Chart"}
              style={{
                color: colors.grey[100],
              }}
              onClick={() => {
                setSelected("Geography Chart");
                navigate("/geography");
              }}
              icon={<MapOutlinedIcon />}
            >
              <Typography>Geography Chart</Typography>
              <Link to="/geography" />
            </MenuItem> */}

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Profile
            </Typography>

            <MenuItem
              active={selected === "My profile"}
              style={{
                color: colors.grey[100],
              }}
              onClick={() => {
                setSelected("My profile");
                navigate("/profile");
              }}
              icon={<PersonOutlinedIcon />}
            >
              <Typography>My profile</Typography>
              <Link to="/profile" />
            </MenuItem>

            <MenuItem
              active={selected === "Logout"}
              style={{
                color: colors.grey[100],
              }}
              onClick={() => {
                setSelected("Logout");
                handleLogout();
              }}
              icon={<LogoutIcon />}
            >
              <Typography>Logout</Typography>
              <Link to="/" />
            </MenuItem>
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
