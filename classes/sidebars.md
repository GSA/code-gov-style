---
layout: classes
title: "Sidebars"
---

<p>Below you will find the styling used by code.gov for sidebars</p>

# Normal Sidebar
<nav class="sidebar left">
  <ul>

    <li>
      <a>First Section</a>
      <ul>
        <li>
          <a>Subsection 1.1</a>
        </li>
      </ul>
    </li>

    <li class="current">
      <a class="current">Second Section</a>
      <ul>
        <li>
          <a>Subsection 2.1</a>
        </li>
        <li>
          <a class="current">Subsection 2.2</a>
        </li>
      </ul>
    </li>

  </ul>
</nav>

<div style="width: 100%; clear: both;"><br /></div>

```
<nav class="sidebar left">
  <ul>
    <li class="current">
      <a class="current">First Section</a>
      <ul>
        <li>
          <a>Subsection 1</a>
        </li>
        <li>
          <a class="current">Subsection 2</a>
        </li>
      </ul>
    </li>
  </ul>
</nav>
```

---

# Sidebar with Title
If you'd like to add a title, just add a div with class `sidebar-title`.
<nav class="sidebar">
  <div class="sidebar-title">Agencies</div>
  <ul>
    <li class="current">
      <a class="current">Agency for International Development</a>
    </li>
    <li>
      <a>Consumer Financial Protection Bureau</a>
    </li>
    <li>
      <a>Department of Agriculture</a>
    </li>
  </ul>
</nav>

```
If you'd like to add a title, just add a div with class `sidebar-title`.
<nav class="sidebar">
  <div class="sidebar-title">Agencies</div>
  <ul>
    <li class="current">
      <a class="current">Agency for International Development</a>
    </li>
    <li>
      <a>Consumer Financial Protection Bureau</a>
    </li>
    <li>
      <a>Department of Agriculture</a>
    </li>
  </ul>
</nav>
```

---

# Sidebar with Images
If you want to add images for a row in the sidebar.
<nav class="sidebar">
  <div class="sidebar-title">Agencies</div>
  <ul>
    <li class="current">
      <a class="current">
        <img src="/code-gov-style/assets/img/USAID.png">
        <span>Agency for International Development</span>
      </a>
    </li>
    <li>
      <a>
        <img src="/code-gov-style/assets/img/CFPB.png">
        <span>Consumer Financial Protection Bureau</span>
      </a>
    </li>
    <li>
      <a>
        <img src="/code-gov-style/assets/img/USDA.png">
        <span>Department of Agriculture</span>
      </a>
    </li>
  </ul>
</nav>
