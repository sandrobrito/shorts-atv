/*
Copyright (C) 2015 Apple Inc. All Rights Reserved.
See LICENSE.txt for this sample’s licensing information

Abstract:
Templates can be displayed to the user via three primary means:
- pushing a document on the stack
- associating a document with a menu bar item
- presenting a modal
This class shows examples for each one.
*/

var Presenter = {

    /**
     * @description This function demonstrate the default way of present a document. 
     * The document can be presented on screen by adding to to the documents array
     * of the navigationDocument. The navigationDocument allows you to manipulate
     * the documents array with the pushDocument, popDocument, replaceDocument, and
     * removeDocument functions. 
     *
     * You can replace an existing document in the navigationDocumetn array by calling 
     * the replaceDocument function of navigationDocument. replaceDocument requires two
     * arguments: the new document, the old document.
     * @param {Document} xml - The XML document to push on the stack
     */
    defaultPresenter: function(xml) {

        /*
        If a loading indicator is visible, we replace it with our document, otherwise 
        we push the document on the stack
        */
        if(this.loadingIndicatorVisible) {
            navigationDocument.replaceDocument(xml, this.loadingIndicator);
            this.loadingIndicatorVisible = false;
        } else {
            navigationDocument.pushDocument(xml);
        }
    },

    /**
     * @description Extends the default presenter functionality and registers
     * the onTextChange handler to allow for a search implementation
     * @param {Document} xml - The XML document to push on the stack
     */
    searchPresenter: function(xml) {

        this.defaultPresenter.call(this, xml);
        var doc = xml;

        var searchField = doc.getElementsByTagName("searchField").item(0);
        var keyboard = searchField.getFeature("Keyboard");

        keyboard.onTextChange = function() {
            var searchText = keyboard.text;
            console.log('search text changed: ' + searchText);
            buildResults(doc, searchText);
        }
    },    

    /**
     * @description This function demonstrates the presentation of documents as modals.
     * You can present and manage a document in a modal view by using the pushModal() and
     * removeModal() functions. Only a single document may be presented as a modal at
     * any given time. Documents presented in the modal view are presented in fullscreen
     * with a semi-transparent background that blurs the document below it.
     *
     * @param {Document} xml - The XML document to present as modal
     */
    modalDialogPresenter: function(xml) {
        navigationDocument.presentModal(xml);
    },

    /**
     * @description This function demonstrates how to present documents within a menu bar.
     * Each item in the menu bar can have a single document associated with it. To associate
     * document to you an item you use the MenuBarDocument feature.
     *
     * Menu bar elements have a MenuBarDocument feature that stores the document associated
     * with a menu bar element. In JavaScript you access the MenuBarDocument by invoking the 
     * getFeature function on the menuBar element. 
     *
     * A feature in TVMLKit is a construct for attaching extended capabilities to an
     * element. See the TVMLKit documentation for information on elements with available
     * features.
     *
     * @param {Document} xml - The XML document to associate with a menu bar element
     * @param {Element} ele - The currently selected item element
     */
    menuBarItemPresenter: function(xml, ele) {
        /*
        To get the menu bar's 'MenuBarDocument' feature, we move up the DOM Node tree using
        the parentNode property. This allows us to access the the menuBar element from the 
        current item element.
        */
        var feature = ele.parentNode.getFeature("MenuBarDocument");

        if (feature) {
            /*
            To retrieve the document associated with the menu bar element, if one has been 
            set, you call the getDocument function the MenuBarDocument feature. The function
            takes one argument, the item element.
            */
            var currentDoc = feature.getDocument(ele);
            /*
            To present a document within the menu bar, you need to associate it with the 
            menu bar item. This is accomplished by call the setDocument function on MenuBarDocument
            feature. The function takes two argument, the document to be presented and item it 
            should be associated with.

            In this implementation we are only associating a document once per menu bar item. You can 
            associate a document each time the item is selected, or you can associate documents with 
            all the menu bar items before the menu bar is presented. You will need to experimet here
            to balance document presentation times with updating the document items.
            */
            if (!currentDoc) {
                feature.setDocument(xml, ele);
            }
        }
    },

    /**
     * @description This function handles the select event and invokes the appropriate presentation method.
     * This is only one way to implent a system for presenting documents. You should determine
     * the best system for your application and data model.
     *
     * @param {Event} event - The select event
     */
    load: function(event) {
        console.log(event);

        var self = this,
            ele = event.target,
            templateURL = ele.getAttribute("template"),
            presentation = ele.getAttribute("presentation"),
            dynContent = ele.getAttribute("dynContent"),
            elementType = ele.getAttribute("elementType");
            filmID = ele.getAttribute("filmID"),
            mediaURL = ele.getAttribute("mediaURL");
        var videoUrl = ele.getAttribute("vidUrl");
        var Title, Director, Cast,mediaURL,Runtime, filmInfo;
        var filmTemplate;

        

        if (videoUrl) {
            var player = new Player();
            var playlist = new Playlist();
            var mediaItem = new MediaItem("video", videoUrl);
            
            player.playlist = playlist;
            player.playlist.push(mediaItem);
            player.present();
        }
        if(templateURL){
            // self.showLoadingIndicator(presentation);
            connect(dynContent);
        }
            
            function connect(dynContent){
                var xmlhttp = new XMLHttpRequest();
                var url = dynContent;


                xmlhttp.onreadystatechange = function() {
                    // console.log("trying");
                    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                        var myArr = JSON.parse(xmlhttp.responseText);
                    
                        if(elementType==="detail"){
                            getDetail(myArr, filmID);
                            console.log("running xmlhttp - getDetail: "+filmID);  
                            getFilms(myArr,filmID);
                            console.log("before loadDetail:"+Title+", "+ Director+", "+ Cast+", "+mediaURL+", "+Runtime);
                            resourceLoader.loadDetail(templateURL,Title, Director, Cast, mediaURL,Runtime, Poster, Genre, Thumb, Description,function(resource) {
                            // console.log("running resourceLoader");
                        
                            var sectionString = "<section id=\"placeholder\">";
                            var newResource = resource.replace("<section id=\"placeholder\">", "<section id=\"placeholder\">"+filmTemplate);
                            // console.log(newResource);
                            var doc = self.makeDocument(newResource);
                            doc.addEventListener("select", self.load.bind(self));                                    
                                if (self[presentation] instanceof Function) {
                                    self[presentation].call(self, doc, ele);
                                } else {
                                    self.defaultPresenter.call(self, doc);
                                }
                            });
                        }
                        
                        
                        if(elementType==="menu"){
                            getFilms(myArr);
                            resourceLoader.loadResource(templateURL,function(resource) {
                            // console.log("running resourceLoader");
                        
                            var sectionString = "<section id=\"placeholder\">";
                            var newResource = resource.replace("<section id=\"placeholder\">", "<section id=\"placeholder\">"+filmTemplate);
                            // console.log(newResource);
                            var doc = self.makeDocument(newResource);
                            doc.addEventListener("select", self.load.bind(self));                                    
                                if (self[presentation] instanceof Function) {
                                    self[presentation].call(self, doc, ele);
                                } else {
                                    self.defaultPresenter.call(self, doc);
                                }
                            });
                        }
                    }
                }
                        
            
            
                xmlhttp.open("GET", url, true);
                xmlhttp.send();
                // console.log(dynContent);
                function getFilms(obj){
                    // Loop for each film    
                    // console.log("running getFilms");
                    for(var a = 0; a < obj.films.length; a++){
                        // var templateString = "<lockup template=\"${this.BASEURL}templates/Product.xml.js\" elementType=\"detail\" dynContent=\"https://dl.dropboxusercontent.com/u/11080772/films.json\" filmID=\""+ obj.films[a][0] +"\" presentation=\"defaultPresenter\"><img src=\"" + obj.films[a][7] + "\" width=\"540\" height=\"242\" aspectFill=\"1\" /><title class=\"showTextOnHighlight\">"+ obj.films[a][1]+"</title></lockup>";
                        var templateString = '<lockup template="http://localhost:9191/templates/Product.xml.js" elementType="detail" dynContent="https://dl.dropboxusercontent.com/u/11080772/films.json" mediaURL="'+ obj.films[a][2]+'" filmID="'+ obj.films[a][0] +'" presentation="defaultPresenter"><img src="' + obj.films[a][6] + '" width="540" height="304" aspectFill="1" /><title class="showTextOnHighlight">'+ obj.films[a][1]+'</title></lockup>';
                        console.log("film: "+ obj.films[a][6]);


                        if(filmTemplate){
                            filmTemplate = filmTemplate + templateString;
                        }else{
                            filmTemplate = templateString;
                        }
                    }
                    // console.log(filmTemplate);
                    return filmTemplate;            
                }
                function getDetail(obj,filmID){
                    // Loop for each film    

                    console.log("running getDetail. templateURL: " + templateURL);
                    console.log(obj);
                    console.log(filmID);

                    if(filmID){
                        Title = obj.films[filmID][1];
                        Director = obj.films[filmID][4];
                        Cast = obj.films[filmID][5];
                        mediaURL = obj.films[filmID][2];
                        Runtime = obj.films[filmID][3];
                        Poster = obj.films[filmID][7];
                        Genre = obj.films[filmID][9];
                        Thumb = obj.films[filmID][6];
                        Description = obj.films[filmID][8];
                        // console.log(Title+", "+ Director+", "+ Cast+", "+mediaURL+", "+Runtime);
                        filmInfo = [Title, Director, Cast,mediaURL,Runtime];

                        return filmInfo
                        
                    }

                    
                }

                
            }
             
            
        // }
        


        /*
        Check if the selected element has a 'template' attribute. If it does then we begin
        the process to present the template to the user.
        */
        
    },

    /**
     * @description This function creates a XML document from the contents of a template file.
     * In this example we are utilizing the DOMParser to transform the Index template from a 
     * string representation into a DOMDocument.
     *
     * @param {String} resource - The contents of the template file
     * @return {Document} - XML Document
     */
    makeDocument: function(resource) {
        if (!Presenter.parser) {
            Presenter.parser = new DOMParser();
        }

        var doc = Presenter.parser.parseFromString(resource, "application/xml");
        return doc;
    },

    /**
     * @description This function handles the display of loading indicators.
     *
     * @param {String} presentation - The presentation function name
     */
    showLoadingIndicator: function(presentation) {
        /*
        You can reuse documents that have previously been created. In this implementation
        we check to see if a loadingIndicator document has already been created. If it 
        hasn't then we create one.
        */
        if (!this.loadingIndicator) {
            this.loadingIndicator = this.makeDocument(this.loadingTemplate);
        }
        
        /* 
        Only show the indicator if one isn't already visible and we aren't presenting a modal.
        */
        if (!this.loadingIndicatorVisible && presentation != "modalDialogPresenter" && presentation != "menuBarItemPresenter") {
            navigationDocument.pushDocument(this.loadingIndicator);
            this.loadingIndicatorVisible = true;
        }
    },

    /**
     * @description This function handles the removal of loading indicators.
     * If a loading indicator is visible, it removes it from the stack and sets the loadingIndicatorVisible attribute to false.
     */
    removeLoadingIndicator: function() {
        if (this.loadingIndicatorVisible) {
            navigationDocument.removeDocument(this.loadingIndicator);
            this.loadingIndicatorVisible = false;
        }
    },

    /**
     * @description Instead of a loading a template from the server, it can stored in a property 
     * or variable for convenience. This is generally employed for templates that can be reused and
     * aren't going to change often, like a loadingIndicator.
     */
    loadingTemplate: `<?xml version="1.0" encoding="UTF-8" ?>
        <document>
          <loadingTemplate>
            <activityIndicator>
              <text>Loading...</text>
            </activityIndicator>
          </loadingTemplate>
        </document>`
}
