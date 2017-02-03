import React from "react";
import {shallow} from "enzyme";
import TitleRow from "../src/components/TitleRow.js";


test("Component TitleRow has elemenent with class of clearCheck", () => {
    const titleRow = shallow(
        <TitleRow />
    );

    const element = titleRow.find(".clearCheck");
    expect(element).toBeTruthy();
});
