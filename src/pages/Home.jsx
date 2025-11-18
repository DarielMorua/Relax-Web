import Card from "../components/Card";
import CardRecomendado from "../components/CardRecomendado";
import CardAyuda from "../components/CardAyuda";
import { NavLink } from "react-router-dom";
import { exercises } from "../mock/exercisesMock";

function Home() {
  return (
    <>
      <Card />
      <div className="header-recomendados">
        <h1>Ejercicios Recomendados</h1>
        <NavLink className="ver-todos" to="/ejercicios">
          Ver Todos
        </NavLink>
      </div>

      <div className="horizontal">
        {exercises.slice(0, 3).map((exercise) => (
          <CardRecomendado
            key={exercise.id}
            name={exercise.name}
            description={exercise.description}
            image={exercise.image}
            id={exercise.id}
          />
        ))}
      </div>

      <div>
        <CardAyuda />
      </div>
    </>
  );
}

export default Home;
