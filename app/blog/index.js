import { View, Text, Button } from 'react-native'
import React from 'react'
import {Link, useRouter} from 'expo-router';

export default function Page() {
  const router = useRouter();
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:18}}>Blog Page</Text>
      <Button onPress={() => router.push('/blog/1')} title='Go To Blog 1' />
      <Button onPress={() => router.push('/blog/2')} title='Go To Blog 2' />
      <Button onPress={() => router.push('/blog/3?author=john')} title='Go To Blog 3' />
      <Link href={{
        pathname: 'blog/4',
        params: { author: 'Jenny' }
      }}>
        <Text style={{fontSize:18}}>Go to blog 4</Text>
      </Link>
      <Button onPress={() => router.back()} title='Go Back' />
    </View>
  )
}