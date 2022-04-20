import style from './loading-display.module.css';

const LoadingDisplay = () => (
    <div className={style['lds-ripple']}><div></div><div></div></div>
);

export default LoadingDisplay;