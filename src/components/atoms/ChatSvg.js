import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

const ChatSvg = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 60 60"
    style={{
      enableBackground: 'new 0 0 60 60',
    }}
    xmlSpace="preserve">
    <G {...props}>
      <Path d="M57.347 1.793H15.653A2.656 2.656 0 0 0 13 4.446v7.347H2.653A2.656 2.656 0 0 0 0 14.446v43.761l9.414-9.414h34.933A2.656 2.656 0 0 0 47 46.14v-7.347h10.347A2.656 2.656 0 0 0 60 36.14V4.446a2.656 2.656 0 0 0-2.653-2.653zM45 46.14c0 .36-.293.653-.653.653H8.586L2 53.379V14.446c0-.36.293-.653.653-.653h41.694c.36 0 .653.293.653.653V46.14zm13-10c0 .36-.293.653-.653.653H47V14.446a2.656 2.656 0 0 0-2.653-2.653H15V4.446c0-.36.293-.653.653-.653h41.694c.36 0 .653.293.653.653V36.14z" />
    </G>
  </Svg>
);

export default ChatSvg;
