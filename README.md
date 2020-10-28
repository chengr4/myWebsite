# Build a Responsive Website

為了個人網站而學習的 branch，留存作紀念。

## Using tech
### font awesome
1. Go to [cdnjs.com](https://cdnjs.com/)
2. Search font and go into font-awesome
3. Copy link tag with *all.min.css* to index.html
4. Then font-awesome classes can be used to create icons
#### used in the project
+ fas fa-server, fas fa-upload, fas fa-project-diagram

### Lato
1. Go to [fonts.google.com](https://fonts.google.com/)
2. Search Lato and go to light 300
3. Go to @import and copy the code into style.css

## 一些技巧
### VSCode html 第一行打 ! 直接產生基本格式
### 先 flex 後 grid:

    <div class="container flex">
    <div class="container grid">

### pseudo-selector before after:
    .showcase::before,
    .showcase::after {
        content: <necessary>; 
    }
E.p.
p::after -> Insert content after every <p> element
p::before -> Insert content before every <p> element

## Reference
+ <https://www.youtube.com/watch?v=p0bGHP-PXD4>