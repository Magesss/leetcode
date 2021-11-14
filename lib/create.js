const fs = require('fs');
const path = require('path');
let files = fs.readdirSync('./lib/public');
let fullPath = path.resolve('./lib/public')
let tarPath = path.resolve('./subject')
const dirName = process.argv.splice(2)[0].split('=')[1]


// files.forEach(v => {
// 	const router = path.join(fullPath, v)
// 	const content = fs.readFileSync(router)
// 	console.log(content)
// })
main()

function main() {
	const dirNamePath = path.join(tarPath, dirName)
	fs.mkdir(dirNamePath, () =>{
		files.forEach(v => {
			const router = path.join(fullPath, v)
			const content = fs.readFileSync(router)
			fs.writeFileSync(dirNamePath + '/' + v, content, 'UTF-8')
		})
	})

}


