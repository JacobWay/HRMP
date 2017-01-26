import React, {Component} from "react";

class PositionRow extends Component{
    render(){
        const {position, num, departmentSN} = this.props;
        return(
            <tr>
                <th>
                    <input 
                        type="checkbox" 
                        class={"positionRow " + "department_" + departmentSN}
                    />
                    {position}
                </th>
                <th>{num}</th>
            </tr>
        );
    }
}

export default PositionRow;
