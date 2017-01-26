import React, {Component} from "react";
import $ from "jquery";

class DepartmentRow extends Component{
    handleChange = (e) => {
        const target = e.target;
        const selector = ".positionRow.department_" + e.target.dataset.departmentSn;

        $(selector).prop("checked", (i, val) => {
            return !val
        } );
    }

    render(){
        const {department, num, departmentSN} = this.props;
        return(
            <tr>
                <th>
                    <input type="checkbox"
                        data-department-sn={departmentSN}
                        onChange={this.handleChange}/>
                    {department}
                </th>
                <th>{num}</th>
            </tr>
        );
    }
}

export default DepartmentRow;
