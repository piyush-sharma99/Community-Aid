import React from "react";
import IndexScreen from "../screens/IndexScreen";
import SignupScreen from "../screens/SignupScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import AssistanceRequestsScreen from "../screens/AssistanceRequestsScreen";
import ManageARScreen from "../screens/ManageARScreen";
import AppAssistanceScreen from "../screens/AppAssistanceScreen";
import MapScreen from "../screens/MapScreen";
import SettingScreen from "../screens/SettingScreen";
import MakeAssistanceRequestScreen from "../screens/MakeAssistanceRequestScreen";
import PickUpAssistanceRequestScreen from "../screens/PickUpAssistanceRequestScreen";
import MapVideoScreen from "../screens/MapVideoScreen";
import AssistanceVideoScreen from "../screens/AssistanceVideoScreen";
import ManageVideoScreen from "../screens/ManageVideoScreen";
import SettingsVideoScreen from "../screens/SettingsVideoScreen";
import ForgotVideoScreen from "../screens/ForgotVideoScreen";
import AboutUsScreen from "../screens/AboutUsScreen";
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

test("SignUp renders correctly", () => {
  const tree = renderer.create(<SignupScreen />).toJSON();
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

test("Map renders correctly", () => {
  const tree = renderer.create(<MapScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("Settings renders correctly", () => {
  const tree = renderer.create(<SettingScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("MakeAssistanceRequest renders correctly", () => {
  const tree = renderer.create(<MakeAssistanceRequestScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("PickUpRequest renders correctly", () => {
  const tree = renderer.create(<PickUpAssistanceRequestScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("MapVideo renders correctly", () => {
  const tree = renderer.create(<MapVideoScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("AssistanceVideo renders correctly", () => {
  const tree = renderer.create(<AssistanceVideoScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("ManageVideo renders correctly", () => {
  const tree = renderer.create(<ManageVideoScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("settingsVideo renders correctly", () => {
  const tree = renderer.create(<SettingsVideoScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("forgotVideo renders correctly", () => {
  const tree = renderer.create(<ForgotVideoScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("AboutUs renders correctly", () => {
  const tree = renderer.create(<AboutUsScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
