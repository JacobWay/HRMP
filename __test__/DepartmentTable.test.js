import React from "react";
import {shallow} from "enzyme";
import DepartmentTable from "../src/components/DepartmentTable.js";


test("Component DepartmentTable has elemenent of table", () => {
    const departmentTable = shallow(
        <DepartmentTable departments={[]} />
    );

    const element = departmentTable.find("table");
    expect(element).toBeTruthy();
});

