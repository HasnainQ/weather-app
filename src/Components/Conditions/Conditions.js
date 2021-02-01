import classes from './Condtions.module.css';

const Conditions = (props) => {
    return (
        <div className={classes.Wrapper}>
            {props.error && <small className={classes.Small}>Please enter a valid city.</small>}
            {props.loading && <div className={classes.Loader}>Loading...</div>}
            {props.responseObj.cod === 200 ?
                <div >
                    <p>
                        <strong>{props.responseObj.name}</strong>
                    </p>
                    <p>
                        It is currently &nbsp;
                     {Math.round(props.responseObj.main.temp)} degrees out with {props.responseObj.weather[0].description}. 
                    </p>
                </div>    
            :null
        }
        </div>
    );
}
 
export default Conditions;