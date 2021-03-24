import React from "react";
import MapVideoScreen from "../screens/MapVideoScreen";
import { firebaseConfig } from "../apikey";
import { cleanup } from "@testing-library/react-native";
import renderer from "react-test-renderer";
import * as firebase from "firebase";

firebase.initializeApp(firebaseConfig);

afterEach(cleanup);

test("MapVideo renders correctly", () => {
  const tree = renderer.create(<MapVideoScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
