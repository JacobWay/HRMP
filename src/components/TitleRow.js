import React, {Component} from "react";
import $ from "jquery";

class TitleRow extends Component{
    handleClick = () => {
        $("input").prop("checked", false);
    }

    render(){
        return(
            <h2>
                招聘职位
                <button onClick={this.handleClick}>清空</button>
            </h2>
        );
    }
}

export default TitleRow;
