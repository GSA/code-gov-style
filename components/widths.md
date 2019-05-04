---
layout: components
title: "Widths"
---

## Below you will find how we assign the width of various page elements
There are basically the following classes:
- .width-sixth
- .width-quarter
- .width-third
- .width-half
- .width-two-thirds
- .width-three-quarters
- .width-whole

**note:** These classes currently cover all of the width scenarios.  If you need,
another width class, please create one.

**note:** These classes don't apply on mobile.  If you want greater control over widths, like placing them inside of media queries, use the mixin versions of these classes with.  This is because SASS doesn't allow you to extend a class inside of a media query.
- @include width-sixth();
- @include width-quarter();
- @include width-third();
- @include width-half();
- @include width-two-thirds();
- @include width-three-quarters();
- @include width-whole();

<style>
[class*='width-'] {
  background-color: gray;
}
</style>

# Sixth Width
Fit four columns inside tag
<div>
  <div class="width-sixth">I'm the first sixth</div>
  <div class="width-two-thirds">I'm two thirds or four sixths!</div>
  <div class="width-sixth">I'm the last sixth</div>
</div>
```
<div>
  <div class="width-sixth">I'm the first sixth</div>
  <div class="width-two-thirds">I'm two thirds or four sixths!</div>
  <div class="width-sixth">I'm the last sixth</div>
</div>
```

# Quarter Width
Fit four columns inside tag
<div>
  <div class="width-quarter">I'm the first quarter</div>
  <div class="width-quarter">I'm the second quarter</div>
  <div class="width-quarter">I'm the third quarter</div>
  <div class="width-quarter">I'm the fourth quarter</div>
</div>
```
<div>
  <div class="width-quarter">I'm the first quarter</div>
  <div class="width-quarter">I'm the second quarter</div>
  <div class="width-quarter">I'm the third quarter</div>
  <div class="width-quarter">I'm the fourth quarter</div>
</div>
```


# Third Width
Fit three columns inside tag
<div>
  <div class="width-third">I'm the first third</div>
  <div class="width-third">I'm the second third</div>
  <div class="width-third">I'm the third third</div>
</div>
```
<div>
  <div class="width-third">I'm the first third</div>
  <div class="width-third">I'm the second third</div>
  <div class="width-third">I'm the third third</div>
</div>
```


# Half Width
Fit two columns inside tag
<div>
  <div class="width-half">I'm the first half</div>
  <div class="width-half">I'm the second half</div>
</div>
```
<div>
  <div class="width-half">I'm the first half</div>
  <div class="width-half">I'm the second half</div>
</div>
```

# Two-Thirds Width
Fit two columns inside tag
<div>
  <div class="width-two-thirds">I'm the first two thirds</div>
  <div class="width-third">I'm the last third</div>
</div>
```
<div>
  <div class="width-two-thirds">I'm the first two thirds</div>
  <div class="width-third">I'm the last third</div>
</div>
```

# Three Quarters Width
Take up 75%
<div>
  <div class="width-three-quarters">I take up 75%</div>
  <div class="width-quarter">I take up 25%</div>
</div>
```
<div>
  <div class="width-three-quarters">I take up 75%</div>
  <div class="width-quarter">I take up 25%</div>
</div>
```

# Whole Width
Take up 75%
<div>
  <div class="width-whole">I take up all the width</div>
</div>
```
<div>
  <div class="width-whole">I take up all the width</div>
</div>
```
