import Perfil from "./components/Perfil";
import PerfilButton from "./components/PerfilButton";

const App = () => {
  return ( 
    <>
     <Perfil>
       <PerfilButton
         link={"#"}
         titulo={"titulo"}
       />

         <PerfilButton
         link={"#"}
         titulo={"titulo"}
       />
      </Perfil>
      
      <Perfil>
        <PerfilButton
          link={"https://google.com"}
          titulo={"Google"}
        />
      </Perfil>
    </>
   );
   
}
 
export default App;