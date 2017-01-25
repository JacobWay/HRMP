import React, {Component} from "react";

class PositionRow extends Component{
    render(){
        const {position, num} = this.props;
        return(
            <tr>
                <th><input type="checkbox" />{position}</th>
                <th>{num}</th>
            </tr>
        );
    }
}

export default PositionRow;
