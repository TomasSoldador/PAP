import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import Sidebar from "../../components/Sidebar/Sidebar";
import * as Components from "./styled"; 
import { useState, useEffect } from "react";
import Axios from "axios";



function Messages () {
  const token = Cookies.get("authToken");
  const [crud_userId, setCrud_UserId] = useState([]);
  const [userId, setUserId] = useState("");
  const [userDataUsername, setUserDataUsername] = useState();
  const [userImageURL, setUserImageURL] = useState('');

  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode(token);
      console.log(decodedToken);
      setUserId(decodedToken.id);

      try {
        Axios.post("http://localhost:3001/api/home/post", {
          userId: decodedToken.id,
        }).then((res) => {
          setUserDataUsername(res.data[0].username)
          setUserImageURL(res.data[0].imageUrl); 
          

          setCrud_UserId([
            ...crud_userId,
            {
              userId: decodedToken.id,
            },
          ]);
        }).catch((error) => {
          console.log("Erro na solicitação ao servidor: ", error);
        });

        
      } catch (error) {
        console.log("Erro no pedido ao servidor: ", error);
      }
    }
  }, [token]);


  return (
    <Components.LayoutContainer>
      <Sidebar userId={userDataUsername} foto={userImageURL}/>
      <Components.ContentContainer>
        <h1>Messages</h1>
      </Components.ContentContainer>
    </Components.LayoutContainer>
  )
}

export default Messages;
