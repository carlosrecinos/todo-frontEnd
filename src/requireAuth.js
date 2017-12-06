import React from 'react';
import {connect} from 'react-redux';
import { NotificationManager } from 'react-notifications';
import PropTypes from 'prop-types';
export default function(ComposedComponent){


    class Authenticate extends React.Component{
        componentWillMount(){
            console.log(this)
            if(!this.props.logged){
                NotificationManager.error('Usted no ha iniciado sesión', "Error", 3000, () => {});
                this.context.router.history.push('/login');
            }
        }
        componentWillUpdate(nextProps){
            if(!nextProps.logged){
                this.context.router.history.push('/login');
                NotificationManager.success('Sesión cerrada', "Usted ha cerrado sesión");
            }
        }

        render(){
            return (
                <ComposedComponent {...this.props} />
            )
        }
    }


    Authenticate.contextTypes = {
        router : PropTypes.object.isRequired
    }
    function mapStateToProps(state){
        return {
            logged:state.logged
        }
    }
    return connect(mapStateToProps)(Authenticate);
}