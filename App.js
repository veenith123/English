import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Dimensions,
} from 'react-native';
import Constants from 'expo-constants';
import {ImageBackground,Image} from 'react-native';
import {ScrollView,TextInput} from 'react-native-gesture-handler';
import {Ionicons} from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
const { width } = Dimensions.get('window');
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Card } from 'react-native-paper';
import { Audio } from 'expo-av';
import { Video, AVPlaybackStatus } from 'expo-av';
import { WebView } from 'react-native-webview';

const Stack = createStackNavigator();

export default function App() {
    const [loaded] = useFonts({
    Regular: require('./images/BalsamiqSans-Regular.ttf'),
    Fredokaregular: require('./images/FredokaOne-Regular.ttf'),
  }); 
  
  if (!loaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
       
        <Stack.Screen name={'My English Library'} component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name={'Kite'} component={Kite} options={{ headerShown: false }} />
        <Stack.Screen name={'KiteReading'} component={KiteReading} options={{ headerShown: false }} />
        <Stack.Screen name={'KiteListening'} component={KiteListening} options={{ headerShown: false }} />
        <Stack.Screen name={'KiteExplanation'} component={KiteExplanation} options={{ headerShown: false }} />
        <Stack.Screen name={'KiteComprehension'} component={KiteComprehension} options={{ headerShown: false }} />
        <Stack.Screen name={'KiteVmdt'} component={KiteVmdt} options={{ headerShown: false }} />
        <Stack.Screen name={'KiteLookandthink'} component={KiteLookandthink} options={{ headerShown: false }} />
        <Stack.Screen name={'KiteQuiz'} component={KiteQuiz} options={{ headerShown: false }} />

        <Stack.Screen name={'Agfom'} component={Agfom} options={{ headerShown: false }} />
        <Stack.Screen name={'Agfom1'} component={Agfom1} options={{ headerShown: false }} />
        <Stack.Screen name={'Agfom1Reading'} component={Agfom1Reading} options={{ headerShown: false }} />
        <Stack.Screen name={'Agfom1Reading2'} component={Agfom1Reading2} options={{ headerShown: false }} />
        <Stack.Screen name={'Agfom1Reading3'} component={Agfom1Reading3} options={{ headerShown: false }} />
        <Stack.Screen name={'Agfom1Reading4'} component={Agfom1Reading4} options={{ headerShown: false }} />
        <Stack.Screen name={'Agfom1Listening'} component={Agfom1Listening} options={{ headerShown: false }} />
        <Stack.Screen name={'Agfom1Lat'} component={Agfom1Lat} options={{ headerShown: false }} />
        <Stack.Screen name={'Agfom1Quiz'} component={Agfom1Quiz} options={{ headerShown: false }} />

        <Stack.Screen name={'Agfom2'} component={Agfom2} options={{ headerShown: false }} />
        <Stack.Screen name={'Agfom2Reading'} component={Agfom2Reading} options={{ headerShown: false }} />
        <Stack.Screen name={'Agfom2Reading2'} component={Agfom2Reading2} options={{ headerShown: false }} />
        <Stack.Screen name={'Agfom2Reading3'} component={Agfom2Reading3} options={{ headerShown: false }} />
        <Stack.Screen name={'Agfom2Listening'} component={Agfom2Listening} options={{ headerShown: false }} />
        <Stack.Screen name={'Agfom2Test'} component={Agfom2Test} options={{ headerShown: false }} />
        <Stack.Screen name={'Agfom2Lat'} component={Agfom2Lat} options={{ headerShown: false }} />
        <Stack.Screen name={'Agfom2Quiz'} component={Agfom2Quiz} options={{ headerShown: false }} />

        <Stack.Screen name={'Agfom3'} component={Agfom3} options={{ headerShown: false }} />
        <Stack.Screen name={'Agfom3Reading'} component={Agfom3Reading} options={{ headerShown: false }} />
        <Stack.Screen name={'Agfom3Reading2'} component={Agfom3Reading2} options={{ headerShown: false }} />
        <Stack.Screen name={'Agfom3Reading3'} component={Agfom3Reading3} options={{ headerShown: false }} />
        <Stack.Screen name={'Agfom3Listening'} component={Agfom3Listening} options={{ headerShown: false }} />
        <Stack.Screen name={'Agfom3comprehension'} component={Agfom3comprehension} options={{ headerShown: false }} />
        <Stack.Screen name={'Agfom3activity'} component={Agfom3activity} options={{ headerShown: false }} />
        <Stack.Screen name={'Agfom3Lat'} component={Agfom3Lat} options={{ headerShown: false }} />
        <Stack.Screen name={'Agfom3Quiz'} component={Agfom3Quiz} options={{ headerShown: false }} />


        <Stack.Screen name={'Mice'} component={Mice} options={{ headerShown: false }} />
        <Stack.Screen name={'MiceReading'} component={MiceReading} options={{ headerShown: false }} />
        <Stack.Screen name={'MiceReading2'} component={MiceReading2} options={{ headerShown: false }} />
        <Stack.Screen name={'MiceListening'} component={MiceListening} options={{ headerShown: false }} />
        <Stack.Screen name={'Miceoppo'} component={Miceoppo} options={{ headerShown: false }} />
        <Stack.Screen name={'Micesingplu'} component={Micesingplu} options={{ headerShown: false }} />
        <Stack.Screen name={'MiceComprehension1'} component={MiceComprehension1} options={{ headerShown: false }} />
        <Stack.Screen name={'MiceComprehension2'} component={MiceComprehension2} options={{ headerShown: false }} />
        <Stack.Screen name={'MiceLat'} component={MiceLat} options={{ headerShown: false }} />
        <Stack.Screen name={'MiceQuiz'} component={MiceQuiz} options={{ headerShown: false }} />

        <Stack.Screen name={'I Like Bats'} component={Bats} options={{ headerShown: false }} />
        <Stack.Screen name={'BatReading'} component={BatReading} options={{ headerShown: false }} />
        <Stack.Screen name={'BatReading2'} component={BatReading2} options={{ headerShown: false }} />
        <Stack.Screen name={'BatsLat'} component={BatsLat} options={{ headerShown: false }} />
        <Stack.Screen name={'BatsQuiz'} component={BatsQuiz} options={{ headerShown: false }} />

        <Stack.Screen name={'The Foolish Son In Law'} component={Thefoolishsoninlaw} options={{ headerShown: false }} />
        <Stack.Screen name={'TfsilReading'} component={TfsilReading} options={{ headerShown: false }} />
        <Stack.Screen name={'TfsilReading2'} component={TfsilReading2} options={{ headerShown: false }} />
        <Stack.Screen name={'TfsilReading3'} component={TfsilReading3} options={{ headerShown: false }} />
        <Stack.Screen name={'TfsilReading4'} component={TfsilReading4} options={{ headerShown: false }} />
        <Stack.Screen name={'TfsilReading5'} component={TfsilReading5} options={{ headerShown: false }} />
        <Stack.Screen name={'TfsilReading6'} component={TfsilReading6} options={{ headerShown: false }} />
        <Stack.Screen name={'TfsilReading7'} component={TfsilReading7} options={{ headerShown: false }} />
        <Stack.Screen name={'TfsilReading8'} component={TfsilReading8} options={{ headerShown: false }} />
        <Stack.Screen name={'TfsilReading9'} component={TfsilReading9} options={{ headerShown: false }} />
        <Stack.Screen name={'TfsilReading10'} component={TfsilReading10} options={{ headerShown: false }} />
        <Stack.Screen name={'TfsilReading11'} component={TfsilReading11} options={{ headerShown: false }} />
        <Stack.Screen name={'TfsilReading12'} component={TfsilReading12} options={{ headerShown: false }} />
        <Stack.Screen name={'TfsilReading13'} component={TfsilReading13} options={{ headerShown: false }} />
        <Stack.Screen name={'Tfsilex'} component={Tfsilex} options={{ headerShown: false }} />
        <Stack.Screen name={'Tfsilex2'} component={Tfsilex2} options={{ headerShown: false }} />
        <Stack.Screen name={'Tfsiloppo'} component={Tfsiloppo} options={{ headerShown: false }} />
        <Stack.Screen name={'TfsilLat'} component={TfsilLat} options={{ headerShown: false }} />
        <Stack.Screen name={'TfsilQuiz'} component={TfsilQuiz} options={{ headerShown: false }} />

        <Stack.Screen name={'Bamboo Curry'} component={BambooCurry} options={{ headerShown: false }} />
        <Stack.Screen name={'BambooReading'} component={BambooReading} options={{ headerShown: false }} />
        <Stack.Screen name={'BambooReading2'} component={BambooReading2} options={{ headerShown: false }} />
        <Stack.Screen name={'BambooReading3'} component={BambooReading3} options={{ headerShown: false }} />
        <Stack.Screen name={'BambooReading4'} component={BambooReading4} options={{ headerShown: false }} />
        <Stack.Screen name={'BambooListening'} component={BambooCurryListening} options={{ headerShown: false }} />
        <Stack.Screen name={'BambooLat'} component={BambooLat} options={{ headerShown: false }} />
        <Stack.Screen name={'BambooQuiz'} component={BambooQuiz} options={{ headerShown: false }} />


        <Stack.Screen name={'A Nail'} component={Anail} options={{ headerShown: false }} />
        <Stack.Screen name={'NailReading'} component={NailReading} options={{ headerShown: false }} />
        <Stack.Screen name={'NailListening'} component={Anaillistening} options={{ headerShown: false }} />
        <Stack.Screen name={'NailLat'} component={NailLat} options={{ headerShown: false }} />
        <Stack.Screen name={'NailQuiz'} component={NailQuiz} options={{ headerShown: false }} />

        <Stack.Screen name={'My Story Is Said'} component={Mystoryissaid} options={{ headerShown: false }} />
        <Stack.Screen name={'MystoryReading'} component={MystoryReading} options={{ headerShown: false }} />
        <Stack.Screen name={'Mystory2Reading'} component={MystoryReading2} options={{ headerShown: false }} />
        <Stack.Screen name={'MyStoryisSaidListening'} component={MyStoryisSaidListening} options={{ headerShown: false }} />        
        <Stack.Screen name={'MystoryLat'} component={MystoryLat} options={{ headerShown: false }} />
        <Stack.Screen name={'MyStoryQuiz'} component={MyStoryQuiz} options={{ headerShown: false }} />

        <Stack.Screen name={'ComingSoon'} component={ComingSoon} options={{ headerShown: false }} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Home = ({ navigation }) => {
  const window = Dimensions.get("window");
const screen = Dimensions.get("screen");


  const [loaded] = useFonts({
    Regular: require('./images/BalsamiqSans-Regular.ttf'),
    Fredokaregular: require('./images/FredokaOne-Regular.ttf'),
  }); 
  
  if (!loaded) {
    return null;
  }
  return (
    
    <ImageBackground
            source={require('./assets/Newbg.png')}
            style={{width:"100%",height:"100%",}}
           >
                 <Image
            source={require('./assets/Newbg2.png')}
            style={{width:"100%",height:"32%",    
            shadowColor: "#000",
            shadowOffset: { height: 700, width: 30 },
            shadowOpacity: 10,
            shadowRadius: 100,
            marginTop:0,
          marginLeft:-0    }}
           />
              <ScrollView>
                <View>
                   <View style={{
                       flexDirection:"row",
                       backgroundColor:"#DFF0F1",
                       marginTop:20,
                       marginHorizontal:20,
                       borderRadius:20,
                       paddingVertical:30,
                       paddingLeft:30
                   }}>
                       <View>
                           <Text style={{
                               color:"#345c74",
                               fontSize:25,
                               fontFamily:"Regular",
                               width:250,
                               paddingRight:100 
                           }}>
                               KITE
                           </Text>
                           <TouchableOpacity
                                onPress={() => navigation.navigate('Kite')}
                                style={{
                                    flexDirection:"row",
                                    backgroundColor:"#24C69F",
                                    alignItems:"center",
                                    marginTop:20,
                                    width:150,
                                    paddingVertical:10,
                                    borderRadius:14,
                                    paddingHorizontal:10
                                }}
                           >
                                    <Text style={{
                                        color:"black",
                                        fontFamily:"Regular",
                                        fontSize:12
                                    }}>Start Learning</Text>  
                                    <View
                                        style={{marginLeft:35}}
                                    ><Ionicons name="arrow-forward-outline" size={15} color="black"></Ionicons></View>
                           </TouchableOpacity>
                       </View>
                       <Image
                            source={require('./images/kite.png')}
                            style={{marginLeft:-90,marginTop:-2,width:"50%",height:"150%"}}
                       />

                   </View>


                  <View style={{
                       flexDirection:"row",
                       backgroundColor:"#DFF0F1",
                       marginTop:15,
                       marginHorizontal:20,
                       borderRadius:20,
                       paddingVertical:30,
                       paddingLeft:30
                   }}>
                       <View>
                           <Text style={{
                               color:"#345c74",
                               fontSize:25,
                               fontFamily:"Regular",
                               width:300,
                               paddingRight:100 
                           }}>
                               A GREEDY FAT OLD MAN
                           </Text>
                              <TouchableOpacity
                                onPress={() => navigation.navigate('Agfom')}
                                style={{
                                    flexDirection:"row",
                                    backgroundColor:"#24C69F",
                                    alignItems:"center",
                                    marginTop:20,
                                    width:150,
                                    paddingVertical:10,
                                    borderRadius:14,
                                    paddingHorizontal:10
                                }}
                           >
                                    <Text style={{
                                        color:"black",
                                        fontFamily:"Regular",
                                        fontSize:12
                                    }}>Start Learning</Text>  
                                    <View
                                        style={{marginLeft:35}}
                                    ><Ionicons name="arrow-forward-outline" size={15} color="black"></Ionicons></View>
                           </TouchableOpacity>
                       </View>
                        <Image
                            source={require('./images/Fatman.png')}
                            style={{marginLeft:-134,marginTop:10,width:"55%",height:"115%"}}
                       />

                   </View>

                 <View style={{
                       flexDirection:"row",
                       backgroundColor:"#DFF0F1",
                       marginTop:15,
                       marginHorizontal:20,
                       borderRadius:20,
                       paddingVertical:30,
                       paddingLeft:30
                   }}>
                       <View>
                           <Text style={{
                               color:"#345c74",
                               fontSize:25,
                               fontFamily:"Regular",
                               width:250,
                               paddingRight:100 
                           }}>
                               MICE
                           </Text>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Mice')}
                                style={{
                                    flexDirection:"row",
                                    backgroundColor:"#24C69F",
                                    alignItems:"center",
                                    marginTop:20,
                                    width:150,
                                    paddingVertical:10,
                                    borderRadius:14,
                                    paddingHorizontal:10
                                }}
                           >
                                    <Text style={{
                                        color:"black",
                                        fontFamily:"Regular",
                                        fontSize:12
                                    }}>Start Learning</Text>  
                                    <View
                                        style={{marginLeft:35}}
                                    ><Ionicons name="arrow-forward-outline" size={15} color="black"></Ionicons></View>
                           </TouchableOpacity>
                       </View>
                       <Image
                            source={require('./images/Mice.png')}
                            style={{marginLeft:-80,marginTop:-26,width:"48%",height:"160%"}}
                       />

                   </View>

                   <View style={{
                       flexDirection:"row",
                       backgroundColor:"#DFF0F1",
                       marginTop:15,
                       marginHorizontal:20,
                       borderRadius:20,
                       paddingVertical:30,
                       paddingLeft:30
                   }}>
                       <View>
                           <Text style={{
                               color:"#345c74",
                               fontSize:25,
                               fontFamily:"Regular",
                               width:280,
                               paddingRight:100 
                           }}>
                               I LIKE BATS
                           </Text>
                           <TouchableOpacity
                                onPress={() => navigation.navigate('I Like Bats')}
                                style={{
                                    flexDirection:"row",
                                    backgroundColor:"#24C69F",
                                    alignItems:"center",
                                    marginTop:20,
                                    width:150,
                                    paddingVertical:10,
                                    borderRadius:14,
                                    paddingHorizontal:10
                                }}
                           >
                                    <Text style={{
                                        color:"black",
                                        fontFamily:"Regular",
                                        fontSize:12
                                    }}>Start Learning</Text>  
                                    <View
                                        style={{marginLeft:35}}
                                    ><Ionicons name="arrow-forward-outline" size={15} color="black"></Ionicons></View>
                           </TouchableOpacity>
                       </View>
                       <Image
                            source={require('./images/Bat.png')}
                            style={{marginLeft:-88,marginTop:-35,width:"54%",height:"160%"}}
                       />

                   </View>

                                      <View style={{
                       flexDirection:"row",
                       backgroundColor:"#DFF0F1",
                       marginTop:15,
                       marginHorizontal:20,
                       borderRadius:20,
                       paddingVertical:30,
                       paddingLeft:30
                   }}>
                       <View>
                           <Text style={{
                               color:"#345c74",
                               fontSize:25,
                               fontFamily:"Regular",
                               width:300,
                               paddingRight:100 
                           }}>
                               THE FOOLISH SON IN LAW
                           </Text>
                              <TouchableOpacity
                                onPress={() => navigation.navigate('The Foolish Son In Law')}
                                style={{
                                    flexDirection:"row",
                                    backgroundColor:"#24C69F",
                                    alignItems:"center",
                                    marginTop:20,
                                    width:150,
                                    paddingVertical:10,
                                    borderRadius:14,
                                    paddingHorizontal:10
                                }}
                           >
                                    <Text style={{
                                        color:"black",
                                        fontFamily:"Regular",
                                        fontSize:12
                                    }}>Start Learning</Text>  
                                    <View
                                        style={{marginLeft:35}}
                                    ><Ionicons name="arrow-forward-outline" size={15} color="black"></Ionicons></View>
                           </TouchableOpacity>
                       </View>
                       <Image
                            source={require('./images/foolish.png')}
                            style={{marginLeft:-120,marginTop:-18,width:"44%",height:"135%"}}
                       />

                   </View>


                  <View style={{
                       flexDirection:"row",
                       backgroundColor:"#DFF0F1",
                       marginTop:15,
                       marginHorizontal:20,
                       borderRadius:20,
                       paddingVertical:30,
                       paddingLeft:30
                   }}>
                       <View>
                           <Text style={{
                               color:"#345c74",
                               fontSize:25,
                               fontFamily:"Regular",
                               width:350,
                               paddingRight:100 
                           }}>
                               BAMBOO CURRY
                           </Text>
                           <TouchableOpacity
                                onPress={() => navigation.navigate('Bamboo Curry')}
                                style={{
                                    flexDirection:"row",
                                    backgroundColor:"#24C69F",
                                    alignItems:"center",
                                    marginTop:20,
                                    width:150,
                                    paddingVertical:10,
                                    borderRadius:14,
                                    paddingHorizontal:10
                                }}
                           >
                                    <Text style={{
                                        color:"black",
                                        fontFamily:"Regular",
                                        fontSize:12
                                    }}>Start Learning</Text>  
                                    <View
                                        style={{marginLeft:35}}
                                    ><Ionicons name="arrow-forward-outline" size={15} color="black"></Ionicons></View>
                           </TouchableOpacity>
                       </View>
                       <Image
                            source={require('./images/Bamboo.png')}
                            style={{marginLeft:-165,marginTop:-30,width:"48%",height:"158%"}}
                       />

                   </View>

                 <View style={{
                       flexDirection:"row",
                       backgroundColor:"#DFF0F1",
                       marginTop:15,
                       marginHorizontal:20,
                       borderRadius:20,
                       paddingVertical:30,
                       paddingLeft:30
                   }}>
                       <View>
                           <Text style={{
                               color:"#345c74",
                               fontSize:25,
                               fontFamily:"Regular",
                               width:250,
                               paddingRight:100 
                           }}>
                               A NAIL
                           </Text>
                           <TouchableOpacity
                                onPress={() => navigation.navigate('A Nail')}
                                style={{
                                    flexDirection:"row",
                                    backgroundColor:"#24C69F",
                                    alignItems:"center",
                                    marginTop:20,
                                    width:150,
                                    paddingVertical:10,
                                    borderRadius:14,
                                    paddingHorizontal:10
                                }}
                           >
                                    <Text style={{
                                        color:"black",
                                        fontFamily:"Regular",
                                        fontSize:12
                                    }}>Start Learning</Text>  
                                    <View
                                        style={{marginLeft:35}}
                                    ><Ionicons name="arrow-forward-outline" size={15} color="black"></Ionicons></View>
                           </TouchableOpacity>
                       </View>
                       <Image
                            source={require('./images/Nail.png')}
                            style={{marginLeft:-48,marginTop:-40,width:"43%",height:"170%"}}
                       />

                   </View>

                   <View style={{
                       flexDirection:"row",
                       backgroundColor:"#DFF0F1",
                       marginTop:15,
                       marginHorizontal:20,
                       borderRadius:20,
                       paddingVertical:30,
                       paddingLeft:30
                   }}>
                       <View>
                           <Text style={{
                               color:"#345c74",
                               fontSize:25,
                               fontFamily:"Regular",
                               width:280,
                               paddingRight:100 
                           }}>
                              MY STORY IS SAID
                           </Text>
                          <TouchableOpacity
                                onPress={() => navigation.navigate('My Story Is Said')}
                                style={{
                                    flexDirection:"row",
                                    backgroundColor:"#24C69F",
                                    alignItems:"center",
                                    marginTop:20,
                                    width:150,
                                    paddingVertical:10,
                                    borderRadius:14,
                                    paddingHorizontal:10
                                }}
                           >
                                    <Text style={{
                                        color:"black",
                                        fontFamily:"Regular",
                                        fontSize:12
                                    }}>Start Learning</Text>  
                                    <View
                                        style={{marginLeft:35}}
                                    ><Ionicons name="arrow-forward-outline" size={15} color="black"></Ionicons></View>
                           </TouchableOpacity>
                       </View>
                       <Image
                            source={require('./images/Story.png')}
                            style={{marginLeft:-90,marginTop:-20,width:"46%",height:"130%"}}
                       />
                  </View>

                  
                   <View style={{
                       flexDirection:"row",
                       backgroundColor:"#DFF0F1",
                       marginTop:15,
                       marginHorizontal:20,
                       borderRadius:20,
                       paddingVertical:30,
                       paddingLeft:30
                   }}>
                       <View>
                           <Text style={{
                               color:"#345c74",
                               fontSize:25,
                               fontFamily:"Regular",
                               width:280,
                               paddingRight:100 
                           }}>
                            COMING SOON
                           </Text>
                          <TouchableOpacity
                                onPress={() => navigation.navigate('ComingSoon')}
                                style={{
                                    flexDirection:"row",
                                    backgroundColor:"#24C69F",
                                    alignItems:"center",
                                    marginTop:20,
                                    width:150,
                                    paddingVertical:10,
                                    borderRadius:14,
                                    paddingHorizontal:10
                                }}
                           >
                                    <Text style={{
                                        color:"black",
                                        fontFamily:"Regular",
                                        fontSize:12
                                    }}>Know More</Text>  
                                    <View
                                        style={{marginLeft:35}}
                                    ><Ionicons name="arrow-forward-outline" size={15} color="black"></Ionicons></View>
                           </TouchableOpacity>
                       </View>
                       <Image
                            source={require('./images/Coming.png')}
                            style={{marginLeft:-88,marginTop: -5,width:"46%",height:"120%"}}
                       />
                  </View>
                 </View>
                 </ScrollView>
                 </ImageBackground>
)
};







const Kite = ({ navigation }) => {
    const [loaded] = useFonts({
    Regular: require('./images/BalsamiqSans-Regular.ttf'),
    Fredokaregular: require('./images/FredokaOne-Regular.ttf'),
  }); 
  
  if (!loaded) {
    return null;
  }
  return (
               <ImageBackground
  source={require('./assets/bg.png')}
  style={{width:"100%",height:"100%"}}
  >
      <View style={styles.container}>    
        <Card style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('KiteReading')}>
        <Image   source={require('./assets/icons/Reading.png')}
  style={{backgroundColor:"#D5F7E7",borderRadius:30,marginLeft:35,marginTop:25}}></Image>
          <Text style={styles.paragraph}>
            Reading
          </Text></TouchableOpacity>
        </Card>
      </View>

 
      <View style={styles.containera}> 
        <Card style={styles.containera}>
        <TouchableOpacity onPress={() => navigation.navigate('KiteListening')}>
        <Image   source={require('./assets/icons/Listening.png')}
  style={{backgroundColor:"#D5F7E7",borderRadius:30,marginLeft:43,marginTop:25}}></Image>
          <Text style={styles.paragrapha}>
            Listening
          </Text></TouchableOpacity>
        </Card>
      </View>



            <View style={styles.containerb}> 
          <Card style={styles.container}>
        <Image   source={require('./assets/icons/Explanation.png')}
  style={{backgroundColor:"#D5F7E7",borderRadius:30,marginLeft:55,marginTop:25}}></Image>
           <TouchableOpacity onPress={() => navigation.navigate('KiteExplanation')}>
          <Text style={styles.paragraphb}>
            Explanation
          </Text></TouchableOpacity>
        </Card>
      </View>


      <View style={styles.containerc}>    
        <Card style={styles.containera}>
        <TouchableOpacity onPress={() => navigation.navigate('KiteComprehension')}>
        <Image   source={require('./assets/icons/Comprehension.png')}
  style={{backgroundColor:"#D5F7E7",borderRadius:30,marginLeft:60,marginTop:25}}></Image>
          <Text style={styles.paragraphc}>
            Comprehension
          </Text></TouchableOpacity>
        </Card>
      </View>


      <View style={styles.containerd}> 
        
        <Card style={styles.container}> 
        <TouchableOpacity onPress={() => navigation.navigate('KiteVmdt')}>
        <Image   source={require('./assets/icons/Vmdt.png')}
  style={{backgroundColor:"#D5F7E7",borderRadius:30,marginLeft:30,marginTop:25}}></Image>
          <Text style={styles.paragraphd}>
            VMDT
          </Text></TouchableOpacity>
        </Card>
      </View>

      <View style={styles.containere}>
        <Card style={styles.containera}>
        <TouchableOpacity onPress={() => navigation.navigate('KiteLookandthink')}>
        <Image   source={require('./assets/icons/Lookandthink.png')}
  style={{backgroundColor:"#D5F7E7",borderRadius:30,marginLeft:55,marginTop:25}}></Image>
          <Text style={styles.paragraphe}>
           Look And Think
          </Text></TouchableOpacity>
        </Card>
      </View>

            <View style={styles.containerf}>
        <Card style={styles.containerf}>
        <TouchableOpacity onPress={() => navigation.navigate('KiteQuiz')}>
        <Image   source={require('./assets/icons/Quiz.png')}
  style={{backgroundColor:"#D5F7E7",borderRadius:30,marginLeft:19,marginTop:25}}></Image>
          <Text style={styles.paragraphf}>
           Quiz
          </Text></TouchableOpacity>      
        </Card>
      </View>

      </ImageBackground>
    )
  }
  const KiteListening = ({ navigation }) => {
    return (
    <WebView 
    style={styles.webview}
    source={{ uri: 'https://drive.google.com/file/d/1VYTY9xjx1UVvkYDeLZnFzFHm0iXSRhdJ/preview' }}
    />
    );
    }
    const KiteExplanation = ({ navigation }) => {
      return (
      <WebView 
      style={styles.webview}
      source={{ uri: 'https://drive.google.com/file/d/1eILS6DE-B3GMW-Niiu_d9gf_neH1WVAM/preview' }}
      />
      );
      }
      const KiteComprehension = ({ navigation }) => {
        return (
        <WebView 
        style={styles.webview}
        source={{ uri: 'https://drive.google.com/file/d/1ecG0gSVjC00dR18WsKtYovlC1shup66Z/preview' }}
        />
        );
        }
        const KiteVmdt = ({ navigation }) => {
          return (
          <WebView 
          style={styles.webview}
          source={{ uri: 'https://drive.google.com/file/d/1eQUhh-RvnPC_RvFWWGPPYiOMZp1DsO2t/preview' }}
          />
          );
          }



  const KiteReading = ({ navigation }) => {
  const [sound, setSound] = React.useState();

  async function s1() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/kite/s1.mp3')
    );
    await sound.playAsync(); }

  async function s2() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/kite/s2.mp3')
    );
    await sound.playAsync(); }

      async function s3() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/kite/s3.mp3')
    );
    await sound.playAsync(); }

  async function s4() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/kite/s4.mp3')
    );
    await sound.playAsync(); }


  async function s5() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/kite/s5.mp3')
    );
    await sound.playAsync(); }

  async function s6() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/kite/s6.mp3')
    );
    await sound.playAsync(); }

      async function s7() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/kite/s7.mp3')
    );
    await sound.playAsync(); }

  async function s8() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/kite/s8.mp3')
    );
    await sound.playAsync(); }
    
  const [loaded] = useFonts({
    Sniglet: require('./images/Sniglet-Regular.ttf'),
  }); 
  
  if (!loaded) {
    return null;
  }
 return (
               <ImageBackground
  source={require('./assets/bgkite.png')}
  style={{width:"100%",height:"100%"}}
  >
  <View style={{marginLeft:10,marginTop:160}}>
  <View style={{marginLeft:10,marginTop:0}}>
  <Text style={{fontFamily:'Sniglet',fontSize:32,color:'#30c1ff'}}>
  <Text onPress={s1}>A Kite on the ground</Text>{'\n'}
  <Text onPress={s2}>Is just paper and string</Text>{'\n'}
  <Text onPress={s3}>But up in the air</Text>{'\n'}
  <Text onPress={s4}>It will dance and sing.</Text>
  </Text>
  </View>

  <View style={{marginLeft:10,marginTop:25}} >
  <Text style={{fontFamily:'Sniglet',fontSize:32,color:'#FF4EEA'}}>
  <Text onPress={s5}>A kite in the air</Text>{'\n'}
  <Text onPress={s6}>Will dance and caper</Text>{'\n'}
  <Text onPress={s7}>But back on the ground</Text>{'\n'}
  <Text onPress={s8}>Is just string and paper</Text>
  </Text>
  </View>
  </View>
  </ImageBackground>
 )
  }

    const KiteLookandthink = ({ navigation }) => {
  return (
    <WebView 
      style={styles.webview}
      source={{ uri: 'https://drive.google.com/file/d/1kjIrHQE_wg6JTAZj_4Yzxpe2-PzFCw-3/preview' }}

    />
  );
  }

    const KiteQuiz = ({ navigation }) => {
  return (
    <WebView 
      style={styles.webview}
      source={{ uri: 'https://docs.google.com/forms/d/e/1FAIpQLSd1tmtTYSsnqRtF8scHe_VbLpFhadmj0n-Dr1VDCoSYgNsBtw/viewform?usp=sf_link' }}
    />
  );
  }





  const Agfom = ({ navigation }) => {
const [loaded] = useFonts({
    Regular: require('./images/BalsamiqSans-Regular.ttf'),
    Fredokaregular: require('./images/FredokaOne-Regular.ttf'),
  }); 
  
  if (!loaded) {
    return null;
  }
  return (
               <ImageBackground
  source={require('./assets/Agfom.png')}
  style={{width:"100%",height:"100%"}}
  >
      <View style={styles.container}>    
        <Card style={styles.container1}>
        <TouchableOpacity onPress={() => navigation.navigate('Agfom1')}>
        <Image   source={require('./assets/Part1.png')}
  style={{backgroundColor:"#D5F7E7",borderRadius:30,marginLeft:25,marginTop:25}}></Image>
          <Text style={styles.paragraph}>
            Part1
          </Text></TouchableOpacity>
        </Card>
      </View>

 
      <View style={styles.containera}> 
        <Card style={styles.container2}>
        <TouchableOpacity onPress={() => navigation.navigate('Agfom2')}>
        <Image   source={require('./assets/Part2.png')}
  style={{backgroundColor:"#D5F7E7",borderRadius:30,marginLeft:23,marginTop:25}}></Image>
          <Text style={styles.paragrapha}>
            Part2
          </Text></TouchableOpacity>
        </Card>
      </View>



            <View style={styles.containerb}> 
          <Card style={styles.container3}>
          <TouchableOpacity onPress={() => navigation.navigate('Agfom3')}>
        <Image   source={require('./assets/Part3.png')}
  style={{backgroundColor:"#D5F7E7",borderRadius:30,marginLeft:25,marginTop:25}}></Image>
           
          <Text style={styles.paragraphb}>
            Part3
          </Text></TouchableOpacity>
        </Card>
      </View>

      </ImageBackground>
    )
  }

  const Agfom1 = ({ navigation }) => {
const [loaded] = useFonts({
    Regular: require('./images/BalsamiqSans-Regular.ttf'),
    Fredokaregular: require('./images/FredokaOne-Regular.ttf'),
  }); 
  
  if (!loaded) {
    return null;
  }
  return (
               <ImageBackground
  source={require('./assets/part11.png')}
  style={{width:"100%",height:"100%"}}
  >
      <View style={styles.container}>    
        <Card style={styles.containerp1}>
        <TouchableOpacity onPress={() => navigation.navigate('Agfom1Reading')}>
        <Image   source={require('./assets/icons/Reading.png')}
  style={{backgroundColor:"#D5F7E7",borderRadius:30,marginLeft:35,marginTop:25}}></Image>
          <Text style={styles.paragraph}>
            Reading
          </Text></TouchableOpacity>
        </Card>
      </View>

 
      <View style={styles.containera}> 
        <Card style={styles.containerp2}>
        <TouchableOpacity onPress={() => navigation.navigate('Agfom1Listening')}>
        <Image   source={require('./assets/icons/Listening.png')}
  style={{backgroundColor:"#D5F7E7",borderRadius:30,marginLeft:40,marginTop:25}}></Image>
          <Text style={styles.paragrapha}>
            Listening
          </Text></TouchableOpacity>
        </Card>
      </View>



            <View style={styles.containerb}> 
          <Card style={styles.containerp3}>
          <TouchableOpacity onPress={() => navigation.navigate('Agfom1Lat')}>
        <Image   source={require('./assets/icons/Lookandthink.png')}
  style={{backgroundColor:"#D5F7E7",borderRadius:30,marginLeft:68,marginTop:25}}></Image>
          <Text style={styles.paragraphb}>
            Look And Think
          </Text></TouchableOpacity>
        </Card>
      </View>

      <View style={styles.containerc}>    
        <Card style={styles.containerp4}>
        <TouchableOpacity onPress={() => navigation.navigate('Agfom1Quiz')}>
        <Image   source={require('./assets/icons/Quiz.png')}
  style={{backgroundColor:"#D5F7E7",borderRadius:30,marginLeft:13,marginTop:25}}></Image>
          <Text style={styles.paragraphc}>
            Quiz
          </Text></TouchableOpacity>
        </Card>
      </View>
      </ImageBackground>
    )
  }
  const Agfom1Reading = ({ navigation }) => {
    const [sound, setSound] = React.useState();
  
    async function s1() {
      const { sound } = await Audio.Sound.createAsync(
         require('./audios/Agfom1/s1.mp3')
      );
      await sound.playAsync(); }
  
    async function s2() {
      const { sound } = await Audio.Sound.createAsync(
         require('./audios/Agfom1/s2.mp3')
      );
      await sound.playAsync(); }
  
        async function s3() {
      const { sound } = await Audio.Sound.createAsync(
         require('./audios/Agfom1/s3.mp3')
      );
      await sound.playAsync(); }
  
    async function s4() {
      const { sound } = await Audio.Sound.createAsync(
         require('./audios/Agfom1/s4.mp3')
      );
      await sound.playAsync(); }
  
  
    async function s5() {
      const { sound } = await Audio.Sound.createAsync(
         require('./audios/Agfom1/s5.mp3')
      );
      await sound.playAsync(); }
  
    async function s6() {
      const { sound } = await Audio.Sound.createAsync(
         require('./audios/Agfom1/s6.mp3')
      );
      await sound.playAsync(); }
  
  
  
    const [loaded] = useFonts({
      Sniglet: require('./images/Sniglet-Regular.ttf'),
    }); 
    
    if (!loaded) {
      return null;
    }
   return (
                 <ImageBackground
    source={require('./assets/Readingbg.png')}
    style={{width:"100%",height:"100%"}}
    >
  <Ionicons name="play-forward-outline" size={36} color="white" style={{marginTop:40,marginLeft:365}} onPress={() => navigation.navigate('Agfom1Reading2')}
/>
    <View style={{marginLeft:10,marginTop:110}}>
    <View style={{marginLeft:10,marginTop:-30}}>
    <Text style={{fontFamily:'Sniglet',fontSize:26,color:'#30c1ff'}}>
    <Text onPress={s1}>Once there lived a greedy fat old man.</Text>{'\n'}
    <Text style={{lineHeight:7,color:'white'}}>...</Text>{'\n'}
    <Text onPress={s2}>One day he got up at 6 am and brushed his teeth at 6.30 a.m.</Text>{'\n'}
    <Text style={{lineHeight:7,color:'white'}}>...</Text>{'\n'}
    <Text onPress={s3}>He took tea at 7 a.m. and breakfast at 8.30 am.</Text>{'\n'}
    </Text>
    <View style={{marginLeft:0,marginTop:-15}}>
    <Text style={{fontFamily:'Sniglet',fontSize:26,color:'#FF4EEA'}}>
    <Text onPress={s4}>Do you know how much tea he took ? </Text>{'\n'}
    <Text style={{lineHeight:7,color:'white'}}>...</Text>{'\n'}
    <Text onPress={s5}>And what did he take in his breakfast ?</Text>{'\n'}
    <Text style={{lineHeight:7,color:'white'}}>...</Text>{'\n'}
    <Text onPress={s6}>He took two mugs of tea and two litres of milk.</Text>{'\n'}
    </Text>
    </View>
    </View>
    </View>
    </ImageBackground>
   )
    }
  const Agfom1Reading2 = ({ navigation }) => {
    const [sound, setSound] = React.useState();
  
    async function s7() {
      const { sound } = await Audio.Sound.createAsync(
         require('./audios/Agfom1/s7.mp3')
      );
      await sound.playAsync(); }
  
    async function s8() {
      const { sound } = await Audio.Sound.createAsync(
         require('./audios/Agfom1/s8.mp3')
      );
      await sound.playAsync(); }
  
        async function s9() {
      const { sound } = await Audio.Sound.createAsync(
         require('./audios/Agfom1/s9.mp3')
      );
      await sound.playAsync(); }
  
        async function s10() {
      const { sound } = await Audio.Sound.createAsync(
         require('./audios/Agfom1/s10.mp3')
      );
      await sound.playAsync(); }
      
      async function s11() {
      const { sound } = await Audio.Sound.createAsync(
         require('./audios/Agfom1/s11.mp3')
      );
      await sound.playAsync(); }
  
  
    const [loaded] = useFonts({
      Sniglet: require('./images/Sniglet-Regular.ttf'),
    }); 
    
    if (!loaded) {
      return null;
    }
   return (
                 <ImageBackground
    source={require('./assets/Readingbg.png')}
    style={{width:"100%",height:"100%"}}
    >
  <Ionicons name="play-forward-outline" size={36} color="white" style={{marginTop:40,marginLeft:365}} onPress={() => navigation.navigate('Agfom1Reading3')}
/>
    <View style={{marginLeft:10,marginTop:120}}>
    <View style={{marginLeft:10,marginTop:-30}}>
    <Text style={{fontFamily:'Sniglet',fontSize:26,color:'#30c1ff'}}>
    <Text onPress={s7}>Then he took three tins of biscuit and five big pieces of cakes.</Text>{'\n'}
    <Text style={{lineHeight:14,color:'white'}}>...</Text>{'\n'}
    <Text onPress={s8}>After breakfast he looked really very very fat. </Text>{'\n'}
    <Text style={{fontFamily:'Sniglet',fontSize:26,color:'#FF4EEA'}}>
    <Text style={{lineHeight:14,color:'white'}}>...</Text>{'\n'}
    <Text onPress={s9}>Then he went out for a walk And walked till he met a little thin boy.</Text>{'\n'} 
    <Text style={{lineHeight:14,color:'white'}}>...</Text>{'\n'}   
    <Text onPress={s10}>He had a long conversation with the boy. </Text>{'\n'}
    <Text style={{lineHeight:14,color:'white'}}>...</Text>{'\n'}
    <Text onPress={s11}>Old man : Have you brushed your teeth ?</Text>{'\n'}
    <Text style={{lineHeight:14,color:'white'}}>...</Text>{'\n'}
    </Text>
    </Text>
    </View>
    </View>
    </ImageBackground>
   )
    }
    const Agfom1Reading3 = ({ navigation }) => {
      const [sound, setSound] = React.useState();
      
              async function s12() {
        const { sound } = await Audio.Sound.createAsync(
           require('./audios/Agfom1/s12.mp3')
        );
        await sound.playAsync(); }
        
        async function s13() {
        const { sound } = await Audio.Sound.createAsync(
           require('./audios/Agfom1/s13.mp3')
        );
        await sound.playAsync(); }
    
              async function s14() {
        const { sound } = await Audio.Sound.createAsync(
           require('./audios/Agfom1/s14.mp3')
        );
        await sound.playAsync(); }
        
        async function s15() {
        const { sound } = await Audio.Sound.createAsync(
           require('./audios/Agfom1/s15.mp3')
        );
        await sound.playAsync(); }
    
        async function s16() {
        const { sound } = await Audio.Sound.createAsync(
           require('./audios/Agfom1/s16.mp3')
        );
        await sound.playAsync(); }
    
        async function s17() {
          const { sound } = await Audio.Sound.createAsync(
             require('./audios/Agfom1/s17.mp3')
          );
          await sound.playAsync(); }
      
          async function s18() {
          const { sound } = await Audio.Sound.createAsync(
             require('./audios/Agfom1/s18.mp3')
          );
          await sound.playAsync(); }

    
      const [loaded] = useFonts({
        Sniglet: require('./images/Sniglet-Regular.ttf'),
      }); 
      
      if (!loaded) {
        return null;
      }
     return (
                   <ImageBackground
      source={require('./assets/Readingbg.png')}
      style={{width:"100%",height:"100%"}}
      >
  <Ionicons name="play-forward-outline" size={36} color="white" style={{marginTop:40,marginLeft:365}} onPress={() => navigation.navigate('Agfom1Reading4')}
/>
      <View style={{marginLeft:10,marginTop:120}}>
      <View style={{marginLeft:10,marginTop:-30}}>
      <Text style={{fontFamily:'Sniglet',fontSize:26,color:'#30c1ff'}}>
      <Text onPress={s12}>Boy : No, I haven't </Text>{'\n'}
      <Text style={{lineHeight:14,color:'white'}}>...</Text>{'\n'}
      <Text onPress={s13}>Old man : Do  you have enough tea and milk to drink ?</Text>{'\n'}
      <Text style={{lineHeight:14,color:'white'}}>...</Text>{'\n'}
      <Text onPress={s14}>Boy : No , I don't have</Text>{'\n'}
      <Text style={{lineHeight:14,color:'white'}}>...</Text>{'\n'}
      <Text onPress={s15}>Old man : Do  you have enough biscuit to eat ?</Text>{'\n'}
      <Text style={{fontFamily:'Sniglet',fontSize:26,color:'#FF4EEA'}}>
      <Text style={{lineHeight:14,color:'white'}}>...</Text>{'\n'}
      <Text onPress={s16}>Boy : No , I don't have</Text>{'\n'}
      <Text style={{lineHeight:14,color:'white'}}>...</Text>{'\n'}
      <Text onPress={s17}>Old man : do you have enough cake to eat ?</Text>{'\n'}
      <Text style={{lineHeight:14,color:'white'}}>...</Text>{'\n'}
      <Text onPress={s18}>Boy : No , I don't have</Text>{'\n'}
      <Text style={{lineHeight:14,color:'white'}}>...</Text>{'\n'}
      </Text>
      </Text>
      </View>
      </View>
      </ImageBackground>
     )
      }
      const Agfom1Reading4 = ({ navigation }) => {
        const [sound, setSound] = React.useState();
      
        async function s19() {
          const { sound } = await Audio.Sound.createAsync(
             require('./audios/Agfom1/s19.mp3')
          );
          await sound.playAsync(); }
      
        async function s20() {
          const { sound } = await Audio.Sound.createAsync(
             require('./audios/Agfom1/s20.mp3')
          );
          await sound.playAsync(); }
      
            async function s21() {
          const { sound } = await Audio.Sound.createAsync(
             require('./audios/Agfom1/s21.mp3')
          );
          await sound.playAsync(); }
      
            async function s22() {
          const { sound } = await Audio.Sound.createAsync(
             require('./audios/Agfom1/s22.mp3')
          );
          await sound.playAsync(); }
          
          async function s23() {
          const { sound } = await Audio.Sound.createAsync(
             require('./audios/Agfom1/s23.mp3')
          );
          await sound.playAsync(); }
        
                async function s24() {
          const { sound } = await Audio.Sound.createAsync(
             require('./audios/Agfom1/s24.mp3')
          );
          await sound.playAsync(); }
      
        const [loaded] = useFonts({
          Sniglet: require('./images/Sniglet-Regular.ttf'),
        }); 
        
        if (!loaded) {
          return null;
        }
       return (
                     <ImageBackground
        source={require('./assets/Readingscrollbg.png')}
        style={{width:"100%",height:"101%"}}
        >
            <View style={{marginLeft:10,marginTop:170}}>
        <View style={{marginLeft:10,marginTop:-30}}>
        <Text style={{fontFamily:'Sniglet',fontSize:26,color:'#30c1ff'}}>
        <Text onPress={s19}>When the old man had just finished his questions, the boy asked him a question.</Text>{'\n'}
        <Text style={{lineHeight:14,color:'white'}}>...</Text>{'\n'}
        <Text onPress={s20}>Boy : Old man , old man , what makes you so fat ?</Text>{'\n'}
        <Text style={{lineHeight:14,color:'white'}}>...</Text>{'\n'}
        <Text onPress={s21}>The old man said , "I've taken two mugs of tea , two litres of milk.</Text>{'\n'}
        <Text style={{fontFamily:'Sniglet',fontSize:26,color:'#FF4EEA'}}>
        <Text style={{lineHeight:14,color:'white'}}>...</Text>{'\n'}
        <Text onPress={s22}>I also took three tins of biscuit and five kilograms of cakes .</Text>{'\n'}
        <Text style={{lineHeight:14,color:'white'}}>...</Text>{'\n'}
        <Text onPress={s23}>And if I can catch you , i'll eat you up .</Text>{'\n'}
        <Text style={{lineHeight:14,color:'white'}}>...</Text>{'\n'}
        <Text onPress={s24}>Then the old man caught the thin little boy and ate him up.</Text>{'\n'}
        </Text>
        </Text>
        </View>
        </View>
        </ImageBackground>
       )
        }
        const Agfom1Listening = ({ navigation }) => {

         return (
      <WebView 
      style={styles.webview}
      source={{ uri: 'https://drive.google.com/file/d/1gLwNp1ayxMFaT1C6Focfo6AnU_10etN9/preview' }}

    />
         );
         }
    const Agfom1Lat = ({ navigation }) => {
  return (
    <WebView 
      style={styles.webview}
      source={{ uri: 'https://drive.google.com/file/d/1d5vF6w5IkARiK7NwUknDLjyj58RXQ21t/preview' }}

    />
  );
  }
    const Agfom1Quiz = ({ navigation }) => {
  return (
    <WebView 
      style={styles.webview}
      source={{ uri: 'https://docs.google.com/forms/d/e/1FAIpQLSdrGKe2i55RdZ_Howd0v8plGBO9fLasTb38vD43JPkzEc7Bbg/viewform?usp=sf_link' }}
    />
  );
  }




  const Agfom2 = ({ navigation }) => {
const [loaded] = useFonts({
    Regular: require('./images/BalsamiqSans-Regular.ttf'),
    Fredokaregular: require('./images/FredokaOne-Regular.ttf'),
  }); 
  
  if (!loaded) {
    return null;
  }
  return (
               <ImageBackground
  source={require('./assets/part22.png')}
  style={{width:"100%",height:"100%"}}
  >
      <View style={styles.container}>    
        <Card style={styles.containerp21}>
        <TouchableOpacity onPress={() => navigation.navigate('Agfom2Reading')}>
        <Image   source={require('./assets/icons/Reading.png')}
  style={{backgroundColor:"#D5F7E7",borderRadius:30,marginLeft:35,marginTop:25}}></Image>
          <Text style={styles.paragraph}>
            Reading
          </Text></TouchableOpacity>
        </Card>
      </View>

 
      <View style={styles.containera}> 
        <Card style={styles.containerp22}>
        <TouchableOpacity onPress={() => navigation.navigate('Agfom2Listening')}>
        <Image   source={require('./assets/icons/Listening.png')}
  style={{backgroundColor:"#D5F7E7",borderRadius:30,marginLeft:40,marginTop:25}}></Image>
          <Text style={styles.paragrapha}>
            Listening
          </Text></TouchableOpacity>
        </Card>
      </View>

      <View style={styles.containera}> 
        <Card style={styles.containerp23}>
        <TouchableOpacity onPress={() => navigation.navigate('Agfom2Test')}>
        <Image   source={require('./assets/icons/Comprehension.png')}
  style={{backgroundColor:"#D5F7E7",borderRadius:30,marginLeft:65,marginTop:25}}></Image>
          <Text style={{    fontSize: 18,
    marginLeft:-5,
    padding: 20,
    marginTop:-10,
    fontFamily:'Regular'}}>
            Comprehension
          </Text></TouchableOpacity>
        </Card>
      </View>

            <View style={styles.containerb}> 
          <Card style={styles.containerp24}>
          <TouchableOpacity onPress={() => navigation.navigate('Agfom2Lat')}>
        <Image   source={require('./assets/icons/Lookandthink.png')}
  style={{backgroundColor:"#D5F7E7",borderRadius:30,marginLeft:68,marginTop:25}}></Image>
          <Text style={styles.paragraphb}>
            Look And Think
          </Text></TouchableOpacity>
        </Card>
      </View>

      <View style={styles.containerc}>    
        <Card style={styles.containerp25}>
        <TouchableOpacity onPress={() => navigation.navigate('Agfom2Quiz')}>
        <Image   source={require('./assets/icons/Quiz.png')}
  style={{backgroundColor:"#D5F7E7",borderRadius:30,marginLeft:13,marginTop:25}}></Image>
          <Text style={styles.paragraphc}>
            Quiz
          </Text></TouchableOpacity>
        </Card>
      </View>
      </ImageBackground>
    )
  }
  const Agfom2Reading = ({ navigation }) => {
    const [sound, setSound] = React.useState();
  
    async function s1() {
      const { sound } = await Audio.Sound.createAsync(
         require('./audios/Agfom2/s1.mp3')
      );
      await sound.playAsync(); }
  
    async function s2() {
      const { sound } = await Audio.Sound.createAsync(
         require('./audios/Agfom2/s2.mp3')
      );
      await sound.playAsync(); }
  
        async function s3() {
      const { sound } = await Audio.Sound.createAsync(
         require('./audios/Agfom2/s3.mp3')
      );
      await sound.playAsync(); }
  
    async function s4() {
      const { sound } = await Audio.Sound.createAsync(
         require('./audios/Agfom2/s4.mp3')
      );
      await sound.playAsync(); }
  
  
    async function s5() {
      const { sound } = await Audio.Sound.createAsync(
         require('./audios/Agfom2/s5.mp3')
      );
      await sound.playAsync(); }
  
  
  
  
    const [loaded] = useFonts({
      Sniglet: require('./images/Sniglet-Regular.ttf'),
    }); 
    
    if (!loaded) {
      return null;
    }
   return (
                 <ImageBackground
    source={require('./assets/Readingbg.png')}
    style={{width:"100%",height:"100%"}}
    >
  <Ionicons name="play-forward-outline" size={36} color="white" style={{marginTop:40,marginLeft:360}} onPress={() => navigation.navigate('Agfom2Reading2')}
  />
    <View style={{marginLeft:10,marginTop:120}}>
    <View style={{marginLeft:10,marginTop:-30}}>
    <Text style={{fontFamily:'Sniglet',fontSize:26,color:'#30c1ff'}}>
    <Text onPress={s1}>After eating the boy, the old man met a small dog.</Text>{'\n'}
    <Text style={{lineHeight:16,color:'white'}}>...</Text>{'\n'}
    <Text onPress={s2}>The small dog asked,"Old man, old man, what makes you so fat ?"</Text>{'\n'}
    <Text style={{lineHeight:16,color:'white'}}>...</Text>{'\n'}
    <Text onPress={s3}>The old man said, ' I 've taken a very heavy breakfast."</Text>{'\n'}
    <Text style={{lineHeight:16,color:'white'}}>...</Text>{'\n'}
    <Text style={{fontFamily:'Sniglet',fontSize:26,color:'#FF4EEA'}}>
    <Text onPress={s4}>"What did you take in your breakfast?" asked the dog.</Text>{'\n'}
    <Text style={{lineHeight:16,color:'white'}}>...</Text>{'\n'}
    <Text onPress={s5}>"Two mugs of tea and two litres of milk" replied the old man.</Text>{'\n'}
    </Text>
    </Text>
    </View>
    </View>
    </ImageBackground>
   )
    }
  const Agfom2Reading2 = ({ navigation }) => {
    const [sound, setSound] = React.useState();

    async function s6() {
      const { sound } = await Audio.Sound.createAsync(
         require('./audios/Agfom2/s6.mp3')
      );
      await sound.playAsync(); }
  
    async function s7() {
      const { sound } = await Audio.Sound.createAsync(
         require('./audios/Agfom2/s7.mp3')
      );
      await sound.playAsync(); }
  
    async function s8() {
      const { sound } = await Audio.Sound.createAsync(
         require('./audios/Agfom2/s8.mp3')
      );
      await sound.playAsync(); }
  
        async function s9() {
      const { sound } = await Audio.Sound.createAsync(
         require('./audios/Agfom2/s9.mp3')
      );
      await sound.playAsync(); }
  
        async function s10() {
      const { sound } = await Audio.Sound.createAsync(
         require('./audios/Agfom2/s10.mp3')
      );
      await sound.playAsync(); }
      
      async function s11() {
      const { sound } = await Audio.Sound.createAsync(
         require('./audios/Agfom2/s11.mp3')
      );
      await sound.playAsync(); }
  
    const [loaded] = useFonts({
      Sniglet: require('./images/Sniglet-Regular.ttf'),
    }); 
    
    if (!loaded) {
      return null;
    }
   return (
                 <ImageBackground
    source={require('./assets/Readingbg.png')}
    style={{width:"100%",height:"100%"}}
    >
  <Ionicons name="play-forward-outline" size={36} color="white" style={{marginTop:40,marginLeft:360}} onPress={() => navigation.navigate('Agfom2Reading3')}
  />
        <View style={{marginLeft:10,marginTop:120}}>
    <View style={{marginLeft:10,marginTop:-30}}>
    <Text style={{fontFamily:'Sniglet',fontSize:26,color:'#30c1ff'}}>
    <Text onPress={s6}>"Only this much ?" asked the dog.</Text>{'\n'}
    <Text style={{lineHeight:16,color:'white'}}>...</Text>{'\n'}
    <Text onPress={s7}>"I've taken three tins of biscuits," replied the old man.</Text>{'\n'}
    <Text style={{lineHeight:14,color:'white'}}>...</Text>{'\n'}
    <Text onPress={s8}>"Only this much ?" asked the dog.</Text>{'\n'}
    <Text style={{fontFamily:'Sniglet',fontSize:26,color:'#FF4EEA'}}>
    <Text style={{lineHeight:14,color:'white'}}>...</Text>{'\n'}
    <Text onPress={s9}>"I also ate five big pieces of cakes." replied the old man.</Text>{'\n'}
    <Text style={{lineHeight:14,color:'white'}}>...</Text>{'\n'}
    <Text onPress={s10}>"Only this much ?" asked the dog.</Text>{'\n'}
    <Text style={{lineHeight:14,color:'white'}}>...</Text>{'\n'}
    <Text onPress={s11}>"I also ate a small boy", replied the old man.</Text>{'\n'}
    <Text style={{lineHeight:14,color:'white'}}>...</Text>{'\n'}
    </Text>
    </Text>
    </View>
    </View>
    </ImageBackground>
   )
    }
    const Agfom2Reading3 = ({ navigation }) => {
      const [sound, setSound] = React.useState();
    
        async function s12() {
        const { sound } = await Audio.Sound.createAsync(
           require('./audios/Agfom2/s12.mp3')
        );
        await sound.playAsync(); }
    
        async function s13() {
          const { sound } = await Audio.Sound.createAsync(
           require('./audios/Agfom2/s13.mp3')
        );
        await sound.playAsync(); }
    
        async function s14() {
          const { sound } = await Audio.Sound.createAsync(
          require('./audios/Agfom2/s14.mp3')
        );
        await sound.playAsync(); }
    
      const [loaded] = useFonts({
        Sniglet: require('./images/Sniglet-Regular.ttf'),
      }); 
      
      if (!loaded) {
        return null;
      }
     return (
                   <ImageBackground
      source={require('./assets/Readingbg.png')}
      style={{width:"100%",height:"100%"}}
      >
          <View style={{marginLeft:10,marginTop:200}}>
      <View style={{marginLeft:10,marginTop:-30}}>
      <Text style={{fontFamily:'Sniglet',fontSize:26,color:'#30c1ff'}}>
      <Text onPress={s12}>When the dog again asked the same question "Only this much?"</Text>{'\n'}
      <Text style={{lineHeight:16,color:'white'}}>...</Text>{'\n'}
      <Text onPress={s13}>The old man lost his temper and said  "I ll eat you up if i can catch you."</Text>{'\n'}
      <Text style={{fontFamily:'Sniglet',fontSize:26,color:'#FF4EEA'}}>
      <Text style={{lineHeight:14,color:'white'}}>...</Text>{'\n'}
      <Text onPress={s14}>Then the old man caught the dog and ate it up.</Text>{'\n'}
      </Text>
      </Text>
      </View>
      </View>
      </ImageBackground>
     )
      }
  const Agfom2Listening = ({ navigation }) => {
        return (
          <WebView 
            style={styles.webview}
            source={{ uri: 'https://drive.google.com/file/d/1ew6YVcn5vioLoUfB3f5q3JeFf7pKcz-f/preview' }}
      
          />
        );
        }
        const Agfom2Test = ({ navigation }) => {
          return (
            <WebView 
              style={styles.webview}
              source={{ uri: 'https://drive.google.com/file/d/1gbDsskdoLniu-S3SfX4meL6fjDVQY04x/preview' }}
        
            />
          );
          }

