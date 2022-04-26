import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { useNavigation, NavigationContainer } from '@react-navigation/native'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
// import 'react-native-gesture-handler';

const MenuScreen = () => {
  const nav = useNavigation();

  return (
    <View style={styles.container}>
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
  const onSubmit = (d) => Alert.alert(JSON.stringify(d));

  return (
    <View>
      <form onSubmit={onSubmit}>
        <label>
          <Text>Player:</Text>
          <input name="player1"/>
        </label>
        <label>
          <Text>Player:</Text>
          <input name="player2"/>
        </label>
        <label>
        <Text>Player:</Text>

          <input name="player3"/>
        </label>
        <label>
        <Text>Player:</Text>

          <input name="player4"/>
        </label>

        <input type="submit" value="Let's go" />
      </form>
    </View>
  );
}

const RankingScreen = () => {
  const nav = useNavigation();

    return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Pressable style={styles.button} title="Add Score" onPress={() => nav.navigate("NewScore")}>
          <Text style={styles.buttonText}>Player 1</Text>
        </Pressable>
        <Pressable style={styles.button} title="Add Score" onPress={() => nav.navigate("NewScore")}>
          <Text style={styles.buttonText}>Player 2</Text>
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
    <View>
      <Text>New Score</Text>
    </View>
  );
}


const Stack = createStackNavigator();

export const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Menu" component={MenuScreen} />
    <Stack.Screen name="NewRanking" component={NewRankingScreen} />
    <Stack.Screen name="Ranking" component={RankingScreen} />
    <Stack.Screen name="NewScore" component={NewScoreScreen} />
  </Stack.Navigator>
);

const App = () => (
  <NavigationContainer >
    <AppNavigator />
  </NavigationContainer>
);

export default App;

export const PlayerButton = (props) => (
  <View style={[styles.playerButton, props.topThree && { backgroundColor: 'ivory' }]} />
);

export const PlayerText = (props) => (
  <Text style={[styles.playerText, props.topThree && { color: 'green'}]} />
);

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
  navbar: {
    height: 80,
    width: '100%',
    backgroundColor: 'blue',
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

