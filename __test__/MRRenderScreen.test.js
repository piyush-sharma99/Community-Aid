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
