document.addEventListener("DOMContentLoaded", function() {
    const articles = [
            "../articles/article1.html",
            "../articles/article2.html",
            "../articles/article3.html",
            "../articles/article4.html",
            "../articles/article5.html",
            "../articles/article6.html",
            "../articles/article7.html",
            "../articles/article8.html",
            "../articles/article9.html",
            "../articles/article10.html",
            "../articles/article11.html",
            "../articles/article12.html",
            "../articles/article13.html",
            "../articles/article14.html",
            "../articles/article15.html",
            "../articles/article16.html",
            "../articles/article17.html",
            "../articles/article18.html",
            "../articles/article19.html",
            "../articles/article20.html",
            "../articles/article21.html",
            "../articles/article22.html",
            "../articles/article23.html",
            "../articles/article24.html" 
    ];

    document.getElementById("randomArticle").addEventListener("click", function() {
        const randomIndex = Math.floor(Math.random() * articles.length);
        window.location.href = articles[randomIndex];
    });
});