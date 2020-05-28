require('jsdom-global')();
const expect = require('chai').expect;
const VueTestUtils = require('@vue/test-utils');
const {buttonComponent} = require('../vue/component.js');

describe('CircleCI Challenge', () => {
  it('Displays a simple text message when the mainButton is clicked', async () => {
    const localVue = VueTestUtils.createLocalVue();
    const wrapper = VueTestUtils.mount(buttonComponent, localVue);
    await wrapper.find('button').trigger('click');
    await localVue.nextTick();
    await expect(wrapper.html()).to.include('<h1 id="mainMessage">Hello CircleCI!</h1>');
  });
});