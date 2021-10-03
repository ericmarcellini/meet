import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";
import { mockData } from "../mock-data";



describe("<Event /> component", () => {
    let EventWrapper, event;
    beforeAll(() => {
      event = mockData[1];
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
        expect(EventWrapper.find(".showDetails")).toHaveLength(1);
    });

    test("show detail on button click", () => {
        EventWrapper.setState({
          show: false,
        });
    
        EventWrapper.find(".showDetails").simulate("click");
        expect(EventWrapper.find(".Details")).toHaveLength(1);
      });
    
      test("hide details on button click", () => {
        EventWrapper.setState({
          show: true,
        });
    
        EventWrapper.find(".hideDetails").simulate("click");
        expect(EventWrapper.find(".Details")).toHaveLength(0);
      });

});