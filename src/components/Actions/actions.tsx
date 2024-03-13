import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { stylesActios } from "./stylesActions";
import { AntDesign } from '@expo/vector-icons';


export function Actions() {
  return (
    <ScrollView 
      style={stylesActios.container}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      <TouchableOpacity style={stylesActios.actionButton}>
        <View style={stylesActios.areaButton}>
          <AntDesign name="addfolder" size={26} color="#000"/>
        </View>
        <Text style={stylesActios.labelButton}>Entradas</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={stylesActios.actionButton}>
        <View style={stylesActios.areaButton}>
          <AntDesign name="tagso" size={26} color="#000"/>
        </View>
        <Text style={stylesActios.labelButton}>Compras</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={stylesActios.actionButton}>
        <View style={stylesActios.areaButton}>
          <AntDesign name="creditcard" size={26} color="#000"/>
        </View>
        <Text style={stylesActios.labelButton}>Carteira</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={stylesActios.actionButton}>
        <View style={stylesActios.areaButton}>
          <AntDesign name="barcode" size={26} color="#000"/>
        </View>
        <Text style={stylesActios.labelButton}>Boletos</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={stylesActios.actionButton}>
        <View style={stylesActios.areaButton}>
          <AntDesign name="setting" size={26} color="#000"/>
        </View>
        <Text style={stylesActios.labelButton}>Conta</Text>
      </TouchableOpacity>
      
    </ScrollView>
  );
}