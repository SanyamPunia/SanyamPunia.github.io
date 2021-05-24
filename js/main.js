const about = document.querySelector('#about');
const contact = document.querySelector('#contact');
const aboutContent = document.querySelector('#about-content');
const contactContent = document.querySelector('#contact-content');

//links
// const sc = document.querySelector(".sc");
// const gh = document.querySelector(".gh");
// const tt = document.querySelector(".tt");
// const ig = document.querySelector(".ig");
// const sf = document.querySelector(".sf");

// sc.addEventListener("click", () => {
//     const medidaPlayer = new WinBox("WinBox.js", {
//         url: "https://soundcloud.com/prodmxle"
//     })
// })


about.addEventListener("click", () => {
    const aboutBox = new WinBox({
        title: "About Me",
        width: "400px",
        height: "400px",
        top: 50,
        left: 50,
        mount: aboutContent,
        onfocus: function() {
            this.setBackground("#00aa00")
        },
        onblur: function() {
            this.setBackground("#777");
        }
    })
})

contact.addEventListener("click", () => {
    const contactBox = new WinBox({
        title: "Contact Me",
        width: "400px",
        height: "400px",
        top: 150,
        left: 250,
        mount: contactContent,
        onfocus: function() {
            this.setBackground("#00aa00")
        },
        onblur: function() {
            this.setBackground("#777");
        }
    })
})