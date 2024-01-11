import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import Sidebar from "../../components/Sidebar/Sidebar";
import * as Components from "./styled"; 


function Home() {
  const token = Cookies.get("authToken");

  // Decodificar o token para obter o ID do usuário
  let userId = "";
  if (token) {
    const decodedToken = jwtDecode(token);
    console.log(decodedToken);
    userId = decodedToken.id;
  }

  return (
    <Components.LayoutContainer>
      <Sidebar userId={userId} />
      <Components.ContentContainer>
        <h1>{userId}</h1>
      </Components.ContentContainer>
    </Components.LayoutContainer>
  );
}

export default Home;
