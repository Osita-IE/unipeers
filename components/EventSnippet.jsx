import { events } from "@/assets/local-data/events";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Link } from "expo-router";
import { Dimensions, FlatList, Image, Text, View } from "react-native";

// calculate screen width
const screenWidth = Dimensions.get("window").width;


export default function Index () {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{
        flex: 1
      }}>
        <FlatList
        data={events}
        ItemSeparatorComponent={Seperator}
        renderItem={({item}) => {
          return (
            <View className="relative">
              <Image
              source={{uri: item.bannerUrl}}
              alt="event photo"
              style={{width:screenWidth,height:400,resizeMode:"cover"}}/>

              {/* this view is set to absolute on event component */}
              <View className=" absolute top-3 p-3 bg-teal-800 rounded-md">
                {item.free === true 
                ? 
                <Text className="text-white font-bold">Free</Text>
                :
                <Text className="text-white font-bold">₦{item.fee}</Text>
                }
              </View>

              <View className="px-3">
                <View className="p-3 rounded-b-md border border-teal-600 border-t-0">
                  <Text className="text-xs font-bold">{item.title}</Text>
                  <View className="flex flex-row justify-between">
                    <View className="flex flex-row items-center gap-x-2">
                       <FontAwesome5 
                       name="user-circle" 
                       size={24} 
                       color="black" />
                       <Text>{item.createdBy}</Text>
                    </View>
                    <Link href= {`/event-details/${item.id}`} className="p-3 font-bold text-white bg-teal-800 rounded-md">
                      <Text>Event details</Text>
                    </Link>
                  </View>
                </View>
              </View>
            </View>
          )
        }}
        keyExtractor={(item) => item.id}/>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}