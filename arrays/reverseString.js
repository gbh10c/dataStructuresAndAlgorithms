function reverse(str) {
  //check input
  if (!str || str.length < 2 || typeof str !== 'string') {
    return 'INVALID INPUT';
  }

  // MY INPUT
  // const array = str.split('');
  // let reverse = [];
  // for (let item of array) {
  //   reverse.splice(0, 0, item);
  // }

  // NO SPLIT STRING
  // let reverse = [];
  // for (let i = str.length-1; i >= 0; i--) {
  //   reverse.push(str[i]);
  // }

  // ARRAY METHODS 
  // console.log(str.split('').reverse().join(''));

  // WITH SPREAD OPERATOR
  console.log([...str].reverse().join(''));
}

reverse('Hi My name is Gordon');