/* eslint-disable no-dupe-args */
function AutomateIntegrationMenu({title, openSubMenu,openVerticalMenu1, openVerticalMenu2, setOpenSubMenu, setOpenVerticalMenu1, setOpenVerticalMenu2}:{title:string, openSubMenu:boolean,openVerticalMenu1:boolean, openVerticalMenu2:boolean, setOpenSubMenu:any, setOpenVerticalMenu1:any, setOpenVerticalMenu2:any}) {
  return (
    <>
    <div></div>
    {title === "Automate Integration" && openSubMenu && 
    <div onMouseEnter={() => {if(title === "Automate Integration") setOpenSubMenu(true)}} 
         onMouseLeave={() => {if(title === "Automate Integration") setOpenSubMenu(false)}} 
         className="absolute shadow border bg-white px-4 py-2 top-[20px] left-[20px] w-[150px]">
        <div className='border-b'>QA</div>
        <div>QA</div>
    </div>}
    </>
  );
}


export default AutomateIntegrationMenu;