import {useState} from 'react';
import Conditions from '../Conditions/Conditions';
import Form from '../Form/Form';

const Forecast = () => {
    
    let [city, setCity] = useState('');
    let [unit, setUnit] = useState('imperial');
    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);
    let [responseObj, setResponseObj] = useState({}); 
    const uriEncodedCity = encodeURIComponent(city);


    function getForecast(e) {
        e.preventDefault();
        if (city.length === 0) {
            return setError(true);
        }
        //Clear state in preparation for new data
        setError(false);
        setResponseObj({});
        setLoading(true)


        fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": process.env.REACT_APP_API_KEY,
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
            }
        })
        .then(response => response.json())
        .then(response => {
            if (response.cod !==200) {
                throw new Error() 
            }
            setResponseObj(response);
            setLoading(false);
        })
        .catch(err => {
            setError(true);
            setLoading(false);
            console.log(err.message);
        });
    }

    return (
        <div>
            <h2>Find Current Weather Conditions</h2>
            <Form 
            getForecast={getForecast}
            setCity={setCity}
            setUnit={setUnit}
            city={city}
            unit={unit}
            />
             <Conditions
                responseObj={responseObj}
                error={error}
                loading={loading}
             />
        </div>
    );
}
 
export default Forecast;