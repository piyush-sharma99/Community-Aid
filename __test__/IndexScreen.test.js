import React from "react";
import IndexScreen from "../screens/IndexScreen";
import { firebaseConfig } from "../apikey";
import { cleanup } from "@testing-library/react-native";
import renderer from "react-test-renderer";
import * as firebase from "firebase";

firebase.initializeApp(firebaseConfig);

afterEach(cleanup);

test("Index renders correctly", () => {
  const tree = renderer.create(<IndexScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
