import { View, Text,StyleSheet, Pressable } from 'react-native'
import React,{useState,useEffect} from 'react'
import * as Location from 'expo-location';
import MapView,{Marker,Polyline} from 'react-native-maps';
const Setting = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [text, setText] = useState("Waiting..");
  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        setText(errorMsg);
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setText(JSON.stringify(location))
    })();
    let text = 'Waiting..';

    if (errorMsg) {
     setText(errorMsg);
    } else if (location) {
      setText(JSON.stringify(location));
    }
    
  }, []);
  return (
    <View style={styles.container}>
     <View style={styles.header}>
     <Text>Location Page</Text>
      <Text style={{color: 'white'}}>{text}</Text>
      
      {!location && <Pressable onPress={
        async ()=>{
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            setText(errorMsg);
            return;
          }

          let location = await Location.getCurrentPositionAsync({});
          setLocation(location);
        }
      } style={{backgroundColor: 'white', padding: 10, borderRadius: 10}}>
        <Text>Request Location</Text>
      </Pressable> }
     </View>
     <MapView style={{flex: 4}}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
     >
     <Marker coordinate={{latitude: 37.78825,longitude: -122.4324}}
      title="Start"
      
      draggable
      onDragEnd={(e) => console.log(e.nativeEvent.coordinate)}
      />
     <Marker coordinate={{latitude: 37.58810,longitude: -122.4324}}
      title="Distination"
      description="Some description"
      draggable
      />
      </MapView>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Setting