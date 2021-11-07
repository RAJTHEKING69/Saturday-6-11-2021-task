import Header from "./Component/Header/Header"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import RouterComponent from "./Component/RouterComponent/RouterComponent"
import Footer from "./Component/Footer/Footer"
function App() {
    return (
        <div>
            <Header/>
            <RouterComponent/>
            <Footer/>
        </div>
    )
}

export default App
