import {Routes, Route} from 'react-router-dom'
import AngularJS from '../AngularJS/AngularJS'
import LoginForm from '../Header/Form/LoginForm'
import RegistrationForm from '../Header/Form/RegistrationForm'
import ReactJS from '../ReactJS/ReactJS'
import UIDevelopment from '../UIDevelopment/UIDevelopment'
import VueJS from '../VueJS/VueJS'
import WebDevelopment from '../WebDevelopment/WebDevelopment'
function RouterComponent() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<ReactJS/>}/>
                <Route path='/AngularJS' element={<AngularJS/>}/>
                <Route path='/VueJS' element={<VueJS/>}/>
                <Route path='/WebDevelopment' element={<WebDevelopment/>}/>
                <Route path='/UIDevelopment' element={<UIDevelopment/>}/>
                <Route path='/RegistrationForm' element={<RegistrationForm/>}/>
                <Route path='/LoginForm' element={<LoginForm/>}/>

            </Routes>
        </div>
    )
}

export default RouterComponent
