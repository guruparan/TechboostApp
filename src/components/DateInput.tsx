import React, {useState, useEffect, useRef} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {useTheme} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface DateInputProps {
  onChange: (newDate: Date) => void;
  value: Date;
}

const DateInput: React.FC<DateInputProps> = ({onChange, value}) => {
  const {colors} = useTheme();

  const isInitialMount = useRef(true);
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const defaultValue = value || new Date();
  const [month, setMonth] = useState(defaultValue.getMonth());
  const [year, setYear] = useState(defaultValue.getFullYear());
  const [day, setDay] = useState(defaultValue.getDate());

  useEffect(() => {
    if (onChange && !isInitialMount.current) {
      onChange(new Date(year, month, day));
    } else {
      isInitialMount.current = false;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [day, month, year]);

  const updateMonth = (val: number) => {
    let newVal = month + val;

    if (newVal === -1) {
      newVal = 11;
    }

    if (newVal === 12) {
      newVal = 0;
    }

    const date = new Date(year, newVal + 1, 0).getDate();
    if (day > date) {
      setDay(date);
    }

    setMonth(newVal);
  };

  const updateDay = (val: number) => {
    let newVal = day + val;
    const date = new Date(year, month + 1, 0);

    if (newVal < 1) {
      newVal = date.getDate();
    }

    if (newVal > date.getDate()) {
      newVal = 1;
    }

    setDay(newVal);
  };

  const updateYear = (val: number) => {
    const newVal = year + val;
    const date = new Date(newVal, month + 1, 0).getDate();

    if (day > date) {
      setDay(date);
    }

    setYear(newVal);
  };

  return (
    <View style={styles.container}>
      <View style={styles.fieldWrap}>
        <TouchableOpacity onPress={() => updateDay(1)}>
          <AntDesign name="caretup" size={24} color={colors.text} />
        </TouchableOpacity>
        <Text>{day}</Text>
        <TouchableOpacity onPress={() => updateDay(-1)}>
          <AntDesign name="caretdown" size={24} color={colors.text} />
        </TouchableOpacity>
      </View>
      <View style={styles.fieldWrap}>
        <TouchableOpacity onPress={() => updateMonth(1)}>
          <AntDesign name="caretup" size={24} color={colors.text} />
        </TouchableOpacity>
        <Text>{months[month]}</Text>
        <TouchableOpacity onPress={() => updateMonth(-1)}>
          <AntDesign name="caretdown" size={24} color={colors.text} />
        </TouchableOpacity>
      </View>
      <View style={styles.fieldWrap}>
        <TouchableOpacity onPress={() => updateYear(1)}>
          <AntDesign name="caretup" size={24} color={colors.text} />
        </TouchableOpacity>
        <Text>{year}</Text>
        <TouchableOpacity onPress={() => updateYear(-1)}>
          <AntDesign name="caretdown" size={24} color={colors.text} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
  fieldWrap: {alignItems: 'center', marginHorizontal: 10},
});

export default DateInput;
