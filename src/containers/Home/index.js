import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getHomeList} from './store/actions'
import withStyle from '../../withStyle'
import styles from './style.css'
class Home extends Component {

    componentDidMount(){
        if(!this.props.list.length){
            this.props.getHomeList()
        }
    }

    getList(){
        const {list}=this.props;
         return list.map(item=><div key={item.id}>{item.title}</div>)
    }
    render() {
        return (
            <div>
                <div className={styles.dd}>
                    {this.getList()}
                </div>
                <div className={styles.cc}>
                    哈哈哈哈哈
                </div>
                <button onClick={() => {
                    alert('click')
                }}>click
                </button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    name: state.home.name,
    list:state.home.newsList
})
const mapDispatchToProps=dispatch=>({
    getHomeList(){
        dispatch(getHomeList())
    }
})
const ExportHome=connect(mapStateToProps, mapDispatchToProps)(withStyle(Home,styles))
ExportHome.loadData=store=>{
    return store.dispatch(getHomeList())
}
export default ExportHome