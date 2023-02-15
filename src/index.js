module.exports = function check(str, bracketsConfig) {
  let stack = [];

	for (let i = 0; i < str.length; i++){
  	let currentSymbol = str[i]
    	for (let j = 0; j < bracketsConfig.length; j++){
      	if (bracketsConfig[j][0].includes(currentSymbol)){
        	stack.push(currentSymbol)
        }
        let topElem = stack[stack.length - 1]
        if (bracketsConfig[j][1].includes(currentSymbol)){
        	stack.pop()
        }
      }
  }
  return stack.length === 0
}