import {Dimensions, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ChatSvg from '../atoms/ChatSvg';
import SearchSvg from '../atoms/SearchSvg';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

const TopHeader = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.icon}>
        <SearchSvg
          width={20}
          height={20}
          strokeWidth={5}
          stroke="#6C798E"></SearchSvg>
      </TouchableOpacity>
      <TouchableOpacity style={styles.icon}>
        <ChatSvg
          width={20}
          height={20}
          strokeWidth={5}
          stroke="#6C798E"></ChatSvg>
      </TouchableOpacity>
    </View>
  );
};

export default TopHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: moderateScale(10),
    paddingHorizontal: scale(32),
    shadowColor: '#999',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    height: verticalScale(50),
  },
  icon: {
    width: scale(18),
    height: verticalScale(18),
  },
});
