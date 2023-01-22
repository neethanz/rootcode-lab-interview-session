import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Header from '../components/Header';
import {useDispatch, useSelector} from 'react-redux';
import VerticalSpacer from '../components/vertical_spacer';
import api from '../services/api';
import mapTracks from '../services/mappers/track_mapper';
import {recentlyPlayedInitialLoad} from '../../redux/actions/recentlyPlayed';
import {SafeAreaView} from 'react-native-safe-area-context';

function HomeScreen() {
  const dispatch = useDispatch();
  const recentlyPlayed = useSelector(state => state.recentlyPlayed);

  const loadDummyTracksToHomeScreen = async () => {
    let newTracks = await api.fetchAllSongs(5);
    let mappedTracks = mapTracks(newTracks);
    dispatch(recentlyPlayedInitialLoad(mappedTracks));
    console.log(recentlyPlayed);
  };
  useEffect(() => {
    loadDummyTracksToHomeScreen();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <VerticalSpacer space={32} />

          <View style={{paddingHorizontal: 12}}>
            <Header
              greetings={'Good Afternoon'}
              avatarUrl={
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQHHQTlP3INkekfzGk57tiS4gwbHCUP_uvzg&usqp=CAU'
              }
            />
            <Text style={[styles.whiteText, styles.mediumText]}>
              Recently Played
            </Text>
          </View>
          <VerticalSpacer space={32} />

          {recentlyPlayed.length ? (
            <>
              <View>
                <View style={styles.imageDetailsContainer}>
                  <Text style={[styles.headerText, styles.whiteText]}>
                    {recentlyPlayed[0].title ?? 'Unknown'}
                  </Text>
                  <Text style={[styles.headerText, styles.whiteText]}>
                    {recentlyPlayed[0].artist}
                  </Text>
                </View>
                <Image
                  source={{
                    uri: recentlyPlayed[0].thumbnailUrl,
                  }}
                  style={styles.currentlySeleceted}
                />
                <VerticalSpacer space={24} />

                <FlatList
                  data={recentlyPlayed}
                  horizontal={true}
                  renderItem={track => {
                    return (
                      <View>
                        <View style={styles.thumbnailImageCover}>
                          <Text style={[styles.miniText, styles.whiteText]}>
                            {track.item.track}
                          </Text>
                        </View>
                        <Image
                          source={{
                            uri: track.item.thumbnailUrl,
                          }}
                          style={styles.thumbnailImage}
                        />
                      </View>
                    );
                  }}
                />
              </View>

              <VerticalSpacer space={24} />

              <FlatList
                data={[1, 2, 3, 4, 5, 6, 7, 8]}
                horizontal={true}
                renderItem={({item, index}) => {
                  return (
                    <Image
                      key={index}
                      source={{
                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQHHQTlP3INkekfzGk57tiS4gwbHCUP_uvzg&usqp=CAU',
                      }}
                      style={styles.thumbnailImage}
                    />
                  );
                }}
              />
            </>
          ) : (
            <ActivityIndicator />
          )}

          <VerticalSpacer space={24} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    backgroundColor: 'black',
  },
  currentlySeleceted: {width: '100%', height: 400, borderRadius: 8},

  thumbnailImage: {
    width: 100,
    height: 100,
    marginHorizontal: 12,
    borderRadius: 8,
    zIndex: 1,
  },

  thumbnailImageCover: {
    backgroundColor: 'black',
    width: 100,
    height: 100,
    opacity: 0.5,
    position: 'absolute',
    zIndex: 2,
    marginHorizontal: 12,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },

  imageDetailsContainer: {
    position: 'absolute',
    zIndex: 1,
    top: 12,
    left: 12,
  },
  miniText: {
    fontSize: 12,
  },

  mediumText: {
    fontSize: 14,
  },

  headerText: {
    fontSize: 18,
  },

  textCenter: {
    textAlign: 'center',
  },

  whiteText: {
    color: '#fff',
  },

  brandColor: {
    color: '#fbbc05',
  },
  bottomLine: {
    marginHorizontal: 24,
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
  },

  flexRow: {
    flexDirection: 'row',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
