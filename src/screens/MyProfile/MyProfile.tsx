import React, {useState, useEffect, useCallback} from 'react';
import {View, Image} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {launchImageLibrary} from 'react-native-image-picker';

import {connect} from 'react-redux';

import {product} from '../../types';

import Button from '../../components/Button';
import Input from '../../components/Input';

import ProfilePhoto from '../../assets/icons/profile-photo.svg';

import {ROUTES, RootStackParamList} from '../../types';

import styles from './styles';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

type navigationProps = NativeStackScreenProps<
  RootStackParamList,
  ROUTES.PRODUCT
>;

type myProfileProps = {
  navigation: navigationProps['navigation'];
  addProduct: (item: product, color: string) => void;
};

type profileData = {
  fullName: string;
  mobileNumber: string;
  city: string;
  locality: string;
  flat: string;
};

const MyProfileScreen = ({navigation}: myProfileProps) => {
  const [initialFullName, setInitialFullName] = useState<string | null>('');
  const [initialMobileNumber, setInitialMobileNumber] = useState<string | null>(
    '',
  );
  const [initialCity, setInitialCity] = useState<string | null>('');
  const [initialLocality, setInitialLocality] = useState<string | null>('');
  const [initialFlat, setInitialFlat] = useState<string | null>('');
  const [initialUserPhoto, setInitialUserPhoto] = useState<string | null>('');

  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [city, setCity] = useState('');
  const [locality, setLocality] = useState('');
  const [flat, setFlat] = useState('');

  const [userPhoto, setUserPhoto] = useState<string>('');

  const [canBeUpdated, setCanBeUpdated] = useState(false);

  const getProfile = useCallback(async () => {
    try {
      const initialFullNameValue = await AsyncStorage.getItem('fullName');
      setInitialFullName(initialFullNameValue);
      if (initialFullNameValue !== null) {
        setFullName(initialFullNameValue);
      }
      const initialMobileNumberValue = await AsyncStorage.getItem(
        'mobileNumber',
      );
      setInitialMobileNumber(initialMobileNumberValue);
      if (initialMobileNumberValue !== null) {
        setMobileNumber(initialMobileNumberValue);
      }

      const initialCityValue = await AsyncStorage.getItem('city');
      setInitialCity(initialCityValue);
      if (initialCityValue !== null) {
        setCity(initialCityValue);
      }

      const initialLocalityValue = await AsyncStorage.getItem('locality');
      setInitialLocality(initialLocalityValue);
      if (initialLocalityValue !== null) {
        setLocality(initialLocalityValue);
      }

      const initialFlatValue = await AsyncStorage.getItem('flat');
      setInitialFlat(initialFlatValue);
      if (initialFlatValue !== null) {
        setFlat(initialFlatValue);
      }

      const initialUserPhotoValue = await AsyncStorage.getItem('userPhoto');

      setInitialUserPhoto(initialUserPhotoValue);
      if (initialUserPhotoValue !== null) {
        setUserPhoto(initialUserPhotoValue);
      }
    } catch (error) {
      console.log('error', error);
    }
  }, []);

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  useEffect(() => {
    if (
      (fullName && fullName !== initialFullName) ||
      (mobileNumber && mobileNumber !== initialMobileNumber) ||
      (city && city !== initialCity) ||
      (locality && locality !== initialLocality) ||
      (flat && flat !== initialFlat) ||
      (userPhoto && userPhoto !== initialUserPhoto)
    ) {
      setCanBeUpdated(true);
    } else {
      setCanBeUpdated(false);
    }
  }, [
    fullName,
    mobileNumber,
    city,
    locality,
    flat,
    initialFullName,
    initialMobileNumber,
    initialCity,
    initialLocality,
    initialFlat,
    userPhoto,
    initialUserPhoto,
  ]);

  const setProfile = async () => {
    try {
      await AsyncStorage.setItem('fullName', fullName);
      await AsyncStorage.setItem('mobileNumber', mobileNumber);
      await AsyncStorage.setItem('city', city);
      await AsyncStorage.setItem('locality', locality);
      await AsyncStorage.setItem('flat', flat);
      await AsyncStorage.setItem('userPhoto', userPhoto);
    } catch (error) {
      console.log('error', error);
    }
    getProfile();
  };

  const onProfileIconPress = async () => {
    const result = await launchImageLibrary({mediaType: 'photo'});

    if (result.assets) {
      setUserPhoto(result.assets[0].uri as string);
    }
  };

  return (
    <View style={styles.screenWrapper}>
      <Input
        label="Full Name"
        onChange={value => setFullName(value)}
        defaultValue={fullName}
      />
      <TouchableWithoutFeedback onPress={onProfileIconPress}>
        {userPhoto ? (
          <Image style={styles.profilePhoto} source={{uri: userPhoto}} />
        ) : (
          <ProfilePhoto width={120} height={120} style={styles.profilePhoto} />
        )}
      </TouchableWithoutFeedback>
      <View style={styles.inputsWrapper}>
        <Input
          label="Mobile Number"
          onChange={value => setMobileNumber(value)}
          defaultValue={mobileNumber}
        />
        <Input
          label="City"
          onChange={value => setCity(value)}
          defaultValue={city}
        />
        <Input
          label="Locality, area or street"
          onChange={value => setLocality(value)}
          defaultValue={locality}
        />
        <Input
          label="Flat no., Building name"
          onChange={value => setFlat(value)}
          defaultValue={flat}
        />
      </View>
      {canBeUpdated && (
        <Button
          title="Update"
          containerStyle={[styles.button, styles.updateButton]}
          onPress={() => setProfile()}
        />
      )}

      <Button
        title="Logout"
        containerStyle={[styles.button, styles.logoutButton]}
        onPress={() => navigation.navigate(ROUTES.LOGOUT_MODAL)}
      />
    </View>
  );
};

export default connect(null, null)(MyProfileScreen);
