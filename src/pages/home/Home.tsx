import React, {useContext} from 'react';
import {Button, FlatList, Text, TouchableOpacity, View} from 'react-native';
import AppContext from '../../state/AppContext';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

function HomeScreen() {
  const {data} = useContext(AppContext);
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Add New Item"
        onPress={() => {
          navigation.navigate('AddItem');
        }}
      />
      <FlatList
        data={data}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ViewItem', item)}>
            <Text>{item.Name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default HomeScreen;
