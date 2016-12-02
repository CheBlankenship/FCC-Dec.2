function titleCase(str) {
  var result = [];
  var change = str.toLowerCase();
  console.log(str);
  var spt = change.split(" ");
  console.log(spt)
  for(var i=0; i<=spt.length-1; i++){
    var position = spt[i];
    if(position[0] !== position[0].toUpperCase()) {
      var up = upCase(position);
      result.push(up);
    }
    else{
      result.push(position);
    }
    var concat = result.join(" ");
  }
  return concat;
}

// if (str[0] === str[0].toUpperCase())


function upCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
  }
console.log(titleCase("I'm HSID ASt"));
