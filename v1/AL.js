let xmlContent = '';
let tableBooks = document.getElementById('books')
let tgeste =window.location.href;
console.log(tgeste)
fetch (tgeste + 'AL.xml').then((response)=>{
    console.log('')
    response.text().then((xml)=>{
        xmlContent = xml;
        let parser = new DOMParser();
        let xmlDom = parser.parseFromString(xmlContent, 'application/xml');
        let line = xmlDom.querySelectorAll('line'); 

        Al.forEach(lineXmlNode => {
            let row = document.createElement('tr');
            //author//
            let td = document.createElement('td');
            td.innerText = line.XmlNode.children[0].innerHTML;
            row.appendChild(td);

            tableBooks.children[1].appendChild(row);
        });
    });
});