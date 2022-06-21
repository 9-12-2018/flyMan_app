import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    image: {
        resizeMode: "contain",
        width: 150,
        height: 80,
        alignSelf: 'center',
        marginBottom: 12
    },
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    card: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        textAlign: 'center',
        fontSize: 16,
        marginBottom: 10
    },
    screen_title: {
        textAlign: 'center',
    },
    actionButtons: {
        width: 25,
        borderRadius: 50,
    },
    question_title: {
        textAlign: 'center',
        padding: 15,
        fontSize: 22
    },
    question_buttons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    }
});