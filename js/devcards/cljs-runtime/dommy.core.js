goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('dommy.utils');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_(data)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(dommy.core.selector,data));
} else {
if(((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))){
return cljs.core.name(data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__4126__auto__ = elem.textContent;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str(k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(var_args){
var G__40123 = arguments.length;
switch (G__40123) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(window.getComputedStyle(elem));
}));

(dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str(k)]);
}));

(dommy.core.style.cljs$lang$maxFixedArity = 2);

dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,k);
if(cljs.core.seq(pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto__ = elem.classList;
if(cljs.core.truth_(temp__5733__auto__)){
var class_list = temp__5733__auto__;
return class_list.contains(c__$1);
} else {
var temp__5735__auto__ = dommy.core.class$(elem);
if(cljs.core.truth_(temp__5735__auto__)){
var class_name = temp__5735__auto__;
var temp__5735__auto____$1 = dommy.utils.class_index(class_name,c__$1);
if(cljs.core.truth_(temp__5735__auto____$1)){
var i = temp__5735__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate(dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var G__40125 = arguments.length;
switch (G__40125) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array(base.querySelectorAll(dommy.core.selector(selector)));
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
}));

(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(document,selector);
}));

(dommy.core.matches_pred.cljs$lang$maxFixedArity = 2);

/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var G__40128 = arguments.length;
switch (G__40128) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__40126_SHARP_){
return (!((p1__40126_SHARP_ === base)));
}),dommy.core.ancestors(elem))));
}));

(dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3(document.body,elem,selector);
}));

(dommy.core.closest.cljs$lang$maxFixedArity = 3);

/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if((!((void 0 === elem.textContent)))){
(elem.textContent = text);
} else {
(elem.innerText = text);
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
(elem.innerHTML = html);

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
(elem.value = value);

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return (elem.className = c);
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 *    (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40581 = arguments.length;
var i__4737__auto___40582 = (0);
while(true){
if((i__4737__auto___40582 < len__4736__auto___40581)){
args__4742__auto__.push((arguments[i__4737__auto___40582]));

var G__40583 = (i__4737__auto___40582 + (1));
i__4737__auto___40582 = G__40583;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__40136_40584 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__40137_40585 = null;
var count__40138_40586 = (0);
var i__40139_40587 = (0);
while(true){
if((i__40139_40587 < count__40138_40586)){
var vec__40148_40588 = chunk__40137_40585.cljs$core$IIndexed$_nth$arity$2(null,i__40139_40587);
var k_40589 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40148_40588,(0),null);
var v_40590 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40148_40588,(1),null);
style.setProperty(dommy.utils.as_str(k_40589),v_40590);


var G__40591 = seq__40136_40584;
var G__40592 = chunk__40137_40585;
var G__40593 = count__40138_40586;
var G__40594 = (i__40139_40587 + (1));
seq__40136_40584 = G__40591;
chunk__40137_40585 = G__40592;
count__40138_40586 = G__40593;
i__40139_40587 = G__40594;
continue;
} else {
var temp__5735__auto___40595 = cljs.core.seq(seq__40136_40584);
if(temp__5735__auto___40595){
var seq__40136_40596__$1 = temp__5735__auto___40595;
if(cljs.core.chunked_seq_QMARK_(seq__40136_40596__$1)){
var c__4556__auto___40597 = cljs.core.chunk_first(seq__40136_40596__$1);
var G__40598 = cljs.core.chunk_rest(seq__40136_40596__$1);
var G__40599 = c__4556__auto___40597;
var G__40600 = cljs.core.count(c__4556__auto___40597);
var G__40601 = (0);
seq__40136_40584 = G__40598;
chunk__40137_40585 = G__40599;
count__40138_40586 = G__40600;
i__40139_40587 = G__40601;
continue;
} else {
var vec__40152_40602 = cljs.core.first(seq__40136_40596__$1);
var k_40603 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40152_40602,(0),null);
var v_40604 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40152_40602,(1),null);
style.setProperty(dommy.utils.as_str(k_40603),v_40604);


var G__40605 = cljs.core.next(seq__40136_40596__$1);
var G__40606 = null;
var G__40607 = (0);
var G__40608 = (0);
seq__40136_40584 = G__40605;
chunk__40137_40585 = G__40606;
count__40138_40586 = G__40607;
i__40139_40587 = G__40608;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq40133){
var G__40134 = cljs.core.first(seq40133);
var seq40133__$1 = cljs.core.next(seq40133);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40134,seq40133__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40609 = arguments.length;
var i__4737__auto___40610 = (0);
while(true){
if((i__4737__auto___40610 < len__4736__auto___40609)){
args__4742__auto__.push((arguments[i__4737__auto___40610]));

var G__40611 = (i__4737__auto___40610 + (1));
i__4737__auto___40610 = G__40611;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__40159_40612 = cljs.core.seq(keywords);
var chunk__40160_40613 = null;
var count__40161_40614 = (0);
var i__40162_40615 = (0);
while(true){
if((i__40162_40615 < count__40161_40614)){
var kw_40616 = chunk__40160_40613.cljs$core$IIndexed$_nth$arity$2(null,i__40162_40615);
style.removeProperty(dommy.utils.as_str(kw_40616));


var G__40617 = seq__40159_40612;
var G__40618 = chunk__40160_40613;
var G__40619 = count__40161_40614;
var G__40620 = (i__40162_40615 + (1));
seq__40159_40612 = G__40617;
chunk__40160_40613 = G__40618;
count__40161_40614 = G__40619;
i__40162_40615 = G__40620;
continue;
} else {
var temp__5735__auto___40621 = cljs.core.seq(seq__40159_40612);
if(temp__5735__auto___40621){
var seq__40159_40622__$1 = temp__5735__auto___40621;
if(cljs.core.chunked_seq_QMARK_(seq__40159_40622__$1)){
var c__4556__auto___40623 = cljs.core.chunk_first(seq__40159_40622__$1);
var G__40624 = cljs.core.chunk_rest(seq__40159_40622__$1);
var G__40625 = c__4556__auto___40623;
var G__40626 = cljs.core.count(c__4556__auto___40623);
var G__40627 = (0);
seq__40159_40612 = G__40624;
chunk__40160_40613 = G__40625;
count__40161_40614 = G__40626;
i__40162_40615 = G__40627;
continue;
} else {
var kw_40628 = cljs.core.first(seq__40159_40622__$1);
style.removeProperty(dommy.utils.as_str(kw_40628));


var G__40629 = cljs.core.next(seq__40159_40622__$1);
var G__40630 = null;
var G__40631 = (0);
var G__40632 = (0);
seq__40159_40612 = G__40629;
chunk__40160_40613 = G__40630;
count__40161_40614 = G__40631;
i__40162_40615 = G__40632;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.remove_style_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq40156){
var G__40157 = cljs.core.first(seq40156);
var seq40156__$1 = cljs.core.next(seq40156);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40157,seq40156__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40633 = arguments.length;
var i__4737__auto___40634 = (0);
while(true){
if((i__4737__auto___40634 < len__4736__auto___40633)){
args__4742__auto__.push((arguments[i__4737__auto___40634]));

var G__40635 = (i__4737__auto___40634 + (1));
i__4737__auto___40634 = G__40635;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__40169_40636 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__40170_40637 = null;
var count__40171_40638 = (0);
var i__40172_40639 = (0);
while(true){
if((i__40172_40639 < count__40171_40638)){
var vec__40179_40641 = chunk__40170_40637.cljs$core$IIndexed$_nth$arity$2(null,i__40172_40639);
var k_40642 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40179_40641,(0),null);
var v_40643 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40179_40641,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_40642,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_40643),"px"].join('')], 0));


var G__40645 = seq__40169_40636;
var G__40646 = chunk__40170_40637;
var G__40647 = count__40171_40638;
var G__40648 = (i__40172_40639 + (1));
seq__40169_40636 = G__40645;
chunk__40170_40637 = G__40646;
count__40171_40638 = G__40647;
i__40172_40639 = G__40648;
continue;
} else {
var temp__5735__auto___40649 = cljs.core.seq(seq__40169_40636);
if(temp__5735__auto___40649){
var seq__40169_40650__$1 = temp__5735__auto___40649;
if(cljs.core.chunked_seq_QMARK_(seq__40169_40650__$1)){
var c__4556__auto___40651 = cljs.core.chunk_first(seq__40169_40650__$1);
var G__40652 = cljs.core.chunk_rest(seq__40169_40650__$1);
var G__40653 = c__4556__auto___40651;
var G__40654 = cljs.core.count(c__4556__auto___40651);
var G__40655 = (0);
seq__40169_40636 = G__40652;
chunk__40170_40637 = G__40653;
count__40171_40638 = G__40654;
i__40172_40639 = G__40655;
continue;
} else {
var vec__40182_40656 = cljs.core.first(seq__40169_40650__$1);
var k_40657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40182_40656,(0),null);
var v_40658 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40182_40656,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_40657,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_40658),"px"].join('')], 0));


var G__40659 = cljs.core.next(seq__40169_40650__$1);
var G__40660 = null;
var G__40661 = (0);
var G__40662 = (0);
seq__40169_40636 = G__40659;
chunk__40170_40637 = G__40660;
count__40171_40638 = G__40661;
i__40172_40639 = G__40662;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq40166){
var G__40167 = cljs.core.first(seq40166);
var seq40166__$1 = cljs.core.next(seq40166);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40167,seq40166__$1);
}));

