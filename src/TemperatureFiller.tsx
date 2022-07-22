import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import { REPORT_TEMP, RESET_TEMP } from './store/TemperatureReducer';
import CityDropDown from './CityDropDown';
import ZipcodeDropDown from './ZipcodeDropDown';

export default function TemperatureFiller(props: any, state:any){
    const [zipcode, setZipcode] = React.useState('');
    const dispatch = useDispatch();

    const handleZipcodeChange = (event: SelectChangeEvent) => {
        setZipcode(event.target.value as string);
    };
    useEffect(()=>{
        console.log("TemperatureFiller is mounted");
        console.log("Dispatching ...");
        dispatch({
            type: RESET_TEMP,
            payload: null
        })
    }, []);
    return(
    <div>
        <CityDropDown></CityDropDown>
        <ZipcodeDropDown></ZipcodeDropDown>
    </div>);
};