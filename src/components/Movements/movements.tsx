import { View, Text, TouchableOpacity } from "react-native";

import { IGasto } from "./interface";
import { stylesMovements } from "./styleMovements";


type tipagem = {
  data: IGasto
}

export function Movements({data}: tipagem) {
  return (
    <TouchableOpacity style={stylesMovements.container}>
      <Text style={stylesMovements.date}>{ data.date }</Text>

      <View style={stylesMovements.content}>
        <Text style={stylesMovements.label}>{ data.label }</Text>

        <Text 
          style={ data.type === 1 ? stylesMovements.value : stylesMovements.expenses }
        >
          {data.type === 1 ? `R$ ${data.value}` : `R$ -${data.value}`}
        </Text>

      </View>
    </TouchableOpacity>
  );
}