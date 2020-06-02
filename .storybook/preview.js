import React from 'react';

import { addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};

// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = '';

// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = pathname => {
  action('NavigateTo:')(pathname);
};

// system wide decorator to allow the addon to be used
//
// system wide decorator that will inject the global style component into Storybook 
// the story function in conjunction with the children prop will make so that all the "descendants"
// will inherit the styles

/* global decorators do not work */
/* addDecorator(story => (
    <>
       <RecoilRoot>{story()}</RecoilRoot>
    </>
  )); */