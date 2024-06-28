import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";
import Visualizacao from "../../pages/Visualizacao";
import Lancamento from "../../pages/Lancamento";


const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <C.Container>
      <C.Title>Home</C.Title>
      <Button Text="Levantamento" onClick={() => [Visualizacao(), navigate("/Lancamento")]}>
      Levantamento
      </Button>
      <Button Text="Visualizar mapa" onClick={() => [Visualizacao(), navigate("/Visualizacao")]}>
      Visualizar mapa
      </Button>
    </C.Container>
  );
};

export default Home;