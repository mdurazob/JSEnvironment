import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Our fist test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  })
})

// contents of html saved in memory within a constant called index

describe('index.html', () => {
  it('should say Hella world', (done) => {
    const index = fs.readFileSync('./src/index.html', "utf-8");
    jsdom.env(index, function(err,window) {
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal("Hello worlda");
      done();
      window.close();
    }) // jsdom environment, virtual dom in memory (you can pass an array of html files)
  })
})
