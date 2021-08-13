import { Fragment } from "react"
import Header from './components/Headers'
import Characters from './components/Characters'
import "./main.sass"

function App() {
    return (
        <Fragment>
            {/* <div className="app">
                <h1>React + Webpack + SASS</h1>
                <p>Mi primer proyecto de React con Webpack</p>
            </div> */}
            <Header 
                title = "Rick and Morty API"
            />
            <Characters />
        </Fragment>
    );
}

export default App