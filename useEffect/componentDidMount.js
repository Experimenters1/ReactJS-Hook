import { Text, SafeAreaView, StyleSheet, View } from 'react-native';

import React from 'react';


export default function App() {

    const [posts, setPosts] = React.useState([]);

    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json((res) => res.json()))
            .then((posts) => {
                setPosts(posts);
            });
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            {posts.map(posts => (
                <View
                    key={posts.id}
                    style={{
                        padding: 10,
                        backgroundColor: '#fff',
                        borderRadius: 8,
                        marginBottom: 8,
                        elevation: 2,
                    }}>
                    <Text>{posts.title}</Text>
                </View>
            )
            )
            }

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        padding: 16,
    },
});


//useEffect() with dependencies : https://www.youtube.com/watch?v=OOt2VRa1Oeg
// useEffect() with DOM events : https://www.youtube.com/watch?v=xZcWHaGsKUQ
//useEffect() with timer functions : https://www.youtube.com/watch?v=zGNOhVjrWFw&t=1s
//useEffect() with preview avatar : https://www.youtube.com/watch?v=Fnb3GbY9FUY&t=1s
// useEffect() with fake Chat App  : https://www.youtube.com/watch?v=eFrgfL3O_UQ&t=3s