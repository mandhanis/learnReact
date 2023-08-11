import React, {Component} from "react";
import YoutubeComp from "../../components/YoutubeComp/YoutubeComp";
import { connect } from "react-redux";

class YoutubePage extends Component {
    render(){
        return (
            <div>
                 <p>Youtube Component</p>
                <hr />
                <YoutubeComp 
                    time="9.16" 
                    title="Tutorial React JS - Bagian 1" 
                    desc="30K views. 4 years ago" />
                <YoutubeComp 
                    time="8.03" 
                    title="Tutorial React JS - Bagian 2" 
                    desc="24K views. 4 years ago" />
                <YoutubeComp 
                    time="17.02" 
                    title="Tutorial React JS - Bagian 3" 
                    desc="16K views. 4 years ago" />
                <YoutubeComp 
                    time="11.26" 
                    title="Tutorial React JS - Bagian 4" 
                    desc="47K views. 3 years ago" />
                <YoutubeComp />
                <br />
                    <p>Total Order: {this.props.order} </p> 
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        order: state.totalOrder
    }
}

export default connect(mapStateToProps)(YoutubePage);