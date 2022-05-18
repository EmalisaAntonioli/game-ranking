import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { useNavigation, NavigationContainer } from '@react-navigation/native'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { FlatList } from 'react-native-gesture-handler';
import React, {component} from 'react';

// Views
const MenuScreen = () => {
  const nav = useNavigation();
  state ={
    data:[]
  }

  // fetchData= async() => {
  //   const response = await fetch('http://192.168.0.102:3000/person')
  //   const person = await response.json();
  //   setState({data: person})
  // }

  return (
    <View style={styles.container}>
      {/* <FlatList data={state.data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) =>
      <View>
        <Text>{item.name}</Text>
      </View>} */}

      <ScrollView showsVerticalScrollIndicator={false}>
        <Pressable style={styles.button} onPress={() => nav.navigate("NewRanking")}>
          <Text style={styles.buttonText}>New Ranking</Text>
        </Pressable>
        <Pressable style={styles.button} onPress = {() => nav.navigate("Ranking")}>
          <Text style={styles.buttonText}>Ranking</Text>
        </Pressable>
      </ScrollView>

    </View>
  );  
}

const NewRankingScreen = () => {
  const nav = useNavigation();
  // const onSubmit = (d) => Alert.alert(JSON.stringify(d));

  return (
    <View style={styles.container}>      
        <Text style={styles.simpleText}>Player 1</Text>
        <TextInput style={styles.inputBox} />
      
        <Text style={styles.simpleText}>Player 2</Text>
        <TextInput style={styles.inputBox} />
  
      <Text style={styles.simpleText}>Player 3</Text>

      <TextInput style={styles.inputBox} />
    
      <Text style={styles.simpleText}>Player 4</Text>
      <TextInput style={styles.inputBox} />
      <Text style={styles.simpleText}>Type of scoring</Text>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Highest Wins</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Lowest Wins</Text>
        </Pressable>
      </View>

      <Pressable style={styles.button} title="Confirm" onPress={() => nav.navigate("Ranking")}>
        <Text style={styles.buttonText}>Confirm</Text>
      </Pressable>
    </View>
  );
}

const RankingScreen = () => {
  const nav = useNavigation();

    return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Pressable style={styles.button} title="Add Score" onPress={() => nav.navigate("NewScore")}>
          <Text style={styles.buttonText}>Player 1 : 25</Text>
        </Pressable>
        <Pressable style={styles.button} title="Add Score" onPress={() => nav.navigate("NewScore")}>
          <Text style={styles.buttonText}>Player 2 : 20</Text>
        </Pressable>

        <Pressable style={styles.button} title="Add Score" onPress={() => nav.navigate("NewScore")}>
          <Text style={styles.buttonText}>Player 3 : 17</Text>
        </Pressable>
        <Pressable style={styles.button} title="Add Score" onPress={() => nav.navigate("NewScore")}>
          <Text style={styles.buttonText}>Player 4 : 12</Text>
        </Pressable>
      </ScrollView>
      
      {/* not sure if the status bar is necessary / what it does */}
      <StatusBar style="auto" />
    </View>
  );
}

const NewScoreScreen = () => {
  const nav = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.simpleText}>New Score : </Text>
      <TextInput style={styles.inputBox} keyboardType='numeric' />
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} title="Add" onPress={() => nav.navigate("Ranking")}>
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
        <Pressable style={styles.button} title="Subtract" onPress={() => nav.navigate("Ranking")}>
          <Text style={styles.buttonText}>-</Text>
        </Pressable>
      </View>

    </View>
  );
}

// Navigation
const Stack = createStackNavigator();

export const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Menu" component={MenuScreen} />
    <Stack.Screen name="NewRanking" component={NewRankingScreen} />
    <Stack.Screen name="Ranking" component={RankingScreen} />
    <Stack.Screen name="NewScore" component={NewScoreScreen} />
  </Stack.Navigator>
  );

// Main App
const App = () => (  
  <NavigationContainer >
    <AppNavigator />
  </NavigationContainer>);

export default App;

// Styles
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightpink',
    height: 50,
    width: 180,
    margin: 10,
    borderRadius: 30,
  },
  buttonContainer: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 60,
  },
  inputBox: {
    borderColor: 'lightpink',
    borderWidth: 1,
    width: 300,
    borderRadius: 30,
    margin: 10,
    color: 'black',
    paddingStart: 25,
    paddingBottom: 2,
    padding: 1,
  },
  navbar: {
    height: 80,
    width: '100%',
    backgroundColor: 'blue',
  },
  simpleText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
  playerButton: {
    backgroundColor: 'ivory',
    height: 80,
    width: 300,
    borderRadius: 30,
    flexDirection: 'column',
    margin: 10,
    padding: 12,
    // justifyContent: 'center',
    // alignContent: 'center',
    // textAlign: 'center',
  },
  playerText: {
    color: 'lightpink',
    fontSize: 40,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  }
});

