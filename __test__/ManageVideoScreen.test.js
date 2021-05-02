/*
 *  ClassName: ManageVideoScreen.test.js
 *
 *  Date: 28/03/2021
 *
 * @author Piyush Sharma, X17342356
 *
 * @reference https://docs.expo.io/
 */
import React from "react";
import ManageVideoScreen from "../screens/ManageVideoScreen";
import { firebaseConfig } from "../apikey";
import { cleanup } from "@testing-library/react-native";
import renderer from "react-test-renderer";
import * as firebase from "firebase";

firebase.initializeApp(firebaseConfig);

afterEach(cleanup);

test("ManageVideo renders correctly", () => {
  const tree = renderer.create(<ManageVideoScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
