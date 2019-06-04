/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ActivityIndicator, PermissionsAndroid} from 'react-native';
import GalleryMediaPicker from './src/components/index';

type Props = {};
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      totalFiles: 0,
      selected: [],
      hasPermission: false
    }
  }


  async requestCameraPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          'title': 'Cool Photo App Camera Permission',
          'message': 'Cool Photo App needs access to your camera ' +
          'so you can take awesome pictures.'
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        this.setState({hasPermission: true })
      } else {
        console.log("Camera permission denied")
      }
    } catch (err) {
      console.warn(err)
    }
  }

  componentWillMount(){
    this.requestCameraPermission();
  }

  getSelectedFiles(files, current) {
    this.setState({ totalFiles: files.length, selected: files });
    console.log(this.state.selected);
  }

  /**
  * @description Render custom loader that shows when files are fetching
  */
  renderLoader(){
    return(
      <ActivityIndicator color="red" size="large"/>
    )
  }

  /**
  * @description Render custom marker
  * This will cancel the "markIcon" option
  */
  renderSelectMarker(){
    
  
  }

  render() {
    return (
      <View style={styles.container}>
        <GalleryMediaPicker
          groupTypes="All"
          assetType="Videos"
          customSelectMarker={this.renderSelectMarker()}
          batchSize={1}
          emptyGalleryText={'There are no photos or video'}
          maximumSelectedFiles={3}
          selected={this.state.selected}
          itemsPerRow={3}
          imageMargin={3}
          customLoader={this.renderLoader()}
          callback={this.getSelectedFiles.bind(this)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  marker:{
    width: 30,
    height: 30,
    zIndex: 2445,
    top: 5,
    right: 5,
    backgroundColor: 'transparent',
  },
  markerWrapper: {
    position: 'absolute',
    flex:1,
    top: 0 ,
    zIndex: 2445,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
