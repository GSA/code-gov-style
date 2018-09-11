---
layout: components
title: "Navbars"
---

<p>Below you will find the styling used by {{site.brand}} for navbars</p>

# Main Navbar
The navbar at the top of the page uses this code.  You can also make the navbar transparent by adding the `transparent` class.
```
<header class="main white">
  <nav class="main">
    <ul>
      <li><a class="link" href="/code-gov-style">code.gov Style Guide</a></li>      
      <li><a class="link" href="/code-gov-style/components/banners">Banners</a></li>
      <li><a class="link" href="/code-gov-style/components/blocks">Blocks</a></li>
      <li><a class="link" href="/code-gov-style/components/breadcrumbs">Breadcrumbs</a></li>
      <li><a class="link" href="/code-gov-style/components/buttons">Buttons</a></li>
      <li><a class="link" href="/code-gov-style/components/cards">Cards</a></li>
      <li><a class="link" href="/code-gov-style/components/dividers">Dividers</a></li>
      <li><a class="link" href="/code-gov-style/components/footers">Footers</a></li>
      <li><a class="link" href="/code-gov-style/components/forms">Forms</a></li>
      <li><a class="link" href="/code-gov-style/components/inputs">Inputs</a></li>
      <li><a class="link" href="/code-gov-style/components/links">Links</a></li>
      <li><a class="link" href="/code-gov-style/components/navbars">Navbars</a></li>
      <li><a class="link" href="/code-gov-style/components/quotes">Quotes</a></li>
      <li><a class="link" href="/code-gov-style/components/sidebars">Sidebars</a></li>
      <li><a class="link" href="/code-gov-style/components/tables">Tables</a></li>
      <li><a class="link" href="/code-gov-style/components/widths">Widths</a></li>
    </ul>
  </nav>
</header>
```

# Secondary Navbar
Designate the active option by assigning the class `active`.
<nav class="subnav">
  <div class="indented">
    <ul>
      <li><a class="active">How To</a></li>
      <li><a>Read the Policy</a></li>
    </ul>
  </div>
</nav>
```
<nav class="subnav indented">
  <ul>
    <li><a class="active">How To</a></li>
    <li><a>Read the Policy</a></li>
  </ul>
</nav>
```
