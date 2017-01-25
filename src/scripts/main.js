import React from "react";
import {render} from "react-dom";

import RecruitmentTable from "../components/RecruitmentTable.js";

const RECRUITMENT_DATA = [
    {
        department: "工程研发部门",
        num: 120,
        data: [
            {
                position: "Mac开发工程师",
                num: 9
            },
            {
                position: "iOS测试工程师",
                num: 17
            }
        ]
    },
    {
        department: "销售部门",
        num: 120,
        data: [
            {
                position: "Mac开发工程师",
                num: 9
            },
            {
                position: "iOS测试工程师",
                num: 17
            }
        ]
    }
];

const mountNode = document.getElementById("recruitment");
render(<RecruitmentTable departments={RECRUITMENT_DATA} />, mountNode);


