import {useState, useEffect} from 'react'
import{auth} from '../firebaseConnection'
import { onAuthStateChanged } from 'firebase/auth';
import{Navigate} from 'react-router-dom'


//Isto está sendo criado para verificar se está logado, se eu posso deixar seguir ou tenho que barrar usuario

// ele tem que ser importado no Routes

export default function Private({children}){
   const [loading, setLoading] = useState(true);      
   const [signed, setSigned] = useState(false);  //verificar se o user está logado ou não
 

  useEffect(()=>{

   async function checkLogin(){

    const unsub = onAuthStateChanged(auth, (user)=>{
    
        if(user){
            const userData= {
                uid: user.uid,
                email: user.email,
            }

            localStorage.setItem("@detailUser", JSON.stringify(userData))
            setLoading(false);
            setSigned(true)

        } else{
          setLoading(false)
          setSigned(false)

        }

    
    })

   }

     checkLogin();

  },[])


  if(loading){
    return(
        <div></div>
    )

  }
  if(!signed){
    return <Navigate to="/"/>

  }


    return children;
}