//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    //return--- this method takes all values from the object object and returns them as an array.
    return Object.values(object);
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    //This method takes all the keys from the object object and returns them as an array.
    //Joins the array of keys into a single string, with each key separated by a space.
    return Object.keys(object).join(' ');

}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    //gets all values from the object object and returns them as an array.
    //Filters the array to keep only string values.
    //Joins the filtered string values into a single string, separated by spaces.
    return Object.values(object).filter(value => typeof value === 'string').join(' ');

}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    // returns if an array or an object
    return Array.isArray(collection) ? 'array': 'object';
      
    }


//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    //return the first letter and concatenates it with the rest of the string.
    return string[0].toUpperCase() + string.slice(1);

}   

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    // returns split string with space
    return string.split(' ')
    // use capitalizeWord function to each word in the array.
    .map(word => capitalizeWord(word))
    //join with space
    .join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    // Capitalizes the first letter of a string.
    return `Welcome ${capitalizeWord(object.name)}!`;
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    //gets the first character of the name property and change it to uppercase.
    var name = object.name.charAt(0).toUpperCase()
    //gets the rest of the name string after the first character.
     + object.name.slice(1);
         //gets the first character of the species property and change it to uppercase.
    var species = object.species.charAt(0).toUpperCase() 
     //gets the rest of the species string after the first character.
    + object.species.slice(1);
    // returns the capitalized name, the string " is a ", and the capitalized species.
    return name + " is a " + species;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    //if object and noises key have a noises array
    if (object.noises && object.noises.length > 0) {
        // reut
        // return arrray as a string
        return object.noises.join(' ');
        // if no noises, 
      } else {
        //return "there are no noises"
        return "there are no noises";
      }
    }
        

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    // split string , return true if include word is includes in string of words
    return string.split(' ').includes(word);

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    //access the object and the friends array and add name
object.friends.push(name);
//return the object
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    // return the friends oject the name is included in friends, false if not
    return object.friends?.includes(name) ?? false;

}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
     // Find the person in the array
     var person = array.find(p => p.name === name);
    
     // If the person is not found, return an empty array
     if (!person) {
         return [];
     }
     
     // Get the list of friends of the specified person
     var friends = person.friends;
     
     // Get the list of all names in the array
     var allNames = array.map(p => p.name);
     
     // Determine who is not a friend of the specified person
     var nonFriendsList = allNames.filter(otherName => 
         otherName !== name && !friends.includes(otherName)
     );
     
     return nonFriendsList;
 

}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    // accessing the key through the object to give it new value
    object[key] = value;
    //return object
    return object;
  

}
//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    //This method iterates over each element in the array.
    array.forEach(function(prop) {
        // removes the property specified by prop from the object
        delete object[prop];
      });

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    //return using the filter method to remove duplicates
    return array.filter((item,
        index) => array.indexOf(item) === index);
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}