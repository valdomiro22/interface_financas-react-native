import { View, Text } from "react-native";

import { IGasto } from "./interface";


type tipagem = {
  data: IGasto
}

export function Movements({data}: tipagem) {
  return (
    <View>
      <Text>{ data.label }</Text>
    </View>
  );
}