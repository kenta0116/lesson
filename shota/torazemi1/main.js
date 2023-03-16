const testScope = (scope) => {
    if (scope === 'function') {
        var functionScope = '関数スコープ内ならどこからでも参照できます'
    } else if ( scope === 'block') {
        let blockScope = 'ブロックスコープ内でしか参照できません'
        console.log(blockScope)
    }
    console.log(functionScope)
}

testScope('function')
testScope('block')

let mutableText = 'let変更前'
mutableText = 'let変更後'
console.log(mutableText)

const imutableText = 'const変更前'
// imutableText = 'const変更後'
console.log(imutableText)

const mutableArray = [1, 2, 3]
mutableArray.push(4)
console.log(mutableArray)

const mutableObject = {id: 'hoge', value: 'fuga'}
mutableObject['name'] = 'bar'
console.log(mutableObject)

function namedFunc(message) {
    console.log(message)
}

function oneLineFunc(message) {console.log(message)}

const arrowFunc = (message) => {
    console.log(message)
}

const oneLineArrowFunc = (message) => console.log(message)

const users = {
    hoge: 'torahack'
}
const getUserName = (userId) => users[userId]

namedFunc('これは名前付き関数です')
oneLineFunc('これは１行で書いた名前付き関数です')
arrowFunc('これはアロー関数です')
oneLineArrowFunc('これは一行で書いたアロー関数です')
const username = getUserName('hoge')
console.log(username)