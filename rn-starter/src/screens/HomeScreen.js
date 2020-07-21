import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {


  return (
    <View>
    <Text style={styles.text}>Cassandra's App</Text>
    <Button 
      onPress={() => props.navigation.navigate('Components')}
      title="Go to the components demo" 
    />
    <TouchableOpacity 
      onPress={() => props.navigation.navigate('List')}
    >
    <Text>Go to List demo</Text>
    </TouchableOpacity>
    <Button 
    onPress={() => props.navigation.navigate('Image')}
    title="Go to the Image demo" 
  />
    </View>
    );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
