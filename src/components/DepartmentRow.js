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
            <tr class="subTitle">
                <th>
                    <input type="checkbox"
                        class="recruitmentCheckbox"
                        id={departmentSN}
                        data-department-sn={departmentSN}
                        onChange={this.handleChange}/>
                    <label for={departmentSN}></label>
                    {department}
                </th>
                <th class="positionNum">
                    <span class="titleNum">{num}</span>
                </th>
            </tr>
        );
    }
}

export default DepartmentRow;
