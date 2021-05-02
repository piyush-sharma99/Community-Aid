/*
 *  ClassName: AssistanceReqeatScreen.test.js
 *
 *  Date: 28/03/2021
 *
 * @author Piyush Sharma, X17342356
 *
 * @reference https://docs.expo.io/
 */
import React from "react";
import AssistanceRequestsScreen from "../screens/AssistanceRequestsScreen";
import { firebaseConfig } from "../apikey";
import { cleanup } from "@testing-library/react-native";
import renderer from "react-test-renderer";
import * as firebase from "firebase";

firebase.initializeApp(firebaseConfig);

afterEach(cleanup);

test("Assistance Request renders correctly", () => {
  const tree = renderer.create(<AssistanceRequestsScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
