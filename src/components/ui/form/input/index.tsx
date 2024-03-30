import React, {FC, InputHTMLAttributes} from 'react';
import styles from './styles.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    className?: string;
}

export const Input:FC<InputProps> = React.memo(({className='', ...restProps}) => {
    return (
        <input {...restProps} className={[styles.input, className].join(' ')}/>
    )
})