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
