import { FlatList, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import React from 'react'
import styles from './styles';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
];



const REPORTE = [
    {
        id: 'vvv',
        title: 'Reporte de Usuario'
    }
]

const CarItem = ({ item, onPress }) => (
    <TouchableOpacity onPress={onPress} style={styles.item}>
        <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
);

export default function HomeScreen({ navigation }) {
    const renderCarItem = ({ item }) => {
        return (
            <CarItem
                item={item}
                onPress={() => navigation.navigate('Car Detail')}
            />
        );
    };

    const renderReportItem = ({ item }) => {
        return (
            <CarItem
                item={item}
                onPress={() => navigation.navigate('UserReports')}
            />
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderCarItem}
                keyExtractor={item => item.id}
            />
            <FlatList
                data={REPORTE}
                renderItem={renderReportItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    )
}