const Agfom2Lat = ({ navigation }) => {
  return (
    <WebView 
      style={styles.webview}
      source={{ uri: 'https://drive.google.com/file/d/1FFGuyJCQa3nTxXTkA3KuQpywm0ibiJnY/preview' }}

    />
  );
  }
const Agfom2Quiz = ({ navigation }) => {
  return (
    <WebView 
      style={styles.webview}
      source={{ uri: 'https://docs.google.com/forms/d/e/1FAIpQLSdPgzy-UkyFT6f88fmLaDwkoz5LY2giVRdeaM13rmsO7f2biw/viewform?usp=sf_link' }}
    />
  );
  }

  const Agfom3 = ({ navigation }) => {
const [loaded] = useFonts({
    Regular: require('./images/BalsamiqSans-Regular.ttf'),
    Fredokaregular: require('./images/FredokaOne-Regular.ttf'),
  }); 
  
  if (!loaded) {
    return null;
  }
  return (
               <ImageBackground
  source={require('./assets/part33.png')}
  style={{width:"100%",height:"100%"}}
  >
      <View style={styles.container}>    
        <Card style={styles.containerp31}>
        <TouchableOpacity onPress={() => navigation.navigate('Agfom3Reading')}>
        <Image   source={require('./assets/icons/Reading.png')}
  style={{backgroundColor:"#D5F7E7",borderRadius:30,marginLeft:35,marginTop:25}}></Image>
          <Text style={styles.paragraph}>
            Reading
          </Text></TouchableOpacity>
        </Card>
      </View>

      <View style={styles.containera}> 
        <Card style={styles.containerp32}>
        <TouchableOpacity onPress={() => navigation.navigate('Agfom3Listening')}>
        <Image   source={require('./assets/icons/Listening.png')}
  style={{backgroundColor:"#D5F7E7",borderRadius:30,marginLeft:40,marginTop:25}}></Image>
          <Text style={styles.paragrapha}>
            Listening
          </Text></TouchableOpacity>
        </Card>
      </View>

      <View style={styles.containera}> 
        <Card style={styles.containerp33}>
        <TouchableOpacity onPress={() => navigation.navigate('Agfom3comprehension')}>
        <Image   source={require('./assets/icons/Comprehension.png')}
  style={{backgroundColor:"#D5F7E7",borderRadius:30,marginLeft:65,marginTop:25}}></Image>
          <Text style={{    fontSize: 18,
    marginLeft:-5,
    padding: 20,
    marginTop:-10,
    fontFamily:'Regular'}}>
            Comprehension
          </Text></TouchableOpacity>
        </Card>
      </View>

            <View style={styles.containerb}> 
          <Card style={styles.containerp34}>
          <TouchableOpacity onPress={() => navigation.navigate('Agfom3activity')}>
        <Image   source={require('./assets/icons/Activity.png')}
  style={{backgroundColor:"#D5F7E7",borderRadius:20,marginLeft:30,marginTop:25}}></Image>
          <Text style={styles.paragraphb}>
            Activity
          </Text></TouchableOpacity>
        </Card>
      </View>

            <View style={styles.containerb}> 
          <Card style={styles.containerp35}>
          <TouchableOpacity onPress={() => navigation.navigate('Agfom3Lat')}>
        <Image   source={require('./assets/icons/Lookandthink.png')}
  style={{backgroundColor:"#D5F7E7",borderRadius:30,marginLeft:68,marginTop:25}}></Image>
          <Text style={styles.paragraphb}>
            Look And Think
          </Text></TouchableOpacity>
        </Card>
      </View>
      
      <View style={styles.containerc}>    
        <Card style={styles.containerp36}>
        <TouchableOpacity onPress={() => navigation.navigate('Agfom3Quiz')}>
        <Image   source={require('./assets/icons/Quiz.png')}
  style={{backgroundColor:"#D5F7E7",borderRadius:30,marginLeft:13,marginTop:25}}></Image>
          <Text style={styles.paragraphc}>
            Quiz
          </Text></TouchableOpacity>
        </Card>
      </View>
      </ImageBackground>
    )
  }
