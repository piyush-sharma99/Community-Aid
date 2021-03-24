import React from "react";
import ManageARScreen from "../screens/ManageARScreen";
import { firebaseConfig } from "../apikey";
import { cleanup } from "@testing-library/react-native";
import renderer from "react-test-renderer";
import * as firebase from "firebase";

firebase.initializeApp(firebaseConfig);

afterEach(cleanup);

test("ManageARScreen renders correctly", () => {
  const tree = renderer.create(<ManageARScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
