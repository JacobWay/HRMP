import React, {Component} from "react";
import axios from "axios"
const Remarkable = require("remarkable");

const readmeUrl = "../../readme.md";

class MarkDown extends Component{
    constructor(props){
        super(props);

        this.state = {
            value: "# Hi"
        }
    }

    getRawMarkup = () => {
        const {value} = this.state;
        const md = new Remarkable();

        return {__html: md.render(value)}
    }

    getReadme = (readmeUrl) => {
        // get readme file
        axios.get(readmeUrl)
        .then( (res) => {
            console.log("res in getReadme of Readme.js ... ", res);
            this.setState({
                value: res.data
            });
        } )
        .catch( (err) => {
            console.log("Error in get Readme.md file on getRawMarkup of Readme.js ... ", err);
        } );
    }

    componentDidMount = () => {
        this.getReadme(readmeUrl);
    }

    render(){
        return(
            <div class="readme"
                dangerouslySetInnerHTML={this.getRawMarkup()} >
            </div>
        );
    }
}

export default MarkDown;
