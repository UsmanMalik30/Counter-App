import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const App = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(prevCount => prevCount + 1);
  const resetit = () => setCount(prevCount => prevCount = 0);

  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <Text>{count}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={increment}
      >
        <Text>Increment</Text>
      </TouchableOpacity>
      
            <TouchableOpacity
        style={styles.reset}
        onPress={resetit}
      >
        <Text>Reset</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "green",
    padding: 10
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  },
  reset: {
   alignItems: "center",
    backgroundColor: "orange",
    padding: 10
  },
});

export default App;