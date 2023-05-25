# ITU_web_project3

## package version

make sure you install react-router, react-router-dom@5.3.0, bootstrap
The version of react-router-dom should be 5.3.0, otherwise it may cause problems.

## todo

1. Pages

- [x] index page
- [x] login page
- [x] basket page
- [x] product detail page
- [x] contact page
- [x] about page
- [x] terms

2. Document

3. Fix all problems TAs pointed out in mini project1 and mini project2 + requirements

- [ ] Filter = Users can browse products using at least two different product categories.
- [x] log out option
- [x] data validation in log in form
- [x] data validation in log in form
- [ ] Add posibility of adding more bottles on the shopping cart page
- [x] fix - delete button in shopping cart page is not working anymore

4. Using TypeScript to rewrite (if you want) - I think it is a criteria we have to use it

## File Structure

all you need to know before you start to work on this project:

- miniproject1 : copied directly from mini project1
- server: copied directly from mini project2
- **reactpages: the reimplemented version using React of miniproject1**

  plz put all image files in reactpages/public/img

  for any page in mini project1, work on corresponding folder I have created for you: add your React Component of this page in corresponding folder.

  **the folder data copies all js file directly from mini project1**

## Recommended way to create a page

### how to start?

Go check the \<body\> element of corresponding html page, delete elements including \<header\> \<footer\> \<banner\> and see what is left. The left html elements are you need to work on. You need to transform these left htmls into React Component. Building from small elements, you should eventually get a React Component which represents all left htmls.

### how to verify a page

```javascript
class PageWrapper extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <Switch>
          <Route path="/index" component={IndexBody}>
            {" "}
            <IndexBody />
          </Route>
          <Route path="/login" component={LoginBody} />
          <Route path="/basket" component={BasketBody} />
          <Route component={IndexBody} />
        </Switch>
        <Footer />
      </div>
    );
  }
}
```

In the file PageWrapper.tsx, I have builded the framework for you. You don't need to care about Header, Banner or Footer now. These elements are all the same in all pages, and I've done them. Once you finish building the body of one page, add a Route element into Switch(see codes above) and then set link replacing original < a > element like following:

```javascript
<NavLink exact activeClassName="active" to="/login">
  Login
</NavLink>
```

If everything you write is correct, then it should work and you can start from index jumping to your page.

## How to verify React Component I create is correct?

```javascript
import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "./index/ProductElement";
import {
  getAllWineInfo,
  addItemtoBasketById,
  setCurrentProductDetailPage,
} from "./data/winedata";

export class Root extends React.Component {
  render() {
    return <PageWrapper />;
  }
}
```

In File App.js, replace the content in return() with your Component, then run, you can see if it's what you want. Remember to add import xxx
