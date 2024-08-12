import React from "react";

interface BlockProps {
    value : string | null ;
    onclick ?: () => void;
}

const Block: React.FC<BlockProps> = (props) => {
    return (
        <div className="block" onClick={props.onclick}>
            {props.value}
        </div>
    );
}

export default Block;