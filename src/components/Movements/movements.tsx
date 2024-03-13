import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { IGasto } from "./interface";
import { stylesMovements } from "./styleMovements";


type tipagem = {
  data: IGasto
}

export function Movements({data}: tipagem) {
  const [showValue, setShowValue] = useState(false);  // Implementação do useState

  return (
    <TouchableOpacity 
      style={stylesMovements.container} 
      onPress={() => setShowValue(!showValue)}  // Coloca o showValue como true ou false
    >
      <Text style={stylesMovements.date}>{ data.date }</Text>

      <View style={stylesMovements.content}>
        <Text style={stylesMovements.label}>{ data.label }</Text>

        { showValue ? (
            <Text 
              style={ data.type === 1 ? stylesMovements.value : stylesMovements.expenses }
            >
              {data.type === 1 ? `R$ ${data.value}` : `R$ -${data.value}`}
            </Text>
          ) : (
            <View style={stylesMovements.skeleton}>

            </View>
          )
        }

      </View>
    </TouchableOpacity>
  );
}