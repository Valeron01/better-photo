import React from "react";

interface Props {
    children: React.ReactNode
}

function Section(props: Props) {
    return (
        <>
            {props.children}
        </>
    );
}

export default Section