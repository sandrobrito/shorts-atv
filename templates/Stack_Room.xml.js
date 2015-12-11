/*
Copyright (C) 2015 Apple Inc. All Rights Reserved.
See LICENSE.txt for this sample’s licensing information

Abstract:
A stack template shows stacked rows of items beneath a banner, such as movies, TV shows, or products. The user can navigate through the rows and products to focus on one.

This version of the stack template uses a banner element to display a large background image at the top of the page with a full description.
*/
var Template = function() { return `<?xml version="1.0" encoding="UTF-8" ?>
<document>
  <head>
    <style>
    .showTextOnHighlight {
      tv-labels-state: show-on-highlight;
    }
    @media -tv-template and (-tv-uber) {
      .darkBackgroundColor {
        background-color: #000000;
      }
    }
    </style>
  </head>
  <stackTemplate class="darkBackgroundColor" theme="dark">
    <banner>
      <heroIMG src="${this.BASEURL}resources/Banner.png" />
      <background>
        <img src="${this.BASEURL}resources/Banner.png" width="1920" height="502" />
      </background>
      </banner>
    <collectionList>
      <shelf>
        <header>
          <title>Action Films</title>
        </header>
        <section id="placeholder">
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
      </shelf>
      <shelf>
        <header>
          <title>Drama</title>
        </header>
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
      </shelf>
    </collectionList>
  </stackTemplate>
</document>`
}