const Agfom3Reading = ({ navigation }) => {
  const [sound, setSound] = React.useState();

  async function s1() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/Agfom3/s1.mp3')
    );
    await sound.playAsync(); }

  async function s2() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/Agfom3/s2.mp3')
    );
    await sound.playAsync(); }

      async function s3() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/Agfom3/s3.mp3')
    );
    await sound.playAsync(); }

  async function s4() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/Agfom3/s4.mp3')
    );
    await sound.playAsync(); }


  async function s5() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/Agfom3/s5.mp3')
    );
    await sound.playAsync(); }


  const [loaded] = useFonts({
    Sniglet: require('./images/Sniglet-Regular.ttf'),
  }); 
  
  if (!loaded) {
    return null;
  }
 return (
               <ImageBackground
  source={require('./assets/Readingbg.png')}
  style={{width:"100%",height:"100%"}}
  >
  <Ionicons name="play-forward-outline" size={36} color="white" style={{marginTop:40,marginLeft:360}} onPress={() => navigation.navigate('Agfom3Reading2')}
  />
  <View style={{marginLeft:10,marginTop:120}}>
  <View style={{marginLeft:10,marginTop:-30}}>
  <Text style={{fontFamily:'Sniglet',fontSize:26,color:'#30c1ff'}}>
  <Text onPress={s1}>After eating the dog, the old man walked, walked and walked till he met a little squirrel.</Text>{'\n'}
  <Text style={{lineHeight:13,color:'white'}}>...</Text>{'\n'}
  <Text onPress={s2}>The little squirrel asked the old man, 'Old man, old man, what makes you so fat ?</Text>{'\n'}
  <Text style={{lineHeight:13,color:'white'}}>...</Text>{'\n'}
  <Text onPress={s3}>The old man said. "I've taken a very heavy breakfast. </Text>{'\n'}
  <Text style={{fontFamily:'Sniglet',fontSize:26,color:'#FF4EEA'}}>
  <Text style={{lineHeight:13,color:'white'}}>...</Text>{'\n'}
  <Text onPress={s4}>In my breakfast I took two mugs of tea, two litres of milk,</Text>{'\n'}
  <Text style={{lineHeight:13,color:'white'}}>...</Text>{'\n'}
  <Text onPress={s5}>three tins of biscuits and five big pieces of cakes."</Text>{'\n'}
  </Text>
  </Text>
  </View>
  </View>
  </ImageBackground>
 )
  }
  const Agfom3Reading2 = ({ navigation }) => {
    const [sound, setSound] = React.useState();

    async function s6() {
      const { sound } = await Audio.Sound.createAsync(
         require('./audios/Agfom3/s6.mp3')
      );
      await sound.playAsync(); }

    async function s7() {
      const { sound } = await Audio.Sound.createAsync(
         require('./audios/Agfom3/s7.mp3')
      );
      await sound.playAsync(); }
  
    async function s8() {
      const { sound } = await Audio.Sound.createAsync(
         require('./audios/Agfom3/s8.mp3')
      );
      await sound.playAsync(); }
  
        async function s9() {
      const { sound } = await Audio.Sound.createAsync(
         require('./audios/Agfom3/s9.mp3')
      );
      await sound.playAsync(); }
  
    async function s10() {
      const { sound } = await Audio.Sound.createAsync(
         require('./audios/Agfom3/s10.mp3')
      );
      await sound.playAsync(); }
  
  
    async function s11() {
      const { sound } = await Audio.Sound.createAsync(
         require('./audios/Agfom3/s5.mp3')
      );
      await sound.playAsync(); }

  
    const [loaded] = useFonts({
      Sniglet: require('./images/Sniglet-Regular.ttf'),
    }); 
    
    if (!loaded) {
      return null;
    }
   return (
                 <ImageBackground
    source={require('./assets/Readingbg.png')}
    style={{width:"100%",height:"100%"}}
    >
  <Ionicons name="play-forward-outline" size={36} color="white" style={{marginTop:40,marginLeft:360}} onPress={() => navigation.navigate('Agfom3Reading3')}
  />
    <View style={{marginLeft:10,marginTop:120}}>
    <View style={{marginLeft:10,marginTop:-30}}>
    <Text style={{fontFamily:'Sniglet',fontSize:26,color:'#30c1ff'}}>
    <Text onPress={s6}>Then I ate a little boy and a small dog.</Text>{'\n'}
    <Text style={{lineHeight:13,color:'white'}}>...</Text>{'\n'}
    <Text onPress={s7}>I'll also eat you up if I can catch you."</Text>{'\n'}
    <Text style={{lineHeight:13,color:'white'}}>...</Text>{'\n'}
    <Text onPress={s8}>"But you cannot catch me, old man" said the active, agile, little squirrel.</Text>{'\n'}
    <Text style={{fontFamily:'Sniglet',fontSize:26,color:'#FF4EEA'}}>
    <Text style={{lineHeight:13,color:'white'}}>...</Text>{'\n'}
    <Text onPress={s9}>Then the squirrel jumped up the tree, the old man also climbed up the tree.</Text>{'\n'}
    <Text style={{lineHeight:13,color:'white'}}>...</Text>{'\n'}
    <Text onPress={s10}>The little squirrel jumped up to the main branch of the tree.</Text>{'\n'}
    </Text>
    </Text>
    </View>
    </View>
    </ImageBackground>
   )
    }
    const Agfom3Reading3 = ({ navigation }) => {
      const [sound, setSound] = React.useState();

      async function s11() {
        const { sound } = await Audio.Sound.createAsync(
           require('./audios/Agfom3/s11.mp3')
        );
        await sound.playAsync(); }

      async function s12() {
        const { sound } = await Audio.Sound.createAsync(
           require('./audios/Agfom3/s12.mp3')
        );
        await sound.playAsync(); }
  
      async function s13() {
        const { sound } = await Audio.Sound.createAsync(
           require('./audios/Agfom3/s13.mp3')
        );
        await sound.playAsync(); }
    
      async function s14() {
        const { sound } = await Audio.Sound.createAsync(
           require('./audios/Agfom3/s14.mp3')
        );
        await sound.playAsync(); }
    
          async function s15() {
        const { sound } = await Audio.Sound.createAsync(
           require('./audios/Agfom3/s15.mp3')
        );
        await sound.playAsync(); }
    
      async function s16() {
        const { sound } = await Audio.Sound.createAsync(
           require('./audios/Agfom3/s16.mp3')
        );
        await sound.playAsync(); }
    
    
      async function s17() {
        const { sound } = await Audio.Sound.createAsync(
           require('./audios/Agfom3/s17.mp3')
        );
        await sound.playAsync(); }
  
        async function s18() {
          const { sound } = await Audio.Sound.createAsync(
             require('./audios/Agfom3/s18.mp3')
          );
          await sound.playAsync(); }
    
      const [loaded] = useFonts({
        Sniglet: require('./images/Sniglet-Regular.ttf'),
      }); 
      
      if (!loaded) {
        return null;
      }
     return (
                   <ImageBackground
      source={require('./assets/Readingscrollbg.png')}
      style={{width:"100%",height:"100%"}}
      >
      <View style={{marginLeft:10,marginTop:180}}>
      <View style={{marginLeft:10,marginTop:-30}}>
      <Text style={{fontFamily:'Sniglet',fontSize:26,color:'#30c1ff'}}>
      <Text onPress={s11}>The old man also climbed up to the main branch of the tree.</Text>{'\n'}
      <Text style={{lineHeight:10,color:'white'}}>...</Text>{'\n'}
      <Text onPress={s12}>Next the little squirrel jumped up to a thin branch.</Text>{'\n'}
      <Text style={{lineHeight:10,color:'white'}}>...</Text>{'\n'}
      <Text onPress={s13}>The old man also climbed up to the thin branch. But thrash !</Text>{'\n'}
      <Text style={{lineHeight:10,color:'white'}}>...</Text>{'\n'}
      <Text onPress={s14}>The small branch broke and the old man fell on the ground.</Text>{'\n'}
      <Text style={{fontFamily:'Sniglet',fontSize:26,color:'#FF4EEA'}}>
      <Text style={{lineHeight:10,color:'white'}}>...</Text>{'\n'}
      <Text onPress={s15}>His big belly burst out.</Text>{'\n'}
      <Text style={{lineHeight:10,color:'white'}}>...</Text>{'\n'}
      <Text onPress={s16}>The little boy came out. </Text>{'\n'}
      <Text style={{lineHeight:10,color:'white'}}>...</Text>{'\n'}
      <Text onPress={s17}>The little dog came out. </Text>{'\n'}
      <Text style={{lineHeight:10,color:'white'}}>...</Text>{'\n'}
      <Text onPress={s18}>And the squirrel was also out because he was never ever in. </Text>{'\n'}
      </Text>
      </Text>
      </View>
      </View>
      </ImageBackground>
     )
      }
      const Agfom3Listening = ({ navigation }) => {
        return (
          <WebView 
            style={styles.webview}
            source={{ uri: 'https://drive.google.com/file/d/1ehM0l4Tw4wsYazBqmGpEoL1jvuPaAny3/preview' }}
      
          />
        );
        }
        const Agfom3comprehension = ({ navigation }) => {
          return (
            <WebView 
              style={styles.webview}
              source={{ uri: 'https://drive.google.com/file/d/1gbvkPAwTbBIx8Um7LtVUw9lvDXavk_YT/preview' }}
        
            />
          );
          }
          const Agfom3activity = ({ navigation }) => {
            return (
              <WebView 
                style={styles.webview}
                source={{ uri: 'https://drive.google.com/file/d/1gkhL1KjZAwDcMQWtVvTVzpBJ4qZarH9P/preview' }}
          
              />
            );
            }
