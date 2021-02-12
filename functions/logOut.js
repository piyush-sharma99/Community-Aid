const logOut = (fb, props) => {
        
          
        fb.signOut().then(() => {
            props.navigation.navigate({routeName: 'Index'});
          }).catch((error) => {
            console.log(error.toString())
          }); 
}

export default logOut;