/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 * 
 *     (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(var_args){
var G__40190 = arguments.length;
switch (G__40190) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___40664 = arguments.length;
var i__4737__auto___40665 = (0);
while(true){
if((i__4737__auto___40665 < len__4736__auto___40664)){
args_arr__4757__auto__.push((arguments[i__4737__auto___40665]));

var G__40666 = (i__4737__auto___40665 + (1));
i__4737__auto___40665 = G__40666;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4758__auto__);

}
});

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,dommy.utils.as_str(k));
}));

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_(v)){
var G__40191 = elem;
(G__40191[k__$1] = v);

return G__40191;
} else {
var G__40192 = elem;
G__40192.setAttribute(k__$1,v);

return G__40192;
}
} else {
return null;
}
}));

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__40193_40667 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__40194_40668 = null;
var count__40195_40669 = (0);
var i__40196_40670 = (0);
while(true){
if((i__40196_40670 < count__40195_40669)){
var vec__40203_40673 = chunk__40194_40668.cljs$core$IIndexed$_nth$arity$2(null,i__40196_40670);
var k_40674__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40203_40673,(0),null);
var v_40675__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40203_40673,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_40674__$1,v_40675__$1);


var G__40676 = seq__40193_40667;
var G__40677 = chunk__40194_40668;
var G__40678 = count__40195_40669;
var G__40679 = (i__40196_40670 + (1));
seq__40193_40667 = G__40676;
chunk__40194_40668 = G__40677;
count__40195_40669 = G__40678;
i__40196_40670 = G__40679;
continue;
} else {
var temp__5735__auto___40680 = cljs.core.seq(seq__40193_40667);
if(temp__5735__auto___40680){
var seq__40193_40681__$1 = temp__5735__auto___40680;
if(cljs.core.chunked_seq_QMARK_(seq__40193_40681__$1)){
var c__4556__auto___40682 = cljs.core.chunk_first(seq__40193_40681__$1);
var G__40683 = cljs.core.chunk_rest(seq__40193_40681__$1);
var G__40684 = c__4556__auto___40682;
var G__40685 = cljs.core.count(c__4556__auto___40682);
var G__40686 = (0);
seq__40193_40667 = G__40683;
chunk__40194_40668 = G__40684;
count__40195_40669 = G__40685;
i__40196_40670 = G__40686;
continue;
} else {
var vec__40206_40687 = cljs.core.first(seq__40193_40681__$1);
var k_40688__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40206_40687,(0),null);
var v_40689__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40206_40687,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_40688__$1,v_40689__$1);


var G__40690 = cljs.core.next(seq__40193_40681__$1);
var G__40691 = null;
var G__40692 = (0);
var G__40693 = (0);
seq__40193_40667 = G__40690;
chunk__40194_40668 = G__40691;
count__40195_40669 = G__40692;
i__40196_40670 = G__40693;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq40186){
var G__40187 = cljs.core.first(seq40186);
var seq40186__$1 = cljs.core.next(seq40186);
var G__40188 = cljs.core.first(seq40186__$1);
var seq40186__$2 = cljs.core.next(seq40186__$1);
var G__40189 = cljs.core.first(seq40186__$2);
var seq40186__$3 = cljs.core.next(seq40186__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40187,G__40188,G__40189,seq40186__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__40213 = arguments.length;
switch (G__40213) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___40697 = arguments.length;
var i__4737__auto___40698 = (0);
while(true){
if((i__4737__auto___40698 < len__4736__auto___40697)){
args_arr__4757__auto__.push((arguments[i__4737__auto___40698]));

var G__40699 = (i__4737__auto___40698 + (1));
i__4737__auto___40698 = G__40699;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_40700__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__40214 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__40214.cljs$core$IFn$_invoke$arity$1 ? fexpr__40214.cljs$core$IFn$_invoke$arity$1(k_40700__$1) : fexpr__40214.call(null,k_40700__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_40700__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__40215_40701 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__40216_40702 = null;
var count__40217_40703 = (0);
var i__40218_40704 = (0);
while(true){
if((i__40218_40704 < count__40217_40703)){
var k_40705__$1 = chunk__40216_40702.cljs$core$IIndexed$_nth$arity$2(null,i__40218_40704);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_40705__$1);


var G__40706 = seq__40215_40701;
var G__40707 = chunk__40216_40702;
var G__40708 = count__40217_40703;
var G__40709 = (i__40218_40704 + (1));
seq__40215_40701 = G__40706;
chunk__40216_40702 = G__40707;
count__40217_40703 = G__40708;
i__40218_40704 = G__40709;
continue;
} else {
var temp__5735__auto___40710 = cljs.core.seq(seq__40215_40701);
if(temp__5735__auto___40710){
var seq__40215_40711__$1 = temp__5735__auto___40710;
if(cljs.core.chunked_seq_QMARK_(seq__40215_40711__$1)){
var c__4556__auto___40712 = cljs.core.chunk_first(seq__40215_40711__$1);
var G__40713 = cljs.core.chunk_rest(seq__40215_40711__$1);
var G__40714 = c__4556__auto___40712;
var G__40715 = cljs.core.count(c__4556__auto___40712);
var G__40716 = (0);
seq__40215_40701 = G__40713;
chunk__40216_40702 = G__40714;
count__40217_40703 = G__40715;
i__40218_40704 = G__40716;
continue;
} else {
var k_40717__$1 = cljs.core.first(seq__40215_40711__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_40717__$1);


var G__40718 = cljs.core.next(seq__40215_40711__$1);
var G__40719 = null;
var G__40720 = (0);
var G__40721 = (0);
seq__40215_40701 = G__40718;
chunk__40216_40702 = G__40719;
count__40217_40703 = G__40720;
i__40218_40704 = G__40721;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq40210){
var G__40211 = cljs.core.first(seq40210);
var seq40210__$1 = cljs.core.next(seq40210);
var G__40212 = cljs.core.first(seq40210__$1);
var seq40210__$2 = cljs.core.next(seq40210__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40211,G__40212,seq40210__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__40220 = arguments.length;
switch (G__40220) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,cljs.core.boolean$(dommy.core.attr(elem,k)));
}));

(dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
} else {
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
}
}));

(dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var G__40225 = arguments.length;
switch (G__40225) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___40724 = arguments.length;
var i__4737__auto___40725 = (0);
while(true){
if((i__4737__auto___40725 < len__4736__auto___40724)){
args_arr__4757__auto__.push((arguments[i__4737__auto___40725]));

var G__40726 = (i__4737__auto___40725 + (1));
i__4737__auto___40725 = G__40726;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim(dommy.utils.as_str(classes)).split(/\s+/);
if(cljs.core.seq(classes__$1)){
var temp__5733__auto___40727 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___40727)){
var class_list_40728 = temp__5733__auto___40727;
var seq__40226_40729 = cljs.core.seq(classes__$1);
var chunk__40227_40730 = null;
var count__40228_40731 = (0);
var i__40229_40732 = (0);
while(true){
if((i__40229_40732 < count__40228_40731)){
var c_40733 = chunk__40227_40730.cljs$core$IIndexed$_nth$arity$2(null,i__40229_40732);
class_list_40728.add(c_40733);


var G__40734 = seq__40226_40729;
var G__40735 = chunk__40227_40730;
var G__40736 = count__40228_40731;
var G__40737 = (i__40229_40732 + (1));
seq__40226_40729 = G__40734;
chunk__40227_40730 = G__40735;
count__40228_40731 = G__40736;
i__40229_40732 = G__40737;
continue;
} else {
var temp__5735__auto___40738 = cljs.core.seq(seq__40226_40729);
if(temp__5735__auto___40738){
var seq__40226_40739__$1 = temp__5735__auto___40738;
if(cljs.core.chunked_seq_QMARK_(seq__40226_40739__$1)){
var c__4556__auto___40740 = cljs.core.chunk_first(seq__40226_40739__$1);
var G__40741 = cljs.core.chunk_rest(seq__40226_40739__$1);
var G__40742 = c__4556__auto___40740;
var G__40743 = cljs.core.count(c__4556__auto___40740);
var G__40744 = (0);
seq__40226_40729 = G__40741;
chunk__40227_40730 = G__40742;
count__40228_40731 = G__40743;
i__40229_40732 = G__40744;
continue;
} else {
var c_40745 = cljs.core.first(seq__40226_40739__$1);
class_list_40728.add(c_40745);


var G__40746 = cljs.core.next(seq__40226_40739__$1);
var G__40747 = null;
var G__40748 = (0);
var G__40749 = (0);
seq__40226_40729 = G__40746;
chunk__40227_40730 = G__40747;
count__40228_40731 = G__40748;
i__40229_40732 = G__40749;
continue;
}
} else {
}
}
break;
}
} else {
var seq__40230_40750 = cljs.core.seq(classes__$1);
var chunk__40231_40751 = null;
var count__40232_40752 = (0);
var i__40233_40753 = (0);
while(true){
if((i__40233_40753 < count__40232_40752)){
var c_40754 = chunk__40231_40751.cljs$core$IIndexed$_nth$arity$2(null,i__40233_40753);
var class_name_40755 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_40755,c_40754))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_40755 === ""))?c_40754:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_40755)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_40754)].join('')));
}