const Agfom3Lat = ({ navigation }) => {
  return (
    <WebView 
      style={styles.webview}
      source={{ uri: 'https://drive.google.com/file/d/1YXnN-k9wr8evE5nR2WNLmjufK9cCxiiW/preview' }}

    />
  );
  }
const Agfom3Quiz = ({ navigation }) => {
  return (
    <WebView 
      style={styles.webview}
      source={{ uri: 'https://docs.google.com/forms/d/e/1FAIpQLSd4YE5aBMXNKBX2sTiSjcd906Pz4I2On0F-D4_suwyjF-dy6w/viewform?usp=sf_link' }}
    />
  );
  }






  const Mice = ({ navigation }) => {
const [loaded] = useFonts({
    Regular: require('./images/BalsamiqSans-Regular.ttf'),
    Fredokaregular: require('./images/FredokaOne-Regular.ttf'),
  }); 
  
  if (!loaded) {
    return null;
  }
  return (
               <ImageBackground
  source={require('./assets/Mice.png')}
  style={{width:"100%",height:"100%"}}
  >
  <View style={{marginTop:-40}}>
      <View style={styles.container}>    
        <Card style={styles.containerM1}>
        <TouchableOpacity onPress={() => navigation.navigate('MiceReading')}>
        <Image   source={require('./assets/icons/Reading.png')}
  style={{backgroundColor:"#D5F7E7",borderRadius:30,marginLeft:35,marginTop:25}}></Image>
          <Text style={styles.paragraph}>
            Reading
          </Text></TouchableOpacity>
        </Card>
      </View>

      <View style={styles.containera}> 
        <Card style={styles.containerM2}>
        <TouchableOpacity onPress={() => navigation.navigate('MiceListening')}>
        <Image   source={require('./assets/icons/Listening.png')}
  style={{backgroundColor:"#D5F7E7",borderRadius:30,marginLeft:40,marginTop:25}}></Image>
          <Text style={styles.paragrapha}>
            Listening
          </Text></TouchableOpacity>
        </Card>
      </View>

      <View style={styles.containera}> 
        <Card style={styles.containerM3}>
        <TouchableOpacity onPress={() => navigation.navigate('Miceoppo')}>
        <Image   source={require('./assets/icons/Oppositewords.png')}
  style={{backgroundColor:"#D5F7E7",borderRadius:30,marginLeft:65,marginTop:25}}></Image>
          <Text style={{    fontSize: 18,
    marginLeft:-5,
    padding: 20,
    marginTop:-10,
    fontFamily:'Regular'}}>
            Opposite Words
          </Text></TouchableOpacity>
        </Card>
      </View>

            <View style={styles.containerb}> 
          <Card style={styles.containerM4}>
          <TouchableOpacity onPress={() => navigation.navigate('Micesingplu')}>
        <Image   source={require('./assets/icons/SingularPlural.png')}
  style={{backgroundColor:"#D5F7E7",borderRadius:20,marginLeft:68,marginTop:25}}></Image>
          <Text style={styles.paragraphb}>
            Singular Plural
          </Text></TouchableOpacity>
        </Card>
      </View>

            <View style={styles.containerb}> 
          <Card style={styles.containerM5}>
          <TouchableOpacity onPress={() => navigation.navigate('MiceComprehension1')}>
        <Image   source={require('./assets/icons/Comprehension1.png')}
  style={{backgroundColor:"#D5F7E7",borderRadius:30,marginLeft:68,marginTop:25}}></Image>
          <Text style={{    
    fontSize: 18,
    marginLeft:-15,
    padding: 20,
    marginTop:-10,
    fontFamily:'Regular'}}>
            Comprehension 1
          </Text></TouchableOpacity>
        </Card>
      </View>
      
      <View style={styles.containerc}>    
        <Card style={styles.containerM6}>
        <TouchableOpacity onPress={() => navigation.navigate('MiceComprehension2')}>
        <Image   source={require('./assets/icons/Comprehension1.png')}
  style={{backgroundColor:"#D5F7E7",borderRadius:30,marginLeft:68,marginTop:25}}></Image>
          <Text style={{    
    fontSize: 18,
    marginLeft:-15,
    padding: 20,
    marginTop:-10,
    fontFamily:'Regular'}}>
            Comprehension 2
          </Text></TouchableOpacity>
        </Card>
      </View>

            <View style={styles.containerb}> 
          <Card style={styles.containerM7}>
          <TouchableOpacity onPress={() => navigation.navigate('MiceLat')}>
        <Image   source={require('./assets/icons/Lookandthink.png')}
  style={{backgroundColor:"#D5F7E7",borderRadius:30,marginLeft:68,marginTop:25}}></Image>
          <Text style={styles.paragraphb}>
            Look And Think
          </Text></TouchableOpacity>
        </Card>
      </View>
      
      <View style={styles.containerc}>    
        <Card style={styles.containerM8}>
        <TouchableOpacity onPress={() => navigation.navigate('MiceQuiz')}>
        <Image   source={require('./assets/icons/Quiz.png')}
  style={{backgroundColor:"#D5F7E7",borderRadius:30,marginLeft:13,marginTop:25}}></Image>
          <Text style={styles.paragraphc}>
            Quiz
          </Text></TouchableOpacity>
        </Card>
      </View>
      </View>
      </ImageBackground>
    )
  }
const MiceReading = ({ navigation }) => {
  const [sound, setSound] = React.useState();

  async function s1() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/mice/s1.mp3')
    );
    await sound.playAsync(); }

  async function s2() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/mice/s2.mp3')
    );
    await sound.playAsync(); }

      async function s3() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/mice/s3.mp3')
    );
    await sound.playAsync(); }

  async function s4() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/mice/s4.mp3')
    );
    await sound.playAsync(); }


  async function s5() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/mice/s5.mp3')
    );
    await sound.playAsync(); }

  async function s6() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/mice/s6.mp3')
    );
    await sound.playAsync(); }

      async function s7() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/mice/s7.mp3')
    );
    await sound.playAsync(); }

  async function s8() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/mice/s8.mp3')
    );
    await sound.playAsync(); }

      async function s9() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/mice/s9.mp3')
    );
    await sound.playAsync(); }

      async function s10() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/mice/s10.mp3')
    );
    await sound.playAsync(); }
    
    async function s11() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/mice/s11.mp3')
    );
    await sound.playAsync(); }
  
          async function s12() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/mice/s12.mp3')
    );
    await sound.playAsync(); }
    
    async function s13() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/mice/s13.mp3')
    );
    await sound.playAsync(); }

          async function s14() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/mice/s14.mp3')
    );
    await sound.playAsync(); }
    
    async function s15() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/mice/s15.mp3')
    );
    await sound.playAsync(); }

    async function s16() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/mice/s16.mp3')
    );
    await sound.playAsync(); }


  const [loaded] = useFonts({
    Sniglet: require('./images/Sniglet-Regular.ttf'),
  }); 
  
  if (!loaded) {
    return null;
  }
 return (
               <ImageBackground
  source={require('./assets/micebg.png')}
  style={{width:"100%",height:"100%"}}
  >
<Ionicons name="play-forward-outline" size={36} color="white" style={{marginTop:40,marginLeft:365}} onPress={() => navigation.navigate('MiceReading2')}
/>
  <View style={{marginLeft:10,marginTop:120}}>
  <View style={{marginLeft:10,marginTop:-30}}>
  <Text style={{fontFamily:'Sniglet',fontSize:32,color:'#30c1ff'}}>
  <Text onPress={s1}>I Think mice</Text>{'\n'}
  <Text onPress={s2}>Are rather nice.</Text>{'\n'}
  <Text onPress={s3}>Their tails are long</Text>{'\n'}
  <Text onPress={s4}>Their faces small,</Text>{'\n'}
  <Text onPress={s5}>They haven't any</Text>{'\n'}
  <Text onPress={s6}>Skins at all.</Text>{'\n'}
  <Text onPress={s7}>Their ears are pink,</Text>{'\n'}
  <Text onPress={s8}>Their teeth are white,</Text>{'\n'}

  </Text>
  </View>
  <View style={{marginLeft:10,marginTop:-35}} >
  <Text style={{fontFamily:'Sniglet',fontSize:32,color:'#FF4EEA'}}>
  <Text onPress={s9}>They run about</Text>{'\n'}
  <Text onPress={s10}>The house at night</Text>{'\n'}
  <Text onPress={s11}>They nibble things</Text>
  </Text>
  </View>
  </View>
  </ImageBackground>
 )
  }
const MiceReading2 = ({ navigation }) => {
  const [sound, setSound] = React.useState();

  
  
          async function s12() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/mice/s12.mp3')
    );
    await sound.playAsync(); }
    
    async function s13() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/mice/s13.mp3')
    );
    await sound.playAsync(); }

          async function s14() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/mice/s14.mp3')
    );
    await sound.playAsync(); }
    
    async function s15() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/mice/s15.mp3')
    );
    await sound.playAsync(); }

    async function s16() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/mice/s16.mp3')
    );
    await sound.playAsync(); }


  const [loaded] = useFonts({
    Sniglet: require('./images/Sniglet-Regular.ttf'),
  }); 
  
  if (!loaded) {
    return null;
  }
 return (
               <ImageBackground
  source={require('./assets/Mice2bg.png')}
  style={{width:"100%",height:"100%"}}
  >
  <View style={{marginLeft:10,marginTop:165}} >
  <Text style={{fontFamily:'Sniglet',fontSize:32,color:'#FF4EEA'}}>
  <Text onPress={s12}>They should not touch</Text>{'\n'}
  <Text onPress={s13}>And no one seems</Text>{'\n'}
  <Text onPress={s14}>To like them much.</Text>{'\n'}
  <Text onPress={s15}>But i think mice</Text>{'\n'}
  <Text onPress={s16}>Are nice.</Text>
  </Text>
  </View>
  </ImageBackground>
 )
  }
const MiceListening = ({ navigation }) => {
return (
<WebView 
style={styles.webview}
source={{ uri: 'https://drive.google.com/file/d/1gb605CxmNuVgZnCTOXr3YvOn5KnYc8G5/preview' }}
/>
);
}
const Miceoppo = ({ navigation }) => {
return (
<WebView 
style={styles.webview}
source={{ uri: 'https://drive.google.com/file/d/1gtbKrXFwIAorKcITPYwfAr6lL0RXSLAq/preview' }}
 />
);
}
const MiceComprehension1 = ({ navigation }) => {
return (
<WebView 
style={styles.webview}
source={{ uri: 'https://drive.google.com/file/d/1h1RwY-nOXwx7QEqHOqEev4l3Y5tI6o6d/preview' }}
/>
);
}
const MiceComprehension2 = ({ navigation }) => {
return (
<WebView 
style={styles.webview}
source={{ uri: 'https://drive.google.com/file/d/1gqxjuUJUU95mqE4lrh0aaX9lZgqydu3g/preview' }}
/>
);
}
const Micesingplu = ({ navigation }) => {
return (
<WebView 
style={styles.webview}
source={{ uri: 'https://drive.google.com/file/d/1gmQtBbRh054FwjeIAZlohx0skis0uk2b/preview' }}
/>
);
}
const MiceLat = ({ navigation }) => {
  return (
    <WebView 
      style={styles.webview}
      source={{ uri: 'https://drive.google.com/file/d/1wYvTPtb2t8_f2mJkRFKeS8ak1nkmqRCt/preview' }}

    />
  );
  }
const MiceQuiz = ({ navigation }) => {
  return (
    <WebView 
      style={styles.webview}
      source={{ uri: 'https://docs.google.com/forms/d/e/1FAIpQLSf_HaYBCST18AD5FHxp4xBq2UzxSQTxYH-lNC1M0bnKdhiS0g/viewform?usp=sf_link' }}
    />
  );
  }







   const Bats = ({ navigation }) => {
const [loaded] = useFonts({
    Regular: require('./images/BalsamiqSans-Regular.ttf'),
    Fredokaregular: require('./images/FredokaOne-Regular.ttf'),
  }); 
  
  if (!loaded) {
    return null;
  }
  return (
               <ImageBackground
  source={require('./assets/bats.png')}
  style={{width:"100%",height:"100%"}}
  >
<View>
  <View style={{marginTop:-10}}>
      <View style={styles.container}>    
        <Card style={styles.containerb1}>
        <TouchableOpacity onPress={() => navigation.navigate('BatReading')}>
        <Image   source={require('./assets/icons/Reading.png')}
  style={{backgroundColor:"#D5F7E7",borderRadius:30,marginLeft:35,marginTop:25}}></Image>
          <Text style={styles.paragraph}>
            Reading
          </Text></TouchableOpacity>
        </Card>
      </View>

            <View style={styles.containerb}> 
          <Card style={styles.containerb2}>
          <TouchableOpacity onPress={() => navigation.navigate('BatsLat')}>
        <Image   source={require('./assets/icons/Lookandthink.png')}
  style={{backgroundColor:"#D5F7E7",borderRadius:30,marginLeft:68,marginTop:25}}></Image>
          <Text style={styles.paragraphb}>
            Look And Think
          </Text></TouchableOpacity>
        </Card>
      </View>

      <View style={styles.containerc}>    
        <Card style={styles.containerb3}>
        <TouchableOpacity onPress={() => navigation.navigate('BatsQuiz')}>
        <Image   source={require('./assets/icons/Quiz.png')}
  style={{backgroundColor:"#D5F7E7",borderRadius:30,marginLeft:13,marginTop:25}}></Image>
          <Text style={styles.paragraphc}>
            Quiz
          </Text></TouchableOpacity>
        </Card>
      </View>
      </View>
      </View>
      </ImageBackground>
    )
  }
const BatReading = ({ navigation }) => {
  const [sound, setSound] = React.useState();

  async function s1() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/bats/s1.mp3')
    );
    await sound.playAsync(); }

  async function s2() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/bats/s2.mp3')
    );
    await sound.playAsync(); }

      async function s3() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/bats/s3.mp3')
    );
    await sound.playAsync(); }

  async function s4() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/bats/s4.mp3')
    );
    await sound.playAsync(); }


  async function s5() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/bats/s5.mp3')
    );
    await sound.playAsync(); }

  async function s6() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/bats/s6.mp3')
    );
    await sound.playAsync(); }

      async function s7() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/bats/s7.mp3')
    );
    await sound.playAsync(); }

  async function s8() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/bats/s8.mp3')
    );
    await sound.playAsync(); }

      async function s9() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/bats/s9.mp3')
    );
    await sound.playAsync(); }

      async function s10() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/bats/s10.mp3')
    );
    await sound.playAsync(); }
    
    async function s11() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/bats/s11.mp3')
    );
    await sound.playAsync(); }



  const [loaded] = useFonts({
    Sniglet: require('./images/Sniglet-Regular.ttf'),
  }); 
  
  if (!loaded) {
    return null;
  }
 return (
               <ImageBackground
  source={require('./assets/Readingbg.png')}
  style={{width:"100%",height:"100%"}}
  >
  <View style={{marginLeft:10,marginTop:180}}>
  <View style={{marginLeft:10,marginTop:-30}}>
  <Text style={{fontFamily:'Sniglet',fontSize:30,color:'#30c1ff'}}>
  <Text onPress={s1}>I Like bats</Text>{'\n'}
  <Text onPress={s2}>Hanging upside down</Text>{'\n'}
  <Text onPress={s3}>Like rats. Like silk-cotton fruits</Text>{'\n'}
  <Text onPress={s4}>Swinging in wind</Text>{'\n'}
  <Text onPress={s5}>What a way to relax and rewind.</Text>{'\n'}
  <Text onPress={s6}>I wish I could</Text>{'\n'}
  <Text onPress={s7}>Do that</Text>{'\n'}
  <Text onPress={s8}>Like a bat</Text>{'\n'}

  </Text>
  </View>
  <View style={{marginLeft:10,marginTop:-35}} >
  <Text style={{fontFamily:'Sniglet',fontSize:30,color:'#FF4EEA'}}>
  <Text onPress={s9}>A way to find</Text>{'\n'}
  <Text onPress={s10}>After a day's work</Text>{'\n'}
  <Text onPress={s11}>To relax and rewind.</Text>
  </Text>
  </View>
  </View>
<Ionicons name="play-forward-outline" size={36} color="white" style={{marginTop:110,marginLeft:280}} onPress={() => navigation.navigate('BatReading2')}
/>
  </ImageBackground>
 )
  }
