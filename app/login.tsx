import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { useOAuth } from "@clerk/clerk-expo";
import { useCallback } from "react";
import * as WebBrowser from "expo-web-browser";
import { Ionicons } from "@expo/vector-icons";

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  const { startOAuthFlow: startGoogleAuth } = useOAuth({
    strategy: "oauth_google",
  });
  const { startOAuthFlow: startFacebookAuth } = useOAuth({
    strategy: "oauth_facebook",
  });

  const handleGoogleSignIn = useCallback(async () => {
    try {
      const { createdSessionId, setActive } = await startGoogleAuth();
      if (createdSessionId && setActive) {
        setActive({ session: createdSessionId });
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  const handleFacebookSignIn = useCallback(async () => {
    try {
      const { createdSessionId, setActive } = await startFacebookAuth();
      if (createdSessionId && setActive) {
        setActive({ session: createdSessionId });
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Rizoma!</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.googleButton]}
          onPress={handleGoogleSignIn}
        >
          <Ionicons name="logo-google" size={24} color="#FFF" />
          <Text style={styles.buttonText}>Entrar com Google</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.facebookButton]}
          onPress={handleFacebookSignIn}
        >
          <Ionicons name="logo-facebook" size={24} color="#FFF" />
          <Text style={styles.buttonText}>Entrar com Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFEDE4",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#8B4513",
  },
  buttonContainer: {
    width: "100%",
    gap: 15,
  },
  button: {
    padding: 15,
    borderRadius: 10,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  googleButton: {
    backgroundColor: "#DB4437", // Cor oficial do Google
  },
  facebookButton: {
    backgroundColor: "#4267B2", // Cor oficial do Facebook
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  socialIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
});
