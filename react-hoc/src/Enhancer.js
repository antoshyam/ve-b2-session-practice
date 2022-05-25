import React from "react";

const Enhancer = (AnyComponent) => {

    class EnhancedComponent extends React.Component{
        render(){
            return(
                <>
                    <div>
                        This is a form Header
                    </div>
                    <AnyComponent/>
                </>
            )
        }
    }

    return EnhancedComponent
}

export default Enhancer