var G__40756 = seq__40230_40750;
var G__40757 = chunk__40231_40751;
var G__40758 = count__40232_40752;
var G__40759 = (i__40233_40753 + (1));
seq__40230_40750 = G__40756;
chunk__40231_40751 = G__40757;
count__40232_40752 = G__40758;
i__40233_40753 = G__40759;
continue;
} else {
var temp__5735__auto___40760 = cljs.core.seq(seq__40230_40750);
if(temp__5735__auto___40760){
var seq__40230_40761__$1 = temp__5735__auto___40760;
if(cljs.core.chunked_seq_QMARK_(seq__40230_40761__$1)){
var c__4556__auto___40762 = cljs.core.chunk_first(seq__40230_40761__$1);
var G__40763 = cljs.core.chunk_rest(seq__40230_40761__$1);
var G__40764 = c__4556__auto___40762;
var G__40765 = cljs.core.count(c__4556__auto___40762);
var G__40766 = (0);
seq__40230_40750 = G__40763;
chunk__40231_40751 = G__40764;
count__40232_40752 = G__40765;
i__40233_40753 = G__40766;
continue;
} else {
var c_40767 = cljs.core.first(seq__40230_40761__$1);
var class_name_40768 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_40768,c_40767))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_40768 === ""))?c_40767:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_40768)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_40767)].join('')));
}


var G__40769 = cljs.core.next(seq__40230_40761__$1);
var G__40770 = null;
var G__40771 = (0);
var G__40772 = (0);
seq__40230_40750 = G__40769;
chunk__40231_40751 = G__40770;
count__40232_40752 = G__40771;
i__40233_40753 = G__40772;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
}));

