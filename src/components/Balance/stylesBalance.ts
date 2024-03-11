import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flexDirection: 'row',  // Alinhar um do lado do outro
    justifyContent: 'space-between',
    paddingStart: 18,
    paddingEnd: 18,
    marginTop: -24,  // Vai entrar pra dentro do elemento acima
    marginStart: 14,
    marginEnd: 14,
    borderRadius: 4,
    paddingTop: 22,
    paddingBottom: 22,
    zIndex: 99,  // Ficara sobre todos os outro elementos
  },
  item: {

  }, 
  itemTitle: {
    fontSize: 20,
    color: '#DADADA',
  }, 
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 6,
  },
  currentSymbol: {

  },
  balance: {
    fontSize: 22,
    color: '#2EC651',

  },
  expenses: {
    fontSize: 22,
    color: '#E74C3C',
  }
});