const BatReading2 = ({ navigation }) => {
  const [sound, setSound] = React.useState();

  
  
          async function s12() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/bats/s12.mp3')
    );
    await sound.playAsync(); }
    
    async function s13() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/bats/s13.mp3')
    );
    await sound.playAsync(); }

          async function s14() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/bats/s14.mp3')
    );
    await sound.playAsync(); }
    
    async function s15() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/bats/s15.mp3')
    );
    await sound.playAsync(); }

    async function s16() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/bats/s16.mp3')
    );
    await sound.playAsync(); }


  const [loaded] = useFonts({
    Sniglet: require('./images/Sniglet-Regular.ttf'),
  }); 
  
  if (!loaded) {
    return null;
  }
 return (
               <ImageBackground
  source={require('./assets/Readingbg.png')}
  style={{width:"100%",height:"100%"}}
  >
  <View style={{marginLeft:10,marginTop:165}} >
  <Text style={{fontFamily:'Sniglet',fontSize:30,color:'#FF4EEA'}}>
  <Text onPress={s12}>Upside down</Text>{'\n'}
  <Text onPress={s13}>Hang like bats.</Text>{'\n'}
  <Text onPress={s14}>To like bats</Text>{'\n'}
  <Text onPress={s15}>Hanging upside down</Text>{'\n'}
  <Text onPress={s16}>Like rats.</Text>
  </Text>
  </View>
  </ImageBackground>
 )
  }
  const BatsLat = ({ navigation }) => {
  return (
    <WebView 
      style={styles.webview}
      source={{ uri: 'https://drive.google.com/file/d/1C9bKNoDH3xOvIYCS29T_M-dZ1569qqjR/preview' }}

    />
  );
  }
const BatsQuiz = ({ navigation }) => {
  return (
    <WebView 
      style={styles.webview}
      source={{ uri: 'https://docs.google.com/forms/d/e/1FAIpQLSe_ku3dzMr0KUOFzqeNx3V-0FN0fmeHjMGrDNvWDNBJ30-t0A/viewform?usp=sf_link' }}
    />
  );
  }






   const Thefoolishsoninlaw = ({ navigation }) => {
const [loaded] = useFonts({
    Regular: require('./images/BalsamiqSans-Regular.ttf'),
    Fredokaregular: require('./images/FredokaOne-Regular.ttf'),
  }); 
  
  if (!loaded) {
    return null;
  }
  return (
               <ImageBackground
  source={require('./assets/Tfsil.png')}
  style={{width:"100%",height:"100%"}}
  >
  <View style={{marginTop:-20}}>
  <View style={{marginTop:50}}>
      <View style={styles.container}>    
        <Card style={styles.containerp31}>
        <TouchableOpacity onPress={() => navigation.navigate('TfsilReading')}>
        <Image   source={require('./assets/icons/Reading.png')}
  style={{backgroundColor:"#D5F7E7",borderRadius:30,marginLeft:35,marginTop:25}}></Image>
          <Text style={styles.paragraph}>
            Reading
          </Text></TouchableOpacity>
        </Card>
      </View>

      <View style={styles.containera}> 
        <Card style={styles.containerp32}>
        <TouchableOpacity onPress={() => navigation.navigate('Tfsilex')}>
        <Image   source={require('./assets/icons/Explanation1.png')}
  style={{backgroundColor:"#D5F7E7",borderRadius:30,marginLeft:58,marginTop:25}}></Image>
          <Text style={styles.paragrapha}>
            Explanation 1
          </Text></TouchableOpacity>
        </Card>
      </View>

      <View style={styles.containera}> 
        <Card style={styles.containerp33}>
        <TouchableOpacity onPress={() => navigation.navigate('Tfsilex2')}>
        <Image   source={require('./assets/icons/Explanation1.png')}
  style={{backgroundColor:"#D5F7E7",borderRadius:30,marginLeft:58,marginTop:25}}></Image>
          <Text style={{    fontSize: 18,
    marginLeft:-5,
    padding: 20,
    marginTop:-10,
    fontFamily:'Regular'}}>
            Explanation 2
          </Text></TouchableOpacity>
        </Card>
      </View>

            <View style={styles.containerb}> 
          <Card style={styles.containerp34}>
          <TouchableOpacity onPress={() => navigation.navigate('Tfsiloppo')}>
        <Image   source={require('./assets/icons/Oppositewords.png')}
  style={{backgroundColor:"#D5F7E7",borderRadius:20,marginLeft:70,marginTop:25}}></Image>
          <Text style={styles.paragraphb}>
            Opposite Words
          </Text></TouchableOpacity>
        </Card>
      </View>

            <View style={styles.containerb}> 
          <Card style={styles.containerp35}>
          <TouchableOpacity onPress={() => navigation.navigate('TfsilLat')}>
        <Image   source={require('./assets/icons/Lookandthink.png')}
  style={{backgroundColor:"#D5F7E7",borderRadius:30,marginLeft:68,marginTop:25}}></Image>
          <Text style={styles.paragraphb}>
            Look And Think
          </Text></TouchableOpacity>
        </Card>
      </View>
      
      <View style={styles.containerc}>    
        <Card style={styles.containerp36}>
        <TouchableOpacity onPress={() => navigation.navigate('TfsilQuiz')}>
        <Image   source={require('./assets/icons/Quiz.png')}
  style={{backgroundColor:"#D5F7E7",borderRadius:30,marginLeft:13,marginTop:25}}></Image>
          <Text style={styles.paragraphc}>
            Quiz
          </Text></TouchableOpacity>
        </Card>
      </View>
      </View>
      </View>
      </ImageBackground>
    )
  }
