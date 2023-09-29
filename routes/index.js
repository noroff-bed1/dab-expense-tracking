var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get('/', async (req, res, next) => {
	// console.log('🚀 ~ file: index.js:7 ~ router.get ~ req:', req.query.filter);
	const { data } = await axios.get('http://143.42.108.232:8888/items/expenses').catch((err) => console.log(err));

  // Filtering section can be changed as you see fit
	if (req.query.filter === 'john') {
		// filter for John Doe
		console.log('Filter for John Doe');
	}

	if (req.query.filter === 'jane') {
		// filter for Jane Doe
		console.log('Filter for Jane Doe');
	}

	if (req.query.filter === 'amazon') {
		// filter for Amazon
		console.log('Filter for Amazon');
	}

	res.render('index', { title: 'Expense Tracking', APIDATA: data.data });
});

module.exports = router;

