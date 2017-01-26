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

    handleClick = (e) => {
        const target = e.target;
        const selector = ".department_position_" + e.target.dataset.departmentSn;

        $(selector).toggle("slow");
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
                    <i class="menuAngle fa fa-angle-down" 
                        aria-hidden="true"
                        data-department-sn={departmentSN}
                        onClick={this.handleClick}
                    >
                    </i>
                </th>
                <th class="positionNum">
                    <span class="titleNum">{num}</span>
                </th>
            </tr>
        );
    }
}

export default DepartmentRow;
