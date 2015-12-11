/*
Copyright (C) 2015 Apple Inc. All Rights Reserved.
See LICENSE.txt for this sample’s licensing information

Abstract:
A stack template shows stacked rows of items beneath a banner, such as movies, TV shows, or products. The user can navigate through the rows and products to focus on one.
*/
var Template = function() { return `<?xml version="1.0" encoding="UTF-8" ?>
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
        background-color: #091a2a;
      }
    </style>
  </head>
  <stackTemplate theme="dark" class="darkBackgroundColor">
  <banner>
  <heroIMG src="${this.BASEURL}resources/Banner.png" />
   <background>
      <img src="${this.BASEURL}resources/Banner.png" width="1920" height="502" />
   </background>
  </banner>
    <collectionList>
      <grid>
        <section>
          <lockup template="${this.BASEURL}templates/Product.xml.js" presentation="defaultPresenter">
            <img src="${this.BASEURL}resources/images/italy/italy_1.jpg" width="540" height="242" aspectFill="1" />
            <title class="showTextOnHighlight">Title 1</title>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/italy/italy_2.jpg" width="540" height="242" aspectFill="1" />
            <title class="showTextOnHighlight">Title 2</title>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/italy/italy_3.jpg" width="540" height="242" aspectFill="1" />
            <title class="showTextOnHighlight">Title 3</title>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/italy/italy_4.jpg" width="540" height="242" aspectFill="1" />
            <title class="showTextOnHighlight">Title 4</title>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/italy/italy_5.jpg" width="540" height="242" aspectFill="1" />
            <title class="showTextOnHighlight">Title 5</title>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/italy/italy_5.jpg" width="540" height="242" aspectFill="1" />
            <title class="showTextOnHighlight">Title 5</title>
          </lockup>
        </section>
      </grid>
    </collectionList>
  </stackTemplate>
</document>`
}
