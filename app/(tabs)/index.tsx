import { GET_CATEGORIES } from "@/api/categories"
import useFetch from "@/hooks/useFetch"
import { useCallback } from "react"
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  RefreshControl,
} from "react-native"

export default function HomeScreen() {
  const {
    data: categories,
    refetch,
    loading,
  } = useFetch({ GET: GET_CATEGORIES })

  console.log(categories)

  const onRefresh = useCallback(() => {
    refetch()
  }, [])

  return (
    <SafeAreaView className="min-h-screen">
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={onRefresh} />
        }
      >
        <Text className="">HomeScreen</Text>
      </ScrollView>
    </SafeAreaView>
  )
}
