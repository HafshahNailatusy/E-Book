import React from 'react';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import ContentPasteRoundedIcon from '@mui/icons-material/ContentPasteRounded';
import PeopleOutlineRoundedIcon from '@mui/icons-material/PeopleOutlineRounded';
import TodayRoundedIcon from '@mui/icons-material/TodayRounded';
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';
export const SidebarData = [
  {
    title: "Dashboard",
    icon: <HomeRoundedIcon />,
    link: "/"
  },
  {
    title: "Transaction",
    icon: <ContentPasteRoundedIcon />,
    link: "/orders"
  },
  {
    title: "Category",
    icon: <PeopleOutlineRoundedIcon />, 
    link: "/clients"
  },
  {
    title: "E-Book",
    icon: <TodayRoundedIcon />,
    link: "/calendar"
  },
  {
    title: "Admin Panel",
    icon: <AdminPanelSettingsRoundedIcon />,
    link: "/adminPannel",
    role: "admin"
  }
];
