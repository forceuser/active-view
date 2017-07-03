import test from "tape";
import sinon from "sinon";
import sqnc from "sqnc";
import {Action} from "../src/const";
import diff from "../src/diff";
import example1 from "./examples/diff1";

function createTestData () {
	return {
		oldNode: ["div", {}, [
			...sqnc(1, 10).map(key => ["span", {key}, `item${key}`])
		]],
		newNode: ["div", {}, [
			...sqnc(10, 1).map(key => ["span", {key}, `item${key}`])
		]]
	};
}

test("CREATE", t => {
	const result = diff(["div"], null).diff;
	t.ok(result.length === 1 && result[0].action === Action.CREATE && result[0].n.idx === 0 && !result[0].o);
	t.end();
});

test("REMOVE", t => {
	const result = diff(null, ["div"]).diff;
	t.end();
});

test("UPDATE", t => {
	const result = diff(["div"], ["div"]).diff;
	t.end();
});

test("multiple operations", t => {
	const oldNode = ["div", {}, [
		...sqnc(1, 10).map(key => ["span", {key}, `item${key}`])
	]];

	const newNode = ["div", {}, [
		...sqnc(6, 2).map(key => ["span", {key}, `item${key}`]),
		["span", {key: 12}, `item12`]
	]];

	t.equals(JSON.stringify(diff(newNode, oldNode)), example1);
	t.end();
});
