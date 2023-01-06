import { Text,Platform,useWindowDimensions} from 'react-native'
import Animated,{FadeInDown, FadeInUp,FadeOutDown,FadeOutUp} from 'react-native-reanimated'

 const Toaster = ({text}) => {
  const {width,height} = useWindowDimensions()

  return (
   <Animated.View
      entering={FadeInDown}
      exiting={FadeOutDown}
      style={{
        width:"90%",
      
        backgroundColor: Platform.OS === "android" ? "black" : "rgba(0,0,0,0.8)",
        position: "absolute",
        padding: 10,
        alignItems: "center",
        bottom: height>700? "10%":"30%" ,
        left: 20,
        right: 20,
        borderRadius: 8,
        zIndex: 1000,
      }}
    >
      <Text style={{color: 'white', fontSize: 24}}>{text}</Text>
    </Animated.View>
  );}

export default Toaster