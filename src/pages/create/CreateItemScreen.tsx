import React, {useContext, useState} from 'react';
import {TextInput, View, Button} from 'react-native';
import AppContext from '../../state/AppContext';
import SessionDetail from '../../state/SessionDetail';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import DateInput from '../../components/DateInput';

function CreateItemScreen() {
  const {data, setData} = useContext(AppContext);
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [details, setDetails] = useState<SessionDetail>({
    Name: '',
    Duration: 0,
    Instructor: '',
    SessionDate: new Date(),
  });

  const onChangeText = (key: string, text: string) => {
    const updated = {...details};

    switch (key) {
      case 'Name':
        updated.Name = text;
        break;

      case 'Instructor':
        updated.Instructor = text;
        break;

      case 'Duration':
        updated.Duration = parseInt(text);
        break;

      default:
        break;
    }

    setDetails(updated);
  };

  return (
    <View style={{flex: 1}}>
      <TextInput
        placeholder="Name"
        onChangeText={text => onChangeText('Name', text)}
        value={details.Name}
      />

      <TextInput
        placeholder="Instructor"
        onChangeText={text => onChangeText('Instructor', text)}
        value={details.Instructor}
      />
      <TextInput
        placeholder="Duration"
        onChangeText={text => onChangeText('Duration', text)}
        value={details.Duration.toString()}
        keyboardType="number-pad"
      />
      <DateInput
        onChange={newDate => {
          const updated = {...details};
          updated.SessionDate = newDate;
          setDetails(updated);
        }}
        value={details.SessionDate}
      />
      <Button
        title="Save"
        onPress={() => {
          setData && setData([...data, details]);
          navigation.goBack();
        }}
      />
    </View>
  );
}

export default CreateItemScreen;
