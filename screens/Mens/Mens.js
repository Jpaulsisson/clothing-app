import React from "react";
import { SafeAreaView, StyleSheet, ScrollView } from "react-native";
import MyAppHeader from "../../components/MyAppHeader";
import { mockClothing } from "../../MockData";
import ProductPreview from "../../components/ProductPreview";

function Mens({ navigation }) {

  const MOCK_DATA = mockClothing.mens;

  return (
    <SafeAreaView style={styles.container}>
      <MyAppHeader style={styles.header}>Mens</MyAppHeader>
      <ScrollView vertical>
        {MOCK_DATA.map((item) => {
          return (
            <ProductPreview key={item.id} item={item} navigation={navigation} />
          )
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    color: '#217259',
    fontSize: 48,
  },
  link: {
    borderWidth: 2,
    borderColor: '#036f46',
    fontSize: 20,
    color: '#ddd'
  }
});

export default Mens;