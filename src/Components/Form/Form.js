import classes from './Form.module.css';

const Form = (props) => {
    return (
        <form onSubmit={props.getForecast}>
                <input 
                    className={classes.TextInput}
                    type="text"
                    placeholder="Enter City"
                    maxLength="50"
                    value={props.city}
                    onChange={(e) => props.setCity(e.target.value)}
                />
                <label className={classes.Radio}>
                    <input
                        type="radio"
                        name="units"
                        checked={props.unit === 'imperial'}
                        value="imperial"
                        onChange={(e) => 
                         props.setUnit(e.target.value)
                        }
                        />
                        Fahrenheit
                </label>
                <label className={classes.Radio}>
                    <input 
                        type="radio"
                        name="units"
                        checked={props.unit === "metric"}
                        value="metric"
                        onChange={(e) => 
                            props.setUnit(e.target.value)
                        }
                    />
                    Celcius
                </label>
                <button type="submit" className={classes.Button}>Get Forecast</button>
            </form>
    );
}
 
export default Form;