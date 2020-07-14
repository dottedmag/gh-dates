(function(){
    let pad = (n, len) => {
        let s = ""+n;
        while (s.length<len)
            s = "0"+s;
        return s;
    };
    let format = d => {
        return pad(d.getUTCDate(), 2)+"-"+
            pad(d.getUTCMonth()+1, 2)+"-"+
            pad(d.getUTCFullYear())+" "+
            pad(d.getUTCHours())+":"+
            pad(d.getUTCMinutes())+" UTC";
    };

    let els = document.querySelectorAll("relative-time");
    for (let i = 0; i < els.length; i++)
    {
        let el = els.item(i);
        let d = new Date(Date.parse(el.getAttribute("datetime")));
        el.innerText = format(d);
    }
})();
