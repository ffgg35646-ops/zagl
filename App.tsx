import "react-native-gesture-handler";
import React from "react";
import AppNavigator from "./src/navigation/AppNavigator";
import InAppNotificationBanner from "./src/components/shared/InAppNotificationBanner";

export default function App() {
  return (
    <>
      <AppNavigator />
      <InAppNotificationBanner />
    </>
  );
}
