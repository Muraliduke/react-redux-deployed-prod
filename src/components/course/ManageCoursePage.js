import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseAction';
import {bindActionCreators} from 'redux';


class ManageCoursePage extends React.Component {

        constructor(props,context) {
            super(props,context);

          
        }

      


    render(){
       


        
        return(
            <div>
                <h1>Manage Course</h1>
              
            </div>

        );

    }
}

ManageCoursePage.PropTypes={
    
 
    // actions: PropTypes.object.isRequired,
    // courses: PropTypes.array.isRequired
};
function mapStateToProps(state , ownProps){

    return {
        state : state
    };
}

//this checkes wat actn r availabel or 2 be dispatched in components
function mapDispatchToProps(dispatch){
    return {
        //createCourse : (course)=> dispatch(courseActions.createCourse(course))//bindactn creator simplify this
        actions : bindActionCreators(courseActions,dispatch)
        //createCourse : bindActionCreators(courseActions.createCourse(),dispatch)
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(ManageCoursePage);