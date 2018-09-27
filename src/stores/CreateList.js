import React, {Component} from 'react'
import { connect } from 'react-redux'


import { addGet } from '../actions/actionMake'
import {bindActionCreators} from 'redux'

class CreateGet extends Component {
    constructor(props){
        super(props)
        this.state = {
            gettext: '',
        }
        this.onChangeGetText = this.onChangeGetText.bind(this)
    }

    onChangeGetText(e){
        this.setState({
            gettext: e.target.value
        })
    }

    render(){
        return (
          <div className="form-group row">
            <div className="col-sm-10">

              <input onChange={this.onChangeGetText} value={this.state.gettext} type="text" className="form-control" id="topRow" placeholder="&#9728; Get 'Er Done!"/>

              <button type="button" onClick={() =>{ this.props.addGet(this.state.gettext); this.setState({ gettext: '' }) } } style={{marginTop: "33px"}} className="btn btn-primary">Get Slingin &#9732;</button>

              <button type="button" onClick={ () => this.setState({ gettext: '' }) } style={{marginTop: "33px", marginLeft: "50%"}} className="btn btn-warning">&#10008; Cancel</button>

            </div>

          </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addGet
    }, dispatch)
}



export default connect(null, mapDispatchToProps)(CreateGet)
