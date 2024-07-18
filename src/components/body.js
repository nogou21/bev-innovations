import Home from "./home";
import Alcoholic from "./alcoholic-bev";
import NonAlcoholic from "./non-alcoholic-bev";
import WaterBev from "./water-bev";
import Formulations from "./formulations";
import Bottling from "./bottling";


export default function Body({component}){

    if(component === 'Home'){
        return <Home/>;
      }else if(component === 'Alcoholic'){
        return <Alcoholic/>;
      }else if(component === 'NonAlcoholic'){
        return <NonAlcoholic/>
      }else if(component === 'WaterBev'){
        return <WaterBev/>
      }else if(component === 'Formulations'){
        return <Formulations/>
      }else if(component === 'Bottling'){
        return <Bottling/>
      }
}