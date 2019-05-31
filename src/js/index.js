define(["require", "exports", "./src/js/Sortable.min.js"], function (require, exports, Sortable) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var el = document.getElementById('items');
    var sortable = Sortable.create(el);
});
