import React from "react";
import { ScrollView, View, StyleSheet, Image } from "react-native";
import MyAppHeader from "../../components/MyAppHeader";
import MyAppText from "../../components/MyAppText";
import { mockClothing } from "../../MockData";


function Womens({ navigation }) {

  const clothes = mockClothing.womens;

  return (
    <View style={styles.container}>
      <MyAppHeader color={'#aa6468'}>Womens</MyAppHeader>
      <ScrollView vertical>
        {clothes.map((item) => {
          return (
            <View style={styles.itemContainer}>
              <Image key={item.id} source={{ uri: item.url }} style={styles.itemImg} />
              <MyAppText style={{textAlign: 'start'}} size={14}>{item.name.toUpperCase()}</MyAppText>
            </View>
          )
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
  },
  itemContainer: {
    flex: 1, 
    width: '100%', 
    marginBottom: 15, 
    alignItems: 'center',
    height: 200
  },
  itemImg: {
    flex: 1,
    width: '80%',
    
  }
});

export default Womens;
