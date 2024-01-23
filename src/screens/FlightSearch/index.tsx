import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeScreen } from '@/components/template';
import FlightSearchCard from '@/components/template/FlightSearchCard';

const FlightSearch = () => {
  console.log('temp');
  return (
    <SafeScreen>
      <FlightSearchCard />
    </SafeScreen>
  );
};

export default FlightSearch;

const styles = StyleSheet.create({});
