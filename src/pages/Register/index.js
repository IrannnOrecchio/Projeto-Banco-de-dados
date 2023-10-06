import{useState} from 'react'

import{Link} from 'react-router-dom'
import { auth } from '../../firebaseConnection'
import{ createUserWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'


export default function Register(){

    const[email, setEmail] = useState('')
    const[password, setPassoword] = useState('')
    const navigate = useNavigate();


     async function handleRegister(e){                                                           
        e.preventDefault();       //  está dizendo ao navegador para não realizar a ação padrão associada ao evento, neste caso, não envie o formulário.
        
        if(email !== '' && password !== ''){
        
         await createUserWithEmailAndPassword(auth, email, password)
         .then(()=>{
                navigate('/admin', {replace:true})
         })
         .catch(()=>{
            console.log('ERRO AO FAZER O CADASTRO')
         })

        }else{
            alert('Preencha todos os campos')
        }                                         
                                                  
                                               

    }

return(

    
     
     <div className='home-container'>
    <h1>Cadastre-se</h1>
    <span> Vamos criar sua conta</span>

     <form className='form' onSubmit={handleRegister}>

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

          <button type='submit'>Cadastrar</button>

     </form>

    <Link className="button-link" to="/">  
    Já possui uma conta? Faça login!    
    </Link>   
            
    
                     
     


     </div>

    
)


}

