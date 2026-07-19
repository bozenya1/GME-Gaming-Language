const {Parser} = require('../src/parser');
const assert = require('assert');
const tests = [
    require('./literals-test.js'),
    require('./statement-list-test.js'),
    require('./blocks-test.js'),
    require('./empty-statement-test.js'),
    require('./math-test.js')
];

const parser = new Parser();


function exec(){
    const program = `

        /**
         * This is a comment multi line comment
         */
        "yara yara phonk tutorial";
        {
            {
            42;
            'hello princess'; //test in blocks
                {
                'mamy trzeci, czy bedzie 4?';
                    {
                    'mamy czwartyyyy!!!!';
                    42; //numer dla sprawdzenia
                    }
                }
            }
        } //this is a single line comment
        
    `;

    const ast = parser.parse(program);

    console.log(JSON.stringify(ast, null, 2));
}

exec();

function test(program, expected){
    const ast = parser.parse(program)
    assert.deepEqual(ast, expected)
}

tests.forEach(testRun => testRun(test))

console.log("All asertions passed!")
    
