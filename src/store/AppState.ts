import {combineReducers} from 'redux';
import {TemperatureReducer} from './TemperatureReducer';
import {HumidityReducer} from './HumidityReducer';

const rootReducer = combineReducers({weathermetrics: TemperatureReducer, humidity: HumidityReducer});
export default rootReducer;
export type AppState = ReturnType<typeof rootReducer>;