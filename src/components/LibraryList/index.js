import React from 'react';
import { ScrollView } from 'react-native';

import LibraryItem from '../LibraryItem'

const LibraryList = ({ albums = [], onAlbumPress = () => {} }) => (
  <ScrollView style={{ flex:1, backgroundColor: 'white' }}>
    {albums.map((album, index) => (
      <LibraryItem
        key={index}
        albumName={album.albumName}
        thumbnail={album.images[0].image.uri}
        counter={album.images.length || 0}
        index={index}
        onAlbumPress={onAlbumPress} />
    ))}
  </ScrollView>
);

export default LibraryList;