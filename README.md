# Android Test Automation with JS Mocha

**Youtube Webinar Video**

https://www.youtube.com/watch?v=ziVxr698mlQ&t=1183s


**Requirements:**
  
  Appium Desktop Installation -> https://github.com/appium/appium-desktop
  
  Java JRE or JDK Installation -> https://www.oracle.com/tr/java/technologies/javase-downloads.html
  
  Android Studio Installation -> https://developer.android.com/studio
  
  Android SDK platforms & SDK tools -> https://developer.android.com/studio/intro/update
  
  NodeJS Installation -> https://nodejs.org/en/download/
  
  Mocha Installation -> https://mochajs.org/#installation
  
  VS Code IDE installation -> https://code.visualstudio.com/
  
  VS Code Mocha, Mocha Test Explorer Plugin ->  https://marketplace.visualstudio.com/search?term=mocha&target=VSCode&category=All%20categories&sortBy=Relevance
  
  ********


Demo APK adres: https://apkpure.com/tr/tripadvisor-hotels-activities-restaurants/com.tripadvisor.tripadvisor 

Appium capabilities: https://appium.io/docs/en/writing-running-appium/caps/ 

Appium Documentation: http://appium.io/docs/en/commands/element/find-element/ 

Selenium Documentation: https://www.selenium.dev/documentation/ 

********

**How to use ?**

1. Open Project folder with VS Code
2. Terminal -> New Terminal on VS Code
3. Run this command on the root of the project to download dependencies -> npm install
4. Start Appium Server
5. Start your Android Virtual Device (simulator) or connect your real device with USB debugging enabled real device via USB
6. Run this command on the terminal and learn your device name / UDID number -> adb devices
7. Udpate your device / UDID on local/local-driver.js file
8. Download Tripadvisor APK file to your computer and update your app path on local/local-driver.js file
9. Run this command on the root of the project to start test -> mocha testcases/search-hotel-text.js



![image](https://user-images.githubusercontent.com/89974862/132399256-3b5c7f97-d42c-478d-92d8-66341dd03be5.png)

![image](https://user-images.githubusercontent.com/89974862/132401255-c518c79e-227a-458e-a843-9ab531fd9771.png)

![image](https://user-images.githubusercontent.com/89974862/132401314-cbd91422-9851-40b4-b350-4f669795c353.png)

