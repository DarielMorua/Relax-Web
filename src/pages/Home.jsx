import Card from "../components/Card";
import CardRecomendado from "../components/CardRecomendado";
import CardAyuda from "../components/CardAyuda";

function Home() {
  return (
    <>
      <Card />
    <div className="header-recomendados">
      <h1>Ejercicios Recomendados</h1>
      <p className="ver-todos">Ver Todos</p>
    </div>

    <div className="horizontal">
      <CardRecomendado />
      <CardRecomendado />
      <CardRecomendado />
    </div>

    <div>
      <CardAyuda />
    </div>
    </>


    
  );
}
    
export default Home;
