import React from 'react'

const Stack = createStackNavigator();

const PilarMediaNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Listings" component={ListingsScreen} options={{ headerShown: false }}/>
    <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} />
  </Stack.Navigator>
);

export default PilarMediaNavigator
