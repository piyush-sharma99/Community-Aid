import React, { Component } from 'react';
import { Switch, ScrollView, StyleSheet, Text, View,TouchableOpacity,} from 'react-native';
import Constants from 'expo-constants';
import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';

const mapMessage =
  'this is the Map ';
const ApplicationRequestMessage =
'this is the Application request message';
const ManageRequestMessage =
'this is the Manage Assistance request';
const SettingsMessage =
'this is the Settings';
const ApplicationAssistanceMessage =
'this is the Application assistance';


const CONTENT = [
  {
    title: 'Map',
    content: mapMessage,
  },
  {
    title: 'Assistance Requests',
    content: ApplicationRequestMessage,
  },
  {
    title: 'Manage Assistance Request',
    content: ManageRequestMessage,
  },
  {
    title: 'Settings',
    content: SettingsMessage,
  },
  {
    title: 'Application Assistance',
    content: ApplicationAssistanceMessage,
  },
];

export default class ReactDropDown extends React.Component {
  state = {
    activeSections: [],
    collapsed: true,
    multipleSelect: false,
  };

  toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  setSections = sections => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    });
  };

  renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Text style={styles.headerText}>{section.title}</Text>
      </Animatable.View>
    );
  };

  renderContent(section, _, isActive) {
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Animatable.Text animation={isActive ? 'bounceIn' : undefined}>
          {section.content}
        </Animatable.Text>
      </Animatable.View>
    );
  }

  render() {
    const { multipleSelect, activeSections } = this.state;

    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ paddingTop: 30 }}>
          <View style={styles.selectors}>
            <Text style={styles.selectTitle}>Select one the following headings:</Text>
          </View>
          <Accordion
            activeSections={activeSections}
            sections={CONTENT}
            touchableComponent={TouchableOpacity}
            expandMultiple={multipleSelect}
            renderHeader={this.renderHeader}
            renderContent={this.renderContent}
            duration={400}
            onChange={this.setSections}
            style={styles.content2}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E86C1',
    marginRight:40,
    marginLeft:40,
    paddingTop: Constants.statusBarHeight,
  },
  header: {
    color: "white",
    backgroundColor: '#2E86C1',
    padding: 10,
  },
  headerText: {
    color: "white",
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    color: "white",
    padding: 20,
    backgroundColor: '#2E86C1',
  },
  content2: {
    color: "white",
    backgroundColor: '#2E86C1'
  },
  active: {
    backgroundColor: '#fb5b5a',
    shadowOpacity: 0.5,
    elevation: 10,
    borderRadius:25,
    borderWidth:2,
    marginTop:5
    
  },
  inactive: {
    color: "white",
    backgroundColor: '#fb5b5a',
    borderRadius:25,
    borderWidth:2,
    marginTop:5
  },
  selectors: {
    color: "white",
    marginBottom: 40,
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#fb5b5a',
    borderRadius:20,
    marginRight:40,
    marginLeft:40
  },
  selector: {
    color: "white",
    backgroundColor: '#2E86C1',
    padding: 10,
  },
  selectTitle: {
    color: "white",
    fontSize: 19,
    fontWeight: '500',
    padding: 10,
    textAlign:"center",
    
  },
 
});