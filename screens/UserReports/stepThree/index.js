import React from 'react';
import { Text, View } from 'react-native';
import { RadioButtonGroup, RadioButtonItem } from 'expo-radio-button'
import styles from './styles';

export default StepThree = ({ data }) => {

  const RATING_NUM = ['1', '2', '3', '4', '5'];

  const { setters, values } = data;

  return (
    <>
      <View style={styles.container}>
        <View style={styles.form}>
          <View style={[styles.checkBox, styles.marginTop]}>
            <RadioButtonGroup
              containerStyle={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: 10 }}
              selected={values.cleanliness}
              onSelected={setters.setCleanliness}
              radioBackground="green"
              size={28}
            >
              {
                RATING_NUM.map((rate) => (
                  <RadioButtonItem
                    key={rate}
                    value={rate}
                    label={rate}
                    style={styles.marginLeft}
                  />
                ))
              }
            </RadioButtonGroup>
          </View>
          <View style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: 320
          }}>
            <Text style={{ fontSize: 12, color: '#4c4c4d' }}>sucio</Text>
            <Text style={{ fontSize: 12, color: '#4c4c4d' }}>limpio</Text>
          </View>
        </View>
      </View>
    </>
  )
}

