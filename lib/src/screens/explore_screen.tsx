import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {
  addInitailSearchedTracks,
  addInitialLoadedTracks,
  addResultsOnScroll,
} from '../../redux/actions/tracks';
import CustomSearchBar from '../components/search_bar';
import SongTile from '../components/song_tile';
import api from '../services/api';
import mapTracks from '../services/mappers/track_mapper';

function ExploreScreen({navigation}) {
  const dispatch = useDispatch();
  const tracks = useSelector(state => state.tracks);

  const loadInitialTracks = async () => {
    let newTracks = await api.fetchAllSongs(15);
    let mappedTracks = mapTracks(newTracks);
    dispatch(addInitialLoadedTracks(mappedTracks));
  };

  const loadTracksOnScroll = async () => {
    let newTracks = await api.fetchAllSongs(15);
    let mappedTracks = mapTracks(newTracks);
    dispatch(addResultsOnScroll(mappedTracks));
  };

  const loadSearchedTracks = async searchKey => {
    let newTracks = await api.fetchParicularArtistSongs(searchKey, 15);
    let mappedTracks = mapTracks(newTracks);
    dispatch(addInitailSearchedTracks(mappedTracks));
  };
  useEffect(() => {
    loadInitialTracks();
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <CustomSearchBar searchCallback={loadSearchedTracks} />

          {tracks.length ? (
            <FlatList
              data={tracks}
              renderItem={track => {
                return (
                  <Pressable
                    onPress={() =>
                      navigation.navigate('DetailsScreen', {track})
                    }>
                    <SongTile
                      thumbnailUrl={track.item.thumbnailUrl}
                      artist={track.item.artist}
                      collection={track.item.colletion}
                      track={track.item.track}
                    />
                  </Pressable>
                );
              }}
              onEndReachedThreshold={0.9}
              onEndReached={() => loadTracksOnScroll()}
            />
          ) : (
            <ActivityIndicator />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
  brandLogo: {
    width: 200,
    height: 200,
  },
  brandLogoContainer: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
  },
});
