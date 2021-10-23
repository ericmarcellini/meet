import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";
import { mockData } from "../mock-data";



describe("<Event /> component", () => {
    let EventWrapper, event;
    beforeAll(() => {
      event = mockData[0];
      EventWrapper = shallow(<Event event={event} />);
    });

    test('summary info',()=> {
        expect(EventWrapper.find(".Summary")).toHaveLength(1);
    });

    test('render description',()=> {
        expect(EventWrapper.find(".Location")).toHaveLength(1);
    });

    test('render location',()=> {
        expect(EventWrapper.find(".Location")).toHaveLength(1);
    });

    test('render event date',() => {
        expect(EventWrapper.find(".Date")).toHaveLength(1);
    });

    test('render show more button',()=>{
        expect(EventWrapper.find(".details-btn")).toHaveLength(1);
    });

});