import "./Button.css";
import Loader from "../Loader/Loader.js";

const Button = (
  {value,
  handleLogin,
  isLoading,
  displayFalse,
  displayTrue},
) => {

if(isLoading){
  return(
    <>
    <button className="login">
      <Loader component={"Login"}></Loader>
    </button>
    </>
  );
} else{
  return(
  <>
  <button className="login" onClick={handleLogin}>
  {value ? displayTrue : displayFalse}
  </button>
  </>)
}
};

export default Button;
