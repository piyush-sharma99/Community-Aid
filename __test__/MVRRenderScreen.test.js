import React from "react";
import ManageVolunteerRequestScreen from "../screens/ManageVolunteerRequestScreen";
import { firebaseConfig } from "../apikey";
import renderer from "react-test-renderer";
import * as firebase from "firebase";

firebase.initializeApp(firebaseConfig);

test("ManageVolunteerRequest renders correctly", () => {
  const tree = renderer.create(<ManageVolunteerRequestScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
