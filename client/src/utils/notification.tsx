import { messaging } from "./firebase.tsx";
import { getToken } from "firebase/messaging";

export async function requestNotificationPermission(playerAddress: string) {
  try {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      const token = await getToken(messaging, {
        vapidKey: "BDxvVGSyhGggzz7fxjb4pTrpBAiK6Aa4pIprLCu14ZvsD-EjexIFABznJpW0lXV5A57OMgqclcn8-SPgeilKS2g",
      });
      console.log("Notification permission granted. FCM Token:", token);
      console.log("Player Address:", playerAddress);

      // Send token and playerAddress to your backend
    //   await fetch("YOUR_BACKEND_API_URL/save-token", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ playerAddress, token }),
    //   });
    } else {
      console.log("Notification permission denied.");
    }
  } catch (error) {
    console.error("Error requesting notification permission:", error);
  }
}