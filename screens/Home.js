import {StyleSheet, View, Text} from "react-native";

export const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Home screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 35,
    },
    textTitle: {
        fontFamily: 'nunito-bold',
        fontSize: 18,
    }
})