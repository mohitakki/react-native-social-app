import React from 'react';
import {
  Button,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import CardImageSlider from '../molecules/CardImageSlider';
import SmileSvg from '../atoms/Smile';
import SearchSvg from '../atoms/SearchSvg';
import ChatSvg from '../atoms/ChatSvg';
import {useRef} from 'react';
import {useMemo} from 'react';
import {useCallback} from 'react';
import BottomSheet from '@gorhom/bottom-sheet';

const {width, height} = Dimensions.get('screen');

const PostCard = () => {
  // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // callbacks
  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);

  const openBottomSheet = () => {
    bottomSheetRef.current.expand();
    
  };
  return (
    <View style={styles.container}>
      <View style={styles.cardView}>
        <View style={styles.detailSection}>
          <View style={styles.detailSectionLeft}>
            <Image
              style={styles.userImage}
              resizeMode="contain"
              source={{
                uri: 'https://images.wondershare.com/repairit/images2021/author/mack-wilson.png',
              }}
            />
            <View style={styles.userDetail}>
              <Text style={styles.name}>John Doe</Text>
              <Text style={styles.lastseen}>2 Days ago</Text>
            </View>
          </View>
          <View style={styles.detailSectionRight}>
            <TouchableOpacity onPress={() => {}}>
              <LinearGradient
                start={[0, 0.5]}
                end={[1, 0.5]}
                colors={['#4DE688', '#4AAE9B']}
                style={{borderRadius: 24}}>
                <View style={styles.circleGradient}>
                  <Text style={styles.visit}>Colleagues</Text>
                </View>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.cardImageSlider}>
          <CardImageSlider />
        </View>
        <View style={styles.cardBottomSection}>
          <View style={styles.topSmileSection}>
            <TouchableOpacity onPress={() => openBottomSheet()}>
              <Text style={styles.smileText}>😘 23</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.smileContainer}
              onPress={()=>openBottomSheet()}>
              <Text style={styles.smileText}>😛 23</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>openBottomSheet()}
              style={{...styles.smileContainer, borderColor: 'transparent'}}>
              <Text style={styles.smileText}>3+ More</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.smileText}>3 Comments</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomSmileSection}>
            {/* <TouchableOpacity> */}
            <SmileSvg width={12} height={12} strokeWidth={2} stroke="#6C798E" />
            {/* </TouchableOpacity> */}
            <View style={styles.saperator}></View>
            {/* <TouchableOpacity> */}
            <ChatSvg width={12} height={12} strokeWidth={2} stroke="#6C798E" />
            {/* </TouchableOpacity> */}
          </View>
        </View>
      </View>
      <BottomSheet
        ref={bottomSheetRef}
       style={{
        borderTopLeftRadius:scale(24),
        borderTopRightRadius:scale(24),
        backgroundColor:'#c1c1c1'
       }}
        index={-1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}>
        <View style={styles.contentContainerSheet}>
          <TouchableOpacity onPress={() => bottomSheetRef.current.close()}>
          {/* <Text>Awesome 🎉</Text> */}
          <View style={{...styles.topSmileSection, justifyContent:'space-evenly', width:'100%', marginTop:verticalScale(12),
          paddingBottom:verticalScale(12),
           borderBottomColor:'#c1c1c1', borderBottomWidth:scale(1) }}>
            <TouchableOpacity onPress={() => bottomSheetRef.current.close()}>
              <Text style={styles.smileText}>😘 23</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.smileContainer}
              onPress={()=>bottomSheetRef.current.close()}>
              <Text style={styles.smileText}>😛 23</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => bottomSheetRef.current.close()}>
              <Text style={styles.smileText}>😘 23</Text>
            </TouchableOpacity>
           
          </View>
         {new Array(4).fill(0).map((value) => (
             <View style={{...styles.detailSectionLeft, marginLeft:scale(24)}}>
             <Image
               style={{...styles.userImage, width:scale(32), height:verticalScale(32)}}
               resizeMode="contain"
               source={{
                 uri: 'https://images.wondershare.com/repairit/images2021/author/mack-wilson.png',
               }}
             />
             <View style={styles.userDetail}>
               <Text style={{...styles.name, fontSize:scale(12), fontWeight:'400', marginLeft:scale(8)}}>John Doe</Text>
             </View>
            </View>
         ))}
          </TouchableOpacity>
        </View>
      </BottomSheet>
    </View>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    padding: scale(12),
  },
  cardView: {
    flex: 1,
    borderColor: '#F9F9F9',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: scale(12),
    padding: scale(10),
  },
  detailSection: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: scale(12),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  detailSectionLeft: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailSectionRight: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  userDetail: {
    height: verticalScale(45),
    justifyContent: 'space-around',
    marginLeft: moderateScale(4),
  },
  userImage: {
    width: scale(45),
    height: verticalScale(45),
  },
  name: {
    fontSize: scale(14),
    fontWeight: '600',
  },
  lastseen: {
    fontSize: scale(12),
    color: '#999',
  },
  rightButton: {
    borderRadius: scale(50) /*1*/,
    border: '10px solid transparent' /*2*/,
    background: 'linear-gradient(45deg,red,blue) border-box',
  },
  circleGradient: {
    backgroundColor: '#f1f1f1',
    borderRadius: scale(24),
    borderColor: '#008f68',
    borderWidth: 1,
  },
  visit: {
    margin: 4,
    paddingHorizontal: 6,
    textAlign: 'center',
    backgroundColor: 'transparent',
    color: '#008f68',
    fontSize: scale(12),
  },
  cardImageSlider: {
    // width: width - scale(24),
    backgroundColor: '#D6D7DC',
    borderRadius: scale(12),
    height: height / 2,
    marginTop: verticalScale(12),
  },
  cardBottomSection: {
    marginTop: verticalScale(10),
    paddingHorizontal: scale(4),
  },
  topSmileSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  smileContainer: {
    borderColor: '#6C798E',
    backgroundColor: '#f1f1f1',
    borderWidth: scale(1),
    borderRadius: scale(12),
    paddingHorizontal: scale(5),
    paddingVertical: verticalScale(3),
  },
  smileText: {
    color: '#6C798E',
  },
  bottomSmileSection: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
    height: 30,
    marginVertical: verticalScale(20),
    // backgroundColor:'red',

    // paddingVertical:verticalScale(10)
    padding: scale(4),
  },
  saperator: {
    height: verticalScale(26),
    width: 1,
    backgroundColor: '#6C798E',
  },
  containerSheet: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainerSheet: {
    flex: 1,
    alignItems: 'center',
  },
});