(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__40234_40773 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__40235_40774 = null;
var count__40236_40775 = (0);
var i__40237_40776 = (0);
while(true){
if((i__40237_40776 < count__40236_40775)){
var c_40777 = chunk__40235_40774.cljs$core$IIndexed$_nth$arity$2(null,i__40237_40776);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_40777);


var G__40778 = seq__40234_40773;
var G__40779 = chunk__40235_40774;
var G__40780 = count__40236_40775;
var G__40781 = (i__40237_40776 + (1));
seq__40234_40773 = G__40778;
chunk__40235_40774 = G__40779;
count__40236_40775 = G__40780;
i__40237_40776 = G__40781;
continue;
} else {
var temp__5735__auto___40782 = cljs.core.seq(seq__40234_40773);
if(temp__5735__auto___40782){
var seq__40234_40783__$1 = temp__5735__auto___40782;
if(cljs.core.chunked_seq_QMARK_(seq__40234_40783__$1)){
var c__4556__auto___40784 = cljs.core.chunk_first(seq__40234_40783__$1);
var G__40785 = cljs.core.chunk_rest(seq__40234_40783__$1);
var G__40786 = c__4556__auto___40784;
var G__40787 = cljs.core.count(c__4556__auto___40784);
var G__40788 = (0);
seq__40234_40773 = G__40785;
chunk__40235_40774 = G__40786;
count__40236_40775 = G__40787;
i__40237_40776 = G__40788;
continue;
} else {
var c_40789 = cljs.core.first(seq__40234_40783__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_40789);


var G__40790 = cljs.core.next(seq__40234_40783__$1);
var G__40791 = null;
var G__40792 = (0);
var G__40793 = (0);
seq__40234_40773 = G__40790;
chunk__40235_40774 = G__40791;
count__40236_40775 = G__40792;
i__40237_40776 = G__40793;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq40222){
var G__40223 = cljs.core.first(seq40222);
var seq40222__$1 = cljs.core.next(seq40222);
var G__40224 = cljs.core.first(seq40222__$1);
var seq40222__$2 = cljs.core.next(seq40222__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40223,G__40224,seq40222__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__40242 = arguments.length;
switch (G__40242) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___40795 = arguments.length;
var i__4737__auto___40796 = (0);
while(true){
if((i__4737__auto___40796 < len__4736__auto___40795)){
args_arr__4757__auto__.push((arguments[i__4737__auto___40796]));

var G__40797 = (i__4737__auto___40796 + (1));
i__4737__auto___40796 = G__40797;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto___40798 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___40798)){
var class_list_40799 = temp__5733__auto___40798;
class_list_40799.remove(c__$1);
} else {
var class_name_40800 = dommy.core.class$(elem);
var new_class_name_40801 = dommy.utils.remove_class_str(class_name_40800,c__$1);
if((class_name_40800 === new_class_name_40801)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_40801);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__40243 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__40244 = null;
var count__40245 = (0);
var i__40246 = (0);
while(true){
if((i__40246 < count__40245)){
var c = chunk__40244.cljs$core$IIndexed$_nth$arity$2(null,i__40246);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__40802 = seq__40243;
var G__40803 = chunk__40244;
var G__40804 = count__40245;
var G__40805 = (i__40246 + (1));
seq__40243 = G__40802;
chunk__40244 = G__40803;
count__40245 = G__40804;
i__40246 = G__40805;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40243);
if(temp__5735__auto__){
var seq__40243__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40243__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__40243__$1);
var G__40806 = cljs.core.chunk_rest(seq__40243__$1);
var G__40807 = c__4556__auto__;
var G__40808 = cljs.core.count(c__4556__auto__);
var G__40809 = (0);
seq__40243 = G__40806;
chunk__40244 = G__40807;
count__40245 = G__40808;
i__40246 = G__40809;
continue;
} else {
var c = cljs.core.first(seq__40243__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__40810 = cljs.core.next(seq__40243__$1);
var G__40811 = null;
var G__40812 = (0);
var G__40813 = (0);
seq__40243 = G__40810;
chunk__40244 = G__40811;
count__40245 = G__40812;
i__40246 = G__40813;
continue;
}
} else {
return null;
}
}
break;
}
}));

/** @this {Function} */
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq40239){
var G__40240 = cljs.core.first(seq40239);
var seq40239__$1 = cljs.core.next(seq40239);
var G__40241 = cljs.core.first(seq40239__$1);
var seq40239__$2 = cljs.core.next(seq40239__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40240,G__40241,seq40239__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__40248 = arguments.length;
switch (G__40248) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto___40815 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___40815)){
var class_list_40816 = temp__5733__auto___40815;
class_list_40816.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3(elem,c__$1,(!(dommy.core.has_class_QMARK_(elem,c__$1))));
}

return elem;
}));

(dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
} else {
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
}

return elem;
}));

(dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var G__40251 = arguments.length;
switch (G__40251) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none")], 0));
}));

(dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,dommy.core.hidden_QMARK_(elem));
}));

(dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect(elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(var_args){
var G__40255 = arguments.length;
switch (G__40255) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str(tag));
}));

(dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str(tag_ns),dommy.utils.as_str(tag));
}));

(dommy.core.create_element.cljs$lang$maxFixedArity = 2);

dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_(elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var G__40260 = arguments.length;
switch (G__40260) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___40824 = arguments.length;
var i__4737__auto___40825 = (0);
while(true){
if((i__4737__auto___40825 < len__4736__auto___40824)){
args_arr__4757__auto__.push((arguments[i__4737__auto___40825]));

var G__40827 = (i__4737__auto___40825 + (1));
i__4737__auto___40825 = G__40827;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__40261 = parent;
G__40261.appendChild(child);

return G__40261;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__40262_40829 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__40263_40830 = null;
var count__40264_40831 = (0);
var i__40265_40832 = (0);
while(true){
if((i__40265_40832 < count__40264_40831)){
var c_40833 = chunk__40263_40830.cljs$core$IIndexed$_nth$arity$2(null,i__40265_40832);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_40833);


var G__40834 = seq__40262_40829;
var G__40835 = chunk__40263_40830;
var G__40836 = count__40264_40831;
var G__40837 = (i__40265_40832 + (1));
seq__40262_40829 = G__40834;
chunk__40263_40830 = G__40835;
count__40264_40831 = G__40836;
i__40265_40832 = G__40837;
continue;
} else {
var temp__5735__auto___40838 = cljs.core.seq(seq__40262_40829);
if(temp__5735__auto___40838){
var seq__40262_40839__$1 = temp__5735__auto___40838;
if(cljs.core.chunked_seq_QMARK_(seq__40262_40839__$1)){
var c__4556__auto___40841 = cljs.core.chunk_first(seq__40262_40839__$1);
var G__40842 = cljs.core.chunk_rest(seq__40262_40839__$1);
var G__40843 = c__4556__auto___40841;
var G__40844 = cljs.core.count(c__4556__auto___40841);
var G__40845 = (0);
seq__40262_40829 = G__40842;
chunk__40263_40830 = G__40843;
count__40264_40831 = G__40844;
i__40265_40832 = G__40845;
continue;
} else {
var c_40850 = cljs.core.first(seq__40262_40839__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_40850);


var G__40851 = cljs.core.next(seq__40262_40839__$1);
var G__40852 = null;
var G__40853 = (0);
var G__40854 = (0);
seq__40262_40829 = G__40851;
chunk__40263_40830 = G__40852;
count__40264_40831 = G__40853;
i__40265_40832 = G__40854;
continue;
}
} else {
}
}
break;
}

return parent;
}));

