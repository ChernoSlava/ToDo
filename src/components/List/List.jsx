import React from "react";

import { Button } from "../Button";
import styles from './List.css';

// items = { id, title, isFinish }
export const List = ({ items, onRemove, onEdit, onFinish }) => {
    return (
        <div className={styles.List}>
            {items?.map((x) => 
                <div key={x.id} className={styles.Button__container}>
                    <div className={`${x.isFinish ? styles.ListItem_finish : ''}`}>{x.title}</div>
                    <div>
                        <Button title='Редактировать' type='edit'onClick={() => onEdit?.(x.id)} isDisabled={x.isFinish}/>
                        <Button title='Завершить' type='finish' onClick={() => onFinish?.(x.id)} isDisabled={x.isFinish}/>
                        <Button title='Удалить' type='remove'onClick={() => onRemove?.(x.id)} isDisabled={x.isFinish}/>
                    </div>
                </div>)
        }</div>
    );
};