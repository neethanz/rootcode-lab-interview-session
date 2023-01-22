import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';

const SongTile = ({thumbnailUrl, track, artist, collection}) => (
  <View style={styles.container}>
    <Image
      source={{
        uri:
          thumbnailUrl ??
          'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
      }}
      style={styles.searchIcon}
    />

    <View style={{width: '64%'}}>
      <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">
        {track ?? 'Unknown'}
      </Text>
      <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">{`${
        artist ?? 'Unknown'
      }.${collection ?? 'Unknown'}`}</Text>
    </View>
    <Image
      source={require('../../assets/icons/ic_meat_balls_dark_mode.png')}
      style={styles.meat_ball_icon}
    />
  </View>
);

const styles = {
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 5,
    marginHorizontal: 24,
    height: 80,
    // marginVertical: 4,
    padding: 8,
  },
  text: {
    color: 'white',
  },
  searchIcon: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 4,
  },
  meat_ball_icon: {
    width: 25,
    height: 25,
    marginRight: 20,
    position: 'absolute',
    right: 0,
  },
  searchInput: {
    flex: 1,
    padding: 5,
  },
};

export default SongTile;
