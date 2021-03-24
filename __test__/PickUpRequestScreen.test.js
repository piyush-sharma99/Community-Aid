import React from "react";
import PickUpAssistanceRequestScreen from "../screens/PickUpAssistanceRequestScreen";
import { firebaseConfig } from "../apikey";
import { cleanup } from "@testing-library/react-native";
import renderer from "react-test-renderer";
import * as firebase from "firebase";

firebase.initializeApp(firebaseConfig);

afterEach(cleanup);

test("PickUpRequest renders correctly", () => {
  const tree = renderer.create(<PickUpAssistanceRequestScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