const TfsilReading = ({ navigation }) => {
  const [sound, setSound] = React.useState();

  async function s1() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/Tfsil/s1.mp3')
    );
    await sound.playAsync(); }

  async function s2() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/Tfsil/s2.mp3')
    );
    await sound.playAsync(); }

      async function s3() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/Tfsil/s3.mp3')
    );
    await sound.playAsync(); }

  async function s4() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/Tfsil/s4.mp3')
    );
    await sound.playAsync(); }


  async function s5() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/Tfsil/s5.mp3')
    );
    await sound.playAsync(); }

  async function s6() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/Tfsil/s6.mp3')
    );
    await sound.playAsync(); }



  const [loaded] = useFonts({
    Sniglet: require('./images/Sniglet-Regular.ttf'),
  }); 
  
  if (!loaded) {
    return null;
  }
 return (
               <ImageBackground
  source={require('./Reading/1.png')}
  style={{width:"100%",height:"100%"}}
  >
<Ionicons name="play-forward-outline" size={36} color="white" style={{marginTop:40,marginLeft:365}} onPress={() => navigation.navigate('TfsilReading2')}
/>
  <View style={{marginLeft:10,marginTop:80}}>
  <View style={{marginLeft:10,marginTop:-30}}>
  <Text style={{fontFamily:'Sniglet',fontSize:26,color:'#30c1ff'}}>
  <Text onPress={s1}>There was a village quack (a fake or false practitioner).</Text>{'\n'}
  <Text style={{lineHeight:7,color:'white'}}>...</Text>{'\n'}
  <Text onPress={s2}>He also trained his son to be a quack.</Text>{'\n'}
  <Text style={{lineHeight:7,color:'white'}}>...</Text>{'\n'}
  <Text onPress={s3}>One day the father- in-law of his son had a fever.</Text>{'\n'}
  <Text style={{fontFamily:'Sniglet',fontSize:26,color:'#FF4EEA'}}>
  <Text style={{lineHeight:7,color:'white'}}>...</Text>{'\n'}
  <Text onPress={s4}>He, therefore, sent his son to treat his father-in-law.</Text>{'\n'}
  <Text style={{lineHeight:7,color:'white'}}>...</Text>{'\n'}
  <Text onPress={s5}>When his son was about to leave, he gave him some advice.</Text>{'\n'}
  <Text style={{lineHeight:7,color:'white'}}>...</Text>{'\n'}
  <Text onPress={s6}>"Listen, son. Common sense will make you a great doctor.</Text>{'\n'}
  </Text>
  </Text>
  </View>
  </View>
  </ImageBackground>
 )
  }
  const TfsilReading2 = ({ navigation }) => {
    const [sound, setSound] = React.useState();
  
    async function s7() {
      const { sound } = await Audio.Sound.createAsync(
         require('./audios/Tfsil/s7.mp3')
      );
      await sound.playAsync(); }
  
    async function s8() {
      const { sound } = await Audio.Sound.createAsync(
         require('./audios/Tfsil/s8.mp3')
      );
      await sound.playAsync(); }
  
        async function s9() {
      const { sound } = await Audio.Sound.createAsync(
         require('./audios/Tfsil/s9.mp3')
      );
      await sound.playAsync(); }
  
    async function s10() {
      const { sound } = await Audio.Sound.createAsync(
         require('./audios/Tfsil/s10.mp3')
      );
      await sound.playAsync(); }
  
  
    async function s11() {
      const { sound } = await Audio.Sound.createAsync(
         require('./audios/Tfsil/s11.mp3')
      );
      await sound.playAsync(); }
  
    async function s12() {
      const { sound } = await Audio.Sound.createAsync(
         require('./audios/Tfsil/s12.mp3')
      );
      await sound.playAsync(); }
  
  
  
    const [loaded] = useFonts({
      Sniglet: require('./images/Sniglet-Regular.ttf'),
    }); 
    
    if (!loaded) {
      return null;
    }
   return (
                 <ImageBackground
    source={require('./Reading/2.png')}
    style={{width:"100%",height:"100%"}}
    >
<Ionicons name="play-forward-outline" size={36} color="white" style={{marginTop:40,marginLeft:360}} onPress={() => navigation.navigate('TfsilReading3')}
/>
    <View style={{marginLeft:10,marginTop:70}}>
    <View style={{marginLeft:10,marginTop:-30}}>
    <Text style={{fontFamily:'Sniglet',fontSize:26,color:'#30c1ff'}}>
    <Text onPress={s7}>Simple common sense. Then he gave him an example from his experience.</Text>{'\n'}
    <Text style={{lineHeight:7,color:'white'}}>...</Text>{'\n'}
    <Text onPress={s8}>"Once I went to treat a patient.</Text>{'\n'}
    <Text style={{lineHeight:7,color:'white'}}>...</Text>{'\n'}
    <Text onPress={s9}>I saw banana peels (banana skin) under his cot.</Text>{'\n'}
    <Text style={{fontFamily:'Sniglet',fontSize:26,color:'#FF4EEA'}}>
    <Text style={{lineHeight:7,color:'white'}}>...</Text>{'\n'}
    <Text onPress={s10}>Then testing his pulse (feeling) I said,</Text>{'\n'}
    <Text style={{lineHeight:7,color:'white'}}>...</Text>{'\n'}
    <Text onPress={s11}>" You must have taken banana.</Text>{'\n'}
    <Text style={{lineHeight:7,color:'white'}}>...</Text>{'\n'}
    <Text onPress={s12}>That is why you have a bad cold.</Text>{'\n'}
    </Text>
    </Text>
    </View>
    </View>
    </ImageBackground>
   )
    }
    const TfsilReading3 = ({ navigation }) => {
      const [sound, setSound] = React.useState();
    
      async function s13() {
        const { sound } = await Audio.Sound.createAsync(
           require('./audios/Tfsil/s13.mp3')
        );
        await sound.playAsync(); }
    
      async function s14() {
        const { sound } = await Audio.Sound.createAsync(
           require('./audios/Tfsil/s14.mp3')
        );
        await sound.playAsync(); }
    
          async function s15() {
        const { sound } = await Audio.Sound.createAsync(
           require('./audios/Tfsil/s15.mp3')
        );
        await sound.playAsync(); }
    
      async function s16() {
        const { sound } = await Audio.Sound.createAsync(
           require('./audios/Tfsil/s16.mp3')
        );
        await sound.playAsync(); }
    
    
      async function s17() {
        const { sound } = await Audio.Sound.createAsync(
           require('./audios/Tfsil/s17.mp3')
        );
        await sound.playAsync(); }
    
      async function s18() {
        const { sound } = await Audio.Sound.createAsync(
           require('./audios/Tfsil/s18.mp3')
        );
        await sound.playAsync(); }
    
        async function s19() {
          const { sound } = await Audio.Sound.createAsync(
             require('./audios/Tfsil/s19.mp3')
          );
          await sound.playAsync(); }
    
    
      const [loaded] = useFonts({
        Sniglet: require('./images/Sniglet-Regular.ttf'),
      }); 
      
      if (!loaded) {
        return null;
      }
     return (
                   <ImageBackground
      source={require('./Reading/3.png')}
      style={{width:"100%",height:"100%"}}
      >
<Ionicons name="play-forward-outline" size={36} color="white" style={{marginTop:40,marginLeft:360}} onPress={() => navigation.navigate('TfsilReading4')}
/>
      <View style={{marginLeft:10,marginTop:70}}>
      <View style={{marginLeft:10,marginTop:-30}}>
      <Text style={{fontFamily:'Sniglet',fontSize:26,color:'#30c1ff'}}>
      <Text onPress={s13}>The patient and his father were surprised.</Text>{'\n'}
      <Text style={{lineHeight:7,color:'white'}}>...</Text>{'\n'}
      <Text onPress={s14}>How could I tell from his pulse that he had eaten banana.</Text>{'\n'}
      <Text style={{lineHeight:7,color:'white'}}>...</Text>{'\n'}
      <Text onPress={s15}>In this way using my common sense, I became a very famous doctor.</Text>{'\n'}
      <Text style={{lineHeight:7,color:'white'}}>...</Text>{'\n'}
      <Text onPress={s16}>Therefore, son, use your common sense.</Text>{'\n'}
      <Text style={{fontFamily:'Sniglet',fontSize:26,color:'#FF4EEA'}}>
      <Text style={{lineHeight:7,color:'white'}}>...</Text>{'\n'}
      <Text onPress={s17}>"The son went to his father-in-law.</Text>{'\n'}
      <Text style={{lineHeight:7,color:'white'}}>...</Text>{'\n'}
      <Text onPress={s18}>He saw him lying on a cot.</Text>{'\n'}
      <Text style={{lineHeight:7,color:'white'}}>...</Text>{'\n'}
      <Text onPress={s19}>Under the cot, a cat was sleeping.</Text>{'\n'}
      </Text>
      </Text>
      </View>
      </View>
      </ImageBackground>
     )
      }
      const TfsilReading4 = ({ navigation }) => {
        const [sound, setSound] = React.useState();
      
        async function s20() {
          const { sound } = await Audio.Sound.createAsync(
             require('./audios/Tfsil/s20.mp3')
          );
          await sound.playAsync(); }
      
        async function s1() {
          const { sound } = await Audio.Sound.createAsync(
             require('./audios/Tfsil2/s1.mp3')
          );
          await sound.playAsync(); }
      
            async function s2() {
          const { sound } = await Audio.Sound.createAsync(
             require('./audios/Tfsil2/s2.mp3')
          );
          await sound.playAsync(); }
      
        async function s3() {
          const { sound } = await Audio.Sound.createAsync(
             require('./audios/Tfsil2/s3.mp3')
          );
          await sound.playAsync(); }
      
      
        async function s4() {
          const { sound } = await Audio.Sound.createAsync(
             require('./audios/Tfsil2/s4.mp3')
          );
          await sound.playAsync(); }
      
        const [loaded] = useFonts({
          Sniglet: require('./images/Sniglet-Regular.ttf'),
        }); 
        
        if (!loaded) {
          return null;
        }
       return (
                     <ImageBackground
        source={require('./Reading/4.png')}
        style={{width:"100%",height:"100%"}}
        >
<Ionicons name="play-forward-outline" size={36} color="white" style={{marginTop:40,marginLeft:360}} onPress={() => navigation.navigate('TfsilReading5')}
/>
        <View style={{marginLeft:10,marginTop:80}}>
        <View style={{marginLeft:10,marginTop:-30}}>
        <Text style={{fontFamily:'Sniglet',fontSize:26,color:'#30c1ff'}}>
        <Text onPress={s20}>Now he wanted to use his common sense like his father to become famous.</Text>{'\n'}
        <Text style={{lineHeight:13,color:'white'}}>...</Text>{'\n'}
        <Text onPress={s1}>He took the pulse of his father-in-law for sometime, and pretended to think.</Text>{'\n'}
        <Text style={{lineHeight:13,color:'white'}}>...</Text>{'\n'}
        <Text onPress={s2}>Then he said "Father-in-law, you must have eaten a cat,</Text>{'\n'}
        <Text style={{fontFamily:'Sniglet',fontSize:26,color:'#FF4EEA'}}>
        <Text style={{lineHeight:13,color:'white'}}>...</Text>{'\n'}
        <Text onPress={s3}>which is why you are running a high temperature.</Text>{'\n'}
        <Text style={{lineHeight:13,color:'white'}}>...</Text>{'\n'}
        <Text onPress={s4}>He, therefore, used very long and high sounding words.</Text>{'\n'}
        </Text>
        </Text>
        </View>
        </View>
        </ImageBackground>
       )
        }
        const TfsilReading5 = ({ navigation }) => {
          const [sound, setSound] = React.useState();

          async function s5() {
            const { sound } = await Audio.Sound.createAsync(
               require('./audios/Tfsil2/s5.mp3')
            );
            await sound.playAsync(); }
        
          async function s6() {
              const { sound } = await Audio.Sound.createAsync(
                 require('./audios/Tfsil2/s6.mp3')
              );
            await sound.playAsync(); }
        
          async function s7() {
            const { sound } = await Audio.Sound.createAsync(
               require('./audios/Tfsil2/s7.mp3')
            );
            await sound.playAsync(); }
        
          async function s8() {
            const { sound } = await Audio.Sound.createAsync(
               require('./audios/Tfsil2/s8.mp3')
            );
            await sound.playAsync(); }
        
              async function s9() {
            const { sound } = await Audio.Sound.createAsync(
               require('./audios/Tfsil2/s9.mp3')
            );
            await sound.playAsync(); }
        
          async function s10() {
            const { sound } = await Audio.Sound.createAsync(
               require('./audios/Tfsil2/s10.mp3')
            );
            await sound.playAsync(); }
        
        
          async function s11() {
            const { sound } = await Audio.Sound.createAsync(
               require('./audios/Tfsil2/s11.mp3')
            );
            await sound.playAsync(); }
        
          async function s12() {
            const { sound } = await Audio.Sound.createAsync(
               require('./audios/Tfsil2/s12.mp3')
            );
            await sound.playAsync(); }
        
            async function s13() {
              const { sound } = await Audio.Sound.createAsync(
                 require('./audios/Tfsil2/s13.mp3')
              );
              await sound.playAsync(); }
        
        
          const [loaded] = useFonts({
            Sniglet: require('./images/Sniglet-Regular.ttf'),
          }); 
          
          if (!loaded) {
            return null;
          }
         return (
                       <ImageBackground
          source={require('./Reading/5.png')}
          style={{width:"100%",height:"100%"}}
          >
<Ionicons name="play-forward-outline" size={36} color="white" style={{marginTop:40,marginLeft:360}} onPress={() => navigation.navigate('TfsilReading6')}
/>
          <View style={{marginLeft:10,marginTop:80}}>
          <View style={{marginLeft:10,marginTop:-30}}>
          <Text style={{fontFamily:'Sniglet',fontSize:26,color:'#30c1ff'}}>
          <Text onPress={s5}>He told his mother-in-law, "You are the sweetest, kindest, greatest and gentlest lady."</Text>{'\n'}
          <Text style={{lineHeight:12,color:'white'}}>...</Text>{'\n'}
          <Text onPress={s6}>The mother-in-law was very much pleased to hear this.</Text>{'\n'}
          <Text style={{lineHeight:35,color:'white'}}>...</Text>
          <Text onPress={s7}>She praised her son-in-law in front of her neighbours for,</Text>{'\n'}
          <Text style={{fontFamily:'Sniglet',fontSize:26,color:'#FF4EEA'}}>
          <Text style={{lineHeight:12,color:'white'}}>...</Text>{'\n'}
          <Text onPress={s8}>using high sounding words and calling her the kindest and greatest lady.</Text>{'\n'}
          <Text style={{lineHeight:12,color:'white'}}>...</Text>{'\n'}
          <Text onPress={s9}>Following strictly the second advice, the son-in-law did not sit on a chair.</Text>{'\n'}
          <Text style={{lineHeight:12,color:'white'}}>...</Text>{'\n'}
          </Text>
          </Text>
          </View>
          </View>
          </ImageBackground>
         )
          }
          const TfsilReading6 = ({ navigation }) => {
            const [sound, setSound] = React.useState();
          
            async function s10() {
              const { sound } = await Audio.Sound.createAsync(
                 require('./audios/Tfsil2/s10.mp3')
              );
              await sound.playAsync(); }
          
          
            async function s11() {
              const { sound } = await Audio.Sound.createAsync(
                 require('./audios/Tfsil2/s11.mp3')
              );
              await sound.playAsync(); }
          
            async function s12() {
              const { sound } = await Audio.Sound.createAsync(
                 require('./audios/Tfsil2/s12.mp3')
              );
              await sound.playAsync(); }
          
              async function s13() {
                const { sound } = await Audio.Sound.createAsync(
                   require('./audios/Tfsil2/s13.mp3')
                );
                await sound.playAsync(); }

                async function s14() {
                  const { sound } = await Audio.Sound.createAsync(
                     require('./audios/Tfsil2/s14.mp3')
                  );
                  await sound.playAsync(); }

                  async function s15() {
                    const { sound } = await Audio.Sound.createAsync(
                       require('./audios/Tfsil2/s15.mp3')
                    );
                    await sound.playAsync(); }
          
            const [loaded] = useFonts({
              Sniglet: require('./images/Sniglet-Regular.ttf'),
            }); 
            
            if (!loaded) {
              return null;
            }
           return (
                         <ImageBackground
            source={require('./Reading/6.png')}
            style={{width:"100%",height:"100%"}}
            >
<Ionicons name="play-forward-outline" size={36} color="white" style={{marginTop:40,marginLeft:360}} onPress={() => navigation.navigate('TfsilReading7')}
/>
            <View style={{marginLeft:10,marginTop:80}}>
            <View style={{marginLeft:10,marginTop:-30}}>
            <Text style={{fontFamily:'Sniglet',fontSize:26,color:'#30c1ff'}}>
            <Text onPress={s10}>He preferred to sit over paddy sacks piled high. </Text>{'\n'}
            <Text style={{lineHeight:7,color:'white'}}>...</Text>{'\n'}
            <Text onPress={s11}>Similarly When any food was given to him, he said, "No".</Text>{'\n'}
            <Text style={{lineHeight:7,color:'white'}}>...</Text>{'\n'}
            <Text onPress={s12}>One night his mother-in-law prepared delicious rice-pudding (Khiri) for him.</Text>{'\n'}
            <Text style={{fontFamily:'Sniglet',fontSize:26,color:'#FF4EEA'}}>
            <Text style={{lineHeight:7,color:'white'}}>...</Text>{'\n'}
            <Text onPress={s13}>When he was served this, he said, No.</Text>{'\n'}
            <Text style={{lineHeight:7,color:'white'}}>...</Text>{'\n'}
            <Text onPress={s14}>Therefore, he was not given rice-pudding.</Text>{'\n'}
            <Text style={{lineHeight:7,color:'white'}}>...</Text>{'\n'}
            <Text onPress={s15}>but two or three drops of rice-pudding fell on his plate.</Text>{'\n'}
            </Text>
            </Text>
            </View>
            </View>
            </ImageBackground>
           )
            }
            const TfsilReading7 = ({ navigation }) => {
              const [sound, setSound] = React.useState();
            
              async function s16() {
                const { sound } = await Audio.Sound.createAsync(
                   require('./audios/Tfsil2/s16.mp3')
                );
                await sound.playAsync(); }
            
              async function s17() {
                const { sound } = await Audio.Sound.createAsync(
                   require('./audios/Tfsil2/s17.mp3')
                );
                await sound.playAsync(); }
            
                  async function s18() {
                const { sound } = await Audio.Sound.createAsync(
                   require('./audios/Tfsil2/s18.mp3')
                );
                await sound.playAsync(); }
            
              async function s19() {
                const { sound } = await Audio.Sound.createAsync(
                   require('./audios/Tfsil2/s19.mp3')
                );
                await sound.playAsync(); }
            
            
              async function s20() {
                const { sound } = await Audio.Sound.createAsync(
                   require('./audios/Tfsil2/s20.mp3')
                );
                await sound.playAsync(); }
            
                async function s1() {
                  const { sound } = await Audio.Sound.createAsync(
                     require('./audios/Tfsil3/s1.mp3')
                  );
                  await sound.playAsync(); }
            
              const [loaded] = useFonts({
                Sniglet: require('./images/Sniglet-Regular.ttf'),
              }); 
              
              if (!loaded) {
                return null;
              }
             return (
                           <ImageBackground
              source={require('./Reading/7.png')}
              style={{width:"100%",height:"100%"}}
              >
<Ionicons name="play-forward-outline" size={36} color="white" style={{marginTop:40,marginLeft:360}} onPress={() => navigation.navigate('TfsilReading8')}
/>
              <View style={{marginLeft:10,marginTop:80}}>
              <View style={{marginLeft:10,marginTop:-30}}>
              <Text style={{fontFamily:'Sniglet',fontSize:26,color:'#30c1ff'}}>
              <Text onPress={s16}>When he tasted it, he wanted to have more of it.</Text>{'\n'}
              <Text style={{lineHeight:12,color:'white'}}>...</Text>{'\n'}
              <Text onPress={s17}>Thinking it would be impolite, he did not ask for it.</Text>{'\n'}
              <Text style={{lineHeight:12,color:'white'}}>...</Text>{'\n'}
              <Text onPress={s18}>But he wanted somehow to eat the rice-pudding.</Text>{'\n'}
              <Text style={{fontFamily:'Sniglet',fontSize:26,color:'#FF4EEA'}}>
              <Text style={{lineHeight:12,color:'white'}}>...</Text>{'\n'}
              <Text onPress={s19}>He carefully watched his mother-in-law.</Text>{'\n'}
              <Text style={{lineHeight:12,color:'white'}}>...</Text>{'\n'}
              <Text onPress={s20}>She put the rice pudding on a pot and placed it on sikka (a high place).</Text>{'\n'}
              <Text style={{lineHeight:12,color:'white'}}>...</Text>{'\n'}
              <Text onPress={s1}>At the dead of night, he tried to get the pudding from the pot.</Text>{'\n'}
              </Text>
              </Text>
              </View>
              </View>
              </ImageBackground>
             )
              }
              const TfsilReading8 = ({ navigation }) => {
                const [sound, setSound] = React.useState();
              
                async function s2() {
                  const { sound } = await Audio.Sound.createAsync(
                     require('./audios/Tfsil3/s2.mp3')
                  );
                  await sound.playAsync(); }
              
                async function s3() {
                  const { sound } = await Audio.Sound.createAsync(
                     require('./audios/Tfsil3/s3.mp3')
                  );
                  await sound.playAsync(); }
              
                    async function s4() {
                  const { sound } = await Audio.Sound.createAsync(
                     require('./audios/Tfsil3/s4.mp3')
                  );
                  await sound.playAsync(); }
              
                async function s5() {
                  const { sound } = await Audio.Sound.createAsync(
                     require('./audios/Tfsil3/s5.mp3')
                  );
                  await sound.playAsync(); }
              
              
                async function s6() {
                  const { sound } = await Audio.Sound.createAsync(
                     require('./audios/Tfsil3/s6.mp3')
                  );
                  await sound.playAsync(); }
              
                  async function s7() {
                    const { sound } = await Audio.Sound.createAsync(
                       require('./audios/Tfsil3/s7.mp3')
                    );
                    await sound.playAsync(); }

                    async function s8() {
                      const { sound } = await Audio.Sound.createAsync(
                         require('./audios/Tfsil3/s8.mp3')
                      );
                      await sound.playAsync(); }
              
                const [loaded] = useFonts({
                  Sniglet: require('./images/Sniglet-Regular.ttf'),
                }); 
                
                if (!loaded) {
                  return null;
                }
               return (
                             <ImageBackground
                source={require('./Reading/8.png')}
                style={{width:"100%",height:"100%"}}
                >
<Ionicons name="play-forward-outline" size={36} color="white" style={{marginTop:40,marginLeft:360}} onPress={() => navigation.navigate('TfsilReading9')}
/>
                <View style={{marginLeft:10,marginTop:80}}>
                <View style={{marginLeft:10,marginTop:-30}}>
                <Text style={{fontFamily:'Sniglet',fontSize:26,color:'#30c1ff'}}>
                <Text onPress={s2}>But unfortunately, it fell on his head.</Text>{'\n'}
                <Text style={{lineHeight:12,color:'white'}}>...</Text>{'\n'}
                <Text onPress={s3}>His whole body was smeared with rice pudding like gum.</Text>{'\n'}
                <Text style={{lineHeight:12,color:'white'}}>...</Text>{'\n'}
                <Text onPress={s4}>"What to do now ? he thought to himself.</Text>{'\n'}
                <Text style={{lineHeight:12,color:'white'}}>...</Text>{'\n'}
                <Text onPress={s5}>He saw freshly plucked cotton spread on a mat to dry.</Text>{'\n'}
                <Text style={{fontFamily:'Sniglet',fontSize:26,color:'#FF4EEA'}}>
                <Text style={{lineHeight:12,color:'white'}}>...</Text>{'\n'}
                <Text onPress={s6}>He slept on it and turned two to three times left and right.</Text>{'\n'}
                <Text style={{lineHeight:12,color:'white'}}>...</Text>{'\n'}
                <Text onPress={s7}>Then he looked like a lamb.</Text>{'\n'}
                <Text style={{lineHeight:12,color:'white'}}>...</Text>{'\n'}
                <Text onPress={s8}>What to do now?" he thought to himself.</Text>{'\n'}
                </Text>
                </Text>
                </View>
                </View>
                </ImageBackground>
               )
                }
                const TfsilReading9 = ({ navigation }) => {
                  const [sound, setSound] = React.useState();
                
                  async function s9() {
                    const { sound } = await Audio.Sound.createAsync(
                       require('./audios/Tfsil3/s9.mp3')
                    );
                    await sound.playAsync(); }
                
                  async function s10() {
                    const { sound } = await Audio.Sound.createAsync(
                       require('./audios/Tfsil3/s10.mp3')
                    );
                    await sound.playAsync(); }
                
                      async function s11() {
                    const { sound } = await Audio.Sound.createAsync(
                       require('./audios/Tfsil3/s11.mp3')
                    );
                    await sound.playAsync(); }
                
                  async function s12() {
                    const { sound } = await Audio.Sound.createAsync(
                       require('./audios/Tfsil3/s12.mp3')
                    );
                    await sound.playAsync(); }
                
                
                  async function s13() {
                    const { sound } = await Audio.Sound.createAsync(
                       require('./audios/Tfsil3/s13.mp3')
                    );
                    await sound.playAsync(); }
                
                    async function s14() {
                      const { sound } = await Audio.Sound.createAsync(
                         require('./audios/Tfsil3/s14.mp3')
                      );
                      await sound.playAsync(); }
                
                      async function s15() {
                        const { sound } = await Audio.Sound.createAsync(
                           require('./audios/Tfsil3/s15.mp3')
                        );
                        await sound.playAsync(); }
                  const [loaded] = useFonts({
                    Sniglet: require('./images/Sniglet-Regular.ttf'),
                  }); 
                  
                  if (!loaded) {
                    return null;
                  }
                 return (
                               <ImageBackground
                  source={require('./Reading/9.png')}
                  style={{width:"100%",height:"100%"}}
                  >
<Ionicons name="play-forward-outline" size={36} color="white" style={{marginTop:40,marginLeft:360}} onPress={() => navigation.navigate('TfsilReading10')}
/>
                  <View style={{marginLeft:10,marginTop:60}}>
                  <View style={{marginLeft:10,marginTop:-30}}>
                  <Text style={{fontFamily:'Sniglet',fontSize:26,color:'#30c1ff'}}>
                  <Text onPress={s9}>So he went to the cow- shed where some lambs lived.</Text>{'\n'}
                  <Text style={{lineHeight:12,color:'white'}}>...</Text>{'\n'}
                  <Text onPress={s10}>He stayed there throughout the night like a lamb.</Text>{'\n'}
                  <Text style={{lineHeight:12,color:'white'}}>...</Text>{'\n'}
                  <Text onPress={s11}>In the morning the in-laws searched for their,</Text>{'\n'}
                  <Text style={{lineHeight:12,color:'white'}}>...</Text>{'\n'}
                  <Text onPress={s12}>son-in-law and found him in the cow-shed.</Text>{'\n'}
                  <Text style={{fontFamily:'Sniglet',fontSize:26,color:'#FF4EEA'}}>
                  <Text style={{lineHeight:12,color:'white'}}>...</Text>{'\n'}
                  <Text onPress={s13}>Everyone, except the mother-in-law,</Text>{'\n'}
                  <Text style={{lineHeight:12,color:'white'}}>...</Text>{'\n'}
                  <Text onPress={s14}>thought him to be foolish. </Text>{'\n'}
                  <Text style={{lineHeight:12,color:'white'}}>...</Text>{'\n'}
                  <Text onPress={s15}>But the mother-in-law so pleaded,</Text>{'\n'}
                  </Text>
                  </Text>
                  </View>
                  </View>
                  </ImageBackground>
                 )
                  }
                  const TfsilReading10 = ({ navigation }) => {
                    const [sound, setSound] = React.useState();
                  
                    async function s16() {
                      const { sound } = await Audio.Sound.createAsync(
                         require('./audios/Tfsil3/s16.mp3')
                      );
                      await sound.playAsync(); }
                  
                    async function s17() {
                      const { sound } = await Audio.Sound.createAsync(
                         require('./audios/Tfsil3/s17.mp3')
                      );
                      await sound.playAsync(); }
                  
                        async function s18() {
                      const { sound } = await Audio.Sound.createAsync(
                         require('./audios/Tfsil3/s18.mp3')
                      );
                      await sound.playAsync(); }
                  
                    async function s19() {
                      const { sound } = await Audio.Sound.createAsync(
                         require('./audios/Tfsil3/s19.mp3')
                      );
                      await sound.playAsync(); }
                  
                  
                    async function s20() {
                      const { sound } = await Audio.Sound.createAsync(
                         require('./audios/Tfsil3/s20.mp3')
                      );
                      await sound.playAsync(); }
                  
                      async function s21() {
                        const { sound } = await Audio.Sound.createAsync(
                           require('./audios/Tfsil3/s21.mp3')
                        );
                        await sound.playAsync(); }
                  
                    const [loaded] = useFonts({
                      Sniglet: require('./images/Sniglet-Regular.ttf'),
                    }); 
                    
                    if (!loaded) {
                      return null;
                    }
                   return (
                                 <ImageBackground
                    source={require('./Reading/10.png')}
                    style={{width:"100%",height:"100%"}}
                    >
<Ionicons name="play-forward-outline" size={36} color="white" style={{marginTop:40,marginLeft:360}} onPress={() => navigation.navigate('TfsilReading11')}
/>
                    <View style={{marginLeft:10,marginTop:80}}>
                    <View style={{marginLeft:10,marginTop:-30}}>
                    <Text style={{fontFamily:'Sniglet',fontSize:26,color:'#30c1ff'}}>
                    <Text onPress={s16}>"My son-in-law is as simple and as innocent as a lamb.</Text>{'\n'}
                    <Text style={{lineHeight:12,color:'white'}}>...</Text>{'\n'}
                    <Text onPress={s17}>This made the father-in-law very angry.</Text>{'\n'}
                    <Text style={{lineHeight:12,color:'white'}}>...</Text>{'\n'}
                    <Text onPress={s18}>He was also very angry for other reasons.</Text>{'\n'}
                    <Text style={{fontFamily:'Sniglet',fontSize:26,color:'#FF4EEA'}}>
                    <Text style={{lineHeight:12,color:'white'}}>...</Text>{'\n'}
                    <Text onPress={s19}>His wife took too much care of her foolish son-in-law.</Text>{'\n'}
                    <Text style={{lineHeight:12,color:'white'}}>...</Text>{'\n'}
                    <Text onPress={s20}>She gave him good food but neglected her husband.</Text>{'\n'}
                    <Text style={{lineHeight:12,color:'white'}}>...</Text>{'\n'}
                    <Text onPress={s21}>The son-in-law, living in comfort, was not willing to go home.</Text>{'\n'}
                    </Text>
                    </Text>
                    </View>
                    </View>
                    </ImageBackground>
                   )
                    }
                    const TfsilReading11 = ({ navigation }) => {
                      const [sound, setSound] = React.useState();
                    
                      async function s1() {
                        const { sound } = await Audio.Sound.createAsync(
                           require('./audios/Tfsil4/s1.mp3')
                        );
                        await sound.playAsync(); }

                      async function s2() {
                        const { sound } = await Audio.Sound.createAsync(
                           require('./audios/Tfsil4/s2.mp3')
                        );
                        await sound.playAsync(); }
                    
                      async function s3() {
                        const { sound } = await Audio.Sound.createAsync(
                           require('./audios/Tfsil4/s3.mp3')
                        );
                        await sound.playAsync(); }
                    
                          async function s4() {
                        const { sound } = await Audio.Sound.createAsync(
                           require('./audios/Tfsil4/s4.mp3')
                        );
                        await sound.playAsync(); }
                    
                      async function s5() {
                        const { sound } = await Audio.Sound.createAsync(
                           require('./audios/Tfsil4/s5.mp3')
                        );
                        await sound.playAsync(); }
                    
                    
                      async function s6() {
                        const { sound } = await Audio.Sound.createAsync(
                           require('./audios/Tfsil4/s6.mp3')
                        );
                        await sound.playAsync(); }
                    
                        async function s7() {
                          const { sound } = await Audio.Sound.createAsync(
                             require('./audios/Tfsil4/s7.mp3')
                          );
                          await sound.playAsync(); }
                    
                      const [loaded] = useFonts({
                        Sniglet: require('./images/Sniglet-Regular.ttf'),
                      }); 
                      
                      if (!loaded) {
                        return null;
                      }
                     return (
                                   <ImageBackground
                      source={require('./Reading/11.png')}
                      style={{width:"100%",height:"100%"}}
                      >
<Ionicons name="play-forward-outline" size={36} color="white" style={{marginTop:40,marginLeft:360}} onPress={() => navigation.navigate('TfsilReading12')}
/>
                      <View style={{marginLeft:10,marginTop:70}}>
                      <View style={{marginLeft:10,marginTop:-30}}>
                      <Text style={{fontFamily:'Sniglet',fontSize:26,color:'#30c1ff'}}>
                      <Text onPress={s1}>The father-in-law, therefore, planned how to drive him out.</Text>{'\n'}
                      <Text style={{lineHeight:12,color:'white'}}>...</Text>{'\n'}
                      <Text onPress={s2}>They had a lemon plant full of green lemons.</Text>{'\n'}
                      <Text style={{lineHeight:12,color:'white'}}>...</Text>{'\n'}
                      <Text onPress={s3}>One day he said to his son-in-law ,Kind son, you have seen our lemon tree.</Text>{'\n'}
                      <Text style={{fontFamily:'Sniglet',fontSize:26,color:'#FF4EEA'}}>
                      <Text style={{lineHeight:12,color:'white'}}>...</Text>{'\n'}
                      <Text onPress={s4}>The lemons are stolen by thieves at night.</Text>{'\n'}
                      <Text style={{lineHeight:12,color:'white'}}>...</Text>{'\n'}
                      <Text onPress={s5}>I'll be happy if you can watch the plant tonight and catch the thief."</Text>{'\n'}
                      <Text style={{lineHeight:8,color:'white'}}>...</Text>{'\n'}
                      <Text onPress={s6}>He also gave his son-in-law a club.</Text>{'\n'}
                      </Text>
                      </Text>
                      </View>
                      </View>
                      </ImageBackground>
                     )
                      }
                      const TfsilReading12 = ({ navigation }) => {
                        const [sound, setSound] = React.useState();
                    
                          async function s7() {
                            const { sound } = await Audio.Sound.createAsync(
                               require('./audios/Tfsil4/s7.mp3')
                            );
                            await sound.playAsync(); }
                        
                            async function s8() {
                              const { sound } = await Audio.Sound.createAsync(
                                 require('./audios/Tfsil4/s8.mp3')
                              );
                              await sound.playAsync(); }

                              async function s9() {
                                const { sound } = await Audio.Sound.createAsync(
                                   require('./audios/Tfsil4/s9.mp3')
                                );
                                await sound.playAsync(); }
                            
                                async function s10() {
                                  const { sound } = await Audio.Sound.createAsync(
                                     require('./audios/Tfsil4/s10.mp3')
                                  );
                                  await sound.playAsync(); }

                                  async function s11() {
                                    const { sound } = await Audio.Sound.createAsync(
                                       require('./audios/Tfsil4/s11.mp3')
                                    );
                                    await sound.playAsync(); }
                                
                                    async function s12() {
                                      const { sound } = await Audio.Sound.createAsync(
                                         require('./audios/Tfsil4/s12.mp3')
                                      );
                                      await sound.playAsync(); }
                      
                        const [loaded] = useFonts({
                          Sniglet: require('./images/Sniglet-Regular.ttf'),
                        }); 
                        
                        if (!loaded) {
                          return null;
                        }
                       return (
                                     <ImageBackground
                        source={require('./Reading/12.png')}
                        style={{width:"100%",height:"100%"}}
                        >
<Ionicons name="play-forward-outline" size={36} color="white" style={{marginTop:40,marginLeft:360}} onPress={() => navigation.navigate('TfsilReading13')}
/>
                        <View style={{marginLeft:10,marginTop:70}}>
                        <View style={{marginLeft:10,marginTop:-30}}>
                        <Text style={{fontFamily:'Sniglet',fontSize:26,color:'#30c1ff'}}>
                        <Text onPress={s7}>In the darkness of night, the son-in-law was waiting for the thieves to come.</Text>{'\n'}
                        <Text style={{lineHeight:12,color:'white'}}>...</Text>{'\n'}
                        <Text onPress={s8}>The father in-law wished to take water rice and asked,</Text>{'\n'}
                        <Text style={{lineHeight:12,color:'white'}}>...</Text>{'\n'}
                        <Text onPress={s9}>his wife to bring a fresh lemon from the lemon plant.</Text>{'\n'}
                        <Text style={{fontFamily:'Sniglet',fontSize:26,color:'#FF4EEA'}}>
                        <Text style={{lineHeight:12,color:'white'}}>...</Text>{'\n'}
                        <Text onPress={s10}>When the mother-in-law was plucking a lemon,</Text>{'\n'}
                        <Text style={{lineHeight:12,color:'white'}}>...</Text>{'\n'}
                        <Text onPress={s11}>the son-in-law thrashed her with the club thinking her to be a thief.</Text>{'\n'}
                        <Text style={{lineHeight:8,color:'white'}}>...</Text>{'\n'}
                        <Text onPress={s12}>Coming to know that he had beaten his mother-in-law,</Text>{'\n'}
                        </Text>
                        </Text>
                        </View>
                        </View>
                        </ImageBackground>
                       )
                        }

                        const TfsilReading13 = ({ navigation }) => {
                          const [sound, setSound] = React.useState();
                      
                            async function s13() {
                              const { sound } = await Audio.Sound.createAsync(
                                 require('./audios/Tfsil4/s13.mp3')
                              );
                              await sound.playAsync(); }
                          
                              async function s14() {
                                const { sound } = await Audio.Sound.createAsync(
                                   require('./audios/Tfsil4/s14.mp3')
                                );
                                await sound.playAsync(); }
  
                        
                          const [loaded] = useFonts({
                            Sniglet: require('./images/Sniglet-Regular.ttf'),
                          }); 
                          
                          if (!loaded) {
                            return null;
                          }
                         return (
                                       <ImageBackground
                          source={require('./Reading/13.png')}
                          style={{width:"100%",height:"100%"}}
                          >
                          <View style={{marginLeft:10,marginTop:180}}>
                          <View style={{marginLeft:10,marginTop:-30}}>
                          <Text style={{fontFamily:'Sniglet',fontSize:26,color:'#30c1ff'}}>
                          <Text onPress={s13}>he felt so ashamed that he left for his home that night itself.</Text>{'\n'}
                          <Text style={{lineHeight:12,color:'white'}}>...</Text>{'\n'}
                          <Text onPress={s14}>The father-in-law heaved a great sigh of relief.</Text>{'\n'}
                          </Text>
                          </View>
                          </View>
                          </ImageBackground>
                         )
                          }
                          const Tfsilex = ({ navigation }) => {
                            return (
                            <WebView 
                            style={styles.webview}
                            source={{ uri: 'https://drive.google.com/file/d/1h3PRMDbDV4g-QeuNjnNg5j0hysXHgGwn/preview' }}
                            />
                            );
                            }
                            const Tfsilex2 = ({ navigation }) => {
                            return (
                            <WebView 
                            style={styles.webview}
                            source={{ uri: 'https://drive.google.com/file/d/1hC0gGNIlbUcKoYPyaU4yCfkH2ClOfON6/preview' }}
                             />
                            );
                            }
                            const Tfsiloppo = ({ navigation }) => {
                            return (
                            <WebView 
                            style={styles.webview}
                            source={{ uri: 'https://drive.google.com/file/d/1hCfTBFNjoqB2XpIqVdGwqZPTOkIOFMm_/preview' }}
                            />
                            );
                            }
  const TfsilLat = ({ navigation }) => {
  return (
    <WebView 
      style={styles.webview}
      source={{ uri: 'https://drive.google.com/file/d/1gxSoP-DnwTugh_GoTitVqULJ3laOxRuW/preview' }}

    />
  );
  }
