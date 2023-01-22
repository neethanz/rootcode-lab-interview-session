import React, {useState} from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from 'react-native';
const CustomSearchBar = ({searchCallback}) => {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.searchContainer}>
      <Pressable onPress={() => searchCallback(searchText)}>
        <Image
          source={require('../../assets/icons/ic_search_dark_mode.png')}
          style={styles.searchIcon}
        />
      </Pressable>
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        value={searchText}
        onChangeText={text => setSearchText(text.trim())}
      />

      {searchText && (
        <TouchableOpacity onPress={() => setSearchText('')}>
          <Text style={{color: '#9ca3af'}}>cancel</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = {
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: '#f5f5f5',

    paddingHorizontal: 24,
    paddingVertical: 12,
    marginHorizontal: 24,
    borderBottomColor: 'gold',
    borderBottomWidth: 1,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    padding: 5,
    color: 'white',
  },
};

export default CustomSearchBar;
