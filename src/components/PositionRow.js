import React, {Component} from "react";

class PositionRow extends Component{
    render(){
        const {position, num, departmentSN, positionId} = this.props;
        return(
            <tr class={"department_position_" + departmentSN}>
                <td class="positionCell">
                    <input 
                        type="checkbox" 
                        id={positionId}
                        class={"recruitmentCheckbox positionRow " + "department_" + departmentSN}
                    />
                    <label for={positionId}></label>
                    {position}
                </td>
                <td class="positionNum">{num}</td>
            </tr>
        );
    }
}

export default PositionRow;
