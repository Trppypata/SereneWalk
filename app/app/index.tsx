import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { MotiView } from 'moti';
import { useRouter } from 'expo-router';

type Slide = {
  image: any;
  title: string;
  description: string;
};

const slides: Slide[] = [
  {
    image: require('@/assets/images/route.png'),
    title: 'Safe Walking',
    description:
      'Get safe walking routes to your destination, while avoiding high-risk areas.',
  },
  {
    image: require('@/assets/images/sos.png'),
    title: 'SOS',
    description:
      'Press SOS button to make a very loud sound and flashlight in blinking mode if in an emergency.',
  },
  {
    image: require('@/assets/images/shield.png'),
    title: 'Safety Tips',
    description:
      'Learn different safety tips in public spaces while being confident to travel.',
  },
];

const LoadingScreen = () => (
  <View style={styles.loadingScreen}>
    <Image
      source={require('@/assets/images/SereneWalk.png')}
      style={styles.logo}
    />
    <View style={styles.progressBar}>
      <View style={styles.progress} />
    </View>
  </View>
);

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading && isAutoScrolling) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isLoading, isAutoScrolling]);

  if (isLoading) return <LoadingScreen />;

  return (
    <View style={styles.splashScreen}>
      <MotiView
        key={currentSlide}
        from={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: 'timing', duration: 1000 }}
        style={styles.slideContainer}
      >
        <Image source={slides[currentSlide].image} style={styles.slideImage} />
        <Text style={styles.slideTitle}>{slides[currentSlide].title}</Text>
        <Text style={styles.slideDescription}>
          {slides[currentSlide].description}
        </Text>
      </MotiView>

      <View style={styles.dotIndicators}>
        {slides.map((_, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.dot, index === currentSlide && styles.dotActive]}
            onPress={() => {
              setIsAutoScrolling(false);
              setCurrentSlide(index);
            }}
          />
        ))}
      </View>

      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => router.push('/login')} // 👈 router-based navigation
        >
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonSignup}
          onPress={() => router.push('/signup')} // 👈 router-based navigation
        >
          <Text style={{ color: '#e52867', fontWeight: 'bold' }}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  splashScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
  },
  slideContainer: {
    alignItems: 'center',
  },
  slideImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    borderRadius: 15,
  },
  slideTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#e52867',
  },
  slideDescription: {
    fontSize: 16,
    color: '#333',
    marginTop: 5,
    textAlign: 'center',
  },
  dotIndicators: {
    flexDirection: 'row',
    marginTop: 100,
  },
  dot: {
    width: 10,
    height: 10,
    marginHorizontal: 5,
    backgroundColor: '#ccc',
    borderRadius: 5,
  },
  dotActive: {
    backgroundColor: '#e52867',
  },
  buttonGroup: {
    flexDirection: 'row',
    gap: 10,
    position: 'absolute',
    bottom: 30,
    width: '100%',
    justifyContent: 'center',
  },
  buttonLogin: {
    backgroundColor: '#e52867',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 20,
    width: 150,
    alignItems: 'center',
  },
  buttonSignup: {
    backgroundColor: '#fff',
    borderColor: '#e52867',
    borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 20,
    width: 150,
    alignItems: 'center',
  },
  loadingScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  progressBar: {
    width: '80%',
    maxWidth: 300,
    height: 8,
    backgroundColor: '#f8d7e3',
    borderRadius: 5,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 30,
  },
  progress: {
    width: '100%',
    height: '100%',
    backgroundColor: '#e52867',
  },
});
