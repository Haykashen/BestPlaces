import {StyleSheet} from 'react-native';
import Colors from '@/assets/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg_Primary,
    flexDirection:'column',
    alignItems:'center'
  },
  item: {
    backgroundColor: Colors.text_Secondary,
    borderColor: 'whitesmoke',
    borderWidth: 2,
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 15,
    alignItems:'center',    
  },
  title: {
    fontSize: 32,
    fontWeight:'bold'
  },
  text:{
    fontSize: 16,
    color: Colors.text_Secondary
  },
  tinyLogo: {
    resizeMode: 'cover',
    width: '100%',
    height: 200,
  },
 textHeader:{
    color:Colors.text_Secondary, 
    fontSize:22
  },
  item_place: {
    backgroundColor: Colors.bg_input,
    borderRadius: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    height: 300,
    width: '90%',
  
    maxWidth:860
  },
  favorite_item_border:{
    borderColor:'#ff0000ff',
    borderWidth:2,
    borderStyle:'solid'
  },
  image: {
    resizeMode: 'cover',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 15,
  },
  image_view: {
    height: 'auto',
    width: 'auto',
    borderRadius: 15,
    overflow:'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    marginBlockEnd: 5,
    marginStart:5,
    marginEnd:5   
  },
  image_text: {
    color: Colors.text_Secondary,
    fontSize: 26,
    fontWeight: 'bold',
    textAlignVertical: "center",
    textAlign: "center"
  }    
});

export default styles;