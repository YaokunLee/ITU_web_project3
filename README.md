# ITU_web_project3


## File Structure
all you need to know before you start to work on this project:
- miniproject1 : copied directly from mini project1
- server: copied directly from mini project2
- **reactpages: the reimplemented version using React of miniproject1**

  plz put all image files in reactpages/public/img
  
  for any page in mini project1, work on corresponding folder I have created for you: add your React Component of this page in corresponding folder.
  
  **the folder data copies all js file directly from mini project1**

## How to verify React Component you create is correct?
File App.js
```javascript
import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from "./index/ProductElement";
import {getAllWineInfo, addItemtoBasketById, setCurrentProductDetailPage } from "./data/winedata"

export class Root extends React.Component{
    render() {
        return (
            <ProductList
                products={getAllWineInfo()}
                setCurrentProductDetailPage={setCurrentProductDetailPage}
                addItemtoBasketById={addItemtoBasketById}
            />
        );
    }
}
```
Replace the content in return() with your Component, then run, you can see if it's what you want.


