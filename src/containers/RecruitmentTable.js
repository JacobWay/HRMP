import React, {Component} from "react";
import axios from "axios";

import TitleRow from "../components/TitleRow.js";
import DepartmentTable from "../components/DepartmentTable.js";

import BaseCSS from "../scss/base.scss";
import MainCSS from "../scss/main.scss";

const recruitmentDataUrl = "../../data/recruitmentMenu.json";

class RecruitmentTable_ extends Component{
    constructor(props){
        super(props);

        this.state = {
            data: [
                {
                    department: "",
                    num: "",
                    data: []
                }
            ]
        };
    }

    getData = () => {
        axios.get(recruitmentDataUrl)
        .then( (res) => {
            console.log(" ... ", typeof res.data);
            console.log(" ... ", (res.data));
            this.setState(res.data);
        } )
        .catch( (err) => {
            console.log("get data error in RecruitmentTable.js ... ", err);
        } );
    }

    componentDidMount = () => {
        this.getData();
    }

    render(){
        const departments =  this.state.data;
        return(
            <div>
                <TitleRow />
                <DepartmentTable departments={departments} />
            </div>
        );
    }
}

export default RecruitmentTable_;
