import { View, Text } from 'react-native';
import { styles } from './stylesHome';
import { Header } from '../../components/Header/header';
import { Balance } from '../../components/Balance/balance';


export function Home() {
  return (
    <View style={styles.container}>
      <Header name='Lucas Silva'/>

      <Balance />
    </View>
  );
}