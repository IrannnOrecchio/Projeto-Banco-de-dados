import{useState} from 'react'
import './home.css'
import{Link} from 'react-router-dom'

import{auth} from '../../firebaseConnection'
import {signInWithEmailAndPassword} from 'firebase/auth'

import { useNavigate } from 'react-router-dom'






export default function Home(){

    const[email, setEmail] = useState('')
    const[password, setPassoword] = useState('')

    const navigate = useNavigate();
   



     async function handleLogin(e){                                                           
        e.preventDefault();       //  está dizendo ao navegador para não realizar a ação padrão associada ao evento, neste caso, não envie o formulário.
        
        
        if(email !== '' && password !== ''){
            
        await signInWithEmailAndPassword(auth, email,password)

        .then(()=>{
           
            navigate('/admin' , {replace:true})   //se der tudo certo vai mandar o úsuario pra pag admin não te deixa voltar para outra pag usando a setinha

        })
        .catch(()=>{
            console.log('ERRO AO FAZER LOGIN')
        })

        }else{
            alert('Preencha todos os campos')
        }  
        
    
          
        

    }




return(
 
                                      // //onSubmit permite que você defina uma função JavaScript que será chamada quando esse evento ocorrer. (formulario enviado)
                                      // a função que eu achei que deveria estar no button na vdd está no formulario 
                                      // no form eu coloquei um submit no type do button, e com isso sabemos que o formulario irá enviar algo 
     
     <div className='home-container'>
    <h1>Lista de tarefas</h1>
    <span> Gerencia sua agenda de forma fácil</span>

     <form className='form'  onSubmit={handleLogin}>  
                                                           
        <input
        type='text'
        placeholder='Digite seu e-mail...'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}   //para passar o valor a useState ao que o úsuario digitar
        />
        
        <input
      //  autocomplete Serve para desativar o preenchimento automático em um campo de entrada.
        type="password"
        placeholder='Digite sua senha...'
        value={password}
        onChange={(e)=>setPassoword(e.target.value)}   //para passar o valor a useState ao que o úsuario digitar
        />

          <button  type='submit'>Acessar</button>

     </form>

    <Link className="button-link" to="/register">  
    Não possui uma conta? Cadastre-se     
    </Link>   
            
    
                     
     


     </div>

    
)


}

