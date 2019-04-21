
export default (node, $$) => [
	node("div", 1, () => ({prop:{enabled:() => $$("user.enabled") || $$("forceEnabled")}}),
	(node, $$) => [
		...node.dir("for", 1, () => ({sort: $$("sort"), item: "item"}),
		(node, $$) => [
			node("div", 1, () => ({value: $$("item.value")}))
		]),
		node("div", 2, () => ({prop:{enabled:() => $$.enabled || $$.forceEnabled}})),
	]),
];


function nodeFactory () {
	return function {

	}
}

function template (data) {

}

import {controller, view} from "va";

export default controller(state => {
	state.items = [1, 2, 3];

	return view`
	{{#for a of 0..100}}
	{{#for idx of a..b}}
	// cacheable functions with invalidation capabilities
	{{#route "route/:param1"}}
		{{@view "./ctrl1.js" {param1}}}
	{{/route}}
	{{#route "route/:param1" as params}}
		{{@view "./ctrl1.js" as }}
	{{/route}}
	{{#if params = router.match("route/:param1")}}
		{{@view "./ctrl1.js" {params}}}
	{{/if}}
	{{#for item of [...items, ...items2].sort(sort).map(transformItem)}}
		{{#if item.value > 0}}
			<div name="sdasda" prop.value={{item.value}}>{{item.text}}</div>
		{{/if}}
		{{#switch item.type}}
			{{#case "main"}}<span class="badge"></span>{{/case}}
			{{#default}}{{/default}}
		{{/switch}}
	{{/for}}`;
});


