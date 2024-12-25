import { useCallback, useState } from "react";
import { View, Text, SafeAreaView, ScrollView, RefreshControl } from "react-native";

export default function HomeScreen() {
  const [loading, setLoading] = useState(false);

  const onRefresh = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <SafeAreaView className="min-h-screen">
      <ScrollView refreshControl={<RefreshControl refreshing={loading} onRefresh={onRefresh} />}>
        <Text className="">HomeScreen</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
