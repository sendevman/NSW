//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v5.4.6093.2339 (http://NSwag.org)
// </auto-generated>
//----------------------
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports"], function (require, exports) {
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
        PersonsClient.prototype.add = function (person) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.addWithCallbacks(person, function (result) { return resolve(result); }, function (exception, reason) { return reject(exception); });
            });
        };
        PersonsClient.prototype.addWithCallbacks = function (person, onSuccess, onFail) {
            var _this = this;
            var url = this.baseUrl + "/api/Persons";
            var content = JSON.stringify(person ? person.toJS() : null);
            jQuery.ajax({
                url: url,
                beforeSend: this.beforeSend,
                type: "post",
                data: content,
                dataType: "text",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                }
            }).done(function (data, textStatus, xhr) {
                _this.processAddWithCallbacks(url, xhr, onSuccess, onFail);
            }).fail(function (xhr) {
                _this.processAddWithCallbacks(url, xhr, onSuccess, onFail);
            });
        };
        PersonsClient.prototype.processAddWithCallbacks = function (url, xhr, onSuccess, onFail) {
            try {
                var result = this.processAdd(xhr);
                if (onSuccess !== undefined)
                    onSuccess(result);
            }
            catch (e) {
                if (onFail !== undefined)
                    onFail(e, "http_service_exception");
            }
        };
        PersonsClient.prototype.processAdd = function (xhr) {
            var data = xhr.responseText;
            var status = xhr.status.toString();
            if (status === "204") {
                var result204 = undefined;
                return result204;
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
            else if (status === "500") {
                var result500 = null;
                if (data !== undefined && data !== null && data !== "") {
                    var resultData500 = data === "" ? null : jQuery.parseJSON(data);
                    result500 = resultData500 ? PersonNotFoundException.fromJS(resultData500) : new PersonNotFoundException();
                }
                throw result500;
            }
            else {
                throw new Error("error_no_callback_for_the_received_http_status");
            }
        };
        PersonsClient.prototype.delete = function (id) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.deleteWithCallbacks(id, function (result) { return resolve(result); }, function (exception, reason) { return reject(exception); });
            });
        };
        PersonsClient.prototype.deleteWithCallbacks = function (id, onSuccess, onFail) {
            var _this = this;
            var url = this.baseUrl + "/api/Persons/{id}";
            if (id === undefined || id === null)
                throw new Error("The parameter 'id' must be defined.");
            url = url.replace("{id}", encodeURIComponent("" + id));
            var content = "";
            jQuery.ajax({
                url: url,
                beforeSend: this.beforeSend,
                type: "delete",
                data: content,
                dataType: "text",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                }
            }).done(function (data, textStatus, xhr) {
                _this.processDeleteWithCallbacks(url, xhr, onSuccess, onFail);
            }).fail(function (xhr) {
                _this.processDeleteWithCallbacks(url, xhr, onSuccess, onFail);
            });
        };
        PersonsClient.prototype.processDeleteWithCallbacks = function (url, xhr, onSuccess, onFail) {
            try {
                var result = this.processDelete(xhr);
                if (onSuccess !== undefined)
                    onSuccess(result);
            }
            catch (e) {
                if (onFail !== undefined)
                    onFail(e, "http_service_exception");
            }
        };
        PersonsClient.prototype.processDelete = function (xhr) {
            var data = xhr.responseText;
            var status = xhr.status.toString();
            if (status === "204") {
                var result204 = undefined;
                return result204;
            }
            else {
                throw new Error("error_no_callback_for_the_received_http_status");
            }
        };
        /**
         * Gets the name of a person.
         * @id The person ID.
         * @return The person's name.
         */
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
            else if (status === "500") {
                var result500 = null;
                if (data !== undefined && data !== null && data !== "") {
                    var resultData500 = data === "" ? null : jQuery.parseJSON(data);
                    result500 = resultData500 ? PersonNotFoundException.fromJS(resultData500) : new PersonNotFoundException();
                }
                throw result500;
            }
            else {
                throw new Error("error_no_callback_for_the_received_http_status");
            }
        };
        return PersonsClient;
    }());
    exports.PersonsClient = PersonsClient;
    var GeoClient = (function () {
        function GeoClient(baseUrl) {
            this.baseUrl = undefined;
            this.beforeSend = undefined;
            this.baseUrl = baseUrl !== undefined ? baseUrl : "http://localhost:13452";
        }
        GeoClient.prototype.fromBodyTest = function (location) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.fromBodyTestWithCallbacks(location, function (result) { return resolve(result); }, function (exception, reason) { return reject(exception); });
            });
        };
        GeoClient.prototype.fromBodyTestWithCallbacks = function (location, onSuccess, onFail) {
            var _this = this;
            var url = this.baseUrl + "/api/Geo/FromBodyTest";
            var content = JSON.stringify(location ? location.toJS() : null);
            jQuery.ajax({
                url: url,
                beforeSend: this.beforeSend,
                type: "post",
                data: content,
                dataType: "text",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                }
            }).done(function (data, textStatus, xhr) {
                _this.processFromBodyTestWithCallbacks(url, xhr, onSuccess, onFail);
            }).fail(function (xhr) {
                _this.processFromBodyTestWithCallbacks(url, xhr, onSuccess, onFail);
            });
        };
        GeoClient.prototype.processFromBodyTestWithCallbacks = function (url, xhr, onSuccess, onFail) {
            try {
                var result = this.processFromBodyTest(xhr);
                if (onSuccess !== undefined)
                    onSuccess(result);
            }
            catch (e) {
                if (onFail !== undefined)
                    onFail(e, "http_service_exception");
            }
        };
        GeoClient.prototype.processFromBodyTest = function (xhr) {
            var data = xhr.responseText;
            var status = xhr.status.toString();
            if (status === "204") {
                var result204 = undefined;
                return result204;
            }
            else {
                throw new Error("error_no_callback_for_the_received_http_status");
            }
        };
        GeoClient.prototype.fromUriTest = function (latitude, longitude) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.fromUriTestWithCallbacks(latitude, longitude, function (result) { return resolve(result); }, function (exception, reason) { return reject(exception); });
            });
        };
        GeoClient.prototype.fromUriTestWithCallbacks = function (latitude, longitude, onSuccess, onFail) {
            var _this = this;
            var url = this.baseUrl + "/api/Geo/FromUriTest?";
            if (latitude === null)
                throw new Error("The parameter 'latitude' cannot be null.");
            else if (latitude !== undefined)
                url += "Latitude=" + encodeURIComponent("" + latitude) + "&";
            if (longitude === null)
                throw new Error("The parameter 'longitude' cannot be null.");
            else if (longitude !== undefined)
                url += "Longitude=" + encodeURIComponent("" + longitude) + "&";
            var content = "";
            jQuery.ajax({
                url: url,
                beforeSend: this.beforeSend,
                type: "post",
                data: content,
                dataType: "text",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                }
            }).done(function (data, textStatus, xhr) {
                _this.processFromUriTestWithCallbacks(url, xhr, onSuccess, onFail);
            }).fail(function (xhr) {
                _this.processFromUriTestWithCallbacks(url, xhr, onSuccess, onFail);
            });
        };
        GeoClient.prototype.processFromUriTestWithCallbacks = function (url, xhr, onSuccess, onFail) {
            try {
                var result = this.processFromUriTest(xhr);
                if (onSuccess !== undefined)
                    onSuccess(result);
            }
            catch (e) {
                if (onFail !== undefined)
                    onFail(e, "http_service_exception");
            }
        };
        GeoClient.prototype.processFromUriTest = function (xhr) {
            var data = xhr.responseText;
            var status = xhr.status.toString();
            if (status === "204") {
                var result204 = undefined;
                return result204;
            }
            else {
                throw new Error("error_no_callback_for_the_received_http_status");
            }
        };
        GeoClient.prototype.addPolygon = function (points) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.addPolygonWithCallbacks(points, function (result) { return resolve(result); }, function (exception, reason) { return reject(exception); });
            });
        };
        GeoClient.prototype.addPolygonWithCallbacks = function (points, onSuccess, onFail) {
            var _this = this;
            var url = this.baseUrl + "/api/Geo/AddPolygon";
            var contentData = [];
            if (points) {
                for (var _i = 0, points_1 = points; _i < points_1.length; _i++) {
                    var item = points_1[_i];
                    contentData.push(item.toJS());
                }
            }
            var content = JSON.stringify(points ? contentData : null);
            jQuery.ajax({
                url: url,
                beforeSend: this.beforeSend,
                type: "post",
                data: content,
                dataType: "text",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                }
            }).done(function (data, textStatus, xhr) {
                _this.processAddPolygonWithCallbacks(url, xhr, onSuccess, onFail);
            }).fail(function (xhr) {
                _this.processAddPolygonWithCallbacks(url, xhr, onSuccess, onFail);
            });
        };
        GeoClient.prototype.processAddPolygonWithCallbacks = function (url, xhr, onSuccess, onFail) {
            try {
                var result = this.processAddPolygon(xhr);
                if (onSuccess !== undefined)
                    onSuccess(result);
            }
            catch (e) {
                if (onFail !== undefined)
                    onFail(e, "http_service_exception");
            }
        };
        GeoClient.prototype.processAddPolygon = function (xhr) {
            var data = xhr.responseText;
            var status = xhr.status.toString();
            if (status === "204") {
                var result204 = undefined;
                return result204;
            }
            else {
                throw new Error("error_no_callback_for_the_received_http_status");
            }
        };
        return GeoClient;
    }());
    exports.GeoClient = GeoClient;
    var PersonBase = (function () {
        function PersonBase(data) {
            this.address = new Address();
            this.children = [];
            this.discriminator = "PersonBase";
            if (data !== undefined) {
                this.id = data["Id"] !== undefined ? data["Id"] : null;
                this.firstName = data["FirstName"] !== undefined ? data["FirstName"] : null;
                this.lastName = data["LastName"] !== undefined ? data["LastName"] : null;
                this.gender = data["Gender"] !== undefined ? data["Gender"] : null;
                this.dateOfBirth = data["DateOfBirth"] ? new Date(data["DateOfBirth"].toString()) : null;
                this.weight = data["Weight"] !== undefined ? data["Weight"] : null;
                this.height = data["Height"] !== undefined ? data["Height"] : null;
                this.age = data["Age"] !== undefined ? data["Age"] : null;
                this.address = data["Address"] ? Address.fromJS(data["Address"]) : new Address();
                if (data["Children"] && data["Children"].constructor === Array) {
                    this.children = [];
                    for (var _i = 0, _a = data["Children"]; _i < _a.length; _i++) {
                        var item = _a[_i];
                        this.children.push(Person.fromJS(item));
                    }
                }
                if (data["Skills"]) {
                    this.skills = {};
                    for (var key in data["Skills"]) {
                        if (data["Skills"].hasOwnProperty(key))
                            this.skills[key] = data["Skills"][key] !== undefined ? data["Skills"][key] : null;
                    }
                }
                this.discriminator = data["discriminator"] !== undefined ? data["discriminator"] : null;
            }
        }
        PersonBase.fromJS = function (data) {
            if (data["discriminator"] === "Teacher")
                return new Teacher(data);
            return new Person(data);
        };
        PersonBase.prototype.toJS = function (data) {
            data = data === undefined ? {} : data;
            data["Id"] = this.id !== undefined ? this.id : null;
            data["FirstName"] = this.firstName !== undefined ? this.firstName : null;
            data["LastName"] = this.lastName !== undefined ? this.lastName : null;
            data["Gender"] = this.gender !== undefined ? this.gender : null;
            data["DateOfBirth"] = this.dateOfBirth ? this.dateOfBirth.toISOString() : null;
            data["Weight"] = this.weight !== undefined ? this.weight : null;
            data["Height"] = this.height !== undefined ? this.height : null;
            data["Age"] = this.age !== undefined ? this.age : null;
            data["Address"] = this.address ? this.address.toJS() : null;
            if (this.children && this.children.constructor === Array) {
                data["Children"] = [];
                for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
                    var item = _a[_i];
                    data["Children"].push(item.toJS());
                }
            }
            if (this.skills) {
                data["Skills"] = {};
                for (var key in this.skills) {
                    if (this.skills.hasOwnProperty(key))
                        data["Skills"][key] = this.skills[key] !== undefined ? this.skills[key] : null;
                }
            }
            data["discriminator"] = this.discriminator !== undefined ? this.discriminator : null;
            return data;
        };
        PersonBase.prototype.toJSON = function () {
            return JSON.stringify(this.toJS());
        };
        PersonBase.prototype.clone = function () {
            var json = this.toJSON();
            return new Person(JSON.parse(json));
        };
        return PersonBase;
    }());
    exports.PersonBase = PersonBase;
    var Person = (function (_super) {
        __extends(Person, _super);
        function Person() {
            _super.apply(this, arguments);
        }
        Object.defineProperty(Person.prototype, "fullName", {
            get: function () {
                return this.firstName + " " + this.lastName;
            },
            enumerable: true,
            configurable: true
        });
        return Person;
    }(PersonBase));
    exports.Person = Person;
    var Teacher = (function (_super) {
        __extends(Teacher, _super);
        function Teacher(data) {
            _super.call(this, data);
            this.discriminator = "Teacher";
            if (data !== undefined) {
                this.course = data["Course"] !== undefined ? data["Course"] : null;
            }
        }
        Teacher.fromJS = function (data) {
            return new Teacher(data);
        };
        Teacher.prototype.toJS = function (data) {
            data = data === undefined ? {} : data;
            data["Course"] = this.course !== undefined ? this.course : null;
            _super.prototype.toJS.call(this, data);
            return data;
        };
        Teacher.prototype.toJSON = function () {
            return JSON.stringify(this.toJS());
        };
        Teacher.prototype.clone = function () {
            var json = this.toJSON();
            return new Teacher(JSON.parse(json));
        };
        return Teacher;
    }(Person));
    exports.Teacher = Teacher;
    (function (Gender) {
        Gender[Gender["Male"] = "Male"] = "Male";
        Gender[Gender["Female"] = "Female"] = "Female";
    })(exports.Gender || (exports.Gender = {}));
    var Gender = exports.Gender;
    var Address = (function () {
        function Address(data) {
            if (data !== undefined) {
                this.isPrimary = data["IsPrimary"] !== undefined ? data["IsPrimary"] : null;
                this.city = data["City"] !== undefined ? data["City"] : null;
            }
        }
        Address.fromJS = function (data) {
            return new Address(data);
        };
        Address.prototype.toJS = function (data) {
            data = data === undefined ? {} : data;
            data["IsPrimary"] = this.isPrimary !== undefined ? this.isPrimary : null;
            data["City"] = this.city !== undefined ? this.city : null;
            return data;
        };
        Address.prototype.toJSON = function () {
            return JSON.stringify(this.toJS());
        };
        Address.prototype.clone = function () {
            var json = this.toJSON();
            return new Address(JSON.parse(json));
        };
        return Address;
    }());
    exports.Address = Address;
    (function (SkillLevelAsInteger) {
        SkillLevelAsInteger[SkillLevelAsInteger["Low"] = 0] = "Low";
        SkillLevelAsInteger[SkillLevelAsInteger["Medium"] = 1] = "Medium";
        SkillLevelAsInteger[SkillLevelAsInteger["Height"] = 2] = "Height";
    })(exports.SkillLevelAsInteger || (exports.SkillLevelAsInteger = {}));
    var SkillLevelAsInteger = exports.SkillLevelAsInteger;
    var Exception = (function () {
        function Exception(data) {
            this.innerException = new Exception();
            if (data !== undefined) {
                this.message = data["Message"] !== undefined ? data["Message"] : null;
                this.innerException = data["InnerException"] ? Exception.fromJS(data["InnerException"]) : new Exception();
                this.stackTrace = data["StackTrace"] !== undefined ? data["StackTrace"] : null;
                this.source = data["Source"] !== undefined ? data["Source"] : null;
            }
        }
        Exception.fromJS = function (data) {
            return new Exception(data);
        };
        Exception.prototype.toJS = function (data) {
            data = data === undefined ? {} : data;
            data["Message"] = this.message !== undefined ? this.message : null;
            data["InnerException"] = this.innerException ? this.innerException.toJS() : null;
            data["StackTrace"] = this.stackTrace !== undefined ? this.stackTrace : null;
            data["Source"] = this.source !== undefined ? this.source : null;
            return data;
        };
        Exception.prototype.toJSON = function () {
            return JSON.stringify(this.toJS());
        };
        Exception.prototype.clone = function () {
            var json = this.toJSON();
            return new Exception(JSON.parse(json));
        };
        return Exception;
    }());
    exports.Exception = Exception;
    var PersonNotFoundException = (function (_super) {
        __extends(PersonNotFoundException, _super);
        function PersonNotFoundException(data) {
            _super.call(this, data);
            if (data !== undefined) {
                this.id = data["id"] !== undefined ? data["id"] : null;
            }
        }
        PersonNotFoundException.fromJS = function (data) {
            return new PersonNotFoundException(data);
        };
        PersonNotFoundException.prototype.toJS = function (data) {
            data = data === undefined ? {} : data;
            data["id"] = this.id !== undefined ? this.id : null;
            _super.prototype.toJS.call(this, data);
            return data;
        };
        PersonNotFoundException.prototype.toJSON = function () {
            return JSON.stringify(this.toJS());
        };
        PersonNotFoundException.prototype.clone = function () {
            var json = this.toJSON();
            return new PersonNotFoundException(JSON.parse(json));
        };
        return PersonNotFoundException;
    }(Exception));
    exports.PersonNotFoundException = PersonNotFoundException;
    var GeoPoint = (function () {
        function GeoPoint(data) {
            if (data !== undefined) {
                this.latitude = data["Latitude"] !== undefined ? data["Latitude"] : null;
                this.longitude = data["Longitude"] !== undefined ? data["Longitude"] : null;
            }
        }
        GeoPoint.fromJS = function (data) {
            return new GeoPoint(data);
        };
        GeoPoint.prototype.toJS = function (data) {
            data = data === undefined ? {} : data;
            data["Latitude"] = this.latitude !== undefined ? this.latitude : null;
            data["Longitude"] = this.longitude !== undefined ? this.longitude : null;
            return data;
        };
        GeoPoint.prototype.toJSON = function () {
            return JSON.stringify(this.toJS());
        };
        GeoPoint.prototype.clone = function () {
            var json = this.toJSON();
            return new GeoPoint(JSON.parse(json));
        };
        return GeoPoint;
    }());
    exports.GeoPoint = GeoPoint;
});
//# sourceMappingURL=serviceClientsJQueryPromises.js.map