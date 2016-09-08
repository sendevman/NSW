//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v5.6.6096.318 (NJsonSchema v4.8.6094.34027) (http://NSwag.org)
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
        GeoClient.prototype.refresh = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.refreshWithCallbacks(function (result) { return resolve(result); }, function (exception, reason) { return reject(exception); });
            });
        };
        GeoClient.prototype.refreshWithCallbacks = function (onSuccess, onFail) {
            var _this = this;
            var url = this.baseUrl + "/api/Geo/Refresh";
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
                _this.processRefreshWithCallbacks(url, xhr, onSuccess, onFail);
            }).fail(function (xhr) {
                _this.processRefreshWithCallbacks(url, xhr, onSuccess, onFail);
            });
        };
        GeoClient.prototype.processRefreshWithCallbacks = function (url, xhr, onSuccess, onFail) {
            try {
                var result = this.processRefresh(xhr);
                if (onSuccess !== undefined)
                    onSuccess(result);
            }
            catch (e) {
                if (onFail !== undefined)
                    onFail(e, "http_service_exception");
            }
        };
        GeoClient.prototype.processRefresh = function (xhr) {
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
    var Person = (function () {
        function Person(data) {
            this.id = ko.observable();
            /** Gets or sets the first name. */
            this.firstName = ko.observable();
            /** Gets or sets the last name. */
            this.lastName = ko.observable();
            this.gender = ko.observable();
            this.dateOfBirth = ko.observable();
            this.weight = ko.observable();
            this.height = ko.observable();
            this.age = ko.observable();
            this.address = ko.observable(new Address());
            this.children = ko.observableArray([]);
            this.skills = ko.observable();
            this.discriminator = ko.observable();
            this.discriminator("Person");
            if (data !== undefined) {
                var id_ = null;
                id_ = data["Id"] !== undefined ? data["Id"] : null;
                this.id(id_);
                var firstName_ = null;
                firstName_ = data["FirstName"] !== undefined ? data["FirstName"] : null;
                this.firstName(firstName_);
                var lastName_ = null;
                lastName_ = data["LastName"] !== undefined ? data["LastName"] : null;
                this.lastName(lastName_);
                var gender_ = null;
                gender_ = data["Gender"] !== undefined ? data["Gender"] : null;
                this.gender(gender_);
                var dateOfBirth_ = null;
                dateOfBirth_ = data["DateOfBirth"] ? new Date(data["DateOfBirth"].toString()) : null;
                this.dateOfBirth(dateOfBirth_);
                var weight_ = null;
                weight_ = data["Weight"] !== undefined ? data["Weight"] : null;
                this.weight(weight_);
                var height_ = null;
                height_ = data["Height"] !== undefined ? data["Height"] : null;
                this.height(height_);
                var age_ = null;
                age_ = data["Age"] !== undefined ? data["Age"] : null;
                this.age(age_);
                var address_ = null;
                address_ = data["Address"] ? Address.fromJS(data["Address"]) : new Address();
                this.address(address_);
                var children_ = null;
                if (data["Children"] && data["Children"].constructor === Array) {
                    children_ = [];
                    for (var _i = 0, _a = data["Children"]; _i < _a.length; _i++) {
                        var item = _a[_i];
                        children_.push(Person.fromJS(item));
                    }
                }
                this.children(children_);
                var skills_ = null;
                if (data["Skills"]) {
                    skills_ = {};
                    for (var key in data["Skills"]) {
                        if (data["Skills"].hasOwnProperty(key))
                            skills_[key] = data["Skills"][key] !== undefined ? data["Skills"][key] : null;
                    }
                }
                this.skills(skills_);
                var discriminator_ = null;
                discriminator_ = data["discriminator"] !== undefined ? data["discriminator"] : null;
                this.discriminator(discriminator_);
            }
        }
        Person.fromJS = function (data) {
            if (data["discriminator"] === "Teacher")
                return new Teacher(data);
            return new Person(data);
        };
        Person.prototype.toJS = function (data) {
            data = data === undefined ? {} : data;
            var id_ = this.id();
            data["Id"] = id_ !== undefined ? id_ : null;
            var firstName_ = this.firstName();
            data["FirstName"] = firstName_ !== undefined ? firstName_ : null;
            var lastName_ = this.lastName();
            data["LastName"] = lastName_ !== undefined ? lastName_ : null;
            var gender_ = this.gender();
            data["Gender"] = gender_ !== undefined ? gender_ : null;
            var dateOfBirth_ = this.dateOfBirth();
            data["DateOfBirth"] = dateOfBirth_ ? dateOfBirth_.toISOString() : null;
            var weight_ = this.weight();
            data["Weight"] = weight_ !== undefined ? weight_ : null;
            var height_ = this.height();
            data["Height"] = height_ !== undefined ? height_ : null;
            var age_ = this.age();
            data["Age"] = age_ !== undefined ? age_ : null;
            var address_ = this.address();
            data["Address"] = address_ ? address_.toJS() : null;
            var children_ = this.children();
            if (children_ && children_.constructor === Array) {
                data["Children"] = [];
                for (var _i = 0, children_1 = children_; _i < children_1.length; _i++) {
                    var item = children_1[_i];
                    data["Children"].push(item.toJS());
                }
            }
            var skills_ = this.skills();
            if (skills_) {
                data["Skills"] = {};
                for (var key in skills_) {
                    if (skills_.hasOwnProperty(key))
                        data["Skills"][key] = skills_[key] !== undefined ? skills_[key] : null;
                }
            }
            var discriminator_ = this.discriminator();
            data["discriminator"] = discriminator_ !== undefined ? discriminator_ : null;
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
    var Teacher = (function (_super) {
        __extends(Teacher, _super);
        function Teacher(data) {
            _super.call(this, data);
            this.course = ko.observable();
            this.discriminator("Teacher");
            if (data !== undefined) {
                var course_ = null;
                course_ = data["Course"] !== undefined ? data["Course"] : null;
                this.course(course_);
            }
        }
        Teacher.fromJS = function (data) {
            return new Teacher(data);
        };
        Teacher.prototype.toJS = function (data) {
            data = data === undefined ? {} : data;
            var course_ = this.course();
            data["Course"] = course_ !== undefined ? course_ : null;
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
            this.isPrimary = ko.observable();
            this.city = ko.observable();
            if (data !== undefined) {
                var isPrimary_ = null;
                isPrimary_ = data["IsPrimary"] !== undefined ? data["IsPrimary"] : null;
                this.isPrimary(isPrimary_);
                var city_ = null;
                city_ = data["City"] !== undefined ? data["City"] : null;
                this.city(city_);
            }
        }
        Address.fromJS = function (data) {
            return new Address(data);
        };
        Address.prototype.toJS = function (data) {
            data = data === undefined ? {} : data;
            var isPrimary_ = this.isPrimary();
            data["IsPrimary"] = isPrimary_ !== undefined ? isPrimary_ : null;
            var city_ = this.city();
            data["City"] = city_ !== undefined ? city_ : null;
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
            this.message = ko.observable();
            this.innerException = ko.observable(new Exception());
            this.stackTrace = ko.observable();
            this.source = ko.observable();
            if (data !== undefined) {
                var message_ = null;
                message_ = data["Message"] !== undefined ? data["Message"] : null;
                this.message(message_);
                var innerException_ = null;
                innerException_ = data["InnerException"] ? Exception.fromJS(data["InnerException"]) : new Exception();
                this.innerException(innerException_);
                var stackTrace_ = null;
                stackTrace_ = data["StackTrace"] !== undefined ? data["StackTrace"] : null;
                this.stackTrace(stackTrace_);
                var source_ = null;
                source_ = data["Source"] !== undefined ? data["Source"] : null;
                this.source(source_);
            }
        }
        Exception.fromJS = function (data) {
            return new Exception(data);
        };
        Exception.prototype.toJS = function (data) {
            data = data === undefined ? {} : data;
            var message_ = this.message();
            data["Message"] = message_ !== undefined ? message_ : null;
            var innerException_ = this.innerException();
            data["InnerException"] = innerException_ ? innerException_.toJS() : null;
            var stackTrace_ = this.stackTrace();
            data["StackTrace"] = stackTrace_ !== undefined ? stackTrace_ : null;
            var source_ = this.source();
            data["Source"] = source_ !== undefined ? source_ : null;
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
            this.id = ko.observable();
            if (data !== undefined) {
                var id_ = null;
                id_ = data["id"] !== undefined ? data["id"] : null;
                this.id(id_);
            }
        }
        PersonNotFoundException.fromJS = function (data) {
            return new PersonNotFoundException(data);
        };
        PersonNotFoundException.prototype.toJS = function (data) {
            data = data === undefined ? {} : data;
            var id_ = this.id();
            data["id"] = id_ !== undefined ? id_ : null;
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
            this.latitude = ko.observable();
            this.longitude = ko.observable();
            if (data !== undefined) {
                var latitude_ = null;
                latitude_ = data["Latitude"] !== undefined ? data["Latitude"] : null;
                this.latitude(latitude_);
                var longitude_ = null;
                longitude_ = data["Longitude"] !== undefined ? data["Longitude"] : null;
                this.longitude(longitude_);
            }
        }
        GeoPoint.fromJS = function (data) {
            return new GeoPoint(data);
        };
        GeoPoint.prototype.toJS = function (data) {
            data = data === undefined ? {} : data;
            var latitude_ = this.latitude();
            data["Latitude"] = latitude_ !== undefined ? latitude_ : null;
            var longitude_ = this.longitude();
            data["Longitude"] = longitude_ !== undefined ? longitude_ : null;
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
//# sourceMappingURL=serviceClientsJQueryPromisesKO.js.map