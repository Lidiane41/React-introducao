import BoasVindas from "./components/BoasVindas";
import { Aluno, Turma } from "./components/Classe";

const App = () => {
  return ( 
    <>
     <BoasVindas 
       nome="Marcos" 
       turma="FS22"
     />

     <BoasVindas 
       nome="Nagila"
       turma="FS22"
    />

     <BoasVindas 
       nome="Rafael"
       turma="FS31"
     />

     <Turma nome= {"FS22"}>
        <Aluno nome={"Well"}/>
     </Turma>
    </>
   );
   
}
 
export default App;