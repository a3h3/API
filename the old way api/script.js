let container = document.querySelector(".container");


const myHttp = new XMLHttpRequest();
myHttp.open("GET","https://newsapi.org/v2/everything?q=tesla&from=2024-02-13&sortBy=publishedAt&apiKey=c518dee3fecf4f0587ec7a6ac64f26fe");
myHttp.send();
myHttp.addEventListener("readystatechange", ()=> {
    if (myHttp.readyState == 4) {
        const mytext = JSON.parse(myHttp.response)
        let arr = mytext.articles
        console.log(mytext.articles);
        let api_all = ``;
        arr.forEach((data)=> {
            api_all += 
            `
            <div class="card">
                <div class="data">
                    <div class="author"><span>author</span> ${data.author}</div>
                    <div class="content"><span>content</span> ${data.content}</div>
                    <div class="description"><span>description</span> ${data.description}</div>
                    <div class="publishedAt"><span>publishedAt</span> ${data.publishedAt} </div>
                    <div class="title"><span>title</span> ${data.title} </div>
                    <a href="${data.url}" class="url">link</a>
                </div>

                <div class="img">
                    <img src="${data.urlToImage}" alt="" class="urlToImage">
                </div>
            </div>
            `
        });
        container.innerHTML =  api_all;
    }
})




