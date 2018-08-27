import { StyleSheet } from 'react-native';
    
const styles = StyleSheet.create(
{
    MainContainer:
    {
        flex: 1,
        backgroundColor: '#ffffff',
    },

    ScrollView: 
    {
        paddingTop:50,
        paddingLeft:25,
        paddingRight:25,
        paddingBottom:200
    },

    NavBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    GrayBg: {
        backgroundColor: '#eeeeee',
        padding:25
    },

    bottomView:{
        width: '100%', 
        height: 70, 
        backgroundColor: '#333333',
        justifyContent: 'center', 
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row'
    },
    
    textStyle:{
    
        color: '#fff',
        fontSize:22
    },

    Header:
    {
        fontSize: 30,
        fontWeight: 'bold',
        color:'#444444' 
    },
    MiniHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        color:'#888888'        
    },
});


export default styles;