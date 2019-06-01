declare var Sortable;
var foo = document.getElementById('foo');
var bar = document.getElementById('bar');
var qux = document.getElementById('qux');
//group对象管理drag能否放到drop里，如果name属性一致的group，都是可以互相drop的
//foo可以放到bar里，不能放到qux里,
//put属性用来管理当前的元素可以接受哪个元素的进入
Sortable.create(foo, {
  group: {
    name: 'foo',
    put: 'bar', //可以接受bar的元素
    animation: 100,
    revertClone:true
  }
});

Sortable.create(bar, {
  group: {
    name: 'bar',
    put: 'foo', //可以设置false,那么这个元素就不会被放入任何元素
    pull: function (to, from) {  //把当前元素往外拖的时候，执行的方法，同样也可以设置true,false,或者字符串
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