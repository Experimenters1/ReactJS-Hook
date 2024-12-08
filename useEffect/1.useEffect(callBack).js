import { Text, SafeAreaView, StyleSheet } from 'react-native';

import React from 'react';


export default function App() {

    const [title, setTitle] = React.useState('')

    React.useEffect(() => {
        console.log('Mounted');
    })

    return (
        <SafeAreaView style={styles.container}>
            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
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
