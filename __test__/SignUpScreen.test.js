import React from "react";
import SignupScreen from "../screens/SignupScreen";
import { firebaseConfig } from "../apikey";
import { cleanup } from "@testing-library/react-native";
import renderer from "react-test-renderer";
import * as firebase from "firebase";

firebase.initializeApp(firebaseConfig);

afterEach(cleanup);

test("SignUp renders correctly", () => {
  const tree = renderer.create(<SignupScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
