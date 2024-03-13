import { 
  View, 
  Text,
 } from "react-native";
import { styles } from "./stylesBalance";
import { MotiView } from "moti";


type tipagem = {
  gastos: string,
  saldo: string
}

export function Balance({saldo, gastos}: tipagem) {
  return (
    <MotiView 
      style={styles.container}
      from={{
        rotateX: '-100deg',
        opacity: 0,
      }}
      animate={{
        rotateX: '0deg',
        opacity: 1,
      }}
      transition={{
        type: 'timing',
        delay: 300,
        duration: 1200,
      }}
    >

      <View style={styles.item}>
        <Text style={styles.itemTitle}>Saldo</Text>
        <View style={styles.content}>
          <Text style={styles.currentSymbol}>R$</Text>
          <Text style={styles.balance}>{ saldo }</Text>
        </View>
      </View>

      <View style={styles.item}>
        <Text style={styles.itemTitle}>Gastos</Text>
        <View style={styles.content}>
          <Text style={styles.currentSymbol}>R$</Text>
          <Text style={styles.expenses}>{ gastos }</Text>
        </View>
      </View>

    </MotiView>
  ); 
}