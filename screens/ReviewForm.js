import React, {useState} from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Modal } from 'react-native';
import { globalStyles } from '../styles/global';
import {Formik} from 'formik';

export default function ReviewForm () {


    return(
        <View style={globalStyles.container}>
            <Formik
                initialValues={{titile: '', body: '', rating:''}}
                onSubmit={(values) => {

                    
                }}
            >


            </Formik>
        </View>
    )
}