/** @this {Function} */
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq40257){
var G__40258 = cljs.core.first(seq40257);
var seq40257__$1 = cljs.core.next(seq40257);
var G__40259 = cljs.core.first(seq40257__$1);
var seq40257__$2 = cljs.core.next(seq40257__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40258,G__40259,seq40257__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__40270 = arguments.length;
switch (G__40270) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___40858 = arguments.length;
var i__4737__auto___40859 = (0);
while(true){
if((i__4737__auto___40859 < len__4736__auto___40858)){
args_arr__4757__auto__.push((arguments[i__4737__auto___40859]));

var G__40860 = (i__4737__auto___40859 + (1));
i__4737__auto___40859 = G__40860;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__40271 = parent;
G__40271.insertBefore(child,parent.firstChild);

return G__40271;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__40272_40863 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__40273_40864 = null;
var count__40274_40865 = (0);
var i__40275_40866 = (0);
while(true){
if((i__40275_40866 < count__40274_40865)){
var c_40867 = chunk__40273_40864.cljs$core$IIndexed$_nth$arity$2(null,i__40275_40866);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_40867);


var G__40869 = seq__40272_40863;
var G__40870 = chunk__40273_40864;
var G__40871 = count__40274_40865;
var G__40872 = (i__40275_40866 + (1));
seq__40272_40863 = G__40869;
chunk__40273_40864 = G__40870;
count__40274_40865 = G__40871;
i__40275_40866 = G__40872;
continue;
} else {
var temp__5735__auto___40874 = cljs.core.seq(seq__40272_40863);
if(temp__5735__auto___40874){
var seq__40272_40875__$1 = temp__5735__auto___40874;
if(cljs.core.chunked_seq_QMARK_(seq__40272_40875__$1)){
var c__4556__auto___40877 = cljs.core.chunk_first(seq__40272_40875__$1);
var G__40879 = cljs.core.chunk_rest(seq__40272_40875__$1);
var G__40880 = c__4556__auto___40877;
var G__40881 = cljs.core.count(c__4556__auto___40877);
var G__40882 = (0);
seq__40272_40863 = G__40879;
chunk__40273_40864 = G__40880;
count__40274_40865 = G__40881;
i__40275_40866 = G__40882;
continue;
} else {
var c_40883 = cljs.core.first(seq__40272_40875__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_40883);


var G__40884 = cljs.core.next(seq__40272_40875__$1);
var G__40885 = null;
var G__40886 = (0);
var G__40887 = (0);
seq__40272_40863 = G__40884;
chunk__40273_40864 = G__40885;
count__40274_40865 = G__40886;
i__40275_40866 = G__40887;
continue;
}
} else {
}
}
break;
}

return parent;
}));

/** @this {Function} */
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq40267){
var G__40268 = cljs.core.first(seq40267);
var seq40267__$1 = cljs.core.next(seq40267);
var G__40269 = cljs.core.first(seq40267__$1);
var seq40267__$2 = cljs.core.next(seq40267__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40268,G__40269,seq40267__$2);
}));

(dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent(other);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__5733__auto___40893 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___40893)){
var next_40894 = temp__5733__auto___40893;
dommy.core.insert_before_BANG_(elem,next_40894);
} else {
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.parent(other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.clear_BANG_(p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var G__40277 = arguments.length;
switch (G__40277) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2(p,elem);
}));

(dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__40278 = p;
G__40278.removeChild(elem);

return G__40278;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__40279){
var vec__40280 = p__40279;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40280,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40280,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.createAsIfByAssoc([real_mouse_event,(function (f){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__4126__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__4115__auto__ = related_target;
if(cljs.core.truth_(and__4115__auto__)){
return dommy.core.descendant_QMARK_(related_target,listener_target);
} else {
return and__4115__auto__;
}
})())){
return null;
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
}
});
})])], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.cljs$core$IFn$_invoke$arity$3(elem,event.target,selector);
if(cljs.core.truth_((function (){var and__4115__auto__ = selected_target;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(dommy.core.attr(selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__4115__auto__;
}
})())){
(event.selectedTarget = selected_target);

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__4126__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40901 = arguments.length;
var i__4737__auto___40902 = (0);
while(true){
if((i__4737__auto___40902 < len__4736__auto___40901)){
args__4742__auto__.push((arguments[i__4737__auto___40902]));

var G__40903 = (i__4737__auto___40902 + (1));
i__4737__auto___40902 = G__40903;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return (elem__$1.dommyEventListeners = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,dommy.core.event_listeners(elem__$1),args));
}));

(dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq40283){
var G__40284 = cljs.core.first(seq40283);
var seq40283__$1 = cljs.core.next(seq40283);
var G__40285 = cljs.core.first(seq40283__$1);
var seq40283__$2 = cljs.core.next(seq40283__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40284,G__40285,seq40283__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
return cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest)(elem_sel);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 *     (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 *     (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 *     (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40904 = arguments.length;
var i__4737__auto___40905 = (0);
while(true){
if((i__4737__auto___40905 < len__4736__auto___40904)){
args__4742__auto__.push((arguments[i__4737__auto___40905]));

var G__40906 = (i__4737__auto___40905 + (1));
i__4737__auto___40905 = G__40906;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__40291_40907 = dommy.core.elem_and_selector(elem_sel);
var elem_40908 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40291_40907,(0),null);
var selector_40909 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40291_40907,(1),null);
var seq__40294_40910 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__40301_40911 = null;
var count__40302_40912 = (0);
var i__40303_40913 = (0);
while(true){
if((i__40303_40913 < count__40302_40912)){
var vec__40359_40914 = chunk__40301_40911.cljs$core$IIndexed$_nth$arity$2(null,i__40303_40913);
var orig_type_40915 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40359_40914,(0),null);
var f_40916 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40359_40914,(1),null);
var seq__40304_40917 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_40915,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_40915,cljs.core.identity])));
var chunk__40306_40918 = null;
var count__40307_40919 = (0);
var i__40308_40920 = (0);
while(true){
if((i__40308_40920 < count__40307_40919)){
var vec__40372_40921 = chunk__40306_40918.cljs$core$IIndexed$_nth$arity$2(null,i__40308_40920);
var actual_type_40922 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40372_40921,(0),null);
var factory_40923 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40372_40921,(1),null);
var canonical_f_40924 = (function (){var G__40376 = (factory_40923.cljs$core$IFn$_invoke$arity$1 ? factory_40923.cljs$core$IFn$_invoke$arity$1(f_40916) : factory_40923.call(null,f_40916));
var fexpr__40375 = (cljs.core.truth_(selector_40909)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_40908,selector_40909):cljs.core.identity);
return (fexpr__40375.cljs$core$IFn$_invoke$arity$1 ? fexpr__40375.cljs$core$IFn$_invoke$arity$1(G__40376) : fexpr__40375.call(null,G__40376));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_40908,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40909,actual_type_40922,f_40916], null),canonical_f_40924], 0));

if(cljs.core.truth_(elem_40908.addEventListener)){
elem_40908.addEventListener(cljs.core.name(actual_type_40922),canonical_f_40924);
} else {
elem_40908.attachEvent(cljs.core.name(actual_type_40922),canonical_f_40924);
}


