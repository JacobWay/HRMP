import React from "react";
import {shallow} from "enzyme";
import PositionRow from "../src/components/PositionRow.js";


test("Component PositionRow has elemenent with text of number", () => {
    const titleRow = shallow(
        <PositionRow num={1} />
    );

    const element = titleRow.find(".positionNum");
    expect(parseInt(element.text(), 10)).toBe(1);
});
