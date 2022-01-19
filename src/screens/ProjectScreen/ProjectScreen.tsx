import React, {useEffect} from 'react';
import {Dimensions, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import Pdf from 'react-native-pdf';

interface Props extends StackScreenProps<any, any> {}
const source = { uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf', cache: true };

const ProjectScreen = ({navigation}: Props) => {
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    }
});
  useEffect(() => {
    navigation.setOptions({
      /*Hidde the button tab */
      headerLeft: () => (
        <TouchableOpacity
          style={{marginLeft: 10}}
          onPress={() => navigation.goBack()}>
          <Text>
            <Icon name="arrow-back-outline" size={20} color="white" />
          </Text>
        </TouchableOpacity>
      ),
      headerTitleAlign: 'left',
    });
  }, []);

  return (
    <View style={styles.container}>
    <Pdf
        source={source}
        onLoadComplete={(numberOfPages,filePath) => {
            console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page,numberOfPages) => {
            console.log(`Current page: ${page}`);
        }}
        onError={(error) => {
            console.log(error);
        }}
        onPressLink={(uri) => {
            console.log(`Link pressed: ${uri}`);
        }}
        style={styles.pdf}/>
</View>
    
  );
};

export default ProjectScreen;
