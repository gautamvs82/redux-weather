import TemperatureFiller from "./TemperatureFiller";
import HumidityFiller from "./HumidityFiller";

export default function MetricFiller(props: any, state:any){
    return(
    <div>
        {
            (()=>{
                if(props.metric == "Temperature"){
                    return(<TemperatureFiller></TemperatureFiller>);
                }else if(props.metric == "Humidity"){
                    return(<HumidityFiller></HumidityFiller>);      
                }         
            })() 
        }
    </div>);
};