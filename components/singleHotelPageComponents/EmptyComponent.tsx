import React from "react"

const EmptyComponent: React.FC<{ text: string }> = ({ text }) => {
    return (
        <div>
            {text}
        </div>
    )
};

export default EmptyComponent;
