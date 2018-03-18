var express = require('express');
var router = express.Router();

// function tableIterator(){
//     var table = document.createElement('table'), tr, td, row, cell;
//     for (row = 0; row < 10; row++) {
//       tr = document.createElement('tr');
//       for (cell = 0; cell < 22; cell++) {
//           td = document.createElement('td');
//           tr.appendChild(td);
//           td.innerHTML = row * 22 + cell + 1;
//       }
//       table.appendChild(tr);
//   }
//   document.getElementById('container').appendChild(table);
// }


/* GET users listing. */
router.get('/results', function(req, res, next) {
  console.log("here");
  res.send('respond with a resource');
});

module.exports = router;
