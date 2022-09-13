// const { describe, expect, test } = require('@jest/globals')
const { JSDOM } = require('jsdom')
const dom = new JSDOM('<!DOCTYPE html><div id="root"></div>');
global.document = dom.window.document
global.window = dom.window
const { View } = require('../src/index.view')

describe('testing view of index page', () => {
    test('find button and paragraph', () => {
        const view = new View();
        expect(view.button.textContent).toBe('New Number');
        expect(view.paragraph.innerHTML).toBe('');
    });
});
