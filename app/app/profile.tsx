import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  Switch,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function SettingsScreen() {
  const [isPushEnabled, setIsPushEnabled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const togglePush = () => setIsPushEnabled(prev => !prev);
  const toggleDark = () => setIsDarkMode(prev => !prev);

  const handlePress = (label: string) => {
    Alert.alert('${label} pressed');
  };
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerBackground} />

      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.headerBar}>
          <Ionicons name="settings-sharp" size={24} color="#fff" />
          <Text style={styles.headerText}>Profile</Text>
        </View>

        <View style={styles.profileCard}>
          <View style={styles.profileRow}>
            <Image
              source={require('@/assets/images/avatar.png')}
              style={styles.avatar}
            />
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>Girlie Hatdog</Text>
              <Text style={styles.profileEmail}>yourname@gmail.com</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Account Settings</Text>

          <TouchableOpacity style={styles.row} onPress={() => handlePress('Edit Profile')}>
            <Text style={styles.rowText}>Edit profile</Text>
            <Feather name="chevron-right" size={20} color="#999" />
          </TouchableOpacity>

          <View style={styles.row}>
            <Text style={styles.rowText}>Push notifications</Text>
            <Switch value={isPushEnabled} onValueChange={togglePush} />
          </View>

          <View style={styles.row}>
            <Text style={styles.rowText}>Dark mode</Text>
            <Switch value={isDarkMode} onValueChange={toggleDark} />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionLabel}>More</Text>

          <TouchableOpacity style={styles.row} onPress={() => handlePress('About Us')}>
            <Text style={styles.rowText}>About us</Text>
            <Feather name="chevron-right" size={20} color="#999" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.row} onPress={() => handlePress('Privacy Policy')}>
            <Text style={styles.rowText}>Privacy policy</Text>
            <Feather name="chevron-right" size={20} color="#999" />
          </TouchableOpacity>
        </View>

        
        <View style={styles.section}>
          <TouchableOpacity style={styles.logoutRow} onPress={() => router.push('/login')}>
            <Ionicons name="log-out-outline" size={20} color="#e53935" />
            <Text style={styles.logoutText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.bottomNav}>
          <TouchableOpacity style={styles.navItem} onPress={() => router.push('/homepage')}>
            <Ionicons name="home" size={24} color="gray" />
            <Text style={styles.navTextActive}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem} onPress={() => router.push('/sos')}>
            <MaterialIcons name="sos" size={24} color="gray" />
            <Text style={styles.navText}>SOS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Ionicons name="compass" size={24} color="gray" />
            <Text style={styles.navText}>Explore</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem} onPress={() => router.push('/safetytips')}>
            <Ionicons name="bulb" size={24} color="gray" />
            <Text style={styles.navText}>Tips</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Ionicons name="person" size={24} color="#DA549B" />
            <Text style={styles.navTextActive}>Profile</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#fff',
  },
  headerBackground: {
    backgroundColor: '#DA549B',
    position: 'absolute',
    height: 230,
    width: '100%',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    zIndex: -1,
  },
  scroll: {
    paddingBottom: 100,
  },
  headerBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 48,
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  profileCard: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginTop: -15,
    padding: 20,
    borderRadius: 16,
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#EEE',
    marginRight: 14,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  profileEmail: {
    fontSize: 14,
    color: '#888',
  },
  section: {
    marginTop: 30,
    marginHorizontal: 20,
  },
  sectionLabel: {
    fontSize: 14,
    color: '#999',
    marginBottom: 10,
  },
  row: {
    backgroundColor: '#fff',
    paddingVertical: 14,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowText: {
    fontSize: 16,
    color: '#333',
  },
  logoutRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#eee',
  },
  logoutText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '600',
    color: '#e53935',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: '#e5e7eb',
    elevation: 10,
    zIndex: 100,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#6b7280',
  },
  navTextActive: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#DA549B',
  },
});