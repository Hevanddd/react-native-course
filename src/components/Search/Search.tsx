import React, {useEffect, useRef, useState} from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import SearchIcon from '../../assets/icons/search.svg';
import RemoveIcon from '../../assets/icons/remove.svg';

import styles from './styles';

type SearchProps = {
  onFocus?: () => void;
  onChange?: (value: any) => void;
};

const Search = ({onFocus, onChange}: SearchProps) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const inputRef = useRef<TextInput>(null);

  const [isSearchHistoryVisible, setisSearchHistoryVisible] =
    useState<boolean>(false);

  const [searchHistoryArray, setSearchHistoryArray] = useState<string[]>([]);

  useEffect(() => {
    if (!onFocus) {
      inputRef.current?.focus();
    }
  }, [onFocus]);

  const getSearchHistoryFromAsyncStorage = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('searchHistory');

      setSearchHistoryArray(jsonValue != null ? JSON.parse(jsonValue) : []);
    } catch (e) {
      console.log('error', e);
    }
  };

  useEffect(() => {
    getSearchHistoryFromAsyncStorage();
  }, []);

  const setSearchHistoryToAsyncStorage = async (value: string) => {
    try {
      if (value) {
        const filteredArray = searchHistoryArray.filter(item => item !== value);

        const jsonValue = JSON.stringify(
          [value, ...filteredArray].slice(0, 20),
        );
        await AsyncStorage.setItem('searchHistory', jsonValue);
      }
    } catch (e) {
      console.log('error', e);
    }
  };

  const deleteItemFromSearchHistory = async (value: string) => {
    try {
      if (value) {
        const jsonValue = JSON.stringify(
          searchHistoryArray.filter(item => item !== value),
        );
        await AsyncStorage.setItem('searchHistory', jsonValue);
      }
    } catch (e) {
      console.log('error', e);
    }
  };

  const onSearchIconPress = (e: any) => {
    e.stopPropagation();
    if (onChange) {
      onChange(searchValue);
      setSearchHistoryToAsyncStorage(searchValue);
      getSearchHistoryFromAsyncStorage();
      inputRef.current?.blur();
    }
  };

  return (
    <>
      <View style={styles.shadow}>
        <View style={styles.searchWrapper}>
          <TouchableOpacity
            style={styles.searchIcon}
            onPress={onSearchIconPress}>
            <SearchIcon width={17} height={17} />
          </TouchableOpacity>
          <TextInput
            style={styles.searchInput}
            placeholder="Search products..."
            value={searchValue}
            onFocus={() => {
              setisSearchHistoryVisible(true);
              if (onFocus) {
                onFocus();
              }
            }}
            onBlur={() => setisSearchHistoryVisible(false)}
            onChange={({nativeEvent: {text}}) => {
              setSearchValue(text);
            }}
            ref={inputRef}
          />
        </View>
        {isSearchHistoryVisible && (
          <View style={styles.searchHistoryWrapper}>
            <Text>Search History: </Text>
            {searchHistoryArray
              .filter(item => item.includes(searchValue))
              .map(item => (
                <TouchableOpacity
                  style={styles.searchHistoryItem}
                  onPress={() => {
                    setSearchValue(item);
                    if (onChange) {
                      onChange(item);
                      setSearchHistoryToAsyncStorage(item);
                      getSearchHistoryFromAsyncStorage();
                      inputRef.current?.blur();
                    }
                  }}>
                  <Text>{item}</Text>
                  <TouchableOpacity
                    style={styles.removeIcon}
                    onPress={() => {
                      deleteItemFromSearchHistory(item);
                      getSearchHistoryFromAsyncStorage();
                    }}>
                    <RemoveIcon width={15} height={15} />
                  </TouchableOpacity>
                </TouchableOpacity>
              ))}
          </View>
        )}
      </View>
    </>
  );
};

export default Search;
