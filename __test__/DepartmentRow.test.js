import React from "react";
import {shallow} from "enzyme";
import DepartmentRow from "../src/components/DepartmentRow.js";


test("Component DepartmentRow has elemenent with text of number", () => {
    const titleRow = shallow(
        <DepartmentRow num={1} />
    );

    const element = titleRow.find(".positionNum");
    expect(parseInt(element.text(), 10)).toBe(1);
});

test("Component DepartmentRow can toggle icon of up and down", () => {
    const titleRow = shallow(
        <DepartmentRow />
    );

    const element = titleRow.find(".menuAngle");
    const elementAngleDown = titleRow.find(".fa-angle-down");
    const elementAngleUp = titleRow.find(".fa-angle-up");
    expect(element).toBeTruthy();
    expect(elementAngleDown).toBeTruthy();
    element.simulate('change')
    expect(elementAngleUp).toBeTruthy();
});

