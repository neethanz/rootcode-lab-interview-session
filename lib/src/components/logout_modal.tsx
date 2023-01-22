import React from 'react';
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {removeUser} from '../../redux/actions/user';
import VerticalSpacer from './vertical_spacer';

export default function LogoutModal({visible, onClose}) {
  const dispatch = useDispatch();
  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={styles.background}>
        <View style={styles.container}>
          <View style={styles.crossIcon}>
            <TouchableOpacity onPress={onClose}>
              <Image
                source={require('../../assets/icons/ic_cross.png')}
                style={styles.crossIcon}
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.loginingOutText}>Logging Out</Text>
          <VerticalSpacer space={16} />
          <Text>Are you sure want to logout?</Text>
          <VerticalSpacer space={24} />
          <TouchableOpacity
            style={styles.loginButton}
            onPress={async () => {
              dispatch(removeUser());
              onClose();
            }}>
            <Text style={styles.loginText}>LOGOUT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    paddingHorizontal: 12,
    backgroundColor: 'white',
    padding: 20,
    width: '80%',
    height: 200,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  crossIcon: {
    width: 25,
    height: 25,
    position: 'absolute',
    top: 4,
    right: 4,
  },
  loginText: {
    color: 'black',
    padding: 10,
    fontWeight: '700',
  },
  loginingOutText: {
    color: 'black',
    fontSize: 20,
    fontWeight: '700',
  },
  loginButton: {
    borderRadius: 24,
    overflow: 'hidden',
    height: 48,
    width: 200,
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
  },
});
