import React from 'react';
import { View , StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import logopic from './pictures/logo.jpg';
import { AuthContext } from './component/context';

const DrawerContent= ({props, navigation}) => {
    
    const [isDarkTheme, setIsDarkTheme] = React.useState(false);
    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    }
    return(
        
        <View style={{flex:1}}>
            <DrawerContentScrollView {... props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection: 'row', marginTop: 15}}>
                            <Avatar.Image source={logopic} size={100} />
                            <View style={{marginLeft: 1, marginTop: 25, flexDirection:'column'}}>
                                <Title style={styles.title}>Halo Raymond</Title>
                                <Caption style={styles.caption}>Main menu</Caption>
                            </View>
                        </View>
                    </View>
                    <Drawer.Section styles={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="home-outline"
                                color={color}
                                size={size}
                                />
                            )}
                            label='Home'
                            onPress={()=>{navigation.navigate('Home')}}
                    />
                    <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="home-outline"
                                color={color}
                                size={size}
                                />
                            )}
                            label='Cart'
                            onPress={()=>{navigation.navigate('Cart')}}
                    />
                    <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="home-outline"
                                color={color}
                                size={size}
                                />
                            )}
                            label='Akun'
                            onPress={()=>{navigation.navigate('Akun')}}
                    />
                    </Drawer.Section>
                    <Drawer.Section title="Tema">
                        <TouchableRipple onPress ={() => {toggleTheme()}}>
                            <View style={styles.preference}>
                                <Text>Gelap</Text>
                                <View pointerEvents="none">
                                <Switch value={isDarkTheme} />
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app"
                        color={color}
                        size={size}
                        />
                    )}
                    label='Logout'
                />

            </Drawer.Section>
        </View>
    )
};

const styles = StyleSheet.create({
    drawerContent: {
        flex :1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: 'bold',
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection :{
        marginBottom: 15,
        borderTopColor: '#FFFFFF',
        borderTopWidth: 1,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    }
})

export default DrawerContent;