const TfsilQuiz = ({ navigation }) => {
  return (
    <WebView 
      style={styles.webview}
      source={{ uri: 'https://docs.google.com/forms/d/e/1FAIpQLScDo4AdE_tJpcmJOq-q6VFxlz72v_3WhJNIRWMt2hGoQIVlqg/viewform?usp=sf_link' }}
    />
  );
  }









const BambooCurry = ({ navigation }) => {
const [loaded] = useFonts({
    Regular: require('./images/BalsamiqSans-Regular.ttf'),
    Fredokaregular: require('./images/FredokaOne-Regular.ttf'),
  }); 
  
  if (!loaded) {
    return null;
  }
  return (
               <ImageBackground
  source={require('./assets/icons/Bamboo.png')}
  style={{width:"100%",height:"100%"}}
  >
  <View style={{marginTop:-20}}>
  <View style={{marginTop:30}}> 
      <View style={styles.container}>    
        <Card style={styles.containerp1}>
        <TouchableOpacity onPress={() => navigation.navigate('BambooReading')}>
        <Image   source={require('./assets/icons/Reading.png')}
  style={{backgroundColor:"#D5F7E7",borderRadius:30,marginLeft:35,marginTop:25}}></Image>
          <Text style={styles.paragraph}>
            Reading
          </Text></TouchableOpacity>
        </Card>
      </View>

 
      <View style={styles.containera}> 
        <Card style={styles.containerp2}>
        <TouchableOpacity onPress={() => navigation.navigate('BambooListening')}>
        <Image   source={require('./assets/icons/Listening.png')}
  style={{backgroundColor:"#D5F7E7",borderRadius:30,marginLeft:40,marginTop:25}}></Image>
          <Text style={styles.paragrapha}>
            Listening
          </Text></TouchableOpacity>
        </Card>
      </View>



            <View style={styles.containerb}> 
          <Card style={styles.containerp3}>
          <TouchableOpacity onPress={() => navigation.navigate('BambooLat')}>
        <Image   source={require('./assets/icons/Lookandthink.png')}
  style={{backgroundColor:"#D5F7E7",borderRadius:30,marginLeft:68,marginTop:25}}></Image>
          <Text style={styles.paragraphb}>
            Look And Think
          </Text></TouchableOpacity>
        </Card>
      </View>

      <View style={styles.containerc}>    
        <Card style={styles.containerp4}>
        <TouchableOpacity onPress={() => navigation.navigate('BambooQuiz')}>
        <Image   source={require('./assets/icons/Quiz.png')}
  style={{backgroundColor:"#D5F7E7",borderRadius:30,marginLeft:13,marginTop:25}}></Image>
          <Text style={styles.paragraphc}>
            Quiz
          </Text></TouchableOpacity>
        </Card>
      </View>
     </View> 
     </View>
      </ImageBackground>
    )
  }
  const BambooReading = ({ navigation }) => {
    const [sound, setSound] = React.useState();
  
    async function s1() {
      const { sound } = await Audio.Sound.createAsync(
         require('./audios/Bamboo/s1.mp3')
      );
      await sound.playAsync(); }
  
    async function s2() {
      const { sound } = await Audio.Sound.createAsync(
         require('./audios/Bamboo/s2.mp3')
      );
      await sound.playAsync(); }
  
        async function s3() {
      const { sound } = await Audio.Sound.createAsync(
         require('./audios/Bamboo/s3.mp3')
      );
      await sound.playAsync(); }
  
    async function s4() {
      const { sound } = await Audio.Sound.createAsync(
         require('./audios/Bamboo/s4.mp3')
      );
      await sound.playAsync(); }
  
  
    async function s5() {
      const { sound } = await Audio.Sound.createAsync(
         require('./audios/Bamboo/s5.mp3')
      );
      await sound.playAsync(); }
  
    async function s6() {
      const { sound } = await Audio.Sound.createAsync(
         require('./audios/Bamboo/s6.mp3')
      );
      await sound.playAsync(); }
  
      async function s7() {
        const { sound } = await Audio.Sound.createAsync(
           require('./audios/Bamboo/s7.mp3')
        );
        await sound.playAsync(); }
    
      async function s8() {
        const { sound } = await Audio.Sound.createAsync(
           require('./audios/Bamboo/s8.mp3')
        );
        await sound.playAsync(); }
  
  
    const [loaded] = useFonts({
      Sniglet: require('./images/Sniglet-Regular.ttf'),
    }); 
    
    if (!loaded) {
      return null;
    }
   return (
                 <ImageBackground
    source={require('./Reading/1.png')}
    style={{width:"100%",height:"100%"}}
    >
  <Ionicons name="play-forward-outline" size={36} color="white" style={{marginTop:40,marginLeft:365}} onPress={() => navigation.navigate('BambooReading2')}
  />
    <View style={{marginLeft:10,marginTop:70}}>
    <View style={{marginLeft:10,marginTop:-30}}>
    <Text style={{fontFamily:'Sniglet',fontSize:26,color:'#30c1ff'}}>
    <Text onPress={s1}>Once a foolish Santal son-in-law,</Text>{'\n'}
    <Text style={{lineHeight:10,color:'white'}}>...</Text>{'\n'}
    <Text onPress={s2}>went to his in-law's place.</Text>{'\n'}
    <Text style={{lineHeight:10,color:'white'}}>...</Text>{'\n'}
    <Text onPress={s3}>His mother-in-law cooked delicious,</Text>{'\n'}
    <Text style={{lineHeight:10,color:'white'}}>...</Text>{'\n'}
    <Text onPress={s4}>dishes for her son-in-law.</Text>{'\n'}
    <Text style={{fontFamily:'Sniglet',fontSize:26,color:'#FF4EEA'}}>
    <Text style={{lineHeight:10,color:'white'}}>...</Text>{'\n'}
    <Text onPress={s5}>One of the dishes was a curry made</Text>{'\n'}
    <Text style={{lineHeight:10,color:'white'}}>...</Text>{'\n'}
    <Text onPress={s6}>out of bamboo shoot.</Text>{'\n'}
    <Text style={{lineHeight:10,color:'white'}}>...</Text>{'\n'}
    <Text onPress={s7}>The son-in-law liked it very much,</Text>{'\n'}
    <Text style={{lineHeight:10,color:'white'}}>...</Text>{'\n'}
    <Text onPress={s8}>and asked his mother-in-law,</Text>{'\n'}
    </Text>
    </Text>
    </View>
    </View>
    </ImageBackground>
   )
    }
    const BambooReading2 = ({ navigation }) => {
      const [sound, setSound] = React.useState();
    
      async function s9() {
        const { sound } = await Audio.Sound.createAsync(
           require('./audios/Bamboo/s9.mp3')
        );
        await sound.playAsync(); }
    
      async function s10() {
        const { sound } = await Audio.Sound.createAsync(
           require('./audios/Bamboo/s10.mp3')
        );
        await sound.playAsync(); }
    
          async function s11() {
        const { sound } = await Audio.Sound.createAsync(
           require('./audios/Bamboo/s11.mp3')
        );
        await sound.playAsync(); }
    
      async function s12() {
        const { sound } = await Audio.Sound.createAsync(
           require('./audios/Bamboo/s12.mp3')
        );
        await sound.playAsync(); }
    
    
      async function s13() {
        const { sound } = await Audio.Sound.createAsync(
           require('./audios/Bamboo/s13.mp3')
        );
        await sound.playAsync(); }
    
      async function s14() {
        const { sound } = await Audio.Sound.createAsync(
           require('./audios/Bamboo/s14.mp3')
        );
        await sound.playAsync(); }
    
        async function s15() {
          const { sound } = await Audio.Sound.createAsync(
             require('./audios/Bamboo/s15.mp3')
          );
          await sound.playAsync(); }
    
    
      const [loaded] = useFonts({
        Sniglet: require('./images/Sniglet-Regular.ttf'),
      }); 
      
      if (!loaded) {
        return null;
      }
     return (
                   <ImageBackground
      source={require('./Reading/2.png')}
      style={{width:"100%",height:"100%"}}
      >
    <Ionicons name="play-forward-outline" size={36} color="white" style={{marginTop:40,marginLeft:365}} onPress={() => navigation.navigate('BambooReading3')}
    />
      <View style={{marginLeft:10,marginTop:90}}>
      <View style={{marginLeft:10,marginTop:-30}}>
      <Text style={{fontFamily:'Sniglet',fontSize:26,color:'#30c1ff'}}>
      <Text onPress={s9}>"Mother, the curry is extremely delicious.</Text>{'\n'}
      <Text style={{lineHeight:10,color:'white'}}>...</Text>{'\n'}
      <Text onPress={s10}>What is the curry made from ?"</Text>{'\n'}
      <Text style={{lineHeight:10,color:'white'}}>...</Text>{'\n'}
      <Text onPress={s11}>Instead of answering his question, she</Text>{'\n'}
      <Text style={{lineHeight:10,color:'white'}}>...</Text>{'\n'}
      <Text onPress={s12}>pointed at the bamboo door.</Text>{'\n'}
      <Text style={{fontFamily:'Sniglet',fontSize:26,color:'#FF4EEA'}}>
      <Text style={{lineHeight:10,color:'white'}}>...</Text>{'\n'}
      <Text onPress={s13}>The son-in-law asked, "Is it from bamboo?"</Text>{'\n'}
      <Text style={{lineHeight:10,color:'white'}}>...</Text>{'\n'}
      <Text onPress={s14}>Yes son, the curry is made from bamboo and,</Text>{'\n'}
      <Text style={{lineHeight:10,color:'white'}}>...</Text>{'\n'}
      <Text onPress={s15}>therefore it is called "Bamboo Curry".</Text>{'\n'}
      </Text>
      </Text>
      </View>
      </View>
      </ImageBackground>
     )
      }
const BambooReading3 = ({ navigation }) => {
    const [sound, setSound] = React.useState();
  
    async function s1() {
      const { sound } = await Audio.Sound.createAsync(
         require('./audios/Bamboo2/s1.mp3')
      );
      await sound.playAsync(); }
  
    async function s2() {
      const { sound } = await Audio.Sound.createAsync(
         require('./audios/Bamboo2/s2.mp3')
      );
      await sound.playAsync(); }
  
        async function s3() {
      const { sound } = await Audio.Sound.createAsync(
         require('./audios/Bamboo2/s3.mp3')
      );
      await sound.playAsync(); }
  
    async function s4() {
      const { sound } = await Audio.Sound.createAsync(
         require('./audios/Bamboo2/s4.mp3')
      );
      await sound.playAsync(); }
  
  
    async function s5() {
      const { sound } = await Audio.Sound.createAsync(
         require('./audios/Bamboo2/s5.mp3')
      );
      await sound.playAsync(); }
  
    async function s6() {
      const { sound } = await Audio.Sound.createAsync(
         require('./audios/Bamboo2/s6.mp3')
      );
      await sound.playAsync(); }
  
      async function s7() {
        const { sound } = await Audio.Sound.createAsync(
           require('./audios/Bamboo2/s7.mp3')
        );
        await sound.playAsync(); }
  
        async function s8() {
          const { sound } = await Audio.Sound.createAsync(
             require('./audios/Bamboo2/s8.mp3')
          );
          await sound.playAsync(); }
  
    const [loaded] = useFonts({
      Sniglet: require('./images/Sniglet-Regular.ttf'),
    }); 
    
    if (!loaded) {
      return null;
    }
   return (
                 <ImageBackground
    source={require('./Reading/3.png')}
    style={{width:"100%",height:"100%"}}
    >
  <Ionicons name="play-forward-outline" size={36} color="white" style={{marginTop:40,marginLeft:365}} onPress={() => navigation.navigate('BambooReading4')}
  />
    <View style={{marginLeft:10,marginTop:80}}>
    <View style={{marginLeft:10,marginTop:-30}}>
    <Text style={{fontFamily:'Sniglet',fontSize:26,color:'#30c1ff'}}>
    <Text onPress={s1}>Next day, the son-in-law was,</Text>{'\n'}
    <Text style={{lineHeight:10,color:'white'}}>...</Text>{'\n'}
    <Text onPress={s2}>about to leave for his home.</Text>{'\n'}
    <Text style={{lineHeight:10,color:'white'}}>...</Text>{'\n'}
    <Text onPress={s3}>The bamboo curry came to his mind.</Text>{'\n'}
    <Text style={{lineHeight:10,color:'white'}}>...</Text>{'\n'}
    <Text onPress={s4}>He thought of cooking bamboo curry at home.</Text>{'\n'}
    <Text style={{fontFamily:'Sniglet',fontSize:26,color:'#FF4EEA'}}>
    <Text style={{lineHeight:10,color:'white'}}>...</Text>{'\n'}
    <Text onPress={s5}>But they did not have bamboo.</Text>{'\n'}
    <Text style={{lineHeight:10,color:'white'}}>...</Text>{'\n'}
    <Text onPress={s6}>So he carried home the bamboo door of his in-laws' house.</Text>{'\n'}
    <Text style={{lineHeight:10,color:'white'}}>...</Text>{'\n'}
    <Text onPress={s7}>Reaching home, he asked his wife to prepare bamboo curry.</Text>{'\n'}
    <Text style={{lineHeight:10,color:'white'}}>...</Text>{'\n'}
    <Text onPress={s8}>He helped his wife in chopping the dry bamboo sticks.</Text>{'\n'}
    </Text>
    </Text>
    </View>
    </View>
    </ImageBackground>
   )
    }
    const BambooReading4 = ({ navigation }) => {
      const [sound, setSound] = React.useState();

      async function s9() {
        const { sound } = await Audio.Sound.createAsync(
           require('./audios/Bamboo2/s9.mp3')
        );
        await sound.playAsync(); }
    
      async function s10() {
        const { sound } = await Audio.Sound.createAsync(
           require('./audios/Bamboo2/s10.mp3')
        );
        await sound.playAsync(); }
    
          async function s11() {
        const { sound } = await Audio.Sound.createAsync(
           require('./audios/Bamboo2/s11.mp3')
        );
        await sound.playAsync(); }
    
      async function s12() {
        const { sound } = await Audio.Sound.createAsync(
           require('./audios/Bamboo2/s12.mp3')
        );
        await sound.playAsync(); }
    
    
      async function s13() {
        const { sound } = await Audio.Sound.createAsync(
           require('./audios/Bamboo2/s13.mp3')
        );
        await sound.playAsync(); }
    
      async function s14() {
        const { sound } = await Audio.Sound.createAsync(
           require('./audios/Bamboo2/s14.mp3')
        );
        await sound.playAsync(); }
    
        async function s15() {
          const { sound } = await Audio.Sound.createAsync(
             require('./audios/Bamboo2/s15.mp3')
          );
          await sound.playAsync(); }
    
        async function s16() {
          const { sound } = await Audio.Sound.createAsync(
             require('./audios/Bamboo2/s16.mp3')
          );
          await sound.playAsync(); }

      const [loaded] = useFonts({
        Sniglet: require('./images/Sniglet-Regular.ttf'),
      }); 
      
      if (!loaded) {
        return null;
      }
     return (
                   <ImageBackground
      source={require('./Reading/4.png')}
      style={{width:"100%",height:"102%"}}
      >
      <View style={{marginLeft:10,marginTop:160}}>
      <View style={{marginLeft:10,marginTop:-30}}>
      <Text style={{fontFamily:'Sniglet',fontSize:26,color:'#30c1ff'}}>
      <Text onPress={s9}>But the dry bamboo pieces did not get boiled.</Text>{'\n'}
      <Text style={{lineHeight:10,color:'white'}}>...</Text>{'\n'}
      <Text onPress={s10}>The pieces remained as hard and stiff as before.</Text>{'\n'}
      <Text style={{lineHeight:10,color:'white'}}>...</Text>{'\n'}
      <Text onPress={s11}>He asked his wife to put more water and boil.</Text>{'\n'}
      <Text style={{lineHeight:10,color:'white'}}>...</Text>{'\n'}
      <Text onPress={s12}>That evening his in-laws came to their son-in-law's house.</Text>{'\n'}
      <Text style={{lineHeight:10,color:'white'}}>...</Text>{'\n'}
      <Text onPress={s13}>The son-in-law offered them the bamboo curry. </Text>{'\n'}
      <Text style={{lineHeight:10,color:'white'}}>...</Text>{'\n'}
      <Text onPress={s14}>The in-laws laughed at their foolish son-in-law.</Text>{'\n'}
      <Text style={{lineHeight:10,color:'white'}}>...</Text>{'\n'}
      <Text onPress={s15}>They told him, "The bamboo curry is made from,</Text>{'\n'}
      <Text style={{lineHeight:10,color:'white'}}>...</Text>{'\n'}
      <Text onPress={s16}>soft bamboo shoot and not from dry bamboo pieces".</Text>{'\n'}
      </Text>
      </View>
      </View>
      </ImageBackground>
     )
      }
  const BambooCurryListening = ({ navigation }) => {
    return (
    <WebView 
    style={styles.webview}
    source={{ uri: 'https://drive.google.com/file/d/1hSWNsCS8q6S0pZin2V_V3XmzLhdGbeg5/preview' }}
    />
    );
    }
  const BambooLat = ({ navigation }) => {
  return (
    <WebView 
      style={styles.webview}
      source={{ uri: 'https://drive.google.com/file/d/1zubfS-Dnidkx9D3yklOfFMXlTIJKNU9N/preview' }}

    />
  );
  }
const BambooQuiz = ({ navigation }) => {
  return (
    <WebView 
      style={styles.webview}
      source={{ uri: 'https://docs.google.com/forms/d/e/1FAIpQLSdH7naBC-M1dBDshoByfFzTSEv_WH5fchh7MjhYEzPzR9sJQg/viewform?usp=sf_link' }}
    />
  );
  }



  const Anail = ({ navigation }) => {
const [loaded] = useFonts({
    Regular: require('./images/BalsamiqSans-Regular.ttf'),
    Fredokaregular: require('./images/FredokaOne-Regular.ttf'),
  }); 
  
  if (!loaded) {
    return null;
  }
  return (
               <ImageBackground
  source={require('./assets/Anail.png')}
  style={{width:"100%",height:"100%"}}
  >

  <View style={{marginTop:-40,marginLeft:1}}> 
      <View style={styles.container}>    
        <Card style={styles.containerp1}>
        <TouchableOpacity onPress={() => navigation.navigate('NailReading')}>
        <Image   source={require('./assets/icons/Reading.png')}
  style={{backgroundColor:"#D5F7E7",borderRadius:30,marginLeft:35,marginTop:25}}></Image>
          <Text style={styles.paragraph}>
            Reading
          </Text></TouchableOpacity>
        </Card>
      </View>

 
      <View style={styles.containera}> 
        <Card style={styles.containerp2}>
        <TouchableOpacity onPress={() => navigation.navigate('NailListening')}>
        <Image   source={require('./assets/icons/Listening.png')}
  style={{backgroundColor:"#D5F7E7",borderRadius:30,marginLeft:40,marginTop:25}}></Image>
          <Text style={styles.paragrapha}>
            Listening
          </Text></TouchableOpacity>
        </Card>
      </View>



            <View style={styles.containerb}> 
          <Card style={styles.containerp3}>
          <TouchableOpacity onPress={() => navigation.navigate('NailLat')}>
        <Image   source={require('./assets/icons/Lookandthink.png')}
  style={{backgroundColor:"#D5F7E7",borderRadius:30,marginLeft:68,marginTop:25}}></Image>
          <Text style={styles.paragraphb}>
            Look And Think
          </Text></TouchableOpacity>
        </Card>
      </View>

      <View style={styles.containerc}>    
        <Card style={styles.containerp4}>
        <TouchableOpacity onPress={() => navigation.navigate('NailQuiz')}>
        <Image   source={require('./assets/icons/Quiz.png')}
  style={{backgroundColor:"#D5F7E7",borderRadius:30,marginLeft:13,marginTop:25}}></Image>
          <Text style={styles.paragraphc}>
            Quiz
          </Text></TouchableOpacity>
        </Card>
      </View>
     </View> 
      </ImageBackground>
    )
  }
