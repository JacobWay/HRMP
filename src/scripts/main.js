import React from "react";
import {render} from "react-dom";
import "../../node_modules/font-awesome/css/font-awesome.min.css";

import RecruitmentTable_ from "../containers/RecruitmentTable.js";
import MarkDown from "../components/Readme.js";

const mountNode = document.getElementById("recruitment");
const readmeNode = document.getElementById("readme");
render(<RecruitmentTable_  />, mountNode);
render(<MarkDown  />, readmeNode);


