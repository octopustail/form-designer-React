import React, {Component, PropTypes} from 'react'
import * as containerAPI from '../handlers/container-API'
import FormEditor from './FormEditor'
import FormPreview from './FormPreview'

class MyContainer extends Component {
    constructor(props) {
        super(props);
        this.renderPreview = this.renderPreview.bind(this);
        this.renderEditor = this.renderEditor.bind(this);

    }

    renderPreview() {
        console.log('preview')
        containerAPI.showPreview()
    }

    renderEditor() {
        containerAPI.showEdit()
    }

    render() {
        if (this.props.status === 'edit') {
            return (
                <div>
                    <button className="btn" onClick={this.renderPreview}>Preview</button>
                    <FormEditor items={this.props.items}/>
                </div>
            )
        }

        return (
            <div>
                <button className="btn" onClick={this.renderEditor}>Edit</button>
                <FormPreview items={this.props.items}/>
            </div>
        )
    }

}

export default MyContainer