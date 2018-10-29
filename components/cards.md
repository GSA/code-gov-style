---
layout: components
title: "Cards"
---

## Below you will find the cards used by {{site.brand}}

# Normal Card
<div style="max-width: 400px">
  <div class="card">Normal Card</div>
</div>
```
<div class="card">Normal Card</div>
```

---

# Focusable Card
You can make a card react when a user hovers over it by adding a `focusable` class
<div style="max-width: 400px">
  <div class="card focusable">
    <p>Hi. I'm a <b>focusable</b> card.  Hover over me!</p>
  </div>
</div>
```
<div class="card focusable">
  <p>Hi. I'm a <b>focusable</b> card.  Hover over me!</p>
</div>
```

---

# Card Title, Date and Description
You can also style the subcomponents of the card.
<div style="max-width: 400px">
  <div class="card">
    <div class="card-title">Labor Hours Estimation for Code.gov Open Source Repositories</div>
    <div class="card-date">Last updated Jan 22 at 10:11 PM</div>
    <div class="card-description">Issue Description: This task supports the Code.gov team. We want to estimate total lines of code and total hours and costs for the code that is located in all of our open source repositories. The open source repositories are listed in the agency json...</div>
  </div>
</div>
```
<div class="card">
  <div class="card-title">Labor Hours Estimation for Code.gov Open Source Repositories</div>
  <div class="card-date">Last updated Jan 22 at 10:11 PM</div>
  <div class="card-description">Issue Description: This task supports the Code.gov team. We want to estimate total lines of code and total hours and costs for the code that is located in all of our open source repositories. The open source repositories are listed in the agency json...</div>
</div>
```


---

# Card with Divider
If you have a card that you want to split into 2 parts
<div style="max-width: 400px">
  <div class="card">
    <div class="card-title">Labor Hours Estimation for Code.gov Open Source Repositories</div>
    <hr />
    <div class="card-description">Issue Description: This task supports the Code.gov team. We want to estimate total lines of code and total hours and costs for the code that is located in all of our open source repositories. The open source repositories are listed in the agency json...</div>
  </div>
</div>
```
<div class="card">
  <div class="card-title">Labor Hours Estimation for Code.gov Open Source Repositories</div>
  <hr />
  <div class="card-description">Issue Description: This task supports the Code.gov team. We want to estimate total lines of code and total hours and costs for the code that is located in all of our open source repositories. The open source repositories are listed in the agency json...</div>
</div>
```

---

# Card with Details
If you have a card that you want to split into 2 parts
<div style="max-width: 600px">
  <div class="card">
    <div class="card-title">Labor Hours Estimation for Code.gov Open Source Repositories</div>
    <div class="card-description">Issue Description: This task supports the Code.gov team. We want to estimate total lines of code and total hours and costs for the code that is located in all of our open source repositories. The open source repositories are listed in the agency json...</div>
    <dl class="inline">
      <dt>Agency:</dt>
      <dd><a>GSA</a></dd>
      <dt>Last Updated:</dt>
      <dd>9/17/2018</dd>
    </dl>
    <hr />
    <dl class="inline">
      <dt>Languages:</dt>
      <dd>CSS, HTML, JavaScript</dd>
      <dt>Type:</dt>
      <dd>Enhancement</dd>
      <dt>Skill Level:</dt>
      <dd>Intermediate</dd>
    </dl>
  </div>
</div>
```
<div style="max-width: 400px">
  <div class="card">
    <div class="card-title">Labor Hours Estimation for Code.gov Open Source Repositories</div>
    <div class="card-description">Issue Description: This task supports the Code.gov team. We want to estimate total lines of code and total hours and costs for the code that is located in all of our open source repositories. The open source repositories are listed in the agency json...</div>
    <dl class="inline">
      <dt>Agency:</dt>
      <dd><a>GSA</a></dd>
      <dt>Last Updated:</dt>
      <dd>9/17/2018</dd>
    </dl>
    <hr />
  </div>
</div>
```