var G__40925 = seq__40304_40917;
var G__40926 = chunk__40306_40918;
var G__40927 = count__40307_40919;
var G__40928 = (i__40308_40920 + (1));
seq__40304_40917 = G__40925;
chunk__40306_40918 = G__40926;
count__40307_40919 = G__40927;
i__40308_40920 = G__40928;
continue;
} else {
var temp__5735__auto___40929 = cljs.core.seq(seq__40304_40917);
if(temp__5735__auto___40929){
var seq__40304_40930__$1 = temp__5735__auto___40929;
if(cljs.core.chunked_seq_QMARK_(seq__40304_40930__$1)){
var c__4556__auto___40931 = cljs.core.chunk_first(seq__40304_40930__$1);
var G__40932 = cljs.core.chunk_rest(seq__40304_40930__$1);
var G__40933 = c__4556__auto___40931;
var G__40934 = cljs.core.count(c__4556__auto___40931);
var G__40935 = (0);
seq__40304_40917 = G__40932;
chunk__40306_40918 = G__40933;
count__40307_40919 = G__40934;
i__40308_40920 = G__40935;
continue;
} else {
var vec__40377_40936 = cljs.core.first(seq__40304_40930__$1);
var actual_type_40937 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40377_40936,(0),null);
var factory_40938 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40377_40936,(1),null);
var canonical_f_40939 = (function (){var G__40381 = (factory_40938.cljs$core$IFn$_invoke$arity$1 ? factory_40938.cljs$core$IFn$_invoke$arity$1(f_40916) : factory_40938.call(null,f_40916));
var fexpr__40380 = (cljs.core.truth_(selector_40909)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_40908,selector_40909):cljs.core.identity);
return (fexpr__40380.cljs$core$IFn$_invoke$arity$1 ? fexpr__40380.cljs$core$IFn$_invoke$arity$1(G__40381) : fexpr__40380.call(null,G__40381));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_40908,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40909,actual_type_40937,f_40916], null),canonical_f_40939], 0));

if(cljs.core.truth_(elem_40908.addEventListener)){
elem_40908.addEventListener(cljs.core.name(actual_type_40937),canonical_f_40939);
} else {
elem_40908.attachEvent(cljs.core.name(actual_type_40937),canonical_f_40939);
}


var G__40940 = cljs.core.next(seq__40304_40930__$1);
var G__40941 = null;
var G__40942 = (0);
var G__40943 = (0);
seq__40304_40917 = G__40940;
chunk__40306_40918 = G__40941;
count__40307_40919 = G__40942;
i__40308_40920 = G__40943;
continue;
}
} else {
}
}
break;
}

var G__40944 = seq__40294_40910;
var G__40945 = chunk__40301_40911;
var G__40946 = count__40302_40912;
var G__40947 = (i__40303_40913 + (1));
seq__40294_40910 = G__40944;
chunk__40301_40911 = G__40945;
count__40302_40912 = G__40946;
i__40303_40913 = G__40947;
continue;
} else {
var temp__5735__auto___40948 = cljs.core.seq(seq__40294_40910);
if(temp__5735__auto___40948){
var seq__40294_40949__$1 = temp__5735__auto___40948;
if(cljs.core.chunked_seq_QMARK_(seq__40294_40949__$1)){
var c__4556__auto___40950 = cljs.core.chunk_first(seq__40294_40949__$1);
var G__40951 = cljs.core.chunk_rest(seq__40294_40949__$1);
var G__40952 = c__4556__auto___40950;
var G__40953 = cljs.core.count(c__4556__auto___40950);
var G__40954 = (0);
seq__40294_40910 = G__40951;
chunk__40301_40911 = G__40952;
count__40302_40912 = G__40953;
i__40303_40913 = G__40954;
continue;
} else {
var vec__40382_40955 = cljs.core.first(seq__40294_40949__$1);
var orig_type_40956 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40382_40955,(0),null);
var f_40957 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40382_40955,(1),null);
var seq__40295_40958 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_40956,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_40956,cljs.core.identity])));
var chunk__40297_40959 = null;
var count__40298_40960 = (0);
var i__40299_40961 = (0);
while(true){
if((i__40299_40961 < count__40298_40960)){
var vec__40399_40962 = chunk__40297_40959.cljs$core$IIndexed$_nth$arity$2(null,i__40299_40961);
var actual_type_40963 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40399_40962,(0),null);
var factory_40964 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40399_40962,(1),null);
var canonical_f_40965 = (function (){var G__40403 = (factory_40964.cljs$core$IFn$_invoke$arity$1 ? factory_40964.cljs$core$IFn$_invoke$arity$1(f_40957) : factory_40964.call(null,f_40957));
var fexpr__40402 = (cljs.core.truth_(selector_40909)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_40908,selector_40909):cljs.core.identity);
return (fexpr__40402.cljs$core$IFn$_invoke$arity$1 ? fexpr__40402.cljs$core$IFn$_invoke$arity$1(G__40403) : fexpr__40402.call(null,G__40403));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_40908,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40909,actual_type_40963,f_40957], null),canonical_f_40965], 0));

if(cljs.core.truth_(elem_40908.addEventListener)){
elem_40908.addEventListener(cljs.core.name(actual_type_40963),canonical_f_40965);
} else {
elem_40908.attachEvent(cljs.core.name(actual_type_40963),canonical_f_40965);
}


var G__40966 = seq__40295_40958;
var G__40967 = chunk__40297_40959;
var G__40968 = count__40298_40960;
var G__40969 = (i__40299_40961 + (1));
seq__40295_40958 = G__40966;
chunk__40297_40959 = G__40967;
count__40298_40960 = G__40968;
i__40299_40961 = G__40969;
continue;
} else {
var temp__5735__auto___40970__$1 = cljs.core.seq(seq__40295_40958);
if(temp__5735__auto___40970__$1){
var seq__40295_40971__$1 = temp__5735__auto___40970__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40295_40971__$1)){
var c__4556__auto___40972 = cljs.core.chunk_first(seq__40295_40971__$1);
var G__40973 = cljs.core.chunk_rest(seq__40295_40971__$1);
var G__40974 = c__4556__auto___40972;
var G__40975 = cljs.core.count(c__4556__auto___40972);
var G__40976 = (0);
seq__40295_40958 = G__40973;
chunk__40297_40959 = G__40974;
count__40298_40960 = G__40975;
i__40299_40961 = G__40976;
continue;
} else {
var vec__40407_40977 = cljs.core.first(seq__40295_40971__$1);
var actual_type_40978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40407_40977,(0),null);
var factory_40979 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40407_40977,(1),null);
var canonical_f_40980 = (function (){var G__40411 = (factory_40979.cljs$core$IFn$_invoke$arity$1 ? factory_40979.cljs$core$IFn$_invoke$arity$1(f_40957) : factory_40979.call(null,f_40957));
var fexpr__40410 = (cljs.core.truth_(selector_40909)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_40908,selector_40909):cljs.core.identity);
return (fexpr__40410.cljs$core$IFn$_invoke$arity$1 ? fexpr__40410.cljs$core$IFn$_invoke$arity$1(G__40411) : fexpr__40410.call(null,G__40411));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_40908,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40909,actual_type_40978,f_40957], null),canonical_f_40980], 0));

