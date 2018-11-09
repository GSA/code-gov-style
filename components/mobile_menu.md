---
layout: components
title: "Mobile Menu"
---

<p>Below you will find the styling used by {{site.brand}} for its mobile menu</p>

# Simple Mobile Menu Button with Class
<nav style="background: gray; height: 100px; position: relative">
  <div class="mobile-menu-button"><div class="icon icon-menu"></div></div>
</nav>
```
<nav style="background: gray; height: 100px; position: relative">
  <div class="mobile-menu-button"><div class="icon icon-menu"></div></div>
</nav>
```

# Mobile Menu Button Web Component
You can set the default state to open by setting the open attribute to true
<nav style="background: gray; height: 100px; position: relative">
  <mobile-menu-button open="true" />
</nav>
```
<nav style="background: gray; height: 100px; position: relative">
  <mobile-menu-button open="true" />
</nav>
```

# Mobile Menu
<!-- add open to div class when opened -->
<div class="mobile-menu">
  <ul>
    <li class="search">
      <input placeholder="Search Projects...">
      <button class="go">Go</button>
    </li>
    <li class="expanded">
      <a class="dropdown">About</a>
      <ul>
        <li>
          <a>Source Code Policy</a>
        </li>
        <li>
          <a class="active">Open Source Pilot</a>
        </li>
      </ul>
    </li>
    <li>
      <a>Privacy Policy</a>
    </li>
    <li>
      <a class="active">Roadmap</a>
    </li>
  </ul>
</div>

<!-- To active the mobile menu underlay add the active class -->
<div class="mobile-menu-underlay"></div>

<button onclick="document.querySelector('.mobile-menu').className = 'mobile-menu open'">Activate</button>
```
<!-- add open to div class when opened -->
<div class="mobile-menu">
  <ul>
    <li class="expanded">
      <a class="dropdown">About</a>
      <ul>
        <li>
          <a>Source Code Policy</a>
        </li>
        <li>
          <a class="active">Open Source Pilot</a>
        </li>
      </ul>
    </li>
    <li>
      <a>Privacy Policy</a>
    </li>
    <li>
      <a class="active">Roadmap</a>
    </li>
  </ul>
</div>

<!-- To active the mobile menu underlay add the active class -->
<div class="mobile-menu-underlay"></div>
```