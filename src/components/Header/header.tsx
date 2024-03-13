import { 
  View, 
  Text, 
  TouchableOpacity
} from "react-native";

import { styles } from "./stylesHeader";
import { Feather } from '@expo/vector-icons';
import {MotiView, MotiText} from 'moti';


type tipagem = {
  name: string,
}

export function Header({name}: tipagem) {
  return (
    <View style={styles.container}>
      <MotiView 
        style={styles.content}
        from={{
          translateY: -150,
          opacity: 0,
        }}
        animate={{
          translateY: 0,
          opacity: 1,
        }}
        transition={{
          type: 'timing',
          duration: 900,
          delay: 300,
        }}
      >
        
        <MotiText 
          style={styles.userName}
          from={{
            translateX: -300
          }}
          animate={{
            translateX: 0
          }}
          transition={{
            type: 'timing',
            duration: 800,
            delay: 800,
          }}
        >
          { name }
        </MotiText>

        <TouchableOpacity style={styles.buttonUser} activeOpacity={0.9}>
          <Feather name="user" size={28} color='#FFF' />
        </TouchableOpacity>

      </MotiView>
    </View>
  );
}