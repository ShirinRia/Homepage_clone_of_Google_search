import { Outlet } from "react-router-dom";
const Root = () => {
    return (
        <div className="py-16 bg-slate-200 h-[100vh]">
           <Outlet/>
        </div>
    );
};

export default Root;