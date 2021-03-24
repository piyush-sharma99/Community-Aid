import React from "react";
import AppAssistanceScreen from "../screens/AppAssistanceScreen";
import { firebaseConfig } from "../apikey";
import { cleanup } from "@testing-library/react-native";
import renderer from "react-test-renderer";
import * as firebase from "firebase";

firebase.initializeApp(firebaseConfig);

afterEach(cleanup);

test("AppAssistanceScreen renders correctly", () => {
  const tree = renderer.create(<AppAssistanceScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
