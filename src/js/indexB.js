var foo = document.getElementById('foo');
var bar = document.getElementById('bar');
var qux = document.getElementById('qux');
//group对象管理drag能否放到drop里，如果name属性一致的group，都是可以互相drop的
//foo可以放到bar里，不能放到qux里,
//put属性用来管理当前的元素可以接受哪个元素的进入
Sortable.create(foo, {
    group: {
        name: 'foo',
        put: 'bar',
        animation: 100,
        revertClone: true
    }
});
Sortable.create(bar, {
    group: {
        name: 'bar',
        put: 'foo',
        pull: function (to, from) {
            return from.el.children.length > 2 || 'clone';
        },
        revertClone: true //针对本身会clone的元素需要加的属性
    },
    animation: 100
});
Sortable.create(qux, {
    group: {
        name: 'qux'
    },
    animation: 100
});
