import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
 
 
 
const Separator = () => (
  <View style={styles.separator} />
);

export   function Card(props) {
  if (props.visibleTabs.isApp2Visible){
  return (
    
     <View>
      <Text>
          App2
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


export default   Card;