import { StyleSheet } from 'react-native';
    
const styles = StyleSheet.create(
{
    MainContainer:
    {
        flex: 1,
        backgroundColor: '#ffffff',
    },

    MainBg: 
    {
        paddingTop:50,
        paddingLeft:25,
        paddingRight:25,
        paddingBottom:35
    },

    NavBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    GrayBg: {
        backgroundColor: '#eeeeee',
        borderBottomColor: '#dddddd',
        borderBottomWidth: 2,
        paddingTop:50,
        paddingLeft:25,
        paddingRight:25,
        paddingBottom:35
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
        color:'#444444',
    },
    MiniHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        color:'#999999'        
    },


    flexGrid: { display: 'flex'},
    flexCol: { flex: 1, flexDirection: 'column', display: 'flex', alignItems: 'center', justifyContent: 'center'}
});


export default styles;