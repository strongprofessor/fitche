import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

const Footer = () => {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View style={styles.footer}>
      <TouchableOpacity 
        style={styles.footerButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Feather 
          name="home" 
          size={24} 
          color={route.name === 'Home' ? '#000' : '#666'} 
        />
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={[styles.footerButton, styles.createButton]}
        onPress={() => navigation.navigate('Create')}
      >
        <Feather 
          name="plus" 
          size={24} 
          color={route.name === 'Create' ? '#000' : '#666'} 
        />
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.footerButton}
        onPress={() => navigation.navigate('Profile')}
      >
        <Feather 
          name="user" 
          size={24} 
          color={route.name === 'Profile' ? '#000' : '#666'} 
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingBottom: 25,
  },
  footerButton: {
    padding: 10,
  },
  createButton: {
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 10,
  },
});

export default Footer;