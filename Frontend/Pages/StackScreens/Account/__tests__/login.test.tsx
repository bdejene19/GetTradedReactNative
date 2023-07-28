import React, { createContext} from "react";
import { Login } from "../Login";
import {Text, View} from 'react-native'
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';
import JobBoard from "../../../TabScreens/JobBoard";
import WorkLocations from "../WorkLocations";
import AboutBusiness from "../../../../Components/profile/AboutBusiness";
describe("Login Page", () => {
    it("Should load with 5 children", () => {
        const navigation = {
            navigate: () => {},
        }   
        const route = {
            route: () => {},
        }   
        jest.spyOn(navigation, 'navigate');
        
        renderer.getByTestID('registerBtn');
        const tree = jest.mock("../Login", () => <Login navigation={navigation}/>)
        expect(tree).toHaveLength(5);
    })

    it("Should navigate profile page when login is successful", () => {
        const navigation = {
            navigate: () => {},
        }   

        // spyOn(navigation, "navigate");
        // const tree = render(<Login navigation={navigation}></Login>)
    })
    it("Should disable login button without valid email/password", () => {

    })
})