import React, {Component} from "react";

import TitleRow from "./TitleRow.js";
import DepartmentTable from "./DepartmentTable.js";


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
