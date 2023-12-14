import Cookies from 'js-cookie';

function Home () {
    
   const token = Cookies.get('authToken');

   return (
      <>
         <h1>{token}</h1>
      </>
   )
}

export default Home;