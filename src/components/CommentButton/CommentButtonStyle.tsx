import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  BlackButton: {
    borderWidth: 2,
    borderStyle: 'solid',
    backgroundColor: '#5AA258',
    zIndex: 9999,
    height: 45,
    width: 45,
    borderColor: '#1a5300',

    borderStartColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});
