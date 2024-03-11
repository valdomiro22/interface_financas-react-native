import { 
  View, 
  Text, 
  TouchableOpacity
} from "react-native";

import { styles } from "./stylesHeader";
import { Feather } from '@expo/vector-icons';


type tipagem = {
  name: string,
}

export function Header({name}: tipagem) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.userName}>{ name }</Text>

        <TouchableOpacity style={styles.buttonUser} activeOpacity={0.9}>
          <Feather name="user" size={28} color='#FFF' />
        </TouchableOpacity>
      </View>
    </View>
  );
}