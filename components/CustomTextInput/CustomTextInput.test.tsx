import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import CustomTextInput from ".";

describe("CustomTextInput", () => {
  it("renders label and placeholder", () => {
    const { getByText, getByPlaceholderText } = render(
      <CustomTextInput
        label="Email"
        placeholder="yourname@example.com"
        value=""
        onChangeText={() => {}}
        keyboardType="email-address"
      />
    );

    expect(getByText("Email")).toBeTruthy();
    expect(getByPlaceholderText("yourname@example.com")).toBeTruthy();
  });

  it("displays the error message when touched and error props are provided", () => {
    const { getByText } = render(
      <CustomTextInput
        label="Email"
        placeholder="yourname@example.com"
        value=""
        onChangeText={() => {}}
        keyboardType="email-address"
        error="Invalid email address"
        touched={true}
      />
    );

    expect(getByText("Invalid email address")).toBeTruthy();
  });

  it("does not display the error message when touched is false", () => {
    const { queryByText } = render(
      <CustomTextInput
        label="Email"
        placeholder="yourname@example.com"
        value=""
        onChangeText={() => {}}
        keyboardType="email-address"
        error="Invalid email address"
        touched={false}
      />
    );

    expect(queryByText("Invalid email address")).toBeNull();
  });

  it("calls onChangeText when input value changes", () => {
    const handleChangeText = jest.fn();

    const { getByPlaceholderText } = render(
      <CustomTextInput
        label="Email"
        placeholder="yourname@example.com"
        value=""
        onChangeText={handleChangeText}
        keyboardType="email-address"
      />
    );

    const input = getByPlaceholderText("yourname@example.com");
    fireEvent.changeText(input, "test@example.com");

    expect(handleChangeText).toHaveBeenCalledWith("test@example.com");
  });
});
