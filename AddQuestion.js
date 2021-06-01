import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
 
 
 
const Separator = () => (
  <View style={styles.separator} />
);

export function AddQuestion(props) {
  if (props.visibleTabs.isApp2Visible){
    return (
    
     <View>
      <Text>
         Add Question
        <Button title='Add Question'></Button>
      </Text>
    </View>
   );
  }
  return null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default   AddQuestion;