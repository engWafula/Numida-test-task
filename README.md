# Numida Test App 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

## Update the API baseURL
 Ensure you replace the IP address of the API baseURL found in the apiBaseUrl.ts file found in the constants folder with your IP address.
               
 You can find your IP address using the following command in your terminal.

 1. Linux
     ```bash
       ip a
     ```
2. Windows
    ```bash
       ipconfig
     ```
    
  ```bash
      export const baseURL = "http://10.10.2.112:5000"
  ```    

    
             


