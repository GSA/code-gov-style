---
layout: components
title: "Filter"
---

<script src="{{ '/assets/js/web_components/custom-elements.min.js' | relative_url }}"></script>
<script src="{{ '/assets/js/web_components/filter_box.js' | relative_url }}"></script>


<p>Below you will find the filter boxes used by code.gov</p>

# Simple Filter Box
<filter-box
  title="Computer Language"
  options='["Assembly", "C", "C#", "C++", "Java", "JavaScript", "PHP", "Python", "Ruby", "Visual Basic"]'
></filter-box>
```
<filter-box
  title="Computer Language"
  options='["Assembly", "C", "C#", "C++", "Java", "JavaScript", "PHP", "Python", "Ruby", "Visual Basic"]'
></filter-box>
```

# Advanced Filter Box
You can also pass in a JSON that specifies the display name and value for each option in the selection.
<filter-box
  title="Organization Type"
  options='[{"name":"Federal Government","value":"federal"},{"name":"State Government","value":"state"},{"name":"Local Government","value":"local"}, {"name": "University", "value": "university"}]'
></filter-box>
```
<filter-box
  title="Organization Type"
  options='[{"name":"Federal Government","value":"federal"},{"name":"State Government","value":"state"},{"name":"Local Government","value":"local"}, {"name": "University", "value": "university"}]'
></filter-box>
```
