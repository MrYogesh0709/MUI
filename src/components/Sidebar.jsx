import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import React from "react";
import HomeOutlined from "@mui/icons-material/HomeOutlined";
import Pages from "@mui/icons-material/Pages";
import GroupIcon from "@mui/icons-material/Group";
import StorefrontIcon from "@mui/icons-material/Storefront";
import Person2Icon from "@mui/icons-material/Person2";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ModeNightIcon from "@mui/icons-material/ModeNight";
const dataSidebar = [
  { id: 1, icon: <HomeOutlined />, link: "#home", text: "Home" },
  { id: 2, icon: <Pages />, link: "#pages", text: "Pages" },
  { id: 3, icon: <GroupIcon />, link: "#Group", text: "Group" },
  {
    id: 4,
    icon: <StorefrontIcon />,
    link: "#MarketPlace",
    text: "MarketPlace",
  },
  { id: 5, icon: <Person2Icon />, link: "#Friends", text: "Friends" },
  { id: 6, icon: <SettingsIcon />, link: "#Settings", text: "Settings" },
  { id: 7, icon: <AccountBoxIcon />, link: "#Profile", text: "Profile" },
];
const Sidebar = ({ mode, setMode }) => {
  return (
    <Box
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "none", md: "block" } }}
    >
      <Box position="fixed">
        <List>
          {dataSidebar.map((data) => (
            <ListItem disablePadding key={data.id}>
              <ListItemButton component="a" href={data.link}>
                <ListItemIcon>{data.icon}</ListItemIcon>
                <ListItemText primary={data.text} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon component="a" href="#night">
                <ModeNightIcon />
              </ListItemIcon>
              <Switch
                onChange={() => setMode(mode === "light" ? "dark" : "light")}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
