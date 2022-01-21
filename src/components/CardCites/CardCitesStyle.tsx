import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  containerCard: {
    width: '90%',
    backgroundColor: '#fdfdfd',
    borderRadius: 15,
    flexDirection: 'row',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginTop: 10,
    elevation: 5,
  },

  containerInfo :{
    padding: 18,
    width: '70%'
  },
  containerInfoText:{
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000'
  },
  containerInfoDescription:{
    fontSize: 8,
    marginTop: 8,
    fontWeight: 'normal',
    color: '#000'
  },
  containerInfoLink:{
    fontSize: 10,
    marginTop: 8,

    fontWeight: 'bold',
    color: '#1a53bb'
  },
  containerDate:{
    padding: 10,
    width: '30%',
    justifyContent: 'center',
  }

});
