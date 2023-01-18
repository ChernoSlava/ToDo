import React, {SVGProps} from "react";

export const AddIcon: React.FC<SVGProps<SVGSVGElement>> = (props):JSX.Element => {
    return (
        <svg width="25px" height="25px" viewBox="0 0 25 25" fill="none" {...props}>
            <path d="M12.5 5V20M5 12.5H20" stroke="#121923" strokeWidth="1.2"/>
        </svg>
    );
}