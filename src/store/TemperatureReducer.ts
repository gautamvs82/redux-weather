export const REPORT_TEMP = "REPORT_TEMP";
export const RESET_TEMP = "RESET_TEMP";
export class WeatherMetrics{
    temperature: any;
    constructor(){
        console.log("WeatherMetrics constructor called");  
        this.temperature = {};
    }
}
export interface TemperatureAction{
    type: string;
    payload: any|null;
}

export const TemperatureReducer = (state: WeatherMetrics | null = null, action: TemperatureAction): WeatherMetrics|null => {
    console.log("TemperatureReducer is called")
    switch(action.type){
        case REPORT_TEMP:
            console.log("inside REPORT_TEMP");
            console.log(action.payload);
            if(!state){
                state = new WeatherMetrics();
            }
            if(action.payload){
                if(state.temperature){
                    let current = {...state.temperature}
                    if(action.payload.city){
                        current = {...current, city: action.payload.city}
                    }
                    if(action.payload.zipcode){
                        current = {...current, zipcode: action.payload.zipcode}
                    }
                    return {...state, temperature: current};
                }else{
                    let current = {};
                    if(action.payload.city){
                        current = {...current, city: action.payload.city}
                    }
                    if(action.payload.zipcode){
                        current = {...current, zipcode: action.payload.zipcode}
                    }
                    return {...state, temperature: current};
                }
            }else{
                return state;
            }
        case RESET_TEMP:
            console.log("inside RESET_TEMP");
            if(!state){
                state = new WeatherMetrics();
            }
            return {...state, temperature: {}};      
        default:
            return state;
    }
};