import React from 'react'

class SimpleForm extends React.Component {
    render() {
        return (
            <form>
                <input type={"text"} />
                <input type={"text"} />
                <input type={"text"} />
                <button>Submit</button>
            </form>
        )
    }
}

export default SimpleForm