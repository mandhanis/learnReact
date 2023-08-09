import React, {Component} from "react";
// import YoutubeComp from "../../components/YoutubeComp/YoutubeComp";
// import Product from "../Product/Product";
// import LifeCycleComp from "../LifeCycleComp/LifeCycleComp";
import BlogPost from "../BlogPost/BlogPost";

class Home extends Component {
    state = {
        showComponent: true
    }
componentDidMount(){

}

    render(){
        return (
            <div>
                {/* <p>Youtube Component</p>
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
                <Product /> */}
                {/* <p>LifeCycle Componenet</p>
                <hr />
                {
                    this.state.showComponent
                    ?
                    <LifeCycleComp />
                    : null
                } */}
                <p>Blog Post</p>
                <hr />
                <BlogPost />
            </div>
        )
    }
}

export default Home;