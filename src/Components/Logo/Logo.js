import classes from './Logo.module.css';

const Logo = () => {
    return (
        <div className={classes.sky}>
            <div className={classes.circle}></div>
            <div className={classes.cloud1}></div>
            <div className={classes.cloud2}></div>
            <div className={classes.cloud3}></div>
        </div>
    );
}
 
export default Logo;