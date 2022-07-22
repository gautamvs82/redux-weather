import React, {useState} from 'react';
import './App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {AppState} from './store/AppState';
import {useSelector} from 'react-redux';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import MetricFiller from './MetricFiller';

function App() {
  const [metric, setMetric] = React.useState('');
  const weathermetrics = useSelector((state: AppState) => state.weathermetrics);
  const handleChange = (event: SelectChangeEvent) => {
    setMetric(event.target.value as string);
  };
  function showWeatherMetrics(){
    console.log("weathermetrics.temperature ", weathermetrics?.temperature);
  }
  return (
    <div className="App">
      <header className="App-header">
        <Row>
          <Col>
          <InputLabel id="demo-simple-select-label">Metric</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={metric}
            label="Metric"
            onChange={handleChange}
            >
              <MenuItem value={"Temperature"}>Temperature</MenuItem>
              <MenuItem value={"Humidity"}>Humidity</MenuItem>
          </Select>
          </Col>
          <Col>
            <MetricFiller metric={metric}></MetricFiller>
          </Col>
          <Col><button onClick={showWeatherMetrics}>LOG</button></Col>
        </Row>
      </header>
    </div>
  );
}

export default App;
