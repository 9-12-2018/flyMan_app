import React from 'react'
import { View, Text } from 'react-native';
import CheckBox from 'expo-checkbox';
import styles from './styles';

export default StepFive = ({ data }) => {

  const { setters, values } = data;

  const services = [
    {
      value: values.cleanTask,
      setter: setters.setCleanTask,
      label: 'Lavado',
    },
    {
      value: values.inflateTireTask,
      setter: setters.setInflateTask,
      label: 'Aire en cubiertas',
    },
    {
      value: values.lampFixTask,
      setter: setters.setLampFixTask,
      label: 'Cambio de lámparas',
    }
  ]

  return (
    <>
      <View style={styles.container}>
        <View style={styles.form}>
          {services.map((s, i) => (
            <View style={[styles.checkBox, styles.marginTop]} key={s.label + i} >
              <CheckBox
                value={s.value}
                onValueChange={s.setter}
                style={styles.checkBoxSize}
              />
              <Text style={styles.marginLeft}>{s.label}</Text>
            </View>
          ))}
        </View>
      </View>
    </>
  )
}
