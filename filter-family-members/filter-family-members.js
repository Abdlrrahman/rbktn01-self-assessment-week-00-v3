// `filterFamilyMembers` accepts two arguments, a family tree object, and a truth test. `filterFamilyMembers` 
// returns an array, in any order, of the full names of family members who pass the passed in truth test.
// You will need to use recursion in your solution in order to handle nested family trees.
//
// A family member looks like this:
//
// {
//   firstName: 'Fred'
//   lastName: 'Zirdung'
//   location: 'San Francsico'
//   children: [/* ... */]
// }
//
// EXAMPLE:

 var familyTree = {
   'firstName': 'Beth',
   'lastName': 'Johnson',
   'location': 'San Francisco',
   'children': [
     {
       'firstName': 'Beth Jr.',
       'lastName': 'Johnson',
       'location': 'Berkeley',
       'children': [
         {
           'firstName': 'Smitty',
           'lastName': 'Won',
           'location': 'Beijing',
           'children': []
         }
       ]
     },
     {
       'firstName': 'Joshie',
       'lastName': 'Wyattson',
       'location': 'Berkeley',
       'children': []
     }
   ]
 };

 var livesInBerkeley = function (familyMember) {
   return familyMember.location === 'Berkeley';
 }



var filterFamilyMembers = function (familyTree, truthTest) {
  // All your code in this function body
  var i = 0;
  var array = [];

  function check(i, j, array) {
  	var i = i || 0;
  	var = j || 0;
  	array = array || [];
  	test = (familyTree.firstName)[i] + (familyTree.lastName)[i];

  	if (truthTest(test)) {
  		array.push(truthTest);
  	}
  	if (i === Object.keys(familyTree).length) {
  		return array;
  	}
  	if (Object.values(familyTree)[i] === familyTree.children && familyTree.children !== []) {
  		return
  	}
  	return check(i + 1, array);
	}
  return check(i, array);
};


 filterFamilyMembers(familyTree, livesInBerkeley)

// returns ['Beth Jr. Johnson', 'Joshie Wyattson'];