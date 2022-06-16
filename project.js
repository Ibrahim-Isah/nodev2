// In this project i will use what i learn to create a folder, write into it and also read.

const os = require('os');
const fs = require('fs');

if (!fs.existsSync('./folder')) {
	fs.mkdir('./folder', (err) => {
		if (err) console.log(err);
		console.log('created a folder successfully');
	});
}

if (fs.existsSync('./docs/blog4.txt')) {
	fs.unlink('./docs/blog4.txt', (err) => {
		if (err) console.log(err);
		console.log('file deleted successfully');
	});
}

// I want to create a simple file in to the file i just created and i will read it out
if (!fs.existsSync('./folder/people.txt')) {
	fs.writeFile('./folder/people.txt', '["isah" , "abba" , "ibrahim"]', () => {
		console.log('i created a file and wrote something into it');
	});
}

fs.readFile('./folder/people.txt', (err, data) => {
	if (err) console.log(err);
	console.log(data.toString());
});

// create a simple file and store something about the os of this computer
if (!fs.existsSync('./folder/comp.txt')) {
	fs.writeFile(
		'./folder/comp.txt',
		`${os.platform} ${os.hostname} ${os.userInfo}`,
		() => {
			console.log('i created a file and wrote something into it');
		}
	);
}

fs.readFile('./folder/comp.txt', (err, data) => {
	if (err) console.log(err);
	console.log(data.toString());
});
