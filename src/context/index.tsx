import React, { createContext, useContext, useReducer, useMemo } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Material Dashboard 2 React main context
interface defaultTypes {
  transactionsData?: any;
}
const MaterialUI = createContext<any>({});

// Setting custom name for the context which is visible on react dev tools
MaterialUI.displayName = "MaterialUIContext";

// Material Dashboard 2 React reducer
function reducer(state: any, action: any) {
  switch (action.type) {
    case "SET_ALERT_OPEN": {
      return { ...state, alertOpen: action.value };
    }
    case "SET_ALERT_COLOR": {
      return { ...state, alertColor: action.value };
    }
    case "SET_ALERT_TEXT": {
      return { ...state, alertText: action.value };
    }
    case "SET_MENU_ITEM": {
      return { ...state, menuItem: action.value };
    }
    case "SET_FAVORITE_SERVICS": {
      return { ...state, favoriteServices: action.value };
    }
    case "SET_FAVORITE_SERVICS_ID": {
      return { ...state, favoriteServicesId: action.value };
    }
    case "SET_OPEN_SERVICS_MODAL": {
      return { ...state, openServicesModal: action.value };
    }
    case "SET_SELECTED_SERVICE_NAME": {
      return { ...state, selectedServiceName: action.value };
    }
    case "SET_SELECTED_SERVICE_ROUTE": {
      return { ...state, selectedServiceRoute: action.value };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

// Material Dashboard 2 React context provider
function MaterialUIControllerProvider({ children } : {children : React.ReactNode}) {
  const initialState = {
    alertOpen: false,
    alertColor: "",
    alertText: "",
    selectedServiceName: "",
    selectedServiceRoute: "",
    menuItem: 1,
    favoriteServicesId: 1,
    openServicesModal: false,
    headers: [
      {id: 1, header: "Integration",subHeaders: [
        {id: 1,title: "Automate Integration"}, 
        {id: 2,title: "Import Data Panel"}]},
      {id: 2, header: "Report",subHeaders: [{id: 1, title: "Report spam"}, {id: 2, title: "Reporters"}]},
      {id: 3, header: "Support",subHeaders: [{id: 1, title: "help Desk"}, {id: 2, title: "training"}]},
      {id: 4, header: "Admin",subHeaders: [{id: 1, title: "admins"}, {id: 2, title: "edit admins information"}]},
      ],
    favoriteServices: [],
    services: [
        {id: 1, name: "1", 
          subMenu : [
            {id: 2, name: "1-2", subMenu: null}, 
            {id: 3, name: "1-3", subMenu: [
              {id: 4, name: "1-3-1", subMenu: null}, 
              {id: 5, name: "1-3-2", subMenu: [
                {id: 6, name: "1-3-2-1", subMenu: null}, 
                {id: 7, name: "1-3-2-2", subMenu: null}, 
                {id: 8, name: "1-3-2-3", subMenu: null}, 
              ]}, 
              {id: 9, name: "1-3-3", subMenu: null}]}, 
            {id: 10, name: "1-4", subMenu: null} ]
        },
        {id: 11, name: "HelpDesk", 
          subMenu : [
            {id: 12, name: "Request", subMenu: [
              {id: 13, name: "Training", subMenu: null},
              {id: 14, name: "Report", subMenu: null},
              {id: 15, name: "Customization", subMenu: null},
              {id: 16, name: "Integration", subMenu: null},
            ]}, 
            {id: 17, name: "QA", subMenu: [
              {id: 18, name: "QA", subMenu: null}]}]
        },
        {id: 19, name: "Import Data Panel", subMenu : [
          {id: 20, name: "Import Data Panel(Excel File)", subMenu: null},
          {id: 21, name: "Import Excel File)", subMenu: null},
        ], },
      ],
  };

  const [controller, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(() => [controller, dispatch], [controller, dispatch]);

  return <MaterialUI.Provider value={value}>{children}</MaterialUI.Provider>;
}

// Material Dashboard 2 React custom hook for using context
function useMaterialUIController() {
  const context = useContext(MaterialUI);

  if (!context) {
    throw new Error(
      "useMaterialUIController should be used inside the MaterialUIControllerProvider."
    );
  }

  return context;
}

// Typechecking props for the MaterialUIControllerProvider
MaterialUIControllerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Context module functions
const setAlertOpen = (dispatch: any, value: any) => dispatch({ type: "SET_ALERT_OPEN", value });
const setAlertColor = (dispatch: any, value: any) => dispatch({ type: "SET_ALERT_COLOR", value });
const setAlertText = (dispatch: any, value: any) => dispatch({ type: "SET_ALERT_TEXT", value });
const setMenuItem = (dispatch: any, value: any) => dispatch({ type: "SET_MENU_ITEM", value });
const setSelectedServiceName = (dispatch: any, value: any) => dispatch({ type: "SET_SELECTED_SERVICE_NAME", value });
const setSelectedServiceRoute = (dispatch: any, value: any) => dispatch({ type: "SET_SELECTED_SERVICE_ROUTE", value });
const setFavoriteServices = (dispatch: any, value: any) => dispatch({ type: "SET_FAVORITE_SERVICS", value });
const setFavoriteServicesId = (dispatch: any, value: any) => dispatch({ type: "SET_FAVORITE_SERVICS_ID", value });
const setOpenServicesModal = (dispatch: any, value: any) => dispatch({ type: "SET_OPEN_SERVICS_MODAL", value });
export {
  MaterialUIControllerProvider,
  useMaterialUIController,
  setOpenServicesModal,
  setFavoriteServicesId,
  setAlertOpen,
  setAlertColor,
  setSelectedServiceName,
  setSelectedServiceRoute,
  setAlertText,
  setMenuItem,
  setFavoriteServices,
};
