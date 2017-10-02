# LifeKitv2
Features

Cross platform (Compiles to Android, iOS and web application)
Live vitals monitoring
Customizable Emergency Contacts
Naloxone store locator
Emergency dispatcher
Inforamtive learn pages on Opioid, Naloxone and app
Suppports account for user and naloxone carrier
High-level overview of modules

Authentication : Handles login, user registration and session management. Also modifying user info etc

Naloxone locator : Shows the live locations of the naloxone carriers that are close to the user. Carriers maybe persons, EMS or hospital

Contact Manager : Manages the list of friends/personel/EMS that maybe contacted in the case of emergency. User can add and remove anyone/personel/EMS from list.

Learn Pages : Displays list of helpful resources on opioid and naloxone, as determined by the product owner. Kind of mini-blog for opioid.

Vitals Monitor : Monitors the state of user (using accelerometer for now) and triggers emergency procedure when necessary.

Emergency Module : Triggers and manages emergency procedure, calling ems or contacts, displaying important info on resuscitation, displaying info about naloxone locator, vibrating phone.

Porting to Native app : Create android and ios versions of the app, including guides on how it can be installed. Notes: Best implemented as a task in the existing task runner. Experience with real android/ios apps would make this a breeze.

# Project Plan:
Up to date... Always

https://drive.google.com/file/d/0B5PKqeTU-CHIM1NfRVo4aDJHZ2c/view?usp=drivesdk

# Bug Tracker:
https://lifekit.cci.drexel.edu/bugs
# Android Set Up:
1) Assuming you already have npm....
2) go to the MOBILEAPP directory
3) make sure you have Android SDK and JAVA SDK Installed. obtain the Android SDK version that is appropriate for your android phone's version.
Appropriate versions can be found here ---> https://en.wikipedia.org/wiki/Android_version_history
4) run "bash MAKE.sh"
5) plug in your phone
6) confirm its connected with the command "adb devices", your device id should show
7) to run the app perform "ionic run android"


