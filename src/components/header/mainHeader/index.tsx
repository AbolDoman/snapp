import { useEffect } from "react";
import PropTypes from "prop-types";
import { useMaterialUIController } from "../../../context";
import { Grid } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ProfileInfo from './profileInfo';
function Header() {
  const [controller, dispatch] = useMaterialUIController();

  return (
    <Grid container>
        <Grid xs={7} className="flex items-center">
            <img src="./images/logo.jpeg" alt="main-logo" className="w-[100px]" />
            <div className="ml-auto flex items-center">
                <div className="relative right-[-30px]">
                    <SearchIcon className="text-gray-500 cursor-pointer" />
                </div>
                <input placeholder="Search Service" type="text" id="searchBox" name="searchBox" 
                  className="border rounded-md h-[40px] outline-none pl-[30px] w-[300px] text-[12px]" />
            </div>
        </Grid>
        <Grid xs={5} className="flex flex-col items-center justify-end">
            <ProfileInfo />
        </Grid>
        
    </Grid>
  );
}


export default Header;
