import { Box } from "@mui/material";
import { useMaterialUIController } from "../../../context";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from "react";
import HelpDeskMenu from "./helpDesk";
import IntegrationMenu from "./integrationMenu";
function Header() {
  const [controller] = useMaterialUIController();
  const { menuItem, headers } = controller;
  const [openSubMenu, setOpenSubMenu] = useState<boolean>(false);
  const [openVerticalMenu1, setOpenVerticalMenu1] = useState<boolean>(false);
  const [openVerticalMenu2, setOpenVerticalMenu2] = useState<boolean>(false);
  return (
    <Box className="bg-white flex py-2">
        <div 
          className="mx-[20px] font-bold cursor-pointer text-[#343131] border-r border-[#1A43F5] border-r-[3px] pr-3">
            {headers[(menuItem - 1)].header}
        </div>
        <div className="flex">
        {headers[(menuItem - 1)].subHeaders.map((value:any) => {
          return (
            <div key={value.id}
              className={`mx-[10px] cursor-pointer relative
                ${openSubMenu === value.id ? "text-gray-500 border-b border-[#1A43F5] border-b-[2px] font-bold " : "text-gray-500"}`}>
                  <div onMouseEnter={() => {if(value.title === "help Desk" ||  value.title === "Automate Integration") setOpenSubMenu(true)}} 
                       onMouseLeave={() => {if(value.title === "help Desk" ||  value.title === "Automate Integration") setOpenSubMenu(false)}} 
                       className="flex">
                    <div>{value.title}</div>
                    {(value.title === "help Desk" ||  value.title === "Automate Integration") &&
                        <div className={`${openSubMenu ? "rotate-180" : "rotate-0" }`}><KeyboardArrowDownIcon /></div>
                      }
                  </div>
                  <HelpDeskMenu 
                    title={value.title}
                    openSubMenu={openSubMenu}
                    openVerticalMenu1={openVerticalMenu1}
                    openVerticalMenu2={openVerticalMenu2}
                    setOpenSubMenu={setOpenSubMenu}
                    setOpenVerticalMenu1={setOpenVerticalMenu1}
                    setOpenVerticalMenu2={setOpenVerticalMenu2}/>
                  <IntegrationMenu 
                    title={value.title}
                    openSubMenu={openSubMenu}
                    openVerticalMenu1={openVerticalMenu1}
                    openVerticalMenu2={openVerticalMenu2}
                    setOpenSubMenu={setOpenSubMenu}
                    setOpenVerticalMenu1={setOpenVerticalMenu1}
                    setOpenVerticalMenu2={setOpenVerticalMenu2}/>
            </div>
          )
        })}
        </div>
    </Box>
  );
}


export default Header;