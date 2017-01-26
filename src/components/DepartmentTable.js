import React, {Component} from "react";
import _ from "lodash";

import DepartmentRow from "./DepartmentRow.js";
import PositionRow from "./PositionRow.js";

class DepartmentTable extends Component{
    render(){
        const {departments} = this.props;
        let rows = [];
        departments.forEach( (item, index) => {
            const {department, num, data} = item;
            const positions = data;
            const departmentRowElement = (<DepartmentRow 
                department={department} 
                num={num} 
                departmentSN={index}
                key={_.uniqueId("department_")} 
                />);
            rows.push(departmentRowElement);
            positions.forEach( (position, i) => {
                const positionRowElement = (<PositionRow 
                    {...position} 
                    departmentSN={index}
                    key={_.uniqueId("position_")} 
                    />);
                rows.push(positionRowElement);
            } );
        } );
        return(
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}

export default DepartmentTable;
