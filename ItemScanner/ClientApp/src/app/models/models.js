"use strict";
//export class Users {
//  Users: User[] = [];
//}
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User() {
        this.UserName = '';
        this.UserScores = new Array();
    }
    return User;
}());
exports.User = User;
var UserScore = /** @class */ (function () {
    function UserScore() {
        this.TimeCompleted = 0;
    }
    return UserScore;
}());
exports.UserScore = UserScore;
var Decision = /** @class */ (function () {
    function Decision() {
        this.name = '';
    }
    return Decision;
}());
exports.Decision = Decision;
//# sourceMappingURL=models.js.map