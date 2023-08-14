import _ from 'lodash';

import * as fs from 'node:fs';
import { promisify } from 'util';

const readFileAsync = promisify(fs.readFile);

export async function returnFile() {
    try {
        const textData = await readFileAsync('./data/data.txt', 'utf8');
        return textData;
    } catch (err) {
        throw err;
    }
}

export function writeFiles(data){
    fs.appendFile('./data/results.txt', data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
        });
}

// 1
export async function text() {
    try {
        const textData = await returnFile();
        console.log(textData)
        writeFiles(textData)
        // console.log(textData);
    } catch (error) {
        console.error(error);
    }
}
// text()


// 2
export async function countWords() {
    try {
        const textData = await returnFile();
        const list = _.words(textData)
        let count = `count words: ${list.length}`
        fs.appendFile('./data/results.txt', count, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
            });
    } catch (error) {
        console.error(error);
    }
}
// countWords()



// 3
export async function reverses() {
    try {
        const textData = await returnFile();
        let reverse = _.reverse(_.words(textData)).toString();
        writeFiles(reverse)
    } catch (error) {
        console.error(error);
    }
}
// reverses()

// 4
export async function uniqs() {
    try {
        const textData = await returnFile();
        let uniqWords = _.uniq(_.words(textData)).toString();
        writeFiles(uniqWords)
    } catch (error) {
        console.error(error);
    }
}
// uniqs()

// 5
export async function countUniq() {
    try {
        const textData = await returnFile();
        const countUniq = `count of uniq words: ${_.uniq(textData).length}`;
        writeFiles(countUniq)
    } catch (error) {
        console.error(error);
    }
}
// countUniq()

// 6
export async function upperUniq() {
    try {
        const textData = await returnFile();
        const upper = `upper uniq words:  \n${_.upperCase(_.uniq(_.words(textData)))}`;
        writeFiles(upper)
    } catch (error) {
        console.error(error);
    }
}
// upperUniq()


// 7
export async function upperUniqMoreThenFive() {
    try {
        const textData = await returnFile();
        const words = []
        _.uniq(_.words(textData)).forEach(element => {
            if (element.length.toString() > 5) {
                words.push(element)
            }
        });
        words.forEach(element => {
            const word = `${element}\n`
            writeFiles(word)
        });
        
    } catch (error) {
        console.error(error);
    }
}
// upperUniqMoreThenFive()


// 8
export async function countVowels() {
    try {
        const textData = await returnFile();
        const uniqs = _.uniq(_.words(textData))
        const vowels = {}
        for (let i of uniqs){
            let count = 0
            for (let j of i)
                if (_.includes('vowels', j)) {
                    count++
                }
            vowels[i] = count
        };
        console.log(vowels)
    } catch (error) {
        console.error(error);
    }
}
// countVowels()












