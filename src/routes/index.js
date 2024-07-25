import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Lancamento from "../pages/Lancamento";
import Visualizacao from "../pages/Visualizacao";

const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Signin />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path="/home" element={<Private Item={Home} />} />
          <Route path="/" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route path="*" element={<Signin />} />
          <Route exact path="/Lancamento" element={<Private Item={Lancamento} />} />
          <Route exact path="/Visualizacao" element={<Private Item={Visualizacao} />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
