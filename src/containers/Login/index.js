import React,{Component} from 'react'
import styles from './index.css'
import widthStyle from '../../withStyle'
class Login extends Component{
    render(){
        return (
            <div>
                <div className={styles.login}>
                    login
                </div>
            </div>
        )
    }
}
export default widthStyle(Login,styles)