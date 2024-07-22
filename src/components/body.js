import Home from "./home";
import Alcoholic from "./alcoholic-bev";
import NonAlcoholic from "./non-alcoholic-bev";
import WaterBev from "./water-bev";
import Formulations from "./formulations";
import Bottling from "./bottling";
import ContactUs from "./contact-us";
import TestRun from "./test-run";
import { usePage } from "./page-context";

export default function Body(){

  const [pageDisplayed] = usePage();

    if(pageDisplayed === 'Home'){
        return <Home/>;
      }else if(pageDisplayed === 'Alcoholic'){
        return <Alcoholic/>;
      }else if(pageDisplayed === 'NonAlcoholic'){
        return <NonAlcoholic/>
      }else if(pageDisplayed === 'WaterBev'){
        return <WaterBev/>
      }else if(pageDisplayed === 'Formulations'){
        return <Formulations/>
      }else if(pageDisplayed === 'Bottling'){
        return <Bottling/>
      }else if(pageDisplayed === 'Contact-us'){
        return <ContactUs/>
      }else if(pageDisplayed === 'Test-run'){
           return <TestRun/>
      }
}