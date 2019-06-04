import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from './styles'
const checkedIcon  = '' // @todo set checked icon!

const LibraryItem = ({ albumName, thumbnail, counter, index, onAlbumPress }) => (
  <TouchableOpacity
    style={[styles.base, index === 0 && styles.first]}
    onPress={() => onAlbumPress(albumName)}
  >
    <Image source={{uri: thumbnail}} style={styles.thumb}/>
    <View style={styles.textWrapper}>
      <Text style={styles.name}>{albumName}</Text>
      <Text style={styles.counter}>{`${counter} ${counter && counter > 1 ? 'Videos' : 'Video'}`}</Text>
    </View>
  </TouchableOpacity>
);
export default LibraryItem;