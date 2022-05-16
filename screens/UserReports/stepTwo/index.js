import React from 'react'
import { View, Text } from 'react-native';
import CheckBox from 'expo-checkbox';
import styles from './styles';

export default StepTwo = ({ data }) => {

const { setters, values } = data;

return (
  <>
    <View style={styles.container}>
      <View style={styles.form}>
          <View style={[styles.checkBox, styles.marginTop]}>
            <CheckBox
                value={values.tires}
                onValueChange={setters.setTires}
                style={styles.checkBoxSize}
            />
            <Text style={styles.marginLeft}>Rueda de auxilio</Text> 
          </View>
          <View style={[styles.checkBox, styles.marginTop]}>
            <CheckBox
                value={values.securityKit}
                onValueChange={setters.setSecurityKit}
                style={styles.checkBoxSize}
            />
            <Text style={styles.marginLeft}>Kit de seguridad</Text>
          </View>
          <View style={[styles.checkBox, styles.marginTop]}>
            <CheckBox
                value={values.documents}
                onValueChange={setters.setDocuments}
                style={styles.checkBoxSize}
            />
            <Text style={styles.marginLeft}>Documentos</Text> 
          </View>
      </View>
    </View>
  </>
)
}
