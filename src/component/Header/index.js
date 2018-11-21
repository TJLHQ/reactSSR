import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import styles from './style.css'
import withStyle from '../../withStyle'
class Header extends Component{
    render(){
        return(
            <div className={styles.aa}>
                <Link to='/'>Home</Link>
                <Link to='/login'>Login</Link>
            </div>
        )
    }
}
 export default withStyle(Header,styles)
