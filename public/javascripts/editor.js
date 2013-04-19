Editor = Class.extend({

    element: null,
    htmlView: null,

    init: function(element) {
        this.element = element;
        this.htmlView = new HtmlView($("#html-view"));
        this.bindEvents();
    },

    bindEvents: function() {
        var me = this;
        $(this.element).keydown(function(e) {
            if (e.keyCode === 81 && e.ctrlKey) {
                me.toggleHTML();
            }
        });
    },

    getMarkDown: function() {
        return this.element[0].innerText;
    },

    toggleHTML: function() {
        if (this.htmlView.isVisible()) {
            this.htmlView.hide();
        }
        else {
            this.htmlView.setMarkdown(this.getMarkDown());
            this.htmlView.show();
        }
    }



});