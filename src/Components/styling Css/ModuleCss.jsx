import React from 'react';
import style from './styles.module.css';
function ModuleCss(props) {
    return (
        <div className={style.moduleContainer}>
            <h3 >Module css</h3>
            <p>this is 2nd way to apply css in react</p>
        </div>
    );
}

export default ModuleCss;