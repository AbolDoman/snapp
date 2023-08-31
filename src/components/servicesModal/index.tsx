import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { setAlertColor, setAlertOpen, setAlertText, setFavoriteServices, setFavoriteServicesId, setOpenServicesModal, setSelectedServiceName, setSelectedServiceRoute, useMaterialUIController } from '../../context';
// import { useEffect } from 'react';
import { Grid, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';

export interface SimpleDialogProps {
  open: boolean;
//   selectedValue: string;
  services: any;
  onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, open, services } = props;
  const [controller, dispatch] = useMaterialUIController();
  const {favoriteServices, favoriteServicesId, selectedServiceName, selectedServiceRoute, openServicesModal} = controller;
  const [selectedServiceId, setSelectedServiceId] = React.useState<number>(0);

  const getServices = (services :any, depth: number, route: string, nodeList: any ) => {
    if (services !== null) {
        for(let i=0;i<services.length;i+=1){
            let newRoute = route;
            let newNodeList = nodeList;
            if (depth !== 1) newRoute += " > ";
            newRoute += services[i].name;
            const newDepth = depth + 1;
            newNodeList.push({name: services[i].name, id:services[i].id, depth: newDepth, route: newRoute, isHead : services[i].subMenu !== null})
            if (services[i].subMenu !== null) {
                getServices(services[i].subMenu, newDepth, newRoute, newNodeList);
            }
        }
    }
    return nodeList;
  };
  React.useEffect(() => {
    if(!openServicesModal) {
        setSelectedServiceId(0);
        setSelectedServiceName(dispatch, "");
        setSelectedServiceRoute(dispatch, "");
    }
  }, [openServicesModal])
  const colors = ["border-l-[#013F7F]","border-l-blue-500","border-l-blue-400","border-l-blue-300","border-l-blue-200","border-l-[#4EA4FD]","border-l-[#4EA4FD]","border-l-[#4EA4FD]",]
  const addToFavorite = () => {
    if (selectedServiceId !== 0) {
        setFavoriteServicesId(dispatch, favoriteServicesId+1);
        setFavoriteServices(dispatch, [...favoriteServices, {id:favoriteServicesId, name:selectedServiceName, route:selectedServiceRoute}]);
        setOpenServicesModal(dispatch, false);
        setAlertOpen(dispatch, true);
        setAlertColor(dispatch, "success");
        setAlertText(dispatch, "you are create a new favorite succesfuuli!");

    }
  }
  return (
    <Dialog fullWidth={true} maxWidth={"lg"} onClose={() => setOpenServicesModal(dispatch, false)} open={open}>
      <DialogTitle className='flex'>
        <div><CloseIcon className='cursor-pointer hover:text-gray-500' onClick={() => {setOpenServicesModal(dispatch, false)}}/></div>
        <div className='ml-auto'>
            <div className="ml-auto flex items-center">
                <div className="relative right-[-30px]">
                    <SearchIcon className="text-gray-500 cursor-pointer" />
                </div>
                <input placeholder="Search Service" type="text" id="searchBox" name="searchBox" 
                  className="border rounded-md h-[40px] outline-none pl-[30px] w-[300px] text-[12px]" />
            </div>
        </div>
      </DialogTitle>
      <Grid container>
        {services.map((value:any, index:number) => {
            return(
                <Grid xs={6} key={index} className='my-4'>
                    {getServices(value.subMenu, 1, `${value.name} ${value.subMenu !== null ? " > " : ""} `, 
                    [{name: value.name, id:value.id, depth: 1, route: value.name, isHead: value.subMenu!==null}])
                    .map((val:any) => {
                        return(
                            <div key={val.id}>
                                <div onClick={() => {
                                    if (selectedServiceId !== val.id) {
                                        setSelectedServiceId(val.id);
                                        setSelectedServiceName(dispatch, val.name);
                                        setSelectedServiceRoute(dispatch, val.route);
                                    } else{
                                        setSelectedServiceId(0);
                                        setSelectedServiceName(dispatch, "");
                                        setSelectedServiceRoute(dispatch, "");

                                    }
                                }} style={{ marginLeft: `${val.depth*15}px`}} className={`font-bold cursor-pointer inline px-4 rounded ${val.isHead ? `${selectedServiceId === val.id ? "bg-[#013F7F] text-white" : "text-black"} pl-1 border-l border-l-[3px] ${colors[val.depth-1]}` : `${selectedServiceId === val.id ? "bg-[#013F7F] text-white" : "text-gray-500"}`}`}>
                                    {val.name}
                                </div>
                            </div>
                        )
                    })}
                </Grid>
            )
        })}
      </Grid>
      <div className='my-4 px-4'>
        <Button variant="contained" onClick={() => addToFavorite()} style={{ backgroundColor: selectedServiceId === 0 ? "gray" : "#013F7F" }}>Add To Favorite</Button>
      </div>
    </Dialog>
  );
}

export default function ServicesModal() {
  const [controller, dispatch] = useMaterialUIController();
  const { openServicesModal, services } = controller;
  const handleClose = (value: string) => {
    setOpenServicesModal(dispatch, false);
  };
  return (
    <div>
      <SimpleDialog
        open={openServicesModal}
        onClose={handleClose}
        services={services}
      />
    </div>
  );
}