import { Box } from "@mui/material";
import MainHeader from "../../components/header/mainHeader";
import SubHeader from "../../components/header/subHeader";
import Navbar from "./navbar";
function Header() {
  return (
    <Box className="bg-white fixed w-[100%]">
        <Box className="border-b border-[#1A43F5] px-[15%]">
            <MainHeader />
            <Navbar />
        </Box>
        <Box className="px-[15%]">
            <SubHeader />
        </Box>
    </Box>
  );
}


export default Header;
