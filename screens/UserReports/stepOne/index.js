import React from 'react'
import { View } from 'react-native';
import { RadioButtonGroup, RadioButtonItem } from 'expo-radio-button'
import styles from './styles';

export default StepOne = ({ data }) => {
  const { setters, values } = data;

  return (
      <>
      <View style={styles.container}>
      <View style={styles.form}> 
          <RadioButtonGroup
            containerStyle={{ marginBottom: 10, display: 'flex', flexDirection: 'row', alignSelf: 'center' }}
            selected={values.damage}
            onSelected={setters.setDamage}
            radioBackground="green"
            size={30}
          >
          <RadioButtonItem 
              value={true} 
              label="Si" 
              style={styles.marginLeft}
          />
          <RadioButtonItem
              value={false}
              label="No" 
              style={styles.marginLeft} 
          />
          </RadioButtonGroup>
      </View>
      </View>
      </>
  )
}
