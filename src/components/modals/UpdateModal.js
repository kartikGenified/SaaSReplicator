import React, { useEffect, useState } from "react";
import { StyleSheet, View, Alert, Modal, TouchableOpacity, Text, Linking } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'
const UpdateModal = () => {

    const [modalVisible, setModalVisible] = useState(false)

    const ternaryThemeColor = useSelector(
        state => state.apptheme.ternaryThemeColor,
    )
    
    const closeModal = () => {
        props.modalClose()
        setModalVisible(!modalVisible)
      }

      useEffect(() => {
        if (props.openModal === true) {
          setModalVisible(true)
        }
        else {
          setModalVisible(false)
        }
      }, [])

    useEffect(()=>{
        setModalVisible(true)
    },[])

  return (
    <Modal
    
      animationType="slide"
      transparent={true}
      visible={modalVisible} // You can replace this with your state variable indicating whether the modal should be shown or not
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
        <Icon name ="system-update" size={50} color={ternaryThemeColor}></Icon>
        <View style={{marginTop:40,alignItems:'center',justifyContent:'space-evenly'}}>
        <TouchableOpacity onPress={()=>{
            setModalVisible(false)
        }} style={{height:50,width:120,alignItems:'center',justifyContent:'center',backgroundColor:ternaryThemeColor}}>
            <Text style={{color:"white",fontSize:18,fontWeight:'600'}}>
                Cancel
            </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
             Linking.openURL(
                "https://play.google.com/store/apps/details?id=com.netcarrots.ozone"
              )
        }} style={{height:50,width:120,alignItems:'center',justifyContent:'center',backgroundColor:ternaryThemeColor}}>
            <Text style={{color:"white",fontSize:18,fontWeight:'600'}}>
                Update
            </Text>
        </TouchableOpacity>
        </View>
        
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({});

export default UpdateModal;
