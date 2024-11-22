import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  Switch,
  TouchableOpacity 
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

interface ButtonVisibility {
  message: boolean;
  notification: boolean;
  background: boolean;
  wallet: boolean;
  follow: boolean;
}

const SettingsScreen = ({ navigation }) => {
  const [visibleButtons, setVisibleButtons] = useState<ButtonVisibility>({
    message: false,
    notification: false,
    background: false,
    wallet: false,
    follow: false,
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Icon name="arrow-left" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Button Settings</Text>
          <View style={styles.toggleContainer}>
            <View style={styles.toggleRow}>
              <Text>Message</Text>
              <Switch value={visibleButtons.message} onValueChange={() => {}} />
            </View>
            <View style={styles.toggleRow}>
              <Text>Notifications</Text>
              <Switch value={visibleButtons.notification} onValueChange={() => {}} />
            </View>
            <View style={styles.toggleRow}>
              <Text>Background</Text>
              <Switch value={visibleButtons.background} onValueChange={() => {}} />
            </View>
            <View style={styles.toggleRow}>
              <Text>Wallet</Text>
              <Switch value={visibleButtons.wallet} onValueChange={() => {}} />
            </View>
            <View style={styles.toggleRow}>
              <Text>Follow</Text>
              <Switch value={visibleButtons.follow} onValueChange={() => {}} />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  toggleContainer: {
    gap: 16,
  },
  toggleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
});

export default SettingsScreen; 