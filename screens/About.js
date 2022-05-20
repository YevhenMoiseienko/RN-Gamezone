import {StyleSheet, View, Text} from "react-native";

export const About = () => {
    return (
        <View style={styles.container}>
            <Text>About screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 35,
    }
})