if(cljs.core.truth_(elem_40908.addEventListener)){
elem_40908.addEventListener(cljs.core.name(actual_type_40978),canonical_f_40980);
} else {
elem_40908.attachEvent(cljs.core.name(actual_type_40978),canonical_f_40980);
}


var G__40981 = cljs.core.next(seq__40295_40971__$1);
var G__40982 = null;
var G__40983 = (0);
var G__40984 = (0);
seq__40295_40958 = G__40981;
chunk__40297_40959 = G__40982;
count__40298_40960 = G__40983;
i__40299_40961 = G__40984;
continue;
}
} else {
}
}
break;
}

var G__40985 = cljs.core.next(seq__40294_40949__$1);
var G__40986 = null;
var G__40987 = (0);
var G__40988 = (0);
seq__40294_40910 = G__40985;
chunk__40301_40911 = G__40986;
count__40302_40912 = G__40987;
i__40303_40913 = G__40988;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq40286){
var G__40287 = cljs.core.first(seq40286);
var seq40286__$1 = cljs.core.next(seq40286);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40287,seq40286__$1);
}));

/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 *   The following forms are allowed, and will remove all handlers
 *   that match the parameters passed in:
 * 
 *    (unlisten! [elem :.selector] :click event-listener)
 * 
 *    (unlisten! [elem :.selector]
 *      :click event-listener
 *      :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40989 = arguments.length;
var i__4737__auto___40990 = (0);
while(true){
if((i__4737__auto___40990 < len__4736__auto___40989)){
args__4742__auto__.push((arguments[i__4737__auto___40990]));

var G__40991 = (i__4737__auto___40990 + (1));
i__4737__auto___40990 = G__40991;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__40418_40992 = dommy.core.elem_and_selector(elem_sel);
var elem_40993 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40418_40992,(0),null);
var selector_40994 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40418_40992,(1),null);
var seq__40421_40995 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__40428_40996 = null;
var count__40429_40997 = (0);
var i__40430_40998 = (0);
while(true){
if((i__40430_40998 < count__40429_40997)){
var vec__40472_40999 = chunk__40428_40996.cljs$core$IIndexed$_nth$arity$2(null,i__40430_40998);
var orig_type_41000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40472_40999,(0),null);
var f_41001 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40472_40999,(1),null);
var seq__40431_41002 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_41000,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_41000,cljs.core.identity])));
var chunk__40433_41003 = null;
var count__40434_41004 = (0);
var i__40435_41005 = (0);
while(true){
if((i__40435_41005 < count__40434_41004)){
var vec__40483_41006 = chunk__40433_41003.cljs$core$IIndexed$_nth$arity$2(null,i__40435_41005);
var actual_type_41007 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40483_41006,(0),null);
var __41008 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40483_41006,(1),null);
var keys_41009 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40994,actual_type_41007,f_41001], null);
var canonical_f_41010 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_40993),keys_41009);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_40993,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_41009], 0));

if(cljs.core.truth_(elem_40993.removeEventListener)){
elem_40993.removeEventListener(cljs.core.name(actual_type_41007),canonical_f_41010);
} else {
elem_40993.detachEvent(cljs.core.name(actual_type_41007),canonical_f_41010);
}


var G__41011 = seq__40431_41002;
var G__41012 = chunk__40433_41003;
var G__41013 = count__40434_41004;
var G__41014 = (i__40435_41005 + (1));
seq__40431_41002 = G__41011;
chunk__40433_41003 = G__41012;
count__40434_41004 = G__41013;
i__40435_41005 = G__41014;
continue;
} else {
var temp__5735__auto___41015 = cljs.core.seq(seq__40431_41002);
if(temp__5735__auto___41015){
var seq__40431_41016__$1 = temp__5735__auto___41015;
if(cljs.core.chunked_seq_QMARK_(seq__40431_41016__$1)){
var c__4556__auto___41017 = cljs.core.chunk_first(seq__40431_41016__$1);
var G__41018 = cljs.core.chunk_rest(seq__40431_41016__$1);
var G__41019 = c__4556__auto___41017;
var G__41020 = cljs.core.count(c__4556__auto___41017);
var G__41021 = (0);
seq__40431_41002 = G__41018;
chunk__40433_41003 = G__41019;
count__40434_41004 = G__41020;
i__40435_41005 = G__41021;
continue;
} else {
var vec__40489_41024 = cljs.core.first(seq__40431_41016__$1);
var actual_type_41025 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40489_41024,(0),null);
var __41026 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40489_41024,(1),null);
var keys_41027 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40994,actual_type_41025,f_41001], null);
var canonical_f_41028 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_40993),keys_41027);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_40993,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_41027], 0));

if(cljs.core.truth_(elem_40993.removeEventListener)){
elem_40993.removeEventListener(cljs.core.name(actual_type_41025),canonical_f_41028);
} else {
elem_40993.detachEvent(cljs.core.name(actual_type_41025),canonical_f_41028);
}


var G__41031 = cljs.core.next(seq__40431_41016__$1);
var G__41032 = null;
var G__41033 = (0);
var G__41034 = (0);
seq__40431_41002 = G__41031;
chunk__40433_41003 = G__41032;
count__40434_41004 = G__41033;
i__40435_41005 = G__41034;
continue;
}
} else {
}
}
break;
}

var G__41036 = seq__40421_40995;
var G__41037 = chunk__40428_40996;
var G__41038 = count__40429_40997;
var G__41039 = (i__40430_40998 + (1));
seq__40421_40995 = G__41036;
chunk__40428_40996 = G__41037;
count__40429_40997 = G__41038;
i__40430_40998 = G__41039;
continue;
} else {
var temp__5735__auto___41040 = cljs.core.seq(seq__40421_40995);
if(temp__5735__auto___41040){
var seq__40421_41042__$1 = temp__5735__auto___41040;
if(cljs.core.chunked_seq_QMARK_(seq__40421_41042__$1)){
var c__4556__auto___41043 = cljs.core.chunk_first(seq__40421_41042__$1);
var G__41044 = cljs.core.chunk_rest(seq__40421_41042__$1);
var G__41045 = c__4556__auto___41043;
var G__41046 = cljs.core.count(c__4556__auto___41043);
var G__41047 = (0);
seq__40421_40995 = G__41044;
chunk__40428_40996 = G__41045;
count__40429_40997 = G__41046;
i__40430_40998 = G__41047;
continue;
} else {
var vec__40504_41048 = cljs.core.first(seq__40421_41042__$1);
var orig_type_41049 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40504_41048,(0),null);
var f_41050 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40504_41048,(1),null);
var seq__40422_41051 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_41049,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_41049,cljs.core.identity])));
var chunk__40424_41052 = null;
var count__40425_41053 = (0);
var i__40426_41054 = (0);
while(true){
if((i__40426_41054 < count__40425_41053)){
var vec__40524_41055 = chunk__40424_41052.cljs$core$IIndexed$_nth$arity$2(null,i__40426_41054);
var actual_type_41056 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40524_41055,(0),null);
var __41057 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40524_41055,(1),null);
var keys_41058 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40994,actual_type_41056,f_41050], null);
var canonical_f_41059 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_40993),keys_41058);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_40993,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_41058], 0));

