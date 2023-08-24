import React, { FC, useState } from "react";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

const icons = [
  <GridViewOutlinedIcon sx={{ fontSize: 22, color: "white" }} />,
  <PersonOutlineOutlinedIcon sx={{ fontSize: 22, color: "white" }}/>,
  <CalendarTodayOutlinedIcon sx={{ fontSize: 22, color: "white" }}/>,
];
const Sidebar: FC = () => {
    const [isActive, setIsActive] = useState<boolean>(false)
  return (
    <div className="w-[90px] min-h-screen bg-secondary p-5">
      {icons.map((icon, i) => (
        <div key={i} onClick={() => setIsActive(prev => !prev)} className={`${isActive ? `bg-title rounded-full ` : ''} py-3 px-5 my-8 cursor-pointer flex justify-center items-center`}>
          {icon}
        </div>
      ))}
    </div>
  );
};

export { Sidebar };
