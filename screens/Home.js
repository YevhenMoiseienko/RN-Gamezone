import {View, Text} from "react-native";
import {globalStyles} from "../styles/global";

export const Home = () => {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.textTitle}>Home screen</Text>
        </View>
    )
}