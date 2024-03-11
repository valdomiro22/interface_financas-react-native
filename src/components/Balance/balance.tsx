import { 
  View, 
  Text,
 } from "react-native";
import { styles } from "./stylesBalance";


type tipagem = {
  gastos: string,
  saldo: string
}

export function Balance({saldo, gastos}: tipagem) {
  return (
    <View style={styles.container}>

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

    </View>
  ); 
}