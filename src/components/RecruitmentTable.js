import React, {Component} from "react";

import TitleRow from "./TitleRow.js";
import DepartmentTable from "./DepartmentTable.js";

require("bootstrap/dist/css/bootstrap.css");
import BaseCSS from "../scss/base.scss";
import MainCSS from "../scss/main.scss";

class RecruitmentTable extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const {departments} = this.props;
        return(
            <div>
                <TitleRow />
                <DepartmentTable departments={departments} />
            </div>
        );
    }
}

export default RecruitmentTable;
