import { useEffect } from "react";
import PropTypes from "prop-types";
import { useMaterialUIController, setAlertOpen } from "../../context";
import { Alert, Box, Collapse } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Header from "../../common/header";
function DashboardLayout({ children } : {children : React.ReactNode}) {
  const [controller, dispatch] = useMaterialUIController();
  const { alertOpen, alertColor, alertText } = controller;
  useEffect(() => {
    if (alertOpen) {
      setTimeout(() => {
        setAlertOpen(dispatch, false);
      }, 5000);
    }
  }, [alertOpen]);

  return (
    <Box className="bg-[#C7F2FE] w-[100vw] h-[100vh] overflow-auto">
      <Box sx={{ width: "100%" }}>
        <Collapse in={alertOpen}>
          <Alert
            variant="filled"
            severity={alertColor}
            action={
              <CloseIcon className="cursor-pointer"
                onClick={() => setAlertOpen(dispatch, false)} 
                fontSize="medium" />
            }
            sx={{ mb: 2 }}
          >
            {alertText}
          </Alert>
        </Collapse>
      </Box>
      <Header />
      <Box className="px-4">
        {children}
      </Box>
    </Box>
  );
}

// Typechecking props for the DashboardLayout
DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DashboardLayout;