const NailReading = ({ navigation }) => {
  const [sound, setSound] = React.useState();

  async function s1() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/nail/s1.mp3')
    );
    await sound.playAsync(); }

  async function s2() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/nail/s2.mp3')
    );
    await sound.playAsync(); }

      async function s3() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/nail/s3.mp3')
    );
    await sound.playAsync(); }

  async function s4() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/nail/s4.mp3')
    );
    await sound.playAsync(); }


  async function s5() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/nail/s5.mp3')
    );
    await sound.playAsync(); }

  async function s6() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/nail/s6.mp3')
    );
    await sound.playAsync(); }

      async function s7() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/nail/s7.mp3')
    );
    await sound.playAsync(); }

  async function s8() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/nail/s8.mp3')
    );
    await sound.playAsync(); }

      async function s9() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/nail/s9.mp3')
    );
    await sound.playAsync(); }

      async function s10() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/nail/s10.mp3')
    );
    await sound.playAsync(); }
    
    async function s11() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/nail/s11.mp3')
    );
    await sound.playAsync(); }

    async function s12() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/nail/s12.mp3')
    );
    await sound.playAsync(); }



  const [loaded] = useFonts({
    Sniglet: require('./images/Sniglet-Regular.ttf'),
  }); 
  
  if (!loaded) {
    return null;
  }
 return (
               <ImageBackground
  source={require('./assets/Anail.png')}
  style={{width:"100%",height:"100%"}}
  >
  <View style={{marginLeft:10,marginTop:200}}>
  <View style={{marginLeft:10,marginTop:-80}}>
  <Text style={{fontFamily:'Sniglet',fontSize:32,color:'#30c1ff'}}>
  <Text onPress={s1}>For want of a nail,</Text>{'\n'}
  <Text onPress={s2}>The shoe was lost,</Text>{'\n'}
  <Text onPress={s3}>For want of a shoe,</Text>{'\n'}
  <Text onPress={s4}>The horse was lost.</Text>{'\n'}
  <Text onPress={s5}>For want of a horse,</Text>{'\n'}
  <Text onPress={s6}>The rider was lost.</Text>{'\n'}

  </Text>
  </View>
  <View style={{marginLeft:10,marginTop:-35}} >
  <Text style={{fontFamily:'Sniglet',fontSize:32,color:'#FF4EEA'}}>
  <Text onPress={s7}>For want of a rider,</Text>{'\n'}
  <Text onPress={s8}>The battle was lost.</Text>{'\n'}
  <Text onPress={s9}>For want of a battle,</Text>{'\n'}
  <Text onPress={s10}>The kingdom was lost.</Text>{'\n'}
  <Text onPress={s11}>And all for the want of a</Text>{'\n'}
  <Text onPress={s12}>horse-shoe nail.</Text>
  </Text>
  </View>
  </View>
  </ImageBackground>
 )
  }

const Anaillistening = ({ navigation }) => {
  return (
    <WebView 
    style={styles.webview}
    source={{ uri: 'https://drive.google.com/file/d/1hTQkeH0fU3xfX-YUkw0nlFw55wa0k1cT/preview' }}
    />
    );
  }
  const NailLat = ({ navigation }) => {
  return (
    <WebView 
      style={styles.webview}
      source={{ uri: 'https://drive.google.com/file/d/1pWIU9SZr5q3UPbbGmU3kWcbbT2SCoQse/preview' }}

    />
  );
  }
const NailQuiz = ({ navigation }) => {
  return (
    <WebView 
      style={styles.webview}
      source={{ uri: 'https://docs.google.com/forms/d/e/1FAIpQLSf71kYGvTy2szsIGkNmG9Te79zzp3BlOtokkZl65HwYQV9X4g/viewform?usp=sf_link' }}
    />
  );
  }







  const Mystoryissaid = ({ navigation }) => {
const [loaded] = useFonts({
    Regular: require('./images/BalsamiqSans-Regular.ttf'),
    Fredokaregular: require('./images/FredokaOne-Regular.ttf'),
  }); 
  
  if (!loaded) {
    return null;
  }
  return (
               <ImageBackground
  source={require('./assets/Mystory.png')}
  style={{width:"100%",height:"100%"}}
  >
  <View style={{marginTop:-40,marginLeft:1}}> 
      <View style={styles.container}>
        <Card style={styles.containerp1}>
        <TouchableOpacity onPress={() => navigation.navigate('MystoryReading')}>
        <Image   source={require('./assets/icons/Reading.png')}
  style={{backgroundColor:"#D5F7E7",borderRadius:30,marginLeft:35,marginTop:25}}></Image>
          <Text style={styles.paragraph}>
            Reading
          </Text></TouchableOpacity>
        </Card>
      </View>

 
      <View style={styles.containera}> 
        <Card style={styles.containerp2}>
        <TouchableOpacity onPress={() => navigation.navigate('MyStoryisSaidListening')}>
        <Image   source={require('./assets/icons/Listening.png')}
  style={{backgroundColor:"#D5F7E7",borderRadius:30,marginLeft:40,marginTop:25}}></Image>
          <Text style={styles.paragrapha}>
            Listening
          </Text></TouchableOpacity>
        </Card>
      </View>



            <View style={styles.containerb}> 
          <Card style={styles.containerp3}>
          <TouchableOpacity onPress={() => navigation.navigate('MystoryLat')}>
        <Image   source={require('./assets/icons/Lookandthink.png')}
  style={{backgroundColor:"#D5F7E7",borderRadius:30,marginLeft:68,marginTop:25}}></Image>
          <Text style={styles.paragraphb}>
            Look And Think
          </Text></TouchableOpacity>
        </Card>
      </View>

      <View style={styles.containerc}>    
        <Card style={styles.containerp4}>
        <TouchableOpacity onPress={() => navigation.navigate('MyStoryQuiz')}>
        <Image   source={require('./assets/icons/Quiz.png')}
  style={{backgroundColor:"#D5F7E7",borderRadius:30,marginLeft:13,marginTop:25}}></Image>
          <Text style={styles.paragraphc}>
            Quiz
          </Text></TouchableOpacity>
        </Card>
      </View>
     </View> 
      </ImageBackground>
    )
  }
const MystoryReading = ({ navigation }) => {
  const [sound, setSound] = React.useState();

  async function s1() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/mystory/l1.mp3')
    );
    await sound.playAsync(); }

  async function s2() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/mystory/l2.mp3')
    );
    await sound.playAsync(); }

      async function s3() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/mystory/l3.mp3')
    );
    await sound.playAsync(); }

  async function s4() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/mystory/l4.mp3')
    );
    await sound.playAsync(); }


  async function s5() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/mystory/l5.mp3')
    );
    await sound.playAsync(); }

  async function s6() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/mystory/l6.mp3')
    );
    await sound.playAsync(); }

      async function s7() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/mystory/l7.mp3')
    );
    await sound.playAsync(); }

  async function s8() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/mystory/l8.mp3')
    );
    await sound.playAsync(); }




  const [loaded] = useFonts({
    Sniglet: require('./images/Sniglet-Regular.ttf'),
  }); 
  
  if (!loaded) {
    return null;
  }
 return (
               <ImageBackground
  source={require('./Reading/1.png')}
  style={{width:"100%",height:"100%"}}
  >
<Ionicons name="play-forward-outline" size={36} color="white" style={{marginTop:40,marginLeft:360}} onPress={() => navigation.navigate('Mystory2Reading')}
/>
  <View style={{marginLeft:10,marginTop:120}}>
  <View style={{marginLeft:10,marginTop:-80}}>
  <Text style={{fontFamily:'Sniglet',fontSize:26,color:'#30c1ff'}}>
  <Text onPress={s1}>My story is said</Text>{'\n'}
  <Text style={{lineHeight:10,color:'white'}}>...</Text>{'\n'}
  <Text onPress={s2}>The flowering plant is dead.</Text>{'\n'}
  <Text style={{lineHeight:10,color:'white'}}>...</Text>{'\n'}
  <Text onPress={s3}>O flowering plant ! why did you die ?</Text>{'\n'}
  <Text style={{lineHeight:10,color:'white'}}>...</Text>{'\n'}
  <Text onPress={s4}>The black cow ate me up and made me lie.</Text>{'\n'}
  <Text style={{fontFamily:'Sniglet',fontSize:26,color:'#FF4EEA'}}>
  <Text style={{lineHeight:10,color:'white'}}>...</Text>{'\n'}
  <Text onPress={s5}>O black cow! why did the plant you eat?</Text>{'\n'}
  <Text style={{lineHeight:10,color:'white'}}>...</Text>{'\n'}
  <Text onPress={s6}>Because the cowherd did not well me treat.</Text>{'\n'}
  <Text style={{lineHeight:10,color:'white'}}>...</Text>{'\n'}
  <Text onPress={s7}>O cowherd ! why didn't you well the cow treat ?</Text>{'\n'}
  <Text style={{lineHeight:10,color:'white'}}>...</Text>{'\n'}
  <Text onPress={s8}>The daughter-in-law did not give me food to eat.</Text>{'\n'}
  </Text>
  </Text>
  </View>
  </View>
  </ImageBackground>
 )
  }
const MystoryReading2 = ({ navigation }) => {
  const [sound, setSound] = React.useState();

  async function s9() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/mystory/lll.mp3')
    );
    await sound.playAsync(); }

      async function s10() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/mystory/l10.mp3')
    );
    await sound.playAsync(); }
    
    async function s11() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/mystory/l11.mp3')
    );
    await sound.playAsync(); }
  
          async function s12() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/mystory/l12.mp3')
    );
    await sound.playAsync(); }
    
    async function s13() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/mystory/l13.mp3')
    );
    await sound.playAsync(); }

          async function s14() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/mystory/l14.mp3')
    );
    await sound.playAsync(); }
    
    async function s15() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audios/mystory/l15.mp3')
    );
    await sound.playAsync(); }


  const [loaded] = useFonts({
    Sniglet: require('./images/Sniglet-Regular.ttf'),
  }); 
  
  if (!loaded) {
    return null;
  }
 return (
               <ImageBackground
  source={require('./Reading/2.png')}
  style={{width:"100%",height:"100%"}}
  >
  <View style={{marginLeft:10,marginTop:165}} >
  <Text style={{fontFamily:'Sniglet',fontSize:26,color:'#30c1ff'}}>
  <Text onPress={s9}>O daughter-in-law ! why didn't you give food,</Text>{'\n'}
  <Text style={{lineHeight:10,color:'white'}}>...</Text>{'\n'}
  <Text onPress={s10}>Because my little baby did cry.</Text>{'\n'}
  <Text style={{lineHeight:25,color:'white'}}>...</Text>{'\n'}
  <Text onPress={s11}>O little baby ! why did you cry?</Text>
  <Text style={{lineHeight:10,color:'white'}}>...</Text>{'\n'}
  <Text onPress={s12}>The ant bit me, that is why.</Text>{'\n'}
  <Text style={{fontFamily:'Sniglet',fontSize:26,color:'#FF4EEA'}}>
  <Text style={{lineHeight:10,color:'white'}}>...</Text>{'\n'}
  <Text onPress={s13}>O ant! why did you bite the little child ?</Text>{'\n'}
  <Text style={{lineHeight:10,color:'white'}}>...</Text>{'\n'}
  <Text onPress={s14}>Under the soil I hide</Text>{'\n'}
  <Text style={{lineHeight:10,color:'white'}}>...</Text>{'\n'}
  <Text onPress={s15}>And bite soft flesh when I do find.</Text>
  </Text>
  </Text>
  </View>
  </ImageBackground>
 )
  }
const Mystoryissaidlistening = ({ navigation }) => {
   const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <ImageBackground
    source={require('./assets/Mystorylistening.png')}
    style={{width:"100%",height:"100%"}}
    >

    </ImageBackground>
  );
  }
  const MyStoryisSaidListening = ({ navigation }) => {
    return (
      <WebView 
        style={styles.webview}
        source={{ uri: 'https://drive.google.com/file/d/1hYz1nyS2AahEMiCb2gqnFd5sG2qTK-7j/preview' }}
  
      />
    );
    }
  const MystoryLat = ({ navigation }) => {
  return (
    <WebView 
      style={styles.webview}
      source={{ uri: 'https://drive.google.com/file/d/1al2W9bD5kcWizhYkvATqQO24vDd93wtu/preview' }}

    />
  );
  }
  const MyStoryQuiz = ({ navigation }) => {
  return (
    <WebView 
      style={styles.webview}
      source={{ uri: 'https://docs.google.com/forms/d/e/1FAIpQLSf--SdAEwkF0yKUNVREWfBKBIYCdGcVHgmEEpkOc4fpJwUqKA/viewform?usp=sf_link' }}
    />
  );
  }




  const ComingSoon = ({ navigation }) => {
    return (
<ImageBackground
            source={require('./images/ComingSoon.png')}
            style={{width:"100%",height:"100%"}}
            > 

</ImageBackground>
    );
    }






const styles = StyleSheet.create({
container: {
    justifyContent: 'center',
    width:190,
    height:140,
    borderRadius:5,
    marginTop:100,
    marginLeft:10,
    alignItems:'center'
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
    padding: 20,
    marginTop:-10,
    fontFamily:'Regular'
  },
    containera: {
    justifyContent: 'center',
    width:180,
    height:140,
    borderRadius:5,
    marginTop:-60,
    marginLeft:145,
    alignItems:'center'
  },
  paragrapha: {
    fontSize: 18,
    textAlign: 'center',
    padding: 20,
    marginTop:-10,
    fontFamily:'Regular'
  },
  containerb: {
    justifyContent: 'center',
    width:190,
    height:140,
    borderRadius:5,
    marginTop:-65,
    marginLeft:10,
    alignItems:'center',
  },
  paragraphb: {
    fontSize: 18,
    textAlign: 'center',
    padding: 20,
    marginTop:-10,
    fontFamily:'Regular'
  },
    containerc: {
    justifyContent: 'center',
    width:180,
    height:140,
    borderRadius:5,
    marginTop:-60,
    marginLeft:145,
    alignItems:'center',
  },
  paragraphc: {
    fontSize: 18,
    textAlign: 'center',
    padding: 20,
    marginTop:-10,
    marginLeft:-10,
    fontFamily:'Regular'
  },

  containerd: {
    justifyContent: 'center',
    width:190,
    height:140,
    borderRadius:5,
    marginTop:-65,
    marginLeft:10,
    alignItems:'center',
  },
  paragraphd: {
    fontSize: 18,
    textAlign: 'center',
    padding: 20,
    marginTop:-10,
    fontFamily:'Regular'
  },
    containere: {
    justifyContent: 'center',
    width:180,
    height:140,
    borderRadius:5,
    marginTop:-60,
    marginLeft:145,
    alignItems:'center',
  },
  paragraphe: {
    fontSize: 18,
    textAlign: 'center',
    padding: 20,
    marginTop:-10,
    marginLeft:-10,
    fontFamily:'Regular'
  },

  containerf: {
    justifyContent: 'center',
    width:190,
    height:140,
    borderRadius:5,
    marginTop:-10,
    marginLeft:10,
    alignItems:'center',
  },
  paragraphf: {
    fontSize: 18,
    textAlign: 'center',
    padding: 20,
    marginTop:-10,
    fontFamily:'Regular'
  },
  listening: {
    flex: 1,
    justifyContent: 'center',
    marginTop:-280
  },
  video: {
    alignSelf: 'center',
    width: 420,
    height: 260,
  },
  container1: {
    justifyContent: 'center',
    width:180,
    height:140,
    borderRadius:5,
    marginTop:145,
    marginLeft:-5,
    alignItems:'center'
  },
  container2: {
    justifyContent: 'center',
    width:190,
    height:140,
    borderRadius:5,
    marginTop:-15,
    marginLeft:135,
    alignItems:'center',
  },
    container3: {
    justifyContent: 'center',
    width:180,
    height:140,
    borderRadius:5,
    marginTop:145,
    marginLeft:-5,
    alignItems:'center',
  },
  containerp1: {
    justifyContent: 'center',
    width:180,
    height:140,
    borderRadius:5,
    marginTop:145,
    marginLeft:-5,
    alignItems:'center'
  },
  containerp2: {
    justifyContent: 'center',
    width:190,
    height:140,
    borderRadius:5,
    marginTop:-15,
    marginLeft:135,
    alignItems:'center',
  },
    containerp3: {
    justifyContent: 'center',
    width:180,
    height:140,
    borderRadius:5,
    marginTop:145,
    marginLeft:-5,
    alignItems:'center',
  },
  containerp4: {
    justifyContent: 'center',
    width:187,
    height:140,
    borderRadius:5,
    marginTop:-15,
    marginLeft:135,
    alignItems:'center'
  },
  containerp21: {
    justifyContent: 'center',
    width:180,
    height:140,
    borderRadius:5,
    marginTop:145,
    marginLeft:-5,
    alignItems:'center'
  },
  containerp22: {
    justifyContent: 'center',
    width:190,
    height:140,
    borderRadius:5,
    marginTop:-15,
    marginLeft:135,
    alignItems:'center',
  },
    containerp23: {
    justifyContent: 'center',
    width:180,
    height:140,
    borderRadius:5,
    marginTop:135,
    marginLeft:-265,
    alignItems:'center',
  },
  containerp24: {
    justifyContent: 'center',
    width:187,
    height:140,
    borderRadius:5,
    marginTop:-15,
    marginLeft:395,
    alignItems:'center'
  },
    containerp25: {
    justifyContent: 'center',
    width:181,
    height:140,
    borderRadius:5,
    marginTop:135,
    marginLeft:-265,
    alignItems:'center'
  },
containerp31: {
    justifyContent: 'center',
    width:180,
    height:140,
    borderRadius:5,
    marginTop:145,
    marginLeft:-5,
    alignItems:'center'
  },
  containerp32: {
    justifyContent: 'center',
    width:190,
    height:140,
    borderRadius:5,
    marginTop:-15,
    marginLeft:135,
    alignItems:'center',
  },
    containerp33: {
    justifyContent: 'center',
    width:180,
    height:140,
    borderRadius:5,
    marginTop:135,
    marginLeft:-265,
    alignItems:'center',
  },
  containerp34: {
    justifyContent: 'center',
    width:187,
    height:140,
    borderRadius:5,
    marginTop:-15,
    marginLeft:395,
    alignItems:'center'
  },
    containerp35: {
    justifyContent: 'center',
    width:181,
    height:140,
    borderRadius:5,
    marginTop:145,
    marginLeft:-4,
    alignItems:'center'
  },
    containerp36: {
    justifyContent: 'center',
    width:186,
    height:140,
    borderRadius:5,
    marginTop:-15,
    marginLeft:136,
    alignItems:'center'
  },
  containerM1: {
    justifyContent: 'center',
    width:180,
    height:140,
    borderRadius:5,
    marginTop:145,
    marginLeft:-5,
    alignItems:'center'
  },
  containerM2: {
    justifyContent: 'center',
    width:190,
    height:140,
    borderRadius:5,
    marginTop:-15,
    marginLeft:135,
    alignItems:'center',
  },
    containerM3: {
    justifyContent: 'center',
    width:180,
    height:140,
    borderRadius:5,
    marginTop:135,
    marginLeft:-265,
    alignItems:'center',
  },
  containerM4: {
    justifyContent: 'center',
    width:187,
    height:140,
    borderRadius:5,
    marginTop:-15,
    marginLeft:395,
    alignItems:'center'
  },
    containerM5: {
    justifyContent: 'center',
    width:181,
    height:140,
    borderRadius:5,
    marginTop:145,
    marginLeft:-4,
    alignItems:'center'
  },
    containerM6: {
    justifyContent: 'center',
    width:186,
    height:140,
    borderRadius:5,
    marginTop:-15,
    marginLeft:136,
    alignItems:'center'
  },
      containerM7: {
    justifyContent: 'center',
    width:181,
    height:140,
    borderRadius:5,
    marginTop:145,
    marginLeft:-4,
    alignItems:'center'
  },
    containerM8: {
    justifyContent: 'center',
    width:186,
    height:140,
    borderRadius:5,
    marginTop:-15,
    marginLeft:136,
    alignItems:'center'
  },
  containerb1: {
    justifyContent: 'center',
    width:180,
    height:140,
    borderRadius:5,
    marginTop:145,
    marginLeft:-5,
    alignItems:'center'
  },
  containerb2: {
    justifyContent: 'center',
    width:190,
    height:140,
    borderRadius:5,
    marginTop:-5,
    marginLeft:395,
    alignItems:'center',
  },
    containerb3: {
    justifyContent: 'center',
    width:180,
    height:140,
    borderRadius:5,
    marginTop:145,
    marginLeft:-264,
    alignItems:'center',
  },
    webview: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  });