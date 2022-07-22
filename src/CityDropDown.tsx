import React from 'react';
import { useDispatch } from 'react-redux';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import { REPORT_TEMP } from './store/TemperatureReducer';

export default function CityDropDown(props: any, state:any){
    const [city, setCity] = React.useState('');
    const dispatch = useDispatch();

    const handleCityChange = (event: SelectChangeEvent) => {
        console.log("handleCityChange called");
        let selectedCity = event.target.value as string;
        console.log("selectedCity ", selectedCity);
        setCity(selectedCity);
        dispatch({
            type: REPORT_TEMP,
            payload: {city: selectedCity}
        });
    };

    return (<>
        <InputLabel id="demo-simple-select-label">City</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={city}
            label="City"
            onChange={handleCityChange}
            >
              <MenuItem value={"Tokyo"}>Tokyo</MenuItem>
              <MenuItem value={"Paris"}>Paris</MenuItem>
          </Select>
        </>);
}