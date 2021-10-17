var link = document.createElement('link');

link.type = 'text/css';
link.rel = 'stylesheet';
link.href = "https://raw.githubusercontent.com/xiaozhi417417/mask.js/main/V0.1/mask.css";

var head = document.getElementsByTagName('head')[0];
head.appendChild(link);

function clickmask (e) {
    console.log(e.srcElement.classList.remove("mask"));
    //t.classList.add("maskunload");
}

var mask = {
    add: (selector) => {
        setTimeout(() => {
            document.querySelectorAll(selector).forEach((tm) => {
                tm.classList.add("mask");

                tm.addEventListener('click', clickmask);
            })
            // var tm = document.querySelectorAll(selector);
            // tm.classList.add("mask");

            // tm.addEventListener('click', clickmask);    
        }, 100)
    }
}
