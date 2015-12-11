/*
Copyright (C) 2015 Apple Inc. All Rights Reserved.
See LICENSE.txt for this sample’s licensing information

Abstract:
A product template promotes movies, TV shows, or other products. It typically includes a product image, background, and descriptive information. A shelf below the product content displays related products and the user can scroll down to bring up more information, like cast and crew listings, ratings, or reviews.

Consider image and text colors carefully when customizing the background. By default, the background displays a blurred copy of your product image, producing a nice, complementary visual effect. If you decide to customize the background, make sure it doesn’t clash with your other content.
*/
// var filmInfo = 
var Template = function(Title, Director, Cast, mediaURL,Runtime, Poster, Genre, Thumb, Description) {
  console.log("Inside template"+Title+", "+ Director+", "+ Cast+", "+mediaURL+", "+Runtime);
  return `<?xml version="1.0" encoding="UTF-8" ?>
<document>
  <head>
    <style>
    .whiteBadge {
      tv-tint-color: #000000;
    }
    .shelfLayout {
      padding: 20 90 50;
    }
    .bigImage{
      width:800;
      height:450;
    }
    </style>
  </head>
  <productTemplate>
    <banner>
      <heroImg src="${Thumb}" class="bigImage"/>
      <infoList>
        <info>
          <header>
            <title>Director</title>
          </header>
          <text>${Director}</text>
        </info>
        <info>
          <header>
            <title>Cast</title>
          </header>
          <text>${Cast}</text>

        </info>
      </infoList>
      <stack>
        <title>${Title}</title>
        <row>
          <text>${Runtime}</text>
          <text>| ${Genre}</text>
       
        </row>
        <description allowsZooming="true" template="${this.BASEURL}templates/AlertWithDescription.xml.js" presentation="modalDialogPresenter">${Description}</description>
        <row>
          <buttonLockup vidUrl="${mediaURL}">
            <badge src="resource://button-play" class="whiteBadge" />
            <title>Play</title>
          </buttonLockup>
        </row>
      </stack>
    </banner>
    <shelf>
      <header>
        <title>Other Dramas</title>
      </header>
      <section>
        <lockup template="http://localhost:9191/templates/Product.xml.js" elementType="detail" dynContent="https://dl.dropboxusercontent.com/u/11080772/films.json" mediaURL="" filmID="2" presentation="defaultPresenter">
          <img src="" width="444" height="250" aspectFill="1" />
          <title class="showTextOnHighlight">
            Film 1
          </title>
        </lockup><lockup template="http://localhost:9191/templates/Product.xml.js" elementType="detail" dynContent="https://dl.dropboxusercontent.com/u/11080772/films.json" mediaURL="" filmID="2" presentation="defaultPresenter">
          <img src="" width="444" height="250" aspectFill="1" />
          <title class="showTextOnHighlight">
            Film 1
          </title>
        </lockup><lockup template="http://localhost:9191/templates/Product.xml.js" elementType="detail" dynContent="https://dl.dropboxusercontent.com/u/11080772/films.json" mediaURL="" filmID="2" presentation="defaultPresenter">
          <img src="" width="444" height="250" aspectFill="1" />
          <title class="showTextOnHighlight">
            Film 1
          </title>
        </lockup><lockup template="http://localhost:9191/templates/Product.xml.js" elementType="detail" dynContent="https://dl.dropboxusercontent.com/u/11080772/films.json" mediaURL="" filmID="2" presentation="defaultPresenter">
          <img src="" width="444" height="250" aspectFill="1" />
          <title class="showTextOnHighlight">
            Film 1
          </title>
        </lockup><lockup template="http://localhost:9191/templates/Product.xml.js" elementType="detail" dynContent="https://dl.dropboxusercontent.com/u/11080772/films.json" mediaURL="" filmID="2" presentation="defaultPresenter">
          <img src="" width="444" height="250" aspectFill="1" />
          <title class="showTextOnHighlight">
            Film 1
          </title>
        </lockup><lockup template="http://localhost:9191/templates/Product.xml.js" elementType="detail" dynContent="https://dl.dropboxusercontent.com/u/11080772/films.json" mediaURL="" filmID="2" presentation="defaultPresenter">
          <img src="" width="444" height="250" aspectFill="1" />
          <title class="showTextOnHighlight">
            Film 1
          </title>
        </lockup><lockup template="http://localhost:9191/templates/Product.xml.js" elementType="detail" dynContent="https://dl.dropboxusercontent.com/u/11080772/films.json" mediaURL="" filmID="2" presentation="defaultPresenter">
          <img src="" width="444" height="250" aspectFill="1" />
          <title class="showTextOnHighlight">
            Film 1
          </title>
        </lockup><lockup template="http://localhost:9191/templates/Product.xml.js" elementType="detail" dynContent="https://dl.dropboxusercontent.com/u/11080772/films.json" mediaURL="" filmID="2" presentation="defaultPresenter">
          <img src="" width="444" height="250" aspectFill="1" />
          <title class="showTextOnHighlight">
            Film 1
          </title>
        </lockup>
      </section>
    </shelf>
  </productTemplate>
</document>`
}
