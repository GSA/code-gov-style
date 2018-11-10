---
layout: components
title: "Filter"
---

<p>Below you will find the filter boxes used by {{site.brand}}</p>



# Simple Filter Box
<filter-box
  title="Federal Agency"
  options='["Consumer Financial Protection Bureau", "Department of Labor", "General Services Administration", "National Aeronautics and Space Administration", "Department of Energy", "Department of Housing and Urban Development"]'
></filter-box>
```
<filter-box
  title="Federal Agency"
  options='["Consumer Financial Protection Bureau", "Department of Labor", "General Services Administration", "National Aeronautics and Space Administration", "Department of Energy", "Department of Housing and Urban Development"]'
></filter-box>
```

# Listen to Change Event
You can listen to the filter box change events:
```javascript
document.querySelector("filter-box").addEventListener('change', function handleChange(event) {
  console.log("event:", event);
});
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

# Super Advanced Filter Box
You can also specify whether the items are checked by default
<filter-box
  title="Organization Type"
  options='[{"name":"Federal Government","value":"federal", "checked": true},{"name":"State Government","value":"state"},{"name":"Local Government","value":"local","checked":true}, {"name": "University", "value": "university"}, {"name": "Inter-Governmental", "value": "inter-governmental", "checked": true}]'
></filter-box>
```
<filter-box
  title="Organization Type"
  options='[{"name":"Federal Government","value":"federal", "checked": true},{"name":"State Government","value":"state"},{"name":"Local Government","value":"local","checked":true}, {"name": "University", "value": "university"}, {"name": "Inter-Governmental", "value": "inter-governmental", "checked": true}]'
></filter-box>
```
