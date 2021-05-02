/*
 *  ClassName: MRRenderScreen.test.js
 *
 *  Date: 28/03/2021
 *
 * @author Piyush Sharma, X17342356
 *
 * @reference https://docs.expo.io/
 */
import React from "react";
import ManageRequestScreen from "../screens/ManageRequestScreens";
import { firebaseConfig } from "../apikey";
import renderer from "react-test-renderer";
import * as firebase from "firebase";

firebase.initializeApp(firebaseConfig);

test("ManageRequest renders correctly", () => {
  const tree = renderer.create(<ManageRequestScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
