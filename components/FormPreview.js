import React, {Component, PropsType} from 'react'

class FormPreview extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <ul>
                    {this.props.items.map((item, index) => {
                        return (<li key={index}>
                            <input type={item.type}/>
                        </li>)
                    })}
                </ul>
            </div>
        )

    }
}

export default FormPreview