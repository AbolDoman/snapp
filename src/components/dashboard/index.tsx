import React from 'react';
import DashboardLayout from '../../layouts/dashboard';
import { setAlertColor, setAlertOpen, setAlertText, setFavoriteServices, setOpenServicesModal, useMaterialUIController } from '../../context';
import { Grid, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ServicesModal from '../servicesModal';
export default function Dashboard(): JSX.Element {
  const [controller, dispatch] = useMaterialUIController();
  const { favoriteServices } = controller;
  const deleteService = (id:number) => {
    const temp = [];
    for(let i=0;i<favoriteServices.length;i+=1) {
      if(id !== favoriteServices[i].id) {
        temp.push(favoriteServices[i]);
      }
      setFavoriteServices(dispatch, temp);
    }
    setAlertOpen(dispatch, true);
    setAlertColor(dispatch, "warning");
    setAlertText(dispatch, "you are delete a favorite succesfully!");
  }
  return (
    <DashboardLayout>
      <ServicesModal />
      <div className='mx-2 mt-[30vh]'>
        <div className='bg-white rounded min-h-[60vh] px-[5%] py-[10px]'>
          <Grid container>
            <Grid xs={3} className='w-[100%]'>
              <Button 
                onClick={() => setOpenServicesModal(dispatch, true)} 
                style={{ color: "gray", width: "80%" }} 
                className='px-[30px] py-1 flex flex-col rounded-md shadow-lg items-center justify-center'>
                <div className='text-[40px]'>+</div>
                <div className='text-[13px]'>Add Your Favorite Service</div>
              </Button>
            </Grid>
            {favoriteServices.map((value:any) => {
              return(
                <Grid className='w-[100%]' key={value.id} xs={3}>
                  <div>
                    <div className='py-1 w-[80%] h-[100%] flex rounded-md shadow-lg min-h-[100px] items-center justify-center'>
                      <div>
                        <div className='text-[14px] px-2'>{value.name}</div>
                        <div className='text-[10px] px-2 text-gray-400'>{value.route}</div>
                      </div>
                      <div className='px-2'>
                        <DeleteIcon className='text-red-500 cursor-pointer' onClick={() => deleteService(value.id)}/>
                      </div>
                    </div>
                  </div>
                </Grid>
              )
            })}
          </Grid>
        </div>
      </div>
    </DashboardLayout>
  );
}
