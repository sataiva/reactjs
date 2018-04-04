import React from "react";
import MainLayout from "../../components/MainLayout";
import CtaButton from "../../components/CtaButton";
import Block from "../../components/Block";

const navigationpackage = `
yarn add react-navigation
`;

const sidemenupackage = `
yarn add react-native-side-menu
`;

const samplestack = `
import {StackNavigator} from 'react-navigation';
import HomeScreen from "../src/screens/Home.js";
import ProfileScreen from "../src/screens/Profile.js";

const App = StackNavigator({
    Home: { screen: HomeScreen },
    Profile: { screen: ProfileScreen }
});
`;

export default props =>
  <MainLayout>
    <h2>React Native Navigation</h2>
    {/* navigation package */}
    <h4>1. Add Navigation Package</h4>
    <p>
      To navigate between apps multiple screen, react native providing a package
      name called
      <a href="https://reactnavigation.org/docs/getting-started.html">
        <b> react-navigation</b>
      </a>.
    </p>
    <p>
      React Navigation provides an easy to use navigation solution, with the
      ability to present common <b>stack navigation</b> and
      <b> tabbed navigation </b>
      patterns on both iOS and Android.
    </p>
    <Block value={navigationpackage} lang="bash" />
    {/* side menu package */}
    <h4>2. Add Side Menu Package</h4>
    <p>
      Here i am gonna use Stack Navigation with <b>Side Menu</b>
      .To create a side menu we need a
      <a href="https://reactnavigation.org/docs/getting-started.html">
        <b> react-native-side-menu </b>
      </a>
      package which is also support in both iOS and Android.
    </p>
    <Block value={sidemenupackage} />

    {/* normal app.js */}
    <h4>3. Sample Stack Navigation syntax</h4>
    <p>
      Stack Navigator accept object as an argument where each screen specified
      by a key value pair. Using those <b> Key </b> only we can navigate through
      screens. Ex. Home, Profile.
    </p>
    <Block value={samplestack} />
    <CtaButton to="/reactnative-intro/introduction">Previous</CtaButton>
    <CtaButton to="/reactnative-intro/reactnative-signup">Next</CtaButton>
  </MainLayout>;
