var Template = function(director) { return `<?xml version="1.0" encoding="UTF-8" ?>
<document>
  <alertTemplate>
     <title>${director}</title>
     <description>The director is ${director}</description>
  </alertTemplate>
</document>`
}