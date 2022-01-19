import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },

  containerCard: {
    marginTop: 10,
    padding: 13,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#c7c7c7',
  },

  textCard: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#000',
  },
  containerItems: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    width: '80%',
    height: '80%',
    padding: 15,
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 40,
    marginTop: -40,
  },
  itemMenu: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    backgroundColor: '#EFF4F0',
    borderRadius: 25,
    width: 130,
    fontSize: 15,
    padding: 10,
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
