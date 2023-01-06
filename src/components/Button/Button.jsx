import React from "react";

import {AddIcon, FinishIcon, RemoveIcon, EditIcon } from './images';

import styles from './Button.css';

const images = {
    add: AddIcon,
    finish: FinishIcon,
    remove: RemoveIcon,
    edit: EditIcon,
}

//type - add, remove, edit, done
export const Button = ({ title, type, onClick, isDisabled }) => {
    const Icon = images[type] || AddIcon;
    
    return (
        <div title={title} onClick={onClick} className={`${styles.Button} ${isDisabled ? styles.Button_disabled : ''}`} >
           <Icon />
        </div>
    );
}