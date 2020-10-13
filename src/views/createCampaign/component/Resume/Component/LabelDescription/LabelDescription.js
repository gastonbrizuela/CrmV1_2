import React, { Fragment } from "react";

const LabelDescription = ({label,description})=>{

    return(<Fragment>
    <label><b> {label} :  </b></label><label>{description}</label>
    </Fragment>)
}

export default LabelDescription