import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    form: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    marginLeft: {
      marginLeft: 20,
    },
    marginTop: {
      marginTop: 10,
      alignSelf: 'center'
    },
    marginBottom: {
      marginBottom: 15,
    },
    input: {
      borderBottomWidth: 1,
      borderColor: 'gray',
      width: 300,
      textAlign: 'center',
      padding: 10
    }
})