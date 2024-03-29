import React from 'react-native';
import { StyleSheet, Text, Image, View } from 'react-native';


const Header = () => {
    return(

      <View style={styles.container}>

          <View style={styles.header}>
                <View style={styles.imageContainer}>
                    <Image source={require('../assets/header.jpg')}
                        style={styles.headerImage}/>
                </View>
                <View>
                    
                </View>
          </View>
      </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        alignContent: 'center',
    },
    imageContainer: {
        paddingTop: 25,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 25
    },
    headerImage: {
        width: 350,
        height: 250,
        position: 'relative',
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 20,
    },
})


export default Header;