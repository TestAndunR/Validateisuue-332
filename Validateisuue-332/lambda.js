let AWS = require('aws-sdk');
let firebase = require('firebase');
exports.handler = function(event, context, callback) {


	let config = {
            apiKey: "AIzaSyDMF17Pu7_5gLRYX_Ff_dbA8Ak5_RONIQA",
            authDomain: "testusercreate-89b32.firebaseapp.com",
            databaseURL: "https://testusercreate-89b32.firebaseio.com",
            storageBucket: "testusercreate-89b32.appspot.com"
        };

        if (!firebase.apps.length) {
            firebase.initializeApp(config);
        }

        //TODO configure proper authentication
        firebase.auth().signInWithEmailAndPassword('andun@adroitlogic.com', 'Andun!12345').catch(error => {
            console.log(error);
        });
        // Get a reference to the database service
        this.database = firebase.database();





    let test = {
      'qacezihatu':
        {
          'coords':
            {
              'longitude':-118.126638628,
              'latitude':-31.5263571073
            }
          },
      'gamigaqafa':
        {
          'coords':
            {
              'longitude':-52.6953097232,
              'latitude':73.665317506
            }
          },
      'zesafoxitu':
        {
          'coords':
            {
              'longitude':-32.3029549135,
              'latitude':51.0008954684
            }
          },
      'zosuvobanu':
        {
          'coords':
            {
              'longitude':86.6492973439,
              'latitude':78.7264700508
            }
          }
    }



    


// let x=10   
// while (x>0){
//     console.log(x);
//     x --;

    Object.keys(hotspacesUserLocation).forEach((key, index) => {

      let randomnum = Math.floor(Math.random() * (1000 - 100)) / 10000;
      // console.log(randomnum);
      let newLat = hotspacesUserLocation[key].coords.latitude + randomnum;
      let newLong = hotspacesUserLocation[key].coords.longitude + randomnum;

      console.log("New Values"+newLong+","+newLat);

      let ref = this.database.ref();
      let locationRef = ref.child('userLocation');
      let lastKnownRef = ref.child('lastKnown');
      // console.log(lastKnown.child(key));
      let latKey = Math.trunc((newLat+90) * 100);
      let longKey = Math.trunc((newLong+180) * 100);

      let locationKeyRef = locationRef.child(longKey + "," + latKey);
      let lastKnownKeyRef = lastKnownRef.child(key)

      console.log("locationKeyRef: "+locationKeyRef);
      console.log("lastKnownKeyRef:"+lastKnownKeyRef);
      lastKnownRef.child(key).once('value', (data) => {
              let prevLat = data.val().lat;
              let prevLong = data.val().long;
              console.log(data.val())
              // console.log(prevLat);
              // console.log(prevLong);
              let prevlatKey = Math.trunc((prevLat+90) * 100);
              let prevlongKey = Math.trunc((prevLong+180) * 100);
              console.log("PreviousVals"+prevlongKey+","+prevlatKey)

              locationRef.child(prevlongKey+ "," + prevlatKey).child(key).remove();
              let userKey = locationKeyRef.child(key);
              console.log("Success"+userKey);
              userKey.update({lat: newLat,long:newLong});

              console.log("Success");
              // console.log("Inserted data to " + userId + " with data " + JSON.stringify(data));
              lastKnownKeyRef.update({lat: newLat,long:newLong});
              console.log("Last known updated");


              // setTimeout(console.log("Time out for 1st iter"), 3000);
      });



});


// }


// module.exports = FirebaseService2;


	callback(null,'Successfully executed');
}