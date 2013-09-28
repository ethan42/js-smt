// Expression Operators
function Add() {
    this.name = "+";   
}
function Sub() {
    this.name = "-";
}
function Mul() {
    this.name = "*";
}
function Less() {
    this.name = "<";
}
function Equal() {
    this.name = "=";
}
function LessEqual() {
    this.name = "<=";
}
function And() {
    this.name = "and";
}

// Expressions
function Var(name) {
    this.name = name;
    this.toString = function () {
        return this.name;
    }
}
function BinOp(op, e1, e2) {
    this.op = op;
    this.e1 = e1;
    this.e2 = e2;
    this.toString = function () {
        return "(" + this.op.name + " " + this.e1.toString() + " " + this.e2.toString() + ")";
    }
}
function UnOp(op, e) {
    this.op = op;
    this.e = e;
}

// Statements
function CheckSat() {
    this.name = "SAT"
    this.toString = function () {
        return "(check-sat)";
    }
}
function GetModel() {
    this.name = "MODEL"
    this.toString = function () {
        return "(get-model)";
    }
}
function Assert(e) {
    this.e = e;
    this.toString = function () {
        return "(assert " + this.e.toString() + ")";
    }
}
