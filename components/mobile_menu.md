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