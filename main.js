window.onload = function() {
    rangy.init()

    var serialize   = document.getElementById("serialize")
      , highlight   = document.getElementById("highlight")
      , buffer      = document.getElementById("buffer").children[0].children[0]
      , hlapplier   = rangy.createCssClassApplier("highlight")
      , highlighter = rangy.createHighlighter();
    
    serialize.addEventListener("click", function() {
        if (rangy.getSelection().isCollapsed) return;
        var serializedSelection = rangy.serializeSelection(rangy.getSelection(), true);
        buffer.value = serializedSelection;
    });
    
    highlight.addEventListener("click", function() {
        var serializedSelection = buffer.value;

        if (!serializedSelection) return;
        var selection = rangy.deserializeSelection(serializedSelection).nativeSelection;
        hlapplier.toggleSelection();
        selection.collapseToEnd();
    });
}
