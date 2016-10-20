import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import HelloComponent from '../src/hellocomponent.jsx';

describe('<HelloComponent />', function() {
  it('should contains Hello words', function(){
    const wrapper = shallow(<HelloComponent/>);
    expect(wrapper.contains('Hello!!')).to.equal(true);
  })
});
