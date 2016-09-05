//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v5.4.6091.41181 (http://NSwag.org)
// </auto-generated>
//----------------------
"use strict";
var PersonsClient = (function () {
    function PersonsClient(baseUrl) {
        this.baseUrl = undefined;
        this.beforeSend = undefined;
        this.baseUrl = baseUrl !== undefined ? baseUrl : "http://localhost:13452";
    }
    PersonsClient.prototype.getAll = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getAllWithCallbacks(function (result) { return resolve(result); }, function (exception, reason) { return reject(exception); });
        });
    };
    PersonsClient.prototype.getAllWithCallbacks = function (onSuccess, onFail) {
        var _this = this;
        var url = this.baseUrl + "/api/Persons";
        var content = "";
        jQuery.ajax({
            url: url,
            beforeSend: this.beforeSend,
            type: "get",
            data: content,
            dataType: "text",
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        }).done(function (data, textStatus, xhr) {
            _this.processGetAllWithCallbacks(url, xhr, onSuccess, onFail);
        }).fail(function (xhr) {
            _this.processGetAllWithCallbacks(url, xhr, onSuccess, onFail);
        });
    };
    PersonsClient.prototype.processGetAllWithCallbacks = function (url, xhr, onSuccess, onFail) {
        try {
            var result = this.processGetAll(xhr);
            if (onSuccess !== undefined)
                onSuccess(result);
        }
        catch (e) {
            if (onFail !== undefined)
                onFail(e, "http_service_exception");
        }
    };
    PersonsClient.prototype.processGetAll = function (xhr) {
        var data = xhr.responseText;
        var status = xhr.status.toString();
        if (status === "200") {
            var result200 = null;
            if (data !== undefined && data !== null && data !== "") {
                var resultData200 = data === "" ? null : jQuery.parseJSON(data);
                if (resultData200 && resultData200.constructor === Array) {
                    result200 = [];
                    for (var _i = 0, resultData200_1 = resultData200; _i < resultData200_1.length; _i++) {
                        var item = resultData200_1[_i];
                        result200.push(Person.fromJS(item));
                    }
                }
            }
            return result200;
        }
        else {
            throw new Error("error_no_callback_for_the_received_http_status");
        }
    };
    PersonsClient.prototype.get = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getWithCallbacks(id, function (result) { return resolve(result); }, function (exception, reason) { return reject(exception); });
        });
    };
    PersonsClient.prototype.getWithCallbacks = function (id, onSuccess, onFail) {
        var _this = this;
        var url = this.baseUrl + "/api/Persons/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url = url.replace("{id}", encodeURIComponent("" + id));
        var content = "";
        jQuery.ajax({
            url: url,
            beforeSend: this.beforeSend,
            type: "get",
            data: content,
            dataType: "text",
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        }).done(function (data, textStatus, xhr) {
            _this.processGetWithCallbacks(url, xhr, onSuccess, onFail);
        }).fail(function (xhr) {
            _this.processGetWithCallbacks(url, xhr, onSuccess, onFail);
        });
    };
    PersonsClient.prototype.processGetWithCallbacks = function (url, xhr, onSuccess, onFail) {
        try {
            var result = this.processGet(xhr);
            if (onSuccess !== undefined)
                onSuccess(result);
        }
        catch (e) {
            if (onFail !== undefined)
                onFail(e, "http_service_exception");
        }
    };
    PersonsClient.prototype.processGet = function (xhr) {
        var data = xhr.responseText;
        var status = xhr.status.toString();
        if (status === "200") {
            var result200 = null;
            if (data !== undefined && data !== null && data !== "") {
                var resultData200 = data === "" ? null : jQuery.parseJSON(data);
                result200 = resultData200 ? Person.fromJS(resultData200) : new Person();
            }
            return result200;
        }
        else {
            throw new Error("error_no_callback_for_the_received_http_status");
        }
    };
    PersonsClient.prototype.getName = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getNameWithCallbacks(id, function (result) { return resolve(result); }, function (exception, reason) { return reject(exception); });
        });
    };
    PersonsClient.prototype.getNameWithCallbacks = function (id, onSuccess, onFail) {
        var _this = this;
        var url = this.baseUrl + "/api/Persons/{id}/Name";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url = url.replace("{id}", encodeURIComponent("" + id));
        var content = "";
        jQuery.ajax({
            url: url,
            beforeSend: this.beforeSend,
            type: "get",
            data: content,
            dataType: "text",
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        }).done(function (data, textStatus, xhr) {
            _this.processGetNameWithCallbacks(url, xhr, onSuccess, onFail);
        }).fail(function (xhr) {
            _this.processGetNameWithCallbacks(url, xhr, onSuccess, onFail);
        });
    };
    PersonsClient.prototype.processGetNameWithCallbacks = function (url, xhr, onSuccess, onFail) {
        try {
            var result = this.processGetName(xhr);
            if (onSuccess !== undefined)
                onSuccess(result);
        }
        catch (e) {
            if (onFail !== undefined)
                onFail(e, "http_service_exception");
        }
    };
    PersonsClient.prototype.processGetName = function (xhr) {
        var data = xhr.responseText;
        var status = xhr.status.toString();
        if (status === "200") {
            var result200 = null;
            if (data !== undefined && data !== null && data !== "") {
                var resultData200 = data === "" ? null : jQuery.parseJSON(data);
                result200 = resultData200 !== undefined ? resultData200 : null;
            }
            return result200;
        }
        else {
            throw new Error("error_no_callback_for_the_received_http_status");
        }
    };
    return PersonsClient;
}());
exports.PersonsClient = PersonsClient;
var Person = (function () {
    function Person(data) {
        this.children = [];
        if (data !== undefined) {
            this.firstName = data["FirstName"] !== undefined ? data["FirstName"] : null;
            this.lastName = data["LastName"] !== undefined ? data["LastName"] : null;
            this.dateOfBirth = data["DateOfBirth"] ? new Date(data["DateOfBirth"].toString()) : null;
            if (data["Children"] && data["Children"].constructor === Array) {
                this.children = [];
                for (var _i = 0, _a = data["Children"]; _i < _a.length; _i++) {
                    var item = _a[_i];
                    this.children.push(Person.fromJS(item));
                }
            }
        }
    }
    Person.fromJS = function (data) {
        return new Person(data);
    };
    Person.prototype.toJS = function (data) {
        data = data === undefined ? {} : data;
        data["FirstName"] = this.firstName !== undefined ? this.firstName : null;
        data["LastName"] = this.lastName !== undefined ? this.lastName : null;
        data["DateOfBirth"] = this.dateOfBirth ? this.dateOfBirth.toISOString() : null;
        if (this.children && this.children.constructor === Array) {
            data["Children"] = [];
            for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
                var item = _a[_i];
                data["Children"].push(item.toJS());
            }
        }
        return data;
    };
    Person.prototype.toJSON = function () {
        return JSON.stringify(this.toJS());
    };
    Person.prototype.clone = function () {
        var json = this.toJSON();
        return new Person(JSON.parse(json));
    };
    return Person;
}());
exports.Person = Person;
//# sourceMappingURL=serviceClientsJQueryPromises.js.map