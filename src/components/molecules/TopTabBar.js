import * as React from 'react';
import {View, useWindowDimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import PostCard from '../organisms/PostCard';
import { useRef } from 'react';

const FirstRoute = () => <PostCard />;

const SecondRoute = () => (
  <View style={{flex: 1, backgroundColor: '#F9F9F9'}} />
);

const renderScene = SceneMap({
  all: FirstRoute,
  family: SecondRoute,
  friends: SecondRoute,
  colleagues: SecondRoute,
  public: SecondRoute,
});

export default function TopTabBar() {

  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'all', title: 'All'},
    {key: 'family', title: 'Family'},
    {key: 'friends', title: 'Friends'},
    {key: 'colleagues', title: 'Colleagues'},
    {key: 'public', title: 'Public'},
  ]);

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: '#F9F9F9'}}
      style={{
        backgroundColor: 'white',
        // padding:12
      }}
      labelStyle={{
        color: '#6C798E',
        fontSize: scale(12),
        fontStyle: 'normal',
        fontWeight: '600',
        textTransform: 'capitalize',
        marginLeft: -16,
        marginRight:0
      }}
      activeColor={'black'}
      // indicatorContainerStyle={{
      //   backgroundColor:'green'
      // }}
      // scrollEnabled
    />
  );

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      renderTabBar={renderTabBar}
    />
  );
}
