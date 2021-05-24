import React from 'react';
import { StyleSheet ,View, Image, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import menu from '../resources/menu.png'
import notification from '../resources/Notification.png'
import stock01 from '../resources/stock01.svg';
import stock02 from '../resources/stock02.svg';
import stock03 from '../resources/stock03.svg';
import { AntDesign } from '@expo/vector-icons';

export default function Home() {
    return (
        <View
            style={styles.container}
        >
            <View
                style={styles.header_container}
            >
                <Image
                    source={menu}
                    style={styles.menu}
                />
                <Image
                    source={notification}
                    style={styles.menu}
                />
            </View>
            <Text 
            style={styles.title}> 
            Welcome, Jessie.
            </Text>
            <View
                style={styles.head_card}
            >
                <Text 
                style={styles.head_card_title}>
                    Your total asset portfolio
                </Text>
                <Text
                style={styles.head_card_subtitle}
                >N203,935
                </Text>
                <TouchableOpacity
                style={styles.head_card_button}
                >
                    <Text
                    style={styles.head_card_button_text}
                    >
                    Invest now
                    </Text>
                </TouchableOpacity>
            </View>
            <View 
            style={styles.stock_container}>
                <View
                style={styles.stock_header_container}>
                    <Text
                    style={styles.stock_header_title}>
                        Best Plans
                    </Text>
                    <Text
                    style={styles.stock_header_subtitle}>
                        See All
                        <AntDesign name="arrowright" size={24} color="#FE555D" />
                    </Text>
                </View>
                <SafeAreaView>
                <ScrollView 
                style={styles.stock}
                horizontal='true'>
                        <View
                        style={styles.card_stock01}>
                            <Text
                            style={styles.stock_title}
                            >
                                Gold
                            </Text>
                            <Text
                            style={styles.stock_subtitle}>
                                30% return
                            </Text>
                            <Image
                                source={stock01}
                                style={styles.stock_image}
                            />
                        </View>
                        <View
                        style={styles.card_stock02}>
                            <Text
                            style={styles.stock_title}
                            >
                                Silver
                            </Text>
                            <Text
                            style={styles.stock_subtitle}>
                                60% return
                            </Text>
                            <Image
                                source={stock02}
                                style={styles.stock_image}
                            />
                        </View>
                        <View
                        style={styles.card_stock03}>
                            <Image
                                source={stock03}
                                style={styles.stock_image}
                            />
                        </View>
                    </ScrollView>
                </SafeAreaView>
                <View
                style={styles.section_news}>
                    <Text
                    style={styles.section_news_head}>
                    Investment Guide
                    </Text>
                    <View
                    style={styles.section_news_item}>
                        <Text
                        style={styles.section_news_title}>
                        Basic type of investments
                        </Text>
                        <Text
                        style={styles.section_news_subtitle}>
                        This is how you set your foot for 2020 Stock market recession. What’s next...
                        </Text>
                    </View>
                    <View>
                        <Text
                        style={styles.section_news_title}>
                        How much can you start wit..
                        </Text>
                        <Text
                        style={styles.section_news_subtitle}>
                        What do you like to see? It’s a very different market from 2018. The way...
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        
    },
    header_container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: '31px'
    },
    menu: {
        height: '24px',
        width: '24px'
    },
    title: {
        marginTop: '24px',
        fontSize:'34px',
        fontWeight: '700',
        marginLeft: '31px'
    },
    head_card: {
        backgroundColor: '#31A078',
        borderRadius: '20px',
        padding: 30,
        marginTop: '34px',
        marginHorizontal: '31px',
        
    },
    head_card_title: {
        color: 'white',
        fontSize: '16px',
        fontWeight: '400',
    },
    head_card_subtitle: {
        fontSize: '25px',
        fontWeight: '600',
        color: 'white'
    },
    head_card_button: {
        position: 'absolute',
        right: 4,
        bottom: 23,
        backgroundColor: 'white',
        borderRadius: '15px',
        height: '40px',
        width: '125px',
        textAlign: 'center',
    },
    head_card_button_text: {
        color: '#31A078',
        fontSize: '14px',
        fontWeight: '600',
        margin: 'auto'
    },
    stock_container: {
        marginTop: 10
    },
    stock_header_container: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: '20px'
    },
    stock_header_title: {
        marginLeft: '30px',
        fontWeight: '700',
        fontSize: '22px'
    },
    stock_header_subtitle: {
        marginRight: '30px',
        fontSize: '18px',
        fontWeight: '500',
        color: '#FE555D'
    },  
    stock: {
        marginLeft: '30px'
    },
    card_stock01: {
        backgroundColor: '#F0C735',
        width: '134px',
        height: '170px',
        borderRadius: '20px',
        marginRight: 20
    },
    stock_title: {
        color: 'white',
        fontSize: '17px',
        marginTop: '20px',
        marginLeft: '20px',
        fontWeight: '600'
    },
    stock_subtitle: {
        color: 'white',
        zIndex: 1,
        marginLeft: '20px',
        fontSize: '13px',
        fontWeight: '600'
    },
    stock_image: {
        height: '124px',
        width: '124px',
        position: 'absolute',
        bottom: 5,
        right: 5,
        borderRadius: '20px'
    },
    card_stock02: {
        backgroundColor: '#CAC9C9',
        width: '134px',
        height: '170px',
        borderRadius: '20px',
        marginRight: 20
    },
    card_stock03: {
        backgroundColor: '#994FF8',
        width: '134px',
        height: '170px',
        borderRadius: '20px',
    },
    section_news: {
        width: '80%',
        margin: 'auto',
        marginTop: '40px'
    },
    section_news_head: {
        fontWeight: '700',
        fontSize: '22px'
    },
    section_news_title: {
        marginTop: '10px',
        fontSize: '18px',
        color: '#4F4F4F'
    },
    section_news_subtitle: {
        fontSize: '14px',
        color: '#474747'
    }, 
    section_news_item: {
        border: '1px solid white',
        borderBottomColor: '#C4C4C4'
    }
})

