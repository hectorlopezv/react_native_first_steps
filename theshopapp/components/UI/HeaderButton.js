import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const CustomHeaderButton = props => {
  return (
    <HeaderButton
      {...props}
      IconComponent={MaterialIcons}
      iconSize={23}
      color="blue"
    />
  );
};
export default CustomHeaderButton;
