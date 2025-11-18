import CardCalendario from "../components/CardCalendario";
import CardResumen from "../components/CardResumen";

function Calendario() {
    return (
    <>
        <div className="titulo-calendario">
            <h1>Calendario de Emociones</h1>
            <h2>Tus registros emocionales organizados por fecha</h2>
        </div>

        <div className="calendario-container">
            <CardCalendario />
            <CardResumen />
        </div>
    </>
    );
}

export default Calendario;