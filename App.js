import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { useNavigation, NavigationContainer } from '@react-navigation/native'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

// Views
const MenuScreen = () => {
  const nav = useNavigation();

  return (
    <View style={styles.container}>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Pressable style={styles.button} onPress={() => nav.navigate("New Ranking")}>
          <Text style={styles.buttonText}>New Ranking</Text>
        </Pressable>
        <Pressable style={styles.button} onPress = {() => nav.navigate("Ranking")}>
          <Text style={styles.buttonText}>Ranking 1</Text>
        </Pressable>
        <Pressable style={styles.button} onPress = {() => nav.navigate("Ranking")}>
          <Text style={styles.buttonText}>Ranking 2</Text>
        </Pressable>
        <Pressable style={styles.button} onPress = {() => nav.navigate("Ranking")}>
          <Text style={styles.buttonText}>Ranking 3</Text>
        </Pressable>
        <Pressable style={styles.button} onPress = {() => nav.navigate("Ranking")}>
          <Text style={styles.buttonText}>Ranking 4</Text>
        </Pressable>
        <Pressable style={styles.button} onPress = {() => nav.navigate("Ranking")}>
          <Text style={styles.buttonText}>Ranking 5</Text>
        </Pressable>
        <Pressable style={styles.button} onPress = {() => nav.navigate("Ranking")}>
          <Text style={styles.buttonText}>Ranking 6</Text>
        </Pressable>
      </ScrollView>
      <View style={styles.footer}>
        <Text>Created by Emalisa Antonioli, 2022</Text>
      </View>
    </View>
  );  
}

const NewRankingScreen = () => {
  const nav = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.simpleText}>What's the name of the game?</Text>
      <TextInput style={styles.inputBox} />

      <Text style={styles.simpleText}>Who's playing?</Text>

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

      <Pressable style={styles.button} title="Confirm" onPress={() => nav.navigate("Game Ranking")}>
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
        <Pressable style={styles.button} title="Add Score" onPress={() => nav.navigate("New Score")}>
          <Text style={styles.buttonText}>Player 1 : 25</Text>
        </Pressable>
        <Pressable style={styles.button} title="Add Score" onPress={() => nav.navigate("New Score")}>
          <Text style={styles.buttonText}>Player 2 : 20</Text>
        </Pressable>

        <Pressable style={styles.button} title="Add Score" onPress={() => nav.navigate("New Score")}>
          <Text style={styles.buttonText}>Player 3 : 17</Text>
        </Pressable>
        <Pressable style={styles.button} title="Add Score" onPress={() => nav.navigate("New Score")}>
          <Text style={styles.buttonText}>Player 4 : 12</Text>
        </Pressable>
      </ScrollView>

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
    <Stack.Screen name="Game Ranking" component={MenuScreen} />
    <Stack.Screen name="Ranking" component={RankingScreen} />
    <Stack.Screen name="New Ranking" component={NewRankingScreen} />
    <Stack.Screen name="New Score" component={NewScoreScreen} />
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
  footer: {
    paddingBottom: 8,
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
  simpleText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  }
});

