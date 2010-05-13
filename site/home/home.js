//
// Feature
//
Feature = QuickUI.Control.extend({
	className: "Feature",
	render: function() {
		QuickUI.Control.prototype.render.call(this);
		this.setClassProperties(QuickUI.Control, {
			"content": [
				this.Feature_name = $("<h2 id=\"Feature_name\" />")[0],
				this.Feature_description = $("<div id=\"Feature_description\" />")[0],
				$("<div class=\"table\" />").items(
					$("<div class=\"row\" />").items(
						$("<div class=\"cell\" />").items(
							"<div class=\"label\">Quick control</div>",
							this.Feature_control = $("<div id=\"Feature_control\" />")[0]
						)[0],
						$("<div class=\"cell\" />").items(
							"<div class=\"label\">Example</div>",
							this.Feature_example = $("<div id=\"Feature_example\" />")[0],
							"<div class=\"label separator\">Result</div>",
							this.Feature_result = $("<div id=\"Feature_result\" />")[0]
						)[0]
					)[0]
				)[0]
			]
		});
	}
});
$.extend(Feature.prototype, {
    control: QuickUI.Element("Feature_control").content(),
    description: QuickUI.Element("Feature_description").content(),
    example: QuickUI.Element("Feature_example").content(),
    name: QuickUI.Element("Feature_name").content(),
    result: QuickUI.Element("Feature_result").content()
});

//
// GetStartedModule
//
GetStartedModule = QuickUI.Control.extend({
	className: "GetStartedModule",
	render: function() {
		QuickUI.Control.prototype.render.call(this);
		this.setClassProperties(QuickUI.Control, {
			"content": [
				"<h2>Get started</h2>",
				$("<ul />").items(
					$("<li />").items(
						QuickUI.Control.create(Link, {
							"content": "Download QuickUI",
							"href": "/downloads/default.html"
						})
					)[0],
					$("<li />").items(
						QuickUI.Control.create(Link, {
							"content": "Read the Tutorial",
							"href": "/tutorial/section01/default.html"
						})
					)[0]
				)[0]
			]
		});
	}
});

//
// Greet
//
Greet = QuickUI.Control.extend({
	className: "Greet",
	render: function() {
		QuickUI.Control.prototype.render.call(this);
		this.setClassProperties(QuickUI.Control, {
			"content": " Hello, world! "
		});
	}
});

//
// Greet2
//
Greet2 = QuickUI.Control.extend({
	className: "Greet2",
	render: function() {
		QuickUI.Control.prototype.render.call(this);
		this.setClassProperties(QuickUI.Control, {
			"content": " Hello <i>world!</i>"
		});
	}
});

//
// GreetDemo
//
GreetDemo = QuickUI.Control.extend({
	className: "GreetDemo",
	render: function() {
		QuickUI.Control.prototype.render.call(this);
		this.setClassProperties(QuickUI.Control, {
			"content": [
				QuickUI.Control.create(Greet2),
				" Yes! ",
				QuickUI.Control.create(Greet2)
			]
		});
	}
});

