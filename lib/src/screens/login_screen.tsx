import React, {useState} from 'react';
import {
  Alert,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import BrandLogo from '../../assets/images/brand_logo.png';
import {saveUser} from '../../redux/actions/user';
import HorizontalSpacer from '../components/horizondal_spacer';
import VerticalSpacer from '../components/vertical_spacer';
import api from '../services/api';

const validateEmail = email => {
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(String(email).toLowerCase());
};

function LoginScreen() {
  const [email, setEmail] = useState('qxkeb06yat@buy-blog.com');
  const [password, setPassword] = useState('test@123');
  const [hidePassword, setHidePassword] = useState(true);
  const dispatch = useDispatch();
  const windowHeight = Dimensions.get('window').height;

  return (
    <View style={[styles.container, {height: windowHeight}]}>
      <View style={styles.brandLogoContainer}>
        <Image source={BrandLogo} style={styles.brandLogo} />
      </View>
      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        keyboardType="email-address"
      />
      <VerticalSpacer space={8} />
      <Text style={styles.label}>Password</Text>
      <View style={styles.searchSection}>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          keyboardType="default"
          secureTextEntry={hidePassword}
        />
        <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
          <Text style={{color: '#FBBC05', marginRight: 20}}>
            {hidePassword ? 'Show' : 'Hide'}
          </Text>
        </TouchableOpacity>
      </View>

      <VerticalSpacer space={8} />
      <Text style={styles.forgotPassword}>Forgot your password?</Text>
      <VerticalSpacer space={32} />
      <TouchableOpacity
        onPress={async () => {
          let isEmailValid = validateEmail(email);
          if (isEmailValid && password) {
            const user = await api.login(email, password);
            dispatch(saveUser(user));
          } else {
            Alert.alert('Oopps', 'Check your credential and try again', [
              {text: 'OK', onPress: () => {}},
            ]);
          }
        }}
        style={styles.loginButton}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <VerticalSpacer space={24} />
      <View style={styles.socialLoginContainer}>
        <Text style={[styles.mediumText, styles.whiteText]}>Continue with</Text>
        <VerticalSpacer space={24} />
        <View style={styles.flexRow}>
          <Image
            source={require('../../assets/icons/ic_facebook.png')}
            style={styles.socialIcons}
          />
          <HorizontalSpacer space={24} />
          <Image
            source={require('../../assets/icons/ic_google.png')}
            style={styles.socialIcons}
          />
        </View>
      </View>
      <VerticalSpacer space={24} />
      <Text style={[styles.miniText, styles.whiteText, styles.textCenter]}>
        By continuing, you agree to our Terms of Service, privacy policy
      </Text>
      <VerticalSpacer space={24} />
      <View style={styles.bottomLine} />
      <VerticalSpacer space={24} />
      <View style={[styles.flexRow, styles.center]}>
        <Text style={[styles.mediumText, styles.whiteText]}>
          Not have a account yet?
        </Text>
        <Text style={[styles.mediumText, styles.brandColor]}> Join us</Text>
      </View>
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    backgroundColor: 'black',
  },
  brandLogo: {
    width: 200,
    height: 200,
  },
  brandLogoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  label: {
    color: '#9ca3af',
  },
  input: {
    height: 48,
    marginVertical: 8,

    padding: 10,

    backgroundColor: '#3a3c3f',
    color: 'white',
    borderRadius: 8,
  },

  forgotPassword: {
    color: '#fff',
    fontSize: 12,
  },

  socialLoginContainer: {
    display: 'flex',
    alignItems: 'center',
  },

  loginText: {
    color: 'white',
    padding: 10,
    fontWeight: '700',
  },
  loginButton: {
    borderRadius: 24,
    overflow: 'hidden',
    backgroundColor: '#FBBC05',
    height: 48,
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
  },

  socialIcons: {
    width: 40,
    height: 40,
  },
  miniText: {
    fontSize: 12,
  },

  mediumText: {
    fontSize: 14,
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
  searchSection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3a3c3f',
    height: 48,
    marginVertical: 8,
    padding: 10,
    color: 'white',
    borderRadius: 8,
    justifyContent: 'space-between',
  },
});
