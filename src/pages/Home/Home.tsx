import { View, Text } from 'react-native';
import { styles } from './stylesHome';
import { Header } from '../../components/Header/header';
import { Balance } from '../../components/Balance/balance';


const list = [
  {
    id: 1,
    label: 'Boleto conta luz',
    value: '300,99',
    date: '17/09/2022',
    type: 0
  },
  {
    id: 2,
    label: 'Pix Cliente X',
    value: '3.500.29',
    date: '12/09/2022',
    type: 0
  },
  {
    id: 3,
    label: 'Salário',
    value: '7.289,99',
    date: '28/09/2022',
    type: 0
  },
]

export function Home() {
  return (
    <View style={styles.container}>
      <Header name='Lucas Silva'/>

      <Balance 
        saldo='9.250.98'
        gastos='-527.83'
      />

      <Text style={styles.title}>Últimas movimentações</Text>
    </View>
  );
}