import { BrowserRouter } from "react-router-dom"
import RoutesApp from "./routes"


export default function app (){


  return(
     <div>

      <BrowserRouter>
      <RoutesApp/>
      </BrowserRouter>
    

 

     </div>


  )
}