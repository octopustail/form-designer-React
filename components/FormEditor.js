import React, {Component, PropsType} from 'react'
import * as formEditorAPI from '../handlers/form-editor-API'
import DialogButton from './DialogButton'

class FormEditor extends Component {
    constructor(props) {
        super(props);
        this.removeItem = this.removeItem.bind(this);
        this.addItem = this.addItem.bind(this)
    }


    removeItem(event){
        let index = $(event.currentTarget).data("item-index");
        formEditorAPI.removeItem(index);
    }

    addItem(item) {
        formEditorAPI.addItem(item);

    }

    render() {
        return (
            <div>
                <ul>
                    {console.log('items',this.props.items)}
                    {this.props.items.map((item, index) => {
                        return (<li key={index}>
                            <input type={item.type}/>
                            <button onClick={this.removeItem} data-item-index={index}>Remove</button>
                        </li>)
                    })}
                </ul>
                <DialogButton addItem={this.addItem}/>
            </div>
        )

    }
}

export default FormEditor