import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Animated, {
  useAnimatedStyle,
  withSpring,
  useSharedValue,
  withSequence,
} from "react-native-reanimated";

// Componente AnimatedIcon
interface AnimatedIconProps {
  name: string;
  color: string;
  focused: boolean;
  size?: number;
}

function AnimatedIcon({ name, color, focused, size = 24 }: AnimatedIconProps) {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  if (focused) {
    scale.value = withSequence(
      withSpring(1.2, { damping: 8 }),
      withSpring(1, { damping: 8 })
    );
  }

  return (
    <Animated.View
      style={[
        { justifyContent: "center", alignItems: "center" },
        animatedStyle,
      ]}
    >
      <FontAwesome5 name={name} size={size} color={color} solid={focused} />
    </Animated.View>
  );
}

// Componente TabIcon
interface TabIconProps {
  name: string;
  color: string;
  focused: boolean;
}

function TabIcon({ name, color, focused }: TabIconProps) {
  return (
    <View style={styles.iconContainer}>
      <AnimatedIcon name={name} color={color} focused={focused} size={28} />
    </View>
  );
}

// Componente TabLabel
interface TabLabelProps {
  label: string;
  color: string;
}

function TabLabel({ label, color }: TabLabelProps) {
  return <Text style={[styles.label, { color }]}>{label}</Text>;
}

// Estilos compartilhados
const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 35,
  },
  label: {
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
  },
});

// Exportações
export { TabIcon, TabLabel };
