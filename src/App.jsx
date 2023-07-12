import { useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  /**Es optimo que primero se ponga este useEffect porque queremos que se cargue la informacion guardada y no que se cargue mediante el cambio de la variable `pacientes`
   */
  useEffect(() => {
    //Obtener informacion del LocalStorage
    const obtenerLocalStorage = () => {
      const pacientesLocalStorage = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLocalStorage);
    }
    obtenerLocalStorage();
  }, []);

  useEffect(()=>{
    //Guardar en el localStorage
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  },[pacientes]);

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter((paciente) => paciente.id !== id)
    setPacientes(pacientesActualizados);
  }

  return (
    <div className="container mx-auto mt-20">
      <Header numeros={1} />
      <div className="mt-12 md:flex">
        <Formulario pacientes={pacientes} setPacientes={setPacientes} paciente={paciente} setPaciente={setPaciente}/>
        <ListadoPacientes pacientes={pacientes} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente}/>
      </div>
    </div>
  );
}

export default App;
