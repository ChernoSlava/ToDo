import React, { SVGProps } from "react";

import { 
    AddIcon, 
    FinishIcon, 
    RemoveIcon, 
    EditIcon, 
    RevertIcon 
} from './images';
import { ButtonType } from './types';
import styles from './Button.css';

//type - add, remove, edit, done, revert
const images: {
    [key in ButtonType]: React.FC<SVGProps<SVGSVGElement>>
} = {
    add: AddIcon,
    finish: FinishIcon,
    remove: RemoveIcon,
    edit: EditIcon,
    revert: RevertIcon,
}

export const Button: React.FC<({
    title: string;
    type: ButtonType;
    onClick: () => void;
    isDisabled?: boolean;
})> = ({ title, type, onClick, isDisabled }): JSX.Element => {
    const Icon = images[type] || AddIcon;
    
    return (
        <div 
            title={title} 
            onClick={onClick} 
            className={`${styles.Button} ${isDisabled ? styles.Button_disabled : ''}`} 
        >
           <Icon />
        </div>
    );
}
