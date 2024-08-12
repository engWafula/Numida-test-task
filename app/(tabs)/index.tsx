import React from "react";
import { StyleSheet, SafeAreaView, Text, View, FlatList } from "react-native";
import LoanCard from "@/components/LoanCard";
import { Link } from "expo-router";
import { useQuery, gql } from '@apollo/client';
import { styles } from "./styles";

const GET_DATA = gql`
  query loanProducts {
    loanProducts {
      id,
      name,
      interestRate,
      maximumAmount
    }
  }
`;

interface loanData {
	id:number;
	name:string;
	interestRate:number;
	maximumAmount:number;
}

export default function HomeScreen() {
  const { loading, error, data } = useQuery(GET_DATA);



  if (loading) {
    return (
      <View style={styles.text}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.text}>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

    // Find the maximum interest rate
	const maxInterestRate = Math.max(...data.loanProducts.map((loan:loanData)=> loan.interestRate));


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Loan Application Dashboard</Text>
        
        <FlatList
          data={data.loanProducts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <LoanCard
              title={item.name}
              maxAmount={`UGX ${item.maximumAmount.toLocaleString()}`}
              interestRate={`${item.interestRate}%`}
              backgroundColor={item.interestRate === maxInterestRate ? "#D4FAF5" : "#FFF"}
            />
          )}
          contentContainerStyle={styles.flatListContent}
        />

      </View>
      
      <Link href="/(tabs)/apply-form" style={styles.link}>
        Apply for a Loan
      </Link>
    </SafeAreaView>
  );
}

