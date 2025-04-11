import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function App() {
    const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.navbar}>
        <View style={styles.locationLeft}>
          <Ionicons name="location" size={18} color="#000" />
          <View style={styles.locationTextWrapper}>
            <Text style={styles.locationLabel}>Current location</Text>
            <Text style={styles.locationName}>Tandang Sora, Quezon City</Text>
          </View>
        </View>
        <Ionicons name="notifications-outline" size={24} color="#000" />
      </View>

      <View style={styles.emergencyRow}>
        <View style={styles.textSection}>
          <Text style={styles.title}>Are you in an emergency?</Text>
          <Text style={styles.subtitle}>
            Press the SOS button, it will make a very loud sound, and will
            automatically turn on the flashlight in blinking mode.
          </Text>
        </View>
        <Image
          source={require('@/assets/images/emergency_illustration.png')}
          style={styles.illustration}
        />
      </View>

      <View style={styles.sosContainer}>
        <View style={styles.sosBox}>
          <TouchableOpacity style={styles.sosButton}>
            <Text style={styles.sosText}>SOS</Text>
            <Text style={styles.sosSubtext}>Press 3 for second</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomNav}>
          <TouchableOpacity style={styles.navItem}
          onPress={() => router.push('/homepage')}>
            <Ionicons name="home" size={24} color="gray" />
            <Text style={styles.navText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}
          onPress={() => router.push('/sos')}>
            <MaterialIcons name="sos" size={24} color="#DA549B" />
            <Text style={styles.navTextActive}>SOS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Ionicons name="compass" size={24} color="gray" />
            <Text style={styles.navText}>Explore</Text>
          </TouchableOpacity>
           <TouchableOpacity style={styles.navItem}
           onPress={() => router.push('/safetytips')}>
                <Ionicons name="bulb" size={24} color="gray" />
                <Text style={styles.navText}>Tips</Text>
            </TouchableOpacity>
          <TouchableOpacity style={styles.navItem} onPress={() => router.push('/profile')}>
            <Ionicons name="person" size={24} color="gray" />
            <Text style={styles.navText}>Profile</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
            
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20, 
    paddingTop: 12,
    backgroundColor: '#fff',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 16,
    paddingVertical: 18,
    borderRadius: 12,
    marginBottom: 12,
  },
  locationLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationTextWrapper: {
    marginLeft: 6,
    justifyContent: 'center',
  },
  locationLabel: {
    fontSize: 13,
    color: '#444',
  },
  locationName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  emergencyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    gap: 12,
    marginHorizontal: 20, 
  },
  textSection: {
    flex: 1,
    paddingRight: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#000',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    lineHeight: 22,
  },
  illustration: {
    width: 130,
    height: 130,
    borderRadius: 65,
  },
  
  sosContainer: {
    marginTop: 50,
    alignItems: 'center',
  },
  sosBox: {
    width: 350,
    height: 260,
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
  },
  sosButton: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: '#DA549B',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 12,
  },
  sosText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  sosSubtext: {
    fontSize: 12,
    color: '#fff',
    marginTop: 6,
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
