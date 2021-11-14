# Bootstrap Introduction

<img style="float: left; width: 15em; padding: 1em;"  src="media\images\bootstrap_logo.svg" alt="">

Bootstrap is a very popular CSS Framework used to quickly create responsive webpages using HTML, CSS, and JavaScript. It is an open-source resource and well used across the internet. This is one of many tutorials on the uses and implementations of a CSS framework. A best use case would be to use this document in tandem with other tutorials and resources.

Web development can be difficult at times and can get crazy really fast, especially when developing for a business. There are many rules you will need to follow. Using a CSS framework like Bootstrap can help limit difficulties in trying to follow legal protocols like digital accessibility and regular updates.

# Bootstrap Tutorial

## Get a Basic Understanding

Before we begin writing or creating a webpage using Bootstrap, lets make sure we understand the technologies we will be working with.

### Developing Environment

A webpage using the Bootstrap framework can be developed using any developing environment. A development environment is simply the program used to write the technologies used in your project. Techopedia also provides a good description stating, "A development environment is a collection of procedures and tools for developing, testing and debugging an application or program." ([Techopedia - Development Environment](https://www.techopedia.com/definition/16376/development-environment)). There are a vast amount of development environments available and many of them are able to interact with each other. Each have different benefits and are primarily built for various technologies.

My go-to development environment is VSCode by Microsoft. It is lightweight and open-source; especially when being used on a computer with limited resources. It is very good and used by many individuals. You can download it from Microsoft's website at [Download Visual Studio Code, Mac, Linux, Windows](https://code.visualstudio.com/download). There you can simply select your operating system and download the appropriate software. Thanks to the adaptability of VScode (a.k.a. Visual Studio Code) you will have to set up your new development environment for web development. You can find a tutorial for understanding your development environment for HTML at [HTML Programming in Visual Studio Code](https://code.visualstudio.com/docs/languages/html). If you are interesting in understanding more about the Visual Studio Code Development environment you can find information here at [Visual Studio Code on Windows](https://code.visualstudio.com/docs/setup/windows). Descriptions for other operating systems are also provided.

### HTML

<img style="float: right; width: 10em; padding: 1em;"  src="media\images\html5_logo.svg" alt="">

HTML is a markup language used to visually display content across the web. The language is built up mostly of elements, attributes, and values.

Elements are the building blocks; they explain what type of content is being displayed. Elements consist of a start tag, end tag, and everything between. Here is an example...
```html
<html>...</html>
```
This is the `html` element, it contains the WHOLE html document. It starts with a start tag, `<html>` and ends with an end tag, `</html>`. The end tag is indicated by the forward slash after the first arrow. The content is everything in between these tags, `...`. Not all elements have this exact syntax, although I would say that a great amount of them have all of these parts. Also it is important to note that elements are often nested inside of each other, meaning the content of an element is more element(s).

A more in-depth description of HTML elements can be found at [w3schools](https://www.w3schools.com/html/html_elements.asp).

Attributes modify elements; with attributes you can assign pre-defined settings and modifications to elements. Values are simply given to each attribute and element.
```html
<p lang="es">Buenos Dias</p>
```
Here `lang` is an attribute of the paragraph element (`<p>`). The `lang` attribute modifies the paragraph element. From w3schools we know the `lang` attribute "specifies the language of the element's content" [HTML Attributes](https://www.w3schools.com/tags/ref_attributes.asp). So here the technology used by the user on the webpage will know that the content of this paragraph is in spanish. the `es` in the example above is the value of the attribute (`lang`).

Here is a basic example of HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
<title>Page Title</title>
</head>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
</html>
```
This code is provided by [w3schools.com](https://www.w3schools.com/html/html_intro.asp).

This is short but valid HTML code, meaning it has all of the parts and pieces to be complete and working HTML.

### CSS

<img style="float: right; width: 10em; padding: 1em;"  src="media\images\html5_technology_classes_logos\html5_css3_styling.svg" alt="">

CSS is the language used to change the visuals of an HTML document. CSS stands for "Cascading Style Sheet". The file containing CSS, usually `style.css`, contains many style changes to HTML elements and custom classes. Here is a basic application of some styling.

```css
body {background-color: blue;} .class {color: red;}
```

The above example consists of selectors and declarations (with properties and values). The selectors, `body` and `.class`, denote an element's or class's style that is being changed respectively. `background-color` and `color` are the properties being affected and `blue` and `red` are the values those properties are being changed to. You can research this more in depth at [w3schools CSS Syntax](https://www.w3schools.com/css/css_syntax.asp).

CSS has many, many, many different attributes and transformations that can be use to make the web look amazing. It could be as simple as switching a text color or as difficult as animating a story as someone scrolls. Any instruction I give here would be insufficient, but that is the beauty of Bootstrap. Bootstrap is full of open source, free to use CSS rules that are quick and easy to use.

### JS

<img style="float: right; width: 10em; padding: 1em;"  src="media\images\unofficial_javascript_logo.png" alt="">

JavaScript changes the functionality of the web. Mozilla has a great definition of what JavaScript is and how to recognize it.

> "JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved. It is the third layer of the layer cake of standard web technologies" ([Mozilla - What is JavaScript?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript)).

Javascript helps us keep track of events. When one HTML element is interacted with, we can make changes to other elements. Javascript lets us add cause and effect to what would be a very static experience for a webpage.

If you want a more in-depth description of what JavaScript is and how it is implemented, I recommend going [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript) and reading their documentation.

<img style="float: left; width: 20em; padding: 1em;" src="media/images/code_wallpaper.jpg" alt ="">

## How does Bootstrap interact with HTML, CSS, and Javascript

Now that we have a basic understanding of the technologies that make up Bootstrap, we can discuss 'what' Bootstrap is. Bootstrap is a CSS Framework. It is an open source, free, pre-built CSS & JavaScript Library that can be used to change the style and functionality of HTML. Given a good understanding of HTML, CSS, and Javascript, the bulk of needed information to use Bootstrap in a website will come from understanding the many custom HTML classes used to apply Bootstrap to a webpage.

## Connecting to the Bootstrap Library

In previous versions of Bootstrap, Bootstrap was downloaded and then placed in the source files of a website. This meant that if you wanted to update your Bootstrap library you had to re-download the latest code. In Bootstrap Version 5, there is a newer method to connect the Bootstrap library to your website. Using BootstrapCDN, you can connect to an outside database of the library. Other's who use Bootstrap use this connection as well. This increases the speed of many websites as there is a good possibility that this library is previously cached in the user's browser. ([Bootstrap Introduction](https://getbootstrap.com/docs/4.3/getting-started/introduction/))

Here is how you connect to the Bootstrap CSS Framework in version 5.

### CSS connection
```html
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
```
Place this HTML element in the `<head>` of your HTML document. This tells all of the HTML elements to look a certain way.

### JavaScript connection
```html
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
```
Place this HTML code at the end of the `<body>` element of your HTML document. This adds the functionality available from the Bootstrap library.

## Using the Bootstrap Library

When Bootstrap is simply connected to a webpage it already overwrites many basic default HTML elements and CSS styles. This ranges from a simple change in a text font to changing the pointer when hovering over different elements. These native changes are described in-depth in [Reboot](https://getbootstrap.com/docs/4.3/content/reboot/).

### Bootstrap classes

The real power of Bootstrap is found in adding certain custom classes to your HTML elements. You have already connected your webpage to the Bootstrap CSS Framework, this is how you connected desired elements to the many already written CSS style rules and Javascript functionality.

#### Adding classes

Lets try and start with a simple example of using Bootstrap to make one paragraph visually stand out above the rest.

```html
<p>This is the code for a standard paragraph.</p>
```

To make it stand out we add a class attribute with the value of  `lead` to the paragraph element (`<p>`).

```html
<p class="lead">This paragraph stands out!</p>
```

This `lead` class adds two CSS style rules for us.

```css
.lead {
    font-size: 1.25rem;
    font-weight: 300;
}
```

It's as simple as that! Bootstrap lets us save time by providing already made classes.

### Adding Breakpoints

Bootstrap also helps make a responsive web experience. This means that a webpage created for a big screen will also look good and 'respond' well on a small screen.

We do this by telling each class to style differently based on the size of the screen. Add media breakpoints to the classes you apply.

```html
<div class="col-lg">
    ...
</div>
```

The addition of "`-lg`" to "`col-lg`" indicates that this `<div>` element will display as a column on screens larger than a 'large' size. We usually add these to the grids we create to organize the data on the screen. Please go to [Bootstrap - Breakpoints](https://getbootstrap.com/docs/5.0/layout/breakpoints/) to get a better understanding of applying breakpoints.

## Licensing

If you have any questions about how to attribute to Bootstrap go to [License FAQs](https://getbootstrap.com/docs/5.0/about/license/).

# Additional Resources

- [Bootstrap - The most popular HTML, CSS, and JS library in the world](https://getbootstrap.com/)
  - "Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins."
- [Bootstrap Introduction](https://getbootstrap.com/docs/4.3/getting-started/introduction/)
  - "Get started with Bootstrap, the world’s most popular framework for building responsive, mobile-first sites, with BootstrapCDN and a template starter page."
- [Tutorial Republic - Bootstrap Tutorial](https://www.tutorialrepublic.com/twitter-bootstrap-tutorial/)
  - "Our Bootstrap tutorials will help you to learn the basic as well as advanced features of the Bootstrap step-by-step through easy-to-understand explanation of every topic. If you're a beginner, start with the basics and gradually move forward by learning a little bit every day."
- [Bootstrap Approach](https://getbootstrap.com/docs/4.3/extend/approach/)
  - "Learn about the guiding principles, strategies, and techniques used to build and maintain Bootstrap so you can more easily customize and extend it yourself."