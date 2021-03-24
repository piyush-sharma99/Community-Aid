import React from "react";
import AboutUsScreen from "../screens/AboutUsScreen";
import { firebaseConfig } from "../apikey";
import { cleanup } from "@testing-library/react-native";
import renderer from "react-test-renderer";
import * as firebase from "firebase";

firebase.initializeApp(firebaseConfig);

afterEach(cleanup);

test("AboutUs renders correctly", () => {
  const tree = renderer.create(<AboutUsScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
