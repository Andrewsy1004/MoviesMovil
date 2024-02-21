import { View, Text, StyleSheet } from "react-native";

export const ScreenStart = () => {
    return (
      <View style={styles.container}>
         <Text style={styles.text}>Movies App</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: '#000'
    },
    text: {
      fontSize: 40,
      fontWeight: 'bold',
      color: '#fff',
      textShadowColor: '#4b4949',
      textShadowOffset: {width: 2, height: 2},
      textShadowRadius: 5
    }
});