if(cljs.core.truth_(elem_40993.removeEventListener)){
elem_40993.removeEventListener(cljs.core.name(actual_type_41056),canonical_f_41059);
} else {
elem_40993.detachEvent(cljs.core.name(actual_type_41056),canonical_f_41059);
}


var G__41061 = seq__40422_41051;
var G__41062 = chunk__40424_41052;
var G__41063 = count__40425_41053;
var G__41064 = (i__40426_41054 + (1));
seq__40422_41051 = G__41061;
chunk__40424_41052 = G__41062;
count__40425_41053 = G__41063;
i__40426_41054 = G__41064;
continue;
} else {
var temp__5735__auto___41067__$1 = cljs.core.seq(seq__40422_41051);
if(temp__5735__auto___41067__$1){
var seq__40422_41069__$1 = temp__5735__auto___41067__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40422_41069__$1)){
var c__4556__auto___41070 = cljs.core.chunk_first(seq__40422_41069__$1);
var G__41071 = cljs.core.chunk_rest(seq__40422_41069__$1);
var G__41072 = c__4556__auto___41070;
var G__41073 = cljs.core.count(c__4556__auto___41070);
var G__41074 = (0);
seq__40422_41051 = G__41071;
chunk__40424_41052 = G__41072;
count__40425_41053 = G__41073;
i__40426_41054 = G__41074;
continue;
} else {
var vec__40538_41075 = cljs.core.first(seq__40422_41069__$1);
var actual_type_41076 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40538_41075,(0),null);
var __41077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40538_41075,(1),null);
var keys_41078 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40994,actual_type_41076,f_41050], null);
var canonical_f_41079 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_40993),keys_41078);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_40993,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_41078], 0));

if(cljs.core.truth_(elem_40993.removeEventListener)){
elem_40993.removeEventListener(cljs.core.name(actual_type_41076),canonical_f_41079);
} else {
elem_40993.detachEvent(cljs.core.name(actual_type_41076),canonical_f_41079);
}


var G__41083 = cljs.core.next(seq__40422_41069__$1);
var G__41084 = null;
var G__41085 = (0);
var G__41086 = (0);
seq__40422_41051 = G__41083;
chunk__40424_41052 = G__41084;
count__40425_41053 = G__41085;
i__40426_41054 = G__41086;
continue;
}
} else {
}
}
break;
}

var G__41087 = cljs.core.next(seq__40421_41042__$1);
var G__41088 = null;
var G__41089 = (0);
var G__41090 = (0);
seq__40421_40995 = G__41087;
chunk__40428_40996 = G__41088;
count__40429_40997 = G__41089;
i__40430_40998 = G__41090;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq40416){
var G__40417 = cljs.core.first(seq40416);
var seq40416__$1 = cljs.core.next(seq40416);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40417,seq40416__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___41091 = arguments.length;
var i__4737__auto___41092 = (0);
while(true){
if((i__4737__auto___41092 < len__4736__auto___41091)){
args__4742__auto__.push((arguments[i__4737__auto___41092]));

var G__41095 = (i__4737__auto___41092 + (1));
i__4737__auto___41092 = G__41095;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__40554_41101 = dommy.core.elem_and_selector(elem_sel);
var elem_41102 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40554_41101,(0),null);
var selector_41103 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40554_41101,(1),null);
var seq__40557_41105 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__40558_41106 = null;
var count__40559_41107 = (0);
var i__40560_41108 = (0);
while(true){
if((i__40560_41108 < count__40559_41107)){
var vec__40570_41112 = chunk__40558_41106.cljs$core$IIndexed$_nth$arity$2(null,i__40560_41108);
var type_41113 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40570_41112,(0),null);
var f_41114 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40570_41112,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_41113,((function (seq__40557_41105,chunk__40558_41106,count__40559_41107,i__40560_41108,vec__40570_41112,type_41113,f_41114,vec__40554_41101,elem_41102,selector_41103){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_41113,dommy$core$this_fn], 0));

return (f_41114.cljs$core$IFn$_invoke$arity$1 ? f_41114.cljs$core$IFn$_invoke$arity$1(e) : f_41114.call(null,e));
});})(seq__40557_41105,chunk__40558_41106,count__40559_41107,i__40560_41108,vec__40570_41112,type_41113,f_41114,vec__40554_41101,elem_41102,selector_41103))
], 0));


var G__41115 = seq__40557_41105;
var G__41116 = chunk__40558_41106;
var G__41117 = count__40559_41107;
var G__41118 = (i__40560_41108 + (1));
seq__40557_41105 = G__41115;
chunk__40558_41106 = G__41116;
count__40559_41107 = G__41117;
i__40560_41108 = G__41118;
continue;
} else {
var temp__5735__auto___41121 = cljs.core.seq(seq__40557_41105);
if(temp__5735__auto___41121){
var seq__40557_41125__$1 = temp__5735__auto___41121;
if(cljs.core.chunked_seq_QMARK_(seq__40557_41125__$1)){
var c__4556__auto___41126 = cljs.core.chunk_first(seq__40557_41125__$1);
var G__41128 = cljs.core.chunk_rest(seq__40557_41125__$1);
var G__41129 = c__4556__auto___41126;
var G__41130 = cljs.core.count(c__4556__auto___41126);
var G__41131 = (0);
seq__40557_41105 = G__41128;
chunk__40558_41106 = G__41129;
count__40559_41107 = G__41130;
i__40560_41108 = G__41131;
continue;
} else {
var vec__40574_41132 = cljs.core.first(seq__40557_41125__$1);
var type_41133 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40574_41132,(0),null);
var f_41134 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40574_41132,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_41133,((function (seq__40557_41105,chunk__40558_41106,count__40559_41107,i__40560_41108,vec__40574_41132,type_41133,f_41134,seq__40557_41125__$1,temp__5735__auto___41121,vec__40554_41101,elem_41102,selector_41103){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_41133,dommy$core$this_fn], 0));

return (f_41134.cljs$core$IFn$_invoke$arity$1 ? f_41134.cljs$core$IFn$_invoke$arity$1(e) : f_41134.call(null,e));
});})(seq__40557_41105,chunk__40558_41106,count__40559_41107,i__40560_41108,vec__40574_41132,type_41133,f_41134,seq__40557_41125__$1,temp__5735__auto___41121,vec__40554_41101,elem_41102,selector_41103))
], 0));


var G__41138 = cljs.core.next(seq__40557_41125__$1);
var G__41139 = null;
var G__41140 = (0);
var G__41141 = (0);
seq__40557_41105 = G__41138;
chunk__40558_41106 = G__41139;
count__40559_41107 = G__41140;
i__40560_41108 = G__41141;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq40552){
var G__40553 = cljs.core.first(seq40552);
var seq40552__$1 = cljs.core.next(seq40552);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40553,seq40552__$1);
}));


//# sourceMappingURL=dommy.core.js.map
