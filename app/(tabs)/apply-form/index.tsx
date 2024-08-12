import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from "react-native";
import CustomTextInput from "@/components/CustomTextInput";
import { useMutation } from "@/hooks/useMutation";
import { useRouter } from "expo-router";
import { styles } from "./styles";

interface FormProps {
  full_name: string;
  email: string;
  loan_amount: string;
  loan_purpose: string;
}

export default function ApplyForm() {
  const router = useRouter();
  const [mutate, { data, loading, error, setData, setError }] = useMutation<
    any,
    FormProps
  >("/apply-loan");

  const formik = useFormik<FormProps>({
    initialValues: {
      full_name: "",
      email: "",
      loan_amount: "",
      loan_purpose: "",
    },
    validationSchema: Yup.object({
      full_name: Yup.string().required("Full Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      loan_amount: Yup.number()
        .typeError("Loan Amount must be a number")
        .positive("Loan Amount must be greater than zero")
        .required("Loan Amount is required"),
      loan_purpose: Yup.string().required("Loan Purpose is required"),
    }),
    onSubmit: async (values) => {
      await mutate(values);
    },
  });

  const navigateToDashBoard = (status: string) => {
    setData(null);
    setError("");

    if (status == "success") {
      formik.resetForm();
      router.push("/(tabs)");
    }
  };

  useEffect(() => {
    if (data) {
      Alert.alert("Success", data.message, [
        {
          text: "OK",
          onPress: () => {
            navigateToDashBoard("success");
          },
        },
      ]);
    }

    if (error) {
      Alert.alert(
        "Error",
        "There was an issue submitting your loan application. Please try again.",
        [
          {
            text: "OK",
            onPress: () => {
              navigateToDashBoard("error");
            },
          },
        ]
      );
    }
  }, [data, error]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.headerText}>Apply for a loan</Text>

        <View style={styles.form}>
          <CustomTextInput
            label="Full Name"
            placeholder="Full Name"
            value={formik.values.full_name}
            onChangeText={formik.handleChange("full_name")}
            keyboardType="default"
            error={formik.errors.full_name}
            touched={formik.touched.full_name}
          />

          <CustomTextInput
            label="Email"
            placeholder="yourname@example.com"
            value={formik.values.email}
            onChangeText={formik.handleChange("email")}
            keyboardType="email-address"
            error={formik.errors.email}
            touched={formik.touched.email}
          />

          <CustomTextInput
            label="Loan Amount"
            placeholder="UGX"
            value={formik.values.loan_amount}
            onChangeText={formik.handleChange("loan_amount")}
            keyboardType="numeric"
            error={formik.errors.loan_amount}
            touched={formik.touched.loan_amount}
          />

          <CustomTextInput
            label="Loan Purpose"
            placeholder="Loan Purpose"
            value={formik.values.loan_purpose}
            onChangeText={formik.handleChange("loan_purpose")}
            keyboardType="default"
            error={formik.errors.loan_purpose}
            touched={formik.touched.loan_purpose}
          />

          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => formik.handleSubmit()}
          >
            <Text style={styles.submitButtonText}>
              {loading ? "Loading.." : "SUBMIT"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
