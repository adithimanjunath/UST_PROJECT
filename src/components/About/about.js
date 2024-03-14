import { NavLink, Outlet,useNavigate} from "react-router-dom";
import { useEffect } from "react";

const About = () => {

 const Navigate= useNavigate();
 
  //component did mount
  useEffect(()=>{
    Navigate("info");
  },[])
  return (
    <div>
      <nav
        data-testid="mini_nav"
        style={{ border: "none", justifyContent: "center" }}
      >
        <NavLink to="info">Info</NavLink>
        <NavLink to="budget">BudgetEstimation</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};
export default About;
