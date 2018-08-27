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
        paddingLeft:30,
        paddingRight:30,
        paddingBottom:200
    },

    NavBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
        fontSize: 32,
        fontWeight: 'bold',
        color:'#666666' 
    },
    MiniHeader: {
        fontSize: 22,
        fontWeight: 'bold',
        color:'#666666'        
    },
});


export default styles;