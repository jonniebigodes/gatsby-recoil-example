[![Netlify Status](https://api.netlify.com/api/v1/badges/d4f56a5a-023a-418c-acbf-3a80b94d2ccb/deploy-status)](https://app.netlify.com/sites/gatsby-with-recoil/deploys)

# What this is

This is a simple implementation of the [Recoil](https://recoiljs.org/) state management package in a SSR (server side rendering) mode. 

In this case it's built with Gatsby.

## What's inside

As mentioned this repo provides a bare bones implementation of Recoil inside a Gatsby website.

To see the implementation of the state check `state\TodoListAtom.js`. It's based off the tutorial available in the official Recoil documentation.

To see how the Recoil Provider could be used inside your Gatsby website, check `state\wrap-with-provider.js` and `gatsby-browser.js` and `gatsby-ssr.js`.

Also each bit of the tutorial was split up into small functional components for better readability.



### Side note

You might see that Storybook is added, but as of now it's still not working properly with Recoil and Gatsby.

Also take into consideration that Recoil is still early in its development. It's technically a alpha so using it in production might not be the safe route to go.


