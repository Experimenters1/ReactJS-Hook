import { Text, SafeAreaView, StyleSheet, Alert, TouchableOpacity } from 'react-native';

//Call back
//Là hàm (function) được truyền qua đối số 
//khi gọi hàm khác 

//1.Là hàm 
//2.ĐƯợc truyền qua đối số 

export default function App() {


    //Arrow Function 
    const myFunction = (param) => {
        if (typeof param === 'function') {
            param('tessssssst')
        }
    };

    const myCallback = (value) => {
        console.log('value: ', value);
        Alert.alert('Callback Value', value);

    }



    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={{ padding: 10, backgroundColor: 'red', }} onPress={() => myFunction(myCallback)}>
                <Text style={{ textAlign: 'center' }}>Callback</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        padding: 8,
    },


});