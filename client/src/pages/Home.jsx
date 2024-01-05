import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";

function Home () {
    
   const token = Cookies.get('authToken');

   // Decodificar o token para obter o ID do usuário
   let userId = "";
   if (token) {
      const decodedToken = jwtDecode(token);
      userId = decodedToken.id;  // Substitua 'id' pela chave real do seu ID no token, se for diferente.
   }

   return (
      <>
         <h1>ID do Usuário: {userId}</h1>
      </>
   )
}

export default Home;