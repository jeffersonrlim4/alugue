import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import New from '../components/New';
import House from '../components/House';
import Recomended from '../components/Recomended';

export default function Home() {

    const navigation = useNavigation();

    return(
        <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor: '#fff'}}>
            <View style={styles.header}>
                <View style={styles.inputArea}>
                <Feather name="search" size={24} color="#fff"/>
                <TextInput placeholder="O que está procurando" style={styles.input}/>
                </View>
            </View>

            <View style={styles.contentNew}>
                <Text style={styles.title}>Novidades</Text>
            </View>


            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15}}>
                <New 
                    cover={require('../assets/house1.jpg')} 
                    name="Casa de Praia"
                    description="Casa nova a uma quadra do mar. Lugar seguro e monitorado 24hrs"
                    onPress={() => navigation.navigate('detail')}
                />

                <New 
                    cover={require('../assets/house2.jpg')} 
                    name="Casa em Floripa"
                    description="Casa nova a uma quadra do mar. Lugar seguro e monitorado 24hrs"
                    onPress={() => {}}
                />

                <New 
                    cover={require('../assets/house3.jpg')} 
                    name="Rancho SP"
                    description="Casa nova a uma quadra do mar. Lugar seguro e monitorado 24hrs"
                    onPress={() => {}}
                />
            </ScrollView>

            <View style={{ flexDirection: 'row', marginBottom: 10, marginTop: 20, alignItems: 'center'}}>
                <Text style={styles.title}>Próximo de você</Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15}}>
                <House 
                    cover={require('../assets/house4.jpg')}
                    description="Era uma casa muito engraçada"
                    price="R$ 997,90"
                />

                <House 
                    cover={require('../assets/house5.jpg')}
                    description="Não tinha teto, não tinha nada"
                    price="R$ 997,90"
                />

                <House 
                    cover={require('../assets/house6.jpg')}
                    description="Música de ninar infanto juvenil"
                    price="R$ 997,90"
                />              
            </ScrollView>

            <View style={{ flexDirection: 'row', marginBottom: 10, marginTop: 20, alignItems: 'center'}}>
                <Text style={styles.title}>Dica do dia</Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15}}>
                <Recomended 
                    cover={require('../assets/house1.jpg')}
                    house="Casa em Floripa"
                    description="25% OFF"
                />

                <Recomended 
                    cover={require('../assets/house2.jpg')}
                    house="Casa em Timon"
                    description="25% OFF"
                />

                <Recomended 
                    cover={require('../assets/house3.jpg')}
                    house="Casa em Teresina"
                    description="25% OFF"
                />
            </ScrollView>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    header:{
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginVertical: 20
    },
    inputArea: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        width: '98%',
        backgroundColor: '#dcdcdc',
        elevation: 2,
        height: 37,
        borderRadius: 10
    },
    input: {
        fontFamily: 'Montserrat_500Medium',
        paddingHorizontal: 10,
        fontSize: 13,
        width: '90%'
    },
    contentNew: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center'
    },
    title: {
        paddingHorizontal: 15,
        fontFamily: 'Montserrat_700Bold',
        fontSize: 18,
        color: '#4f4a4a'
    }
})