import OnBoarding1 from "@/assets/svgs/onboarding1";
import OnBoarding2 from "@/assets/svgs/onboarding2";
import OnBoarding3 from "@/assets/svgs/onboarding3";

export const onBoardingData: onBoardingDataType[] = [
  {
    id: 1,
    title: "Welcome to NiyogHub Virtual AI Assistant",
    subtitle:
      "Your personal farming assistant, designed to help you manage tasks, get information, and connect with support—right at your fingertips.",
    image: <OnBoarding1 />,
  },
  {
    id: 1,
    title: "Stay Informed",
    subtitle:
      "Ask about the weather, get coconut farming tips, and stay updated on news and programs—just with your voice.",
    image: <OnBoarding2 />,
  },
  {
    id: 1,
    title: "Hands-Free Help",
    subtitle:
      "Easily set reminders, ask for advice, and find answers while you're in the field—all with simple voice commands.",
    image: <OnBoarding3 />,
  },
];
