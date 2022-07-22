import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import { REPORT_TEMP } from './store/TemperatureReducer';
import { AppState } from './store/AppState';

export default function ZipcodeDropDown(props: any, state:any){
    const [zipcode, setZipcode] = React.useState('');
    const dispatch = useDispatch();
    const weathermetrics = useSelector((state: AppState) => state.weathermetrics);

    const handleZipcodeChange = (event: SelectChangeEvent) => {
        console.log("handleZipcodeChange called");
        let selectedZipcode = event.target.value as string;
        console.log("selectedZipcode ", selectedZipcode);
        setZipcode(selectedZipcode);
        dispatch({
            type: REPORT_TEMP,
            payload: {zipcode: selectedZipcode}
        });
    };

    return (<>
        <InputLabel id="demo-simple-select-label">Zipcode</InputLabel>
                {
                    (()=>{
                        if(weathermetrics?.temperature?.city == "Tokyo"){
                            return (<Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={zipcode}
                                        label="Zipcode"
                                        onChange={handleZipcodeChange}>
                                        <MenuItem value={"1000"}>1000</MenuItem>
                                        <MenuItem value={"1001"}>1001</MenuItem>
                                    </Select>);
                        }else if(weathermetrics?.temperature?.city == "Paris"){
                            return (<Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={zipcode}
                                label="Zipcode"
                                onChange={handleZipcodeChange}>
                                    <MenuItem value={"2000"}>2000</MenuItem>
                                    <MenuItem value={"2001"}>2001</MenuItem>
                                    </Select>);
                        }else{
                            return (<Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={zipcode}
                                label="Zipcode"
                                onChange={handleZipcodeChange}>
                                    <MenuItem value={"0000"}>0000</MenuItem>
                                </Select>);
                        }         
                    })()
                }
        </>);
}