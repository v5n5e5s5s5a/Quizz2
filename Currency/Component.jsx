import { StatusBar } from "expo-status-bar";
import { Text, View, TextInput } from "react-native";

export const InputComp = ({Placeholder, onChangeText, value}) => {
    return(
        <TextInput
        placeholder={Placeholder}
        onChangeText={onChangeText}
        value={value}
        keyboardType="numeric"
        style={{borderWidth: 1, width: 'auto', height: 'auto', padding: 20, borderRadius: 10,}}
        />
    )
}