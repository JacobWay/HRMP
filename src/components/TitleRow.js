import React, {Component} from "react";
import $ from "jquery";

class TitleRow extends Component{
    handleClick = () => {
        $("input").prop("checked", false);
    }

    render(){
        return(
            <h3 class="mainTitle big_">
                招聘职位
                <span 
                    onClick={this.handleClick} 
                    class="clearCheck subTitle small_ actionable"
                >
                    清空
                </span>
            </h3>
        );
    }
}

export default TitleRow;
