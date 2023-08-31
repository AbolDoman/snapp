import { Box } from "@mui/material";
import { useMaterialUIController, setMenuItem } from "../../../context";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
function Header() {
  const [controller, dispatch] = useMaterialUIController();
  const { menuItem, headers } = controller;
  const navbarClicked = (menuNumber : number) => {
    if (menuNumber !== menuItem) {
        setMenuItem(dispatch, menuNumber)
    }
  }
  return (
    <Box className="bg-white flex my-2">
        {headers.map((value: any) => {
            return(
              <div 
                key={value.id}
                onClick={() => navbarClicked(value.id)}
                className={`mx-[20px] cursor-pointer ${menuItem === value.id ? "text-gray-500 font-bold border-b border-[#1A43F5] border-b-[2px]" : "text-gray-400" }`}>
                  {value.header}
              </div>
            )
        })}
    </Box>
  );
}


export default Header;
