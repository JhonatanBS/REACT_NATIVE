import { Text, View, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./styles";

import { Participant } from "../../components/Participant";

export default function Home() {

  const participants = ["Daniela", "Nelio", "Matheus", "Tiago", "Bianca", "Peter", "Maik", "Diego", "Priscila"];

  function handleParticipantAdd() {
    console.log("You clicked here");
  }

  function handleParticipantRemove(name: string) {
   console.log(`You removed the ${name}`);
  }

  return(
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Learning React-Native
      </Text>

      <Text style={styles.date}>
        November 25th, 2023
      </Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Participant's name"
          placeholderTextColor= "#FFFFFF"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsHorizontalScrollIndicator={false}>
      {participants.map((participant) => {
        return <Participant 
                 key={participant} 
                 name={participant} 
                 onRemove={() => handleParticipantRemove(participant)}
               />
      })
      }
      </ScrollView>
    </View>
  )
}