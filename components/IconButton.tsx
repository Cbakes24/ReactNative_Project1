import { Pressable, StyleSheet, Text } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type Props = {
    icon: keyof typeof MaterialIcons.glyphMap;
    label: string;
    onIconPress: () => void;
  };
  

  export default function IconButton({ icon, label, onIconPress }: Props) {
    return (
      <Pressable style={styles.iconButton} onPress={onIconPress}>
        <MaterialIcons name={icon} size={24} color="#fff" />
        <Text style={styles.iconButtonLabel}>{label}</Text>
      </Pressable>
    );
  }
  
  const styles = StyleSheet.create({
    iconButton: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    iconButtonLabel: {
      color: '#fff',
      marginTop: 12,
    },
  });
  
  