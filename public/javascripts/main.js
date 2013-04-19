var G = {
    editor: null
}

$(function() {
    require(["public/javascripts/libs/markdown"], function(d) {
        //document.write(markdown.toHTML("Type some **markdown** here..."));
        console.log("markdown loaded");
    });

    G.editor = new Editor($("#editor"));

})


