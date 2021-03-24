import React from "react";
import SettingScreen from "../screens/SettingScreen";
import { firebaseConfig } from "../apikey";
import { cleanup } from "@testing-library/react-native";
import renderer from "react-test-renderer";
import * as firebase from "firebase";

firebase.initializeApp(firebaseConfig);

afterEach(cleanup);

test("Settings renders correctly", () => {
  const tree = renderer.create(<SettingScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
