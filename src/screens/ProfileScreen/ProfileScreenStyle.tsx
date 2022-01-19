import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  containerCard: {
    width: '100%',
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    borderRadius: 25,
    fontSize: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  TitleProfile: {
      marginTop: 20,
    fontSize: 20,
    textAlign: 'left',
    fontWeight: 'bold',
    color: '#000',
  },
});
