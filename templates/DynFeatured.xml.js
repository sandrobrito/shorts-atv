var Template = function(filmTemplate) { return `<?xml version="1.0" encoding="UTF-8" ?>
<document>
  <head>
    <style>
    .imageWithGradient {
      tv-tint-color: linear-gradient(top, 0.33, transparent, 0.66, rgba(0,64,0,0.7), rgba(0,64,0,1.0));
    }
    .showTextOnHighlight {
      tv-text-highlight-style: show-on-highlight;
    }
    .scrollTextOnHighlight {
      tv-text-highlight-style: marquee-on-highlight;
    }
    .showAndScrollTextOnHighlight {
      tv-text-highlight-style: marquee-and-show-on-highlight;
    }
    .darkBackgroundColor {
        background-color: #000000;
      }
    </style>
  </head>
  <stackTemplate theme="dark" class="darkBackgroundColor">
  <banner>
   <background>
      <img src="${this.BASEURL}resources/Banner.png" width="1920" height="500" />
   </background>
  </banner>
    <collectionList>
      <grid>
        <section id="placeholder">
          
        </section>
      </grid>
    </collectionList>
  </stackTemplate>
</document>`
}

