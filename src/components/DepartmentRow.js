import React, {Component} from "react";

class DepartmentRow extends Component{
    render(){
        const {department, num} = this.props;
        return(
            <tr>
                <th><input type="checkbox" />{department}</th>
                <th>{num}</th>
            </tr>
        );
    }
}

export default DepartmentRow;
