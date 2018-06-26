//include custom matchers
const styleMatchers = require('jest-style-matchers');
expect.extend(styleMatchers);

//image matching
const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({toMatchImageSnapshot});

const Canvas = require('canvas-prebuilt');
//mock the query method to access our canvas
document['getElementById'] = jest.fn(() => Canvas.createCanvas(500,500));

const jsPath = __dirname + '/js/index.js';

describe('Source code is valid', () => {
  test('JavaScript lints without errors', async () => {
    expect([jsPath]).toHaveNoEsLintErrors();
  })
});

const solution = require(jsPath); //load the solution

describe('Canvas-drawn rocket ship', () => {
  test('has the expected appearance', () => {
    const capture = solution.canvas.toBuffer();
    expect(capture).toMatchImageSnapshot({customDiffConfig:{
      threshold:0.01 //very small threshold
    }});
  })
})
