HtmlView = Class.extend({

    html: null,
    element: null,

    init: function(element, markdownText) {
        this.element = element;
        console.log("htmlview inited");
    },

    setMarkdown: function(markdownText) {
        console.log("setting markdown", markdownText);
        if (markdown) {
            this.html = markdown.toHTML(markdownText);
            this.update();
        }
        console.log("html in viewer is", this.html);
    },

    show: function() {
        this.element.css({
            'display': 'block'
        });
    },

    hide: function() {
        this.element.css({
            'display': 'none'
        });
    },

    isVisible: function() {
        //return this.element.css('display') !== 'none';
        return $(this.element).is(':visible');
    },

    update: function() {
        console.log($(this.element).find('.blog'));
        $(this.element).find('.post').html(this.html);
    }
});