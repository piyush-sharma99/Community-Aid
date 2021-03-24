import React from "react";
import MakeAssistanceRequestScreen from "../screens/MakeAssistanceRequestScreen";
import { firebaseConfig } from "../apikey";
import { cleanup } from "@testing-library/react-native";
import renderer from "react-test-renderer";
import * as firebase from "firebase";

firebase.initializeApp(firebaseConfig);

afterEach(cleanup);

test("MakeAssistanceRequest renders correctly", () => {
  const tree = renderer.create(<MakeAssistanceRequestScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
