import React from "react";
import Footer from "../js/components/presentational/Footer";

import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("<Footer/>", () => {
    const wrapper = shallow(<Footer />);
    it("should contain 1 img element", () => {
        expect(wrapper.find("img").length).toBe(1);
    });
});

describe("<Footer/>", () => {
    const wrapper = shallow(<Footer />);
    it("Test className attr", () => {

        expect(wrapper.find("img").props().className).toBe("footer__image");
    });
});
