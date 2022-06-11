import React from 'react'
import { View, TextInput } from 'react-native';
import { RadioButtonGroup, RadioButtonItem } from 'expo-radio-button'
import styles from './styles';

export default StepFour = ({ data }) => {

  const { setters, values } = data;

  return (
    <>
      <View style={styles.container}>
        <View style={styles.form}>
          <View style={[styles.checkBox, styles.marginTop]}>
            <RadioButtonGroup
              containerStyle={{ display: 'flex', flexDirection: 'row', marginBottom: 10 }}
              selected={values.fuelLoad}
              onSelected={setters.setFuelLoad}
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
          <View style={styles.marginBottom}>
            {values.fuelLoad && (
              <TextInput
                multiline={true}
                numberOfLines={4}
                style={[styles.input, styles.marginTop]}
                placeholder="Ingrese el monto"
                value={values.fuelLoadPrice}
                onChangeText={setters.setFuelLoadPrice}
              />
            )}
          </View>
        </View>
      </View>
    </>
  )
}
