import React, { useState } from 'react';


export default function CloseIcon(props: any) {
    const [isHover, setHover] = useState(false);
    return (
        <div onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
        <svg className={props.className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill={isHover ? '#8C94A1' : 'currentColor'} fillRule="nonzero">
            <path d="M4.293 4.293a1 1 0 011.414 0L9.95 8.535l4.243-4.242a1 1 0 011.32-.083l.095.083a1 1 0 010 1.414L11.364 9.95l4.243 4.243a1 1 0 01.083 1.32l-.083.095a1 1 0 01-1.415 0L9.95 11.364l-4.242 4.243a1 1 0 01-1.32.083l-.094-.083a1 1 0 010-1.415L8.535 9.95 4.293 5.707a1 1 0 01-.083-1.32z" />
        </svg>
        </div>
        
    );
}