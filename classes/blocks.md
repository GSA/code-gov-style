---
layout: classes
title: "Buttons"
---

<p>Below you will find the styling used by code.gov for sections or blocks</p>

# Indentation
You can indent a div by simply adding class="indented".
<div><p>I'm <b>not</b> indented</p></div>
<div class="indented"><p>Hey, I'm an <b>indented</b> block</p></div>
<div class="indented"><p>I'm <b>indented</b>, too!</p></div>
```
<div><p>I'm <b>not</b> indented</p></div>
<div class="indented"><p>Hey, I'm an <b>indented</b> block</p></div>
<div class="indented"><p>I'm <b>indented</b>, too!</p></div>
```

# Width
You can specify the width of a div
<style>
[class*='width-'] {
  background-color: darkgray;
}
</style>  
<div class="width-quarter">I'm 1/4</div>
<div class="width-third">I'm 1/3</div>
<div class="width-half">I'm 1/2</div>
<div class="width-three-quarters">I'm 3/4</div>
<div class="width-whole">I'm 100% wide</div>
```
<style>
[class*='width-'] {
  background-color: darkgray;
}
</style>  
<div>
  <div class="width-quarter">I'm 1/4</div>
  <div class="width-three-quarters">I'm 3/4</div>
</div>
<div>
  <div class="width-third">I'm 1/3</div>
</div>
<div>
  <div class="width-half">I'm 1/2</div>
  <div class="width-half">I'm 1/2</div>
</div>
<div>  
  <div class="width-whole">I'm 100% wide</div>
</div>
```
