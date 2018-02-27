import React from 'react';
import MainLayout from '../../components/MainLayout'
import CtaButton from '../../components/CtaButton'
import Block from '../../components/Block'

const api = `
`
const string = `
  const firstName = 'Vysakh'
  const lastName = 'Sreenivasan'
  const year = 2018
  const name = \`$\{firstName} \${lastName}-\${year}\` 
  // use backtick whenever you want a combination of values together

  const url = 'final&extra'
  const parts = url.split('&') // => ['final', 'extra']
  // split will come handy in many scenarios
`

const arrayCrud = `
// create 
let list = ['blog', 2018, 12.2]

// read
list[0] // => blog

// update
list[0] = 'article'
list.splice(2, 0, 'extra')
// remove 0 element from index 2 and insert 'extra'

list.push(4) // pushes to the last
list.unshift(0) // pushes to the first

// delete
delete list[0]
list.splice(2, 1)
list.pop()
list.shift()
`

const objCrud = `
// create 
let languages = {spain: 'spanish', china: 'chinese', france: 'french'}

// read
languages.spain
languages['spain']

// update
languages['spain'] = 'someCreole'
languages.china = 'mandarin'
languages['germany'] = 'german'


// delete
delete languages['spain']
`

const arrayTransform = `
// transform all elements based on a condition
// into another array of same length
const num = [1, 2, 3]
const squares = [1, 2, 3].map((i) => i*i)

// get a subset of an array which 
// satisfies a condition
const num = [1, 2, 3]
const odd = [1, 2, 3].filter((i) => i%2 != 0)

// reduce the array into a single value
// based on some logic

const num = [1, 2, 3]
const sum = [1, 2, 3].reduce((sum, i) => sum + i, 0)
// => 6

// Tip: You'll always have some problem involving array
// transformation. 
// If the resultant array always has the
// same length as the original, go with map.
// If you have to filter or there is 
// lesser elements in the resultant array go with filter. 
// If there is one single value, go with reduce.
`
const classIntro = `
class Cat {
    constructor(name) {
        this.name = name;
    }
    meow() {
        console.log(this.name)
    }
}
const cat1 = new Cat("kitty")
cat1.meow() // => kitty

// this. ==> refers to instance variable.
// the instance/object variable is available to
// all the functions of the object, 
// that is the purpose of it.
`
export default (props) =>
    <MainLayout>
        <p>There are plenty of features in js and these are handy most of the times. </p>
        <Block title="1. String related functions" value={string} />
        <Block title="2. Array CRUD" value={arrayCrud} />
        <Block title="3. Object CRUD" value={objCrud} />
        <Block title="4. Array Transformations" value={arrayTransform} />
        <Block title="5. class, constructor, object variable" value={classIntro} />
        <CtaButton to="/react-intro/dom">I'm ready, lets go</CtaButton>
    </MainLayout>