import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import LogoutModal from './logout_modal';

const Header = ({greetings, avatarUrl}) => {
  const [visible, setVisible] = useState(false);
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.welcomeText}>{greetings}</Text>
      <TouchableOpacity onPress={() => setVisible(true)}>
        <Image source={{uri: avatarUrl}} style={styles.avatar} />
      </TouchableOpacity>

      <LogoutModal visible={visible} onClose={() => setVisible(false)} />
    </View>
  );
};

const styles = {
  headerContainer: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
};

export default Header;
