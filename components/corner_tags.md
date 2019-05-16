---
layout: components
title: "Corner Tags"
---

## Below you will find the corner tags affixed to some cards used by {{site.brand}}

# High Value
<div style="max-width: 400px">
  <div class="card">
    <div class="corner-tag high">
      <div class="corner-tag-value">7.6</div>
    </div>
    <p>High Value Card</p>
  </div>
</div>
```
<div style="max-width: 400px">
  <div class="card">
    <div class="corner-tag high">
      <div class="corner-tag-value">7.6</div>
    </div>
    <p>High Value Card</p>
  </div>
</div>
```

# Medium Value
<div style="max-width: 400px">
  <div class="card">
    <div class="corner-tag medium">
      <div class="corner-tag-value">5.5</div>
    </div>
    <p>Medium Value Card</p>
  </div>
</div>
```
<div style="max-width: 400px">
  <div class="card">
    <div class="corner-tag medium">
      <div class="corner-tag-value">5.5</div>
    </div>
    <p>Medium Value Card</p>
  </div>
</div>
```


# Low Value
<div style="max-width: 400px">
  <div class="card">
    <div class="corner-tag low">
      <div class="corner-tag-value">3.5</div>
    </div>
    <p>Low Value Card</p>
  </div>
</div>
```
<div style="max-width: 400px">
  <div class="card">
    <div class="corner-tag low">
      <div class="corner-tag-value">3.5</div>
    </div>
    <p>Low Value Card</p>
  </div>
</div>
```


# Web Component
The `quality-tag` component will determine the corner tag to add (either high, medium, or low) based on the `score` value passed. The range for these is:
- low: a score below 4  
- medium: a score greater than or equal to 4 and less than 6
- high: a score higher than or equal to 6  

See [quality_tag.js](https://github.com/GSA/code-gov-style/blob/55fca596622a4aed83c690fcc82758ac8c3170d1/src/quality_tag.js) to view the code for this logic.

<div style="max-width: 400px">
  <div class="card">
    <quality-tag score="2.5"></quality-tag>
    <p>Card with Quality Tag as Web Component</p>
  </div>
</div>
```
<div style="max-width: 400px">
  <div class="card">
    <quality-tag score="2.5"></quality-tag>
    <p>Card with Quality Tag as Web Component</p>
  </div>
</div>
```