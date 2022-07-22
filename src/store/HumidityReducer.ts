export const REPORT_HUM = "REPORT_HUM";
export interface Humidity{
    value: number;
}
export interface HumidityAction{
    type: string;
    payload: Humidity|null;
}

export const HumidityReducer = (state: Humidity|null=null, action: HumidityAction):Humidity|null => {
    switch(action.type){
        case REPORT_HUM:
            return action.payload;
        default:
            return state;
    }
};