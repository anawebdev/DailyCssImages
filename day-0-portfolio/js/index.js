"use strict";

var Header = React.createClass({
  displayName: "Header",

  render: function render() {
    return React.createElement(
      "div",
      { className: "container-fluid" },
      React.createElement(
        "div",
        { className: "row col-md-12" },
        React.createElement(
          "h1",
          null,
          "Ana Toma"
        ),
        React.createElement(
          "a",
          { href: "https://anawebdev.surge.sh", target: "_blank" },
          React.createElement(
            "h3",
            null,
            "- portfolio -"
          )
        ),
        React.createElement(
          "a",
          { href: "http://dailycssimages.com", target: "_blank" },
          React.createElement(
            "h3",
            null,
            "#dailycsssimages"
          )
        )
      )
    );
  }
});

var Display = React.createClass({
  displayName: "Display",

  render: function render() {
    return React.createElement(
      "div",
      { className: "col-md-2" },
      React.createElement(
        "a",
        { href: this.props.url, target: "_blank" },
        React.createElement("img", { className: "img-fluid center-block", src: this.props.img })
      )
    );
  }
});

var Title = React.createClass({
  displayName: "Title",

  render: function render() {
    return React.createElement(
      "div",
      { className: "row" },
      React.createElement(
        "div",
        { className: "col-md-12" },
        React.createElement(
          "h2",
          null,
          "Week ",
          this.props.week
        ),
        React.createElement(
          "h4",
          null,
          this.props.text
        )
      )
    );
  }
});

var Section = React.createClass({
  displayName: "Section",

  render: function render() {
    return React.createElement(
      "div",
      { className: "container-fluid group" },
      React.createElement(Title, { week: this.props.week, text: this.props.text }),
      React.createElement(
        "div",
        { className: "row" },
        React.createElement("div", { className: "col-md-1" }),
        React.createElement(Display, { img: this.props.img1, url: this.props.url1 }),
        React.createElement(Display, { img: this.props.img2, url: this.props.url2 }),
        React.createElement(Display, { img: this.props.img3, url: this.props.url3 }),
        React.createElement(Display, { img: this.props.img4, url: this.props.url4 }),
        React.createElement(Display, { img: this.props.img5, url: this.props.url5 })
      )
    );
  }
});

var App = React.createClass({
  displayName: "App",

  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(Header, null),
      React.createElement(Section, {
        week: "1",
        text: "- cute animals -",
        img1: "http://i.imgur.com/5ZooWEN.jpg",
        img2: "http://i.imgur.com/w4zaL04.jpg",
        img3: "http://i.imgur.com/dCVqWpP.jpg",
        img4: "http://i.imgur.com/jNsLutf.jpg",
        img5: "http://i.imgur.com/wvCnj2y.jpg",
        url1: "https://codepen.io/feuerbird29/full/JWOBdV/",
        url2: "https://codepen.io/feuerbird29/full/jLNjmw/",
        url3: "https://codepen.io/feuerbird29/full/OjPRmm/",
        url4: "https://codepen.io/feuerbird29/full/VzYyLZ/",
        url5: "https://codepen.io/feuerbird29/full/oeXbpN/"
      }),
      React.createElement(Section, {
        week: "2",
        text: "- office objects -",
        img1: "http://i.imgur.com/xEGZEFA.jpg",
        img2: "http://i.imgur.com/bqcS5op.jpg",
        img3: "http://i.imgur.com/L8N2jGe.jpg",
        img4: "",
        img5: "",
        url1: "https://codepen.io/feuerbird29/full/GvJdyZ/",
        url2: "https://codepen.io/feuerbird29/full/BdNbEy/",
        url3: "https://codepen.io/feuerbird29/full/brVRgJ/"
      }),
      React.createElement(Section, {
        week: "3",
        text: "- yummy food -",
        img1: "",
        img2: "",
        img3: "",
        img4: "",
        img5: ""
      }),
      React.createElement(Section, {
        week: "4",
        text: "- monsters and zombies -",
        img1: "",
        img2: "",
        img3: "",
        img4: "",
        img5: ""
      }),
      React.createElement(Section, {
        week: "5",
        text: "- superheroes -",
        img1: "",
        img2: "",
        img3: "",
        img4: "",
        img5: ""
      }),
      React.createElement(Section, {
        week: "6",
        text: "- icons -",
        img1: "",
        img2: "",
        img3: "",
        img4: "",
        img5: ""
      }),
      React.createElement(Section, {
        week: "7",
        text: "- logos -",
        img1: "",
        img2: "",
        img3: "",
        img4: "",
        img5: ""
      }),
      React.createElement(Section, {
        week: "8",
        text: "- electronics -",
        img1: "",
        img2: "",
        img3: "",
        img4: "",
        img5: ""
      }),
      React.createElement(Section, {
        week: "9",
        text: "- monsters and zombies -",
        img1: "",
        img2: "",
        img3: "",
        img4: "",
        img5: ""
      }),
      React.createElement(Section, {
        week: "10",
        text: "- celebrations and parties -",
        img1: "",
        img2: "",
        img3: "",
        img4: "",
        img5: ""
      })
    );
  }
});

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));