//
// HomePage
//
HomePage = SitePage.extend({
	className: "HomePage",
	render: function() {
		SitePage.prototype.render.call(this);
		this.setClassProperties(SitePage, {
			"area": "Home",
			"title": "QuickUI modular web control framework",
			"sidebar": QuickUI.Control.create(GetStartedModule),
			"content": [
				"<p>\r\nQuickUI (Quick User Interface) is a framework that simplifies the design, construction,\nand maintenance of web-based user interfaces. The easiest way to describe QuickUI is\nthat <i>it lets you write HTML as if you could create your own tags</i>.\n</p>",
				"<p>\t\r\nIn QuickUI, the tags you create are called controls. You define controls with declarative\nmarkup that can include HTML (including other QuickUI controls), CSS styling,\nand JavaScript scripting. You can easily create new controls by bundling together a group\nof existing controls, or by subclassing an existing control to make it more special-purpose.\nThe page you are reading here, and remainder of this site, is built entirely using QuickUI.\n</p>",
				$("<p />").items(
					" QuickUI includes tools that compile your markup into regular JavaScript and CSS files. These tools run on Windows and OS/X (via the Mono project). The generated JavaScript makes use of the ",
					QuickUI.Control.create(Link, {
						"content": "jQuery",
						"href": "http://jquery.com"
					}),
					" library to build the web user interface on demand. QuickUI also includes a run-time library. Overall QuickUI is targetted at and tested against the mainstream browsers: Apple Safari 4.x, Google Chrome 3.x, Internet Explorer 8.x, and Mozilla Firefox 3.x. "
				)[0],
				"<h2>A quick example</h2>",
				"<p>\r\n\tThe following Quick markup defines a simple control called “Greet”.\n</p>",
				QuickUI.Control.create(SourceCode, {
					"sourceFile": "Greet.qui"
				}),
				$("<p />").items(
					" This control definition gives you a new tag ",
					QuickUI.Control.create(Tag, {
						"content": "Greet"
					}),
					" that can be used in other Quick markup like this: "
				)[0],
				QuickUI.Control.create(SourceCode, {
					"sourceFile": "Sample.qui"
				}),
				"<p>\r\nKicking everything off is accomplished in JavaScript via a jQuery extension:\n</p>",
				"<pre>\r\n$(\"div\").control(Sample);\n</pre>",
				"<p>\r\nThe div below shows the actual sample control above instantiated here on this page:\n</p>",
				QuickUI.Control.create(CodeOutput, {
					"content": QuickUI.Control.create(Sample)
				}),
				$("<p />").items(
					" This is a trivial example. The ",
					QuickUI.Control.create(Link, {
						"content": "tutorial",
						"href": "/tutorial/section01/default.html"
					}),
					" examines controls with complex contents, control styling, and interactive behavior. When combined with the ability to compose and subclass controls, things can quickly become very interesting. You can see some sample QuickUI controls in the ",
					QuickUI.Control.create(Link, {
						"content": "Gallery",
						"href": "/gallery/default.html"
					}),
					". "
				)[0],
				"<h2>Why use QuickUI?</h2>",
				"<p>\r\nConsider using QuickUI because it:\n</p>",
				"<ul><li>\r\n\t\tAllows you to create UI in a markup language that is easy to read,\n\t\tis easy to work with, and can concisely express your design intention.\n\t\tThis speeds up UI development, and makes UI code more maintainable.\n\t</li><li>\r\n\t\tWorks with the web’s native technologies, it doesn’t replace them.\n\t\tQuickUI is true to HTML, CSS, and JavaScript. Familiar conventions are used\n\t\twhenever possible. QuickUI is only meant to address the web’s painful lack\n\t\tof an extensible control framework.\n\t</li><li>\r\n\t\tAllows designers and developers to share design artifacts. QuickUI can bridge\n\t\tthe gap between pure visual design tools and native web coding frameworks.\n\t\tThe markup language can be easily learned by HTML-savvy designers, and is\n\t\tstill powerful and flexible enough to appeal to developers.\n\t</li><li>\r\n\t\tEncourages well-factored UI code. Controls are as modular as possible,\n\t\teasily composable, and easily subclassable. All the goodness of object-oriented\n\t\tdesign can be applied to your UI code. Package up your hard-earned knowledge\n\t\tof HTML and CSS idiosyncrasies into reusable controls that can be readily\n\t\tapplied to new problems.\n\t</li><li>\r\n\t\tProduces predictable compiled code. The QuickUI tools do a minimum of\n\t\tcompilation magic. The compiler’s output are legible, understandable,\n\t\treadily debuggable JavaScript classes. The generated code takes care of \n\t\tpopulating the control’s run-time DOM — code that is often tedious to write\n\t\tby hand, and normally hard to read. The behavior of these controls can\n\t\tbe programmed in JavaScript and jQuery.\n\t</li><li>\r\n\t\tCreates controls that can be used as top-level pages on their own,\n\t\tor easily included in web pages built with other technologies.\n\t</li><li>\r\n\t\tIs fun to work in!\n\t</li></ul>",
				" QuickUI is completely free, and the ",
				QuickUI.Control.create(Link, {
					"content": "source code",
					"href": "http://code.google.com/p/quickui/"
				}),
				" is open under the ",
				QuickUI.Control.create(Link, {
					"content": "MIT License",
					"href": "http://www.opensource.org/licenses/mit-license.php"
				}),
				". ",
				$("<p />").items(
					QuickUI.Control.create(Link, {
						"content": "Download QuickUI",
						"href": "/downloads/default.html"
					})
				)[0],
				"<br />",
				QuickUI.Control.create(AddThis)
			]
		});
	}
});

//
// HomePageNew
//
HomePageNew = SitePage.extend({
	className: "HomePageNew",
	render: function() {
		SitePage.prototype.render.call(this);
		this.setClassProperties(SitePage, {
			"area": "Home",
			"title": "QuickUI modular web control framework",
			"sidebar": QuickUI.Control.create(GetStartedModule),
			"content": QuickUI.Control.create(Feature, {
				"name": "Hello, world",
				"description": " The simplest way to use QuickUI is to define your own tag to stand for a block of HTML content. This content will get inserted wherever you use that tag. ",
				"control": "<pre>\r\n&lt;Control name=”Greet”&gt;\nHello &lt;i&gt;world!&lt;/i&gt;\n&lt;/Control&gt;\n</pre>",
				"example": "<pre>\r\n&lt;Greet/&gt;\nYes!\n&lt;Greet/&gt;\n</pre>",
				"result": QuickUI.Control.create(GreetDemo)
			})
		});
	}
});

//
// Sample
//
Sample = QuickUI.Control.extend({
	className: "Sample",
	render: function() {
		QuickUI.Control.prototype.render.call(this);
		this.setClassProperties(QuickUI.Control, {
			"content": [
				"<h1>QuickUI sample</h1>",
				QuickUI.Control.create(Greet)
			]
		});
	}
});

