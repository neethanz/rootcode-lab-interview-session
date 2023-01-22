import React from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import HorizontalSpacer from '../components/horizondal_spacer';
import VerticalSpacer from '../components/vertical_spacer';
import {addToRecentlyPlayed} from '../../redux/actions/recentlyPlayed';
import {SafeAreaView} from 'react-native-safe-area-context';

function DetailsScreen({route, navigation}) {
  const dispatch = useDispatch();

  const windowHeight = Dimensions.get('window').height;

  const {
    thumbnailUrl,
    artist,
    track,
    price,
    releaseDate,
    description,
    collection,
    primaryGenreName,
    country,
  } = route.params.track.item;
  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={[
            styles.background,
            {
              height: windowHeight,
            },
          ]}>
          <View style={styles.curvedContainer} />
        </View>
        <View style={styles.infoContainer}>
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              source={require('../../assets/icons/ic_back.png')}
              style={styles.icons}
            />
          </Pressable>
          <VerticalSpacer space={32} />
          <Text style={styles.track}>{track}</Text>
          <VerticalSpacer space={24} />
          <View style={styles.flexRow}>
            <Image
              source={{
                uri: thumbnailUrl,
              }}
              style={styles.thumbnailImage}
            />
            <HorizontalSpacer space={32} />

            <View style={styles.flexRow}>
              <View style={{marginRight: 24}}>
                <Text style={styles.genreCountryHeading}>Genre</Text>
                <Text style={styles.genreCountryContent}>
                  {primaryGenreName}
                </Text>
              </View>
              <View>
                <Text style={styles.genreCountryHeading}>Country</Text>
                <Text style={styles.genreCountryContent}>{country}</Text>
              </View>

              <View style={styles.playIconContainer}>
                <TouchableOpacity
                  onPress={() =>
                    dispatch(addToRecentlyPlayed(route.params.track.item))
                  }>
                  <View style={{backgroundColor: '#fff', borderRadius: 15}}>
                    <Image
                      source={require('../../assets/icons/ic_play.png')}
                      style={styles.icons}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <VerticalSpacer space={24} />

          <Text style={styles.artistText}>
            Artist Name : {artist ?? 'Unknown'}
          </Text>
          <Text style={styles.detailsText}>
            Collection Name : {collection ?? 'Unknown'}
          </Text>
          <Text style={styles.detailsText}>
            Track Price : {price ?? 'Unknown'}
          </Text>
          <Text style={styles.detailsText}>
            Release Date : {releaseDate ?? 'Unknown'}
          </Text>
          <Text style={styles.detailsText}>
            Description : {description ?? 'Unknown'}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default DetailsScreen;

const styles = StyleSheet.create({
  infoContainer: {
    width: '100%',
    zIndex: 100,
    position: 'absolute',
    paddingHorizontal: 24,
    paddingTop: 48,
  },

  curvedContainer: {
    height: 250,
    backgroundColor: '#fbbc05',
    borderTopRightRadius: 0,
    borderBottomRightRadius: 150,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },

  background: {
    backgroundColor: 'black',
    zIndex: 0,
  },

  icons: {
    width: 30,
    height: 30,
  },

  thumbnailImage: {
    width: 100,
    height: 100,
    borderRadius: 12,
  },

  flexRow: {flexDirection: 'row'},
  playIconContainer: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    backgroundColor: '#fbbc05',
    borderRadius: 20,
    width: 40,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  track: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700',
  },

  genreCountryHeading: {
    color: '#3a3c3f',
    fontSize: 12,
  },
  genreCountryContent: {
    color: '#fff',
    fontSize: 12,
  },

  artistText: {
    color: '#fff',
    fontSize: 16,
  },

  detailsText: {
    color: '#fff',
    fontSize: 14,
  },
});
