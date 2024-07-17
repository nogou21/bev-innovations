import Home from "./home";
import Alcoholic from "./alcoholic-bev";
import NonAlcoholic from "./non-alcoholic-bev";


export default function Body({component}){

    if(component === 'Home'){
        return <Home/>;
      }else if(component === 'Alcoholic'){
        return <Alcoholic/>;
      }else if(component === 'NonAlcoholic'){
        return <NonAlcoholic/>
      }
}