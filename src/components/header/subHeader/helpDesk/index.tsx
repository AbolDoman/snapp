/* eslint-disable no-dupe-args */
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
function HelpDeskMenu({title, openSubMenu,openVerticalMenu1, openVerticalMenu2, setOpenSubMenu, setOpenVerticalMenu1, setOpenVerticalMenu2}:{title:string, openSubMenu:boolean,openVerticalMenu1:boolean, openVerticalMenu2:boolean, setOpenSubMenu:any, setOpenVerticalMenu1:any, setOpenVerticalMenu2:any}) {
  return (
    <>
    <div></div>
    {title === "help Desk" && openSubMenu && 
    <div onMouseEnter={() => {if(title === "help Desk") setOpenSubMenu(true)}} 
         onMouseLeave={() => {if(title === "help Desk") setOpenSubMenu(false)}} 
         className="absolute shadow border bg-white px-4 py-2 top-[20px]">
        <div onMouseEnter={() => setOpenVerticalMenu1(true)}
           className="relative flex border-b"
           onMouseLeave={() => setOpenVerticalMenu1(false)}>
          <div>Request</div>
          <div className={`${openVerticalMenu1 ? "rotate-90" : "rotate-[270deg]" } ml-auto`}><KeyboardArrowDownIcon /></div>
          {openVerticalMenu1 && <div className="absolute shadow border w-[150px] bg-white px-4 py-1 left-[80px]">
            <div className="border-b text-[15px]">Training</div>
            <div className="border-b text-[15px]">Report</div>
            <div className="border-b text-[15px]">Integration</div>
            <div className="text-[15px]">Other Requests</div>
          </div>}
        </div>
        <div onMouseEnter={() => setOpenVerticalMenu2(true)}
           className="relative flex"
           onMouseLeave={() => setOpenVerticalMenu2(false)}>
          <div>QA</div>
          <div className={`${openVerticalMenu2 ? "rotate-90" : "rotate-[270deg]" } ml-auto`}><KeyboardArrowDownIcon /></div>
          {openVerticalMenu2 && <div className="absolute shadow border w-[150px] bg-white px-4 py-1 left-[80px]">
            <div className="border-b text-[15px]">QA1</div>
            <div className="text-[15px]">QA2</div>
          </div>}
        </div>
    </div>}
    </>
  );
}


export default HelpDeskMenu;