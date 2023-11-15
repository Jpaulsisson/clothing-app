import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import * as Font from 'expo-font';

export default function MyAppText(props) {

  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'Thasadith': require('../assets/fonts/Thasadith-Regular.ttf')
      });
      setFontLoaded(true);
    }

    loadFont();
  }, [])

  if(!fontLoaded) {
    return <Text>Loading...</Text>
  }

  return (
    <Text style={{...props.style, fontFamily: 'Thasadith' }}>
      <Text>{props.children}</Text>
    </Text>
  )
};

