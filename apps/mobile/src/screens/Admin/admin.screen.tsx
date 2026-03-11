import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useAdmin } from './admin.hooks';
import { createStyles } from './admin.style';

export const AdminScreen = () => {
  const { colors, handleLogout } = useAdmin();
  const styles = createStyles(colors);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Admin Dashboard</Text>
      <Text style={{ color: colors.textSecondary }}>Manage your app here.</Text>

      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};
