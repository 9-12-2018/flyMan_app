import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';

export default function CustomButton({ text, onPress, bkColor, txtColor }) {
    return (
        <Pressable
          style={[styles.button, { backgroundColor: bkColor }]}
          onPress={onPress}>
          <Text style={[styles.buttonText, { color: txtColor }]}>{text}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
    }
});