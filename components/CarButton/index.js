import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import styles from './styles';

export default function CarButton({ title, icon, onPress }) {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          {!title && <AntDesign name={icon} size={40} color="black" />}
          {title && <Text style={styles.buttonText}>{title}</Text>}
        </TouchableOpacity>
    </View>
  )
}
