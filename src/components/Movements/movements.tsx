import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { IGasto } from "./interface";
import { stylesMovements } from "./styleMovements";
import { MotiView, AnimatePresence, MotiText } from "moti";


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
          <AnimatePresence exitBeforeEnter>
            <MotiText 
              style={ data.type === 1 ? stylesMovements.value : stylesMovements.expenses }
              from={{
                translateX: 100,
              }}
              animate={{
                translateX: 0,
              }}
              transition={{
                type: 'timing',
                duration: 500,
              }}
            >
              {data.type === 1 ? `R$ ${data.value}` : `R$ -${data.value}`}
            </MotiText>
          </AnimatePresence>
          ) : (
            <AnimatePresence exitBeforeEnter>
              <View style={stylesMovements.skeleton}></View>
            </AnimatePresence>
          )
        }

      </View>
    </TouchableOpacity>
  );
}