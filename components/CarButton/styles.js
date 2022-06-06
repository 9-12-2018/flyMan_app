import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 15,
    },
    button: {
        width: 100,
        height: 100,
        borderRadius: 100/2,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 7, },
        shadowOpacity: 0.43,
        shadowRadius: 9.51, elevation: 15,
    },
    buttonText: {
        color: 'black',
    },
    isSelected: {
        backgroundColor: 'green',
    }
});