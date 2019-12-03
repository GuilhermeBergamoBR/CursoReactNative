import React from 'react';
import {Text, View} from 'react-native';
import Padrao from '../estilo/Padrao';
// export default props => <Text>{props.texto}</Text>;

export default props => (
  <View>
    <Text style={Padrao.ex}>Arrow 1: {props.texto}</Text>
    <Text style={Padrao.ex}>Arrow 2: {props.texto}</Text>
  </View>
);

// export default props => {
// return [
// <Text style={Padrao.ex} key={1}>
// Arrow 1: {props.texto}
// </Text>,
// ];
// };
