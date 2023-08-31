import LogoutIcon from '@mui/icons-material/Logout';
function ProfileInof() {
  return (
    <div>
        <div className="ml-auto flex items-center pt-3">
            <div className="mr-[10px]">
                <div className="text-[12px] text-[#1E40C2] font-bold">Maryam Hasani</div>
                <div className="text-[10px] text-[#1E40C2] font-bold">Account manager</div>
            </div>
            <div><img alt="person-avater" src="./images/avatar.jpg" className="w-[45px] h-[45px] rounded-full border"/></div>
        </div>
        <div className="flex items-center justify-end mt-2 mr-2 ">
            <div className="text-[10px] text-[#1E40C2]">Exit</div>
            <div className="text-[10px] text-[#1E40C2] ml-1 rotate-180"><LogoutIcon /></div>
        </div>
    </div>

  );
}


export default ProfileInof;
