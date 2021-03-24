import React from "react";
import MapScreen from "../screens/MapScreen";
import { firebaseConfig } from "../apikey";
import { cleanup } from "@testing-library/react-native";
import renderer from "react-test-renderer";
import * as firebase from "firebase";

firebase.initializeApp(firebaseConfig);

afterEach(cleanup);

test("Map renders correctly", () => {
  const tree = renderer.create(<MapScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
