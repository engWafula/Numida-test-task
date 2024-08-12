import React from "react";
import { SafeAreaView, Text, View, FlatList } from "react-native";
import LoanCard from "@/components/LoanCard";
import { useRouter } from "expo-router";
import { useQuery} from '@apollo/client';
import { styles } from "./styles";
import { GET_LOAN_PRODUCT_DATA } from "@/utils/graphql/queries/loanProducts";
import { loanData, loanProductsData } from "@/types";
import CustomButton from "@/components/CustomButton";
import { Colors } from "@/constants/Colors";
import Loader from "@/components/Loader";
import CustomError from "@/components/CustomError";




export default function HomeScreen() {
  const { loading, error, data,refetch } = useQuery<loanProductsData>(GET_LOAN_PRODUCT_DATA);
  const router = useRouter()


  const handleRefetch = async()=>{
    try {
      await refetch()
    } catch (error) {
    }
  }


  if (loading) return <Loader/>
  

  if (error) return <CustomError message={error.message} onRetry={handleRefetch}/>
    

    // Find the maximum interest rate
	const maxInterestRate = Math.max(...data!.loanProducts.map((loan:loanData)=> loan.interestRate));


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Loan Application Dashboard</Text>
        
        <FlatList
          data={data!.loanProducts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <LoanCard
              title={item.name}
              maxAmount={`UGX ${item.maximumAmount.toLocaleString()}`}
              interestRate={`${item.interestRate}%`}
              backgroundColor={item.interestRate === maxInterestRate ? Colors.activeCard : Colors.primary}
            />
          )}
          contentContainerStyle={styles.flatListContent}
        />

      </View>
      
      <CustomButton
       title="APPLY FOR A LOAN"
       loading={false}
       onPress={() => router.push("/(tabs)/apply-form")}
      />
    </SafeAreaView>
  );
}

