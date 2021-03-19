import React from "react";
import renderer from "react-test-renderer";
import IndexScreen from "../screens/IndexScreen";
import HomeScreen from "../screens/HomeScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import AssistanceRequestsScreen from "../screens/AssistanceRequestsScreen";
import ManageARScreen from "../screens/ManageARScreen";
import AppAssistanceScreen from "../screens/AppAssistanceScreen";
import { firebaseConfig } from "../apikey";
import * as firebase from "firebase";
firebase.initializeApp(firebaseConfig);

test("Index renders correctly", () => {
  const tree = renderer.create(<IndexScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("Home renders correctly", () => {
  const tree = renderer.create(<HomeScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("Forgot Password renders correctly", () => {
  const tree = renderer.create(<ForgotPasswordScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("Assistance Request renders correctly", () => {
  const tree = renderer.create(<AssistanceRequestsScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("ManageARScreen renders correctly", () => {
  const tree = renderer.create(<ManageARScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("AppAssistanceScreen renders correctly", () => {
  const tree = renderer.create(<AppAssistanceScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
