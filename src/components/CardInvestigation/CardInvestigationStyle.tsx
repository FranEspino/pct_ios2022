import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  containerCard: {
    marginTop: 20,
    width: '100%',
    height: '130%',
    borderRadius: 50,
  },
  containerInfo: {
    backgroundColor: '#4c474796',
    height: '60%',
    marginTop: 25,
    paddingLeft: 10,
    paddingBottom: 20,
    flex:1/6,
    justifyContent: 'flex-end',

  },
  textCardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    margin: 2,
  },
  image: {
    flex: 1,
    borderRadius: 50,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  textCardDescription: {
    marginTop: 2,
    fontSize: 11,
    color: '#000000',
    textAlign: 'left',
  },
  textCardDate: {
    marginTop: 2,
    fontSize: 11,
    color: '#000000',
    textAlign: 'left',
    fontWeight: 'bold',
  },
});
