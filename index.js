import React from 'react'
import ReactDOM from 'react-dom'
import store from './store'
import MyContainer from './components/MyContainer'

const rootElem = document.getElementById('root')
function render() {
    ReactDOM.render(
    <MyContainer
    items={store.getState().itemState.items}
    status={store.getState().formState.status}
    />,
        rootElem
    )

}

render();
store.subscribe(render);