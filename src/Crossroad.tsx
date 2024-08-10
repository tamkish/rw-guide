import { Navigate } from "react-router-dom";

export const Crossroad = () => {
  return (
    <>
      <Navigate to={"/map/"} />
      {/*<NavLink to={"/map/"}>map</NavLink>*/}
    </>
  );
};
