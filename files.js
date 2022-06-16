const fs = require('fs');

// reading files
// fs.readFile('./docs/blog.txt', (err, data) => {
// 	if (err) console.log(err);

// 	console.log(data.toString());
// });

// console.log('last line of code');
// writing files
// fs.writeFile('./docs/blog2.txt', 'Hello World Bros', () => {
// 	console.log('file was changes');
// });
// directories
if (!fs.existsSync('./assets')) {
	fs.mkdir('./assets', (err, data) => {
		if (err) console.log(err);
		console.log('folder created');
	});
} else {
	fs.rmdir('./assets', (err) => {
		if (err) console.log(err);
		console.log('folder deleted');
	});
}
// deleting files

if (fs.existsSync('./docs/deleteme.txt')) {
	fs.unlink('./docs/deleteme.txt', (err) => {
		if (err) console.log(err);
		console.log('file deleted');
	});
}
