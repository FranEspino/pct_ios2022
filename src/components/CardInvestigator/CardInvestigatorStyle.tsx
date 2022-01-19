import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    containerCard: {
        marginTop: 20,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
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
    textCard: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#000',
    },
  
});