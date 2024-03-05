import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, ScrollView, Image } from 'react-native';
import { Card, Button } from '@rneui/themed';

const Drawer = createDrawerNavigator();

export default function SecondComponent() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="PopularMovies">
                <Drawer.Screen name="Popular Movies" component={PopularMovies} />
                <Drawer.Screen name="Welcome" component={Welcome} />
                <Drawer.Screen name="Movie Details" component={MovieDetails} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

function PopularMovies({ navigation }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=aa6fc65fcedb7431af3ac2fbe6484cd0&language=en-US&page=1')
            .then(res => res.json())
            .then(data => setMovies(data.results))
            .catch(error => console.error('Error fetching movies:', error));
    }, []);

    return (
        <ScrollView>
            <View>
                <Text>Popular Movies</Text>
                {movies.map(movie => (
                    <Movie key={movie.id} movie={movie} navigation={navigation} />
                ))}
            </View>
        </ScrollView>
    );
}

function Movie({ movie, navigation }) {
    return (
        <Card>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Divider />
            <Card.Image
                style={{ padding: 0 }}
                source={{ uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}` }}
            />
            <Text style={{ marginVertical: 10, color: "red" }}>Release date: {movie.release_date}</Text>
            <Text style={{ marginBottom: 10, color: "green" }}>Vote average: {movie.vote_average}</Text>
            <Button
                onPress={() => navigation.navigate('Movie Details', { movie })}
                buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                title="View Details"
            />
        </Card>
    );
}

function Welcome() {
    return (
        <View>
            <Text>Welcome</Text>
        </View>
    );
}

function MovieDetails({ route }) {
    const { movie } = route.params;
    return (
        <Card>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Divider />
            <Card.Image
                style={{ padding: 0 }}
                source={{ uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}` }}
            />
            <Text style={{ marginVertical: 10, color: "red" }}>Release date: {movie.release_date}</Text>
            <Text style={{ marginBottom: 10, color: "green" }}>Vote average: {movie.vote_average}</Text>
            <Text style={{ marginBottom: 10 }}>Vote average: {movie.overview}</Text>


        </Card>
    );
}