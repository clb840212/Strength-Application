import ExercisesContainer from '../../src/containers/ExercisesContainer';
import { mount } from 'enzyme';
import React from 'react';

describe('ExercisesContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <ExercisesContainer />
    );
  });

  it('should render a h1 tag', () => {
    expect(wrapper.find('h1').length).toEqual(1);
  });

  it('should render an h1 tag with the title property value', () => {
    expect(wrapper.find('h1').text()).toBe('Exercises');
  });
});
