import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text} from 'react-native';
import RootStackParamList from '../../state/RootParam';

interface ItemDetailsScreenProps
  extends NativeStackScreenProps<RootStackParamList, 'ViewItem'> {
  // other props ...
}

const ItemDetailsScreen: React.FC<ItemDetailsScreenProps> = ({route}) => {
  return (
    <View>
      <Text>{route.params.Name}</Text>
      <Text>{route.params.Instructor}</Text>
      <Text>{route.params.Duration}</Text>
      <Text>{route.params.SessionDate.toDateString()}</Text>
    </View>
  );
};

export default ItemDetailsScreen;
