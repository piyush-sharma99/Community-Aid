import React from "react";
import HomeScreen from "../screens/HomeScreen";
import { firebaseConfig } from "../apikey";
import renderer from "react-test-renderer";
import * as firebase from "firebase";

firebase.initializeApp(firebaseConfig);

test("Home renders correctly", () => {
  const tree = renderer.create(<HomeScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
