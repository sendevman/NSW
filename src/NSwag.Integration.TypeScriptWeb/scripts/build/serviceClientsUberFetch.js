/* tslint:disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v9.5.6264.39438 (NJsonSchema v8.6.6263.34621) (http://NSwag.org)
// </auto-generated>
//----------------------
class Client {
    constructor(baseUrl, http) {
        this.jsonParseReviver = undefined;
        this.baseUrl = baseUrl ? baseUrl : "";
        this.http = http ? http : window;
    }
    /**
     * Product Types
     * @latitude Latitude component of location.
     * @longitude Longitude component of location.
     * @return An array of products
     */
    products(latitude, longitude) {
        let url_ = this.baseUrl + "/products?";
        if (latitude === undefined || latitude === null)
            throw new Error("The parameter 'latitude' must be defined and cannot be null.");
        else
            url_ += "latitude=" + encodeURIComponent("" + latitude) + "&";
        if (longitude === undefined || longitude === null)
            throw new Error("The parameter 'longitude' must be defined and cannot be null.");
        else
            url_ += "longitude=" + encodeURIComponent("" + longitude) + "&";
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "GET",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
                "Accept": "application/json; charset=UTF-8"
            }
        };
        return this.http.fetch(url_, options_).then((response) => {
            return this.processProducts(response);
        });
    }
    processProducts(response) {
        return response.text().then((responseText) => {
            const status = response.status;
            if (status === 200) {
                let result200 = null;
                let resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
                if (resultData200 && resultData200.constructor === Array) {
                    result200 = [];
                    for (let item of resultData200)
                        result200.push(Product.fromJS(item));
                }
                return result200;
            }
            else {
                let result = null;
                let resultData = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
                result = resultData ? Error.fromJS(resultData) : null;
                this.throwException("A server error occurred.", status, responseText, result);
            }
        });
    }
    /**
     * Price Estimates
     * @start_latitude Latitude component of start location.
     * @start_longitude Longitude component of start location.
     * @end_latitude Latitude component of end location.
     * @end_longitude Longitude component of end location.
     * @return An array of price estimates by product
     */
    price(start_latitude, start_longitude, end_latitude, end_longitude) {
        let url_ = this.baseUrl + "/estimates/price?";
        if (start_latitude === undefined || start_latitude === null)
            throw new Error("The parameter 'start_latitude' must be defined and cannot be null.");
        else
            url_ += "start_latitude=" + encodeURIComponent("" + start_latitude) + "&";
        if (start_longitude === undefined || start_longitude === null)
            throw new Error("The parameter 'start_longitude' must be defined and cannot be null.");
        else
            url_ += "start_longitude=" + encodeURIComponent("" + start_longitude) + "&";
        if (end_latitude === undefined || end_latitude === null)
            throw new Error("The parameter 'end_latitude' must be defined and cannot be null.");
        else
            url_ += "end_latitude=" + encodeURIComponent("" + end_latitude) + "&";
        if (end_longitude === undefined || end_longitude === null)
            throw new Error("The parameter 'end_longitude' must be defined and cannot be null.");
        else
            url_ += "end_longitude=" + encodeURIComponent("" + end_longitude) + "&";
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "GET",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
                "Accept": "application/json; charset=UTF-8"
            }
        };
        return this.http.fetch(url_, options_).then((response) => {
            return this.processPrice(response);
        });
    }
    processPrice(response) {
        return response.text().then((responseText) => {
            const status = response.status;
            if (status === 200) {
                let result200 = null;
                let resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
                if (resultData200 && resultData200.constructor === Array) {
                    result200 = [];
                    for (let item of resultData200)
                        result200.push(PriceEstimate.fromJS(item));
                }
                return result200;
            }
            else {
                let result = null;
                let resultData = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
                result = resultData ? Error.fromJS(resultData) : null;
                this.throwException("A server error occurred.", status, responseText, result);
            }
        });
    }
    /**
     * Time Estimates
     * @start_latitude Latitude component of start location.
     * @start_longitude Longitude component of start location.
     * @customer_uuid Unique customer identifier to be used for experience customization.
     * @product_id Unique identifier representing a specific product for a given latitude & longitude.
     * @return An array of products
     */
    time(start_latitude, start_longitude, customer_uuid, product_id) {
        let url_ = this.baseUrl + "/estimates/time?";
        if (start_latitude === undefined || start_latitude === null)
            throw new Error("The parameter 'start_latitude' must be defined and cannot be null.");
        else
            url_ += "start_latitude=" + encodeURIComponent("" + start_latitude) + "&";
        if (start_longitude === undefined || start_longitude === null)
            throw new Error("The parameter 'start_longitude' must be defined and cannot be null.");
        else
            url_ += "start_longitude=" + encodeURIComponent("" + start_longitude) + "&";
        if (customer_uuid !== undefined)
            url_ += "customer_uuid=" + encodeURIComponent("" + customer_uuid) + "&";
        if (product_id !== undefined)
            url_ += "product_id=" + encodeURIComponent("" + product_id) + "&";
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "GET",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
                "Accept": "application/json; charset=UTF-8"
            }
        };
        return this.http.fetch(url_, options_).then((response) => {
            return this.processTime(response);
        });
    }
    processTime(response) {
        return response.text().then((responseText) => {
            const status = response.status;
            if (status === 200) {
                let result200 = null;
                let resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
                if (resultData200 && resultData200.constructor === Array) {
                    result200 = [];
                    for (let item of resultData200)
                        result200.push(Product.fromJS(item));
                }
                return result200;
            }
            else {
                let result = null;
                let resultData = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
                result = resultData ? Error.fromJS(resultData) : null;
                this.throwException("A server error occurred.", status, responseText, result);
            }
        });
    }
    /**
     * User Profile
     * @return Profile information for a user
     */
    me() {
        let url_ = this.baseUrl + "/me";
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "GET",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
                "Accept": "application/json; charset=UTF-8"
            }
        };
        return this.http.fetch(url_, options_).then((response) => {
            return this.processMe(response);
        });
    }
    processMe(response) {
        return response.text().then((responseText) => {
            const status = response.status;
            if (status === 200) {
                let result200 = null;
                let resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
                result200 = resultData200 ? Profile.fromJS(resultData200) : null;
                return result200;
            }
            else {
                let result = null;
                let resultData = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
                result = resultData ? Error.fromJS(resultData) : null;
                this.throwException("A server error occurred.", status, responseText, result);
            }
        });
    }
    /**
     * User Activity
     * @offset Offset the list of returned results by this amount. Default is zero.
     * @limit Number of items to retrieve. Default is 5, maximum is 100.
     * @return History information for the given user
     */
    history(offset, limit) {
        let url_ = this.baseUrl + "/history?";
        if (offset !== undefined)
            url_ += "offset=" + encodeURIComponent("" + offset) + "&";
        if (limit !== undefined)
            url_ += "limit=" + encodeURIComponent("" + limit) + "&";
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "GET",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
                "Accept": "application/json; charset=UTF-8"
            }
        };
        return this.http.fetch(url_, options_).then((response) => {
            return this.processHistory(response);
        });
    }
    processHistory(response) {
        return response.text().then((responseText) => {
            const status = response.status;
            if (status === 200) {
                let result200 = null;
                let resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
                result200 = resultData200 ? Activities.fromJS(resultData200) : null;
                return result200;
            }
            else {
                let result = null;
                let resultData = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
                result = resultData ? Error.fromJS(resultData) : null;
                this.throwException("A server error occurred.", status, responseText, result);
            }
        });
    }
    throwException(message, status, response, result) {
        throw new SwaggerException(message, status, response, result);
    }
}
exports.Client = Client;
class Product {
    constructor(data) {
        if (data !== undefined) {
            this.product_id = data["product_id"] !== undefined ? data["product_id"] : undefined;
            this.description = data["description"] !== undefined ? data["description"] : undefined;
            this.display_name = data["display_name"] !== undefined ? data["display_name"] : undefined;
            this.capacity = data["capacity"] !== undefined ? data["capacity"] : undefined;
            this.image = data["image"] !== undefined ? data["image"] : undefined;
        }
    }
    static fromJS(data) {
        return new Product(data);
    }
    toJS(data) {
        data = data === undefined ? {} : data;
        data["product_id"] = this.product_id !== undefined ? this.product_id : undefined;
        data["description"] = this.description !== undefined ? this.description : undefined;
        data["display_name"] = this.display_name !== undefined ? this.display_name : undefined;
        data["capacity"] = this.capacity !== undefined ? this.capacity : undefined;
        data["image"] = this.image !== undefined ? this.image : undefined;
        return data;
    }
    toJSON() {
        return JSON.stringify(this.toJS());
    }
    clone() {
        const json = this.toJSON();
        return new Product(JSON.parse(json));
    }
}
exports.Product = Product;
class PriceEstimate {
    constructor(data) {
        if (data !== undefined) {
            this.product_id = data["product_id"] !== undefined ? data["product_id"] : undefined;
            this.currency_code = data["currency_code"] !== undefined ? data["currency_code"] : undefined;
            this.display_name = data["display_name"] !== undefined ? data["display_name"] : undefined;
            this.estimate = data["estimate"] !== undefined ? data["estimate"] : undefined;
            this.low_estimate = data["low_estimate"] !== undefined ? data["low_estimate"] : undefined;
            this.high_estimate = data["high_estimate"] !== undefined ? data["high_estimate"] : undefined;
            this.surge_multiplier = data["surge_multiplier"] !== undefined ? data["surge_multiplier"] : undefined;
        }
    }
    static fromJS(data) {
        return new PriceEstimate(data);
    }
    toJS(data) {
        data = data === undefined ? {} : data;
        data["product_id"] = this.product_id !== undefined ? this.product_id : undefined;
        data["currency_code"] = this.currency_code !== undefined ? this.currency_code : undefined;
        data["display_name"] = this.display_name !== undefined ? this.display_name : undefined;
        data["estimate"] = this.estimate !== undefined ? this.estimate : undefined;
        data["low_estimate"] = this.low_estimate !== undefined ? this.low_estimate : undefined;
        data["high_estimate"] = this.high_estimate !== undefined ? this.high_estimate : undefined;
        data["surge_multiplier"] = this.surge_multiplier !== undefined ? this.surge_multiplier : undefined;
        return data;
    }
    toJSON() {
        return JSON.stringify(this.toJS());
    }
    clone() {
        const json = this.toJSON();
        return new PriceEstimate(JSON.parse(json));
    }
}
exports.PriceEstimate = PriceEstimate;
class Profile {
    constructor(data) {
        if (data !== undefined) {
            this.first_name = data["first_name"] !== undefined ? data["first_name"] : undefined;
            this.last_name = data["last_name"] !== undefined ? data["last_name"] : undefined;
            this.email = data["email"] !== undefined ? data["email"] : undefined;
            this.picture = data["picture"] !== undefined ? data["picture"] : undefined;
            this.promo_code = data["promo_code"] !== undefined ? data["promo_code"] : undefined;
        }
    }
    static fromJS(data) {
        return new Profile(data);
    }
    toJS(data) {
        data = data === undefined ? {} : data;
        data["first_name"] = this.first_name !== undefined ? this.first_name : undefined;
        data["last_name"] = this.last_name !== undefined ? this.last_name : undefined;
        data["email"] = this.email !== undefined ? this.email : undefined;
        data["picture"] = this.picture !== undefined ? this.picture : undefined;
        data["promo_code"] = this.promo_code !== undefined ? this.promo_code : undefined;
        return data;
    }
    toJSON() {
        return JSON.stringify(this.toJS());
    }
    clone() {
        const json = this.toJSON();
        return new Profile(JSON.parse(json));
    }
}
exports.Profile = Profile;
class Activity {
    constructor(data) {
        if (data !== undefined) {
            this.uuid = data["uuid"] !== undefined ? data["uuid"] : undefined;
        }
    }
    static fromJS(data) {
        return new Activity(data);
    }
    toJS(data) {
        data = data === undefined ? {} : data;
        data["uuid"] = this.uuid !== undefined ? this.uuid : undefined;
        return data;
    }
    toJSON() {
        return JSON.stringify(this.toJS());
    }
    clone() {
        const json = this.toJSON();
        return new Activity(JSON.parse(json));
    }
}
exports.Activity = Activity;
class Activities {
    constructor(data) {
        if (data !== undefined) {
            this.offset = data["offset"] !== undefined ? data["offset"] : undefined;
            this.limit = data["limit"] !== undefined ? data["limit"] : undefined;
            this.count = data["count"] !== undefined ? data["count"] : undefined;
            if (data["history"] && data["history"].constructor === Array) {
                this.history = [];
                for (let item of data["history"])
                    this.history.push(Activity.fromJS(item));
            }
        }
    }
    static fromJS(data) {
        return new Activities(data);
    }
    toJS(data) {
        data = data === undefined ? {} : data;
        data["offset"] = this.offset !== undefined ? this.offset : undefined;
        data["limit"] = this.limit !== undefined ? this.limit : undefined;
        data["count"] = this.count !== undefined ? this.count : undefined;
        if (this.history && this.history.constructor === Array) {
            data["history"] = [];
            for (let item of this.history)
                data["history"].push(item.toJS());
        }
        return data;
    }
    toJSON() {
        return JSON.stringify(this.toJS());
    }
    clone() {
        const json = this.toJSON();
        return new Activities(JSON.parse(json));
    }
}
exports.Activities = Activities;
class Error {
    constructor(data) {
        if (data !== undefined) {
            this.code = data["code"] !== undefined ? data["code"] : undefined;
            this.message = data["message"] !== undefined ? data["message"] : undefined;
            this.fields = data["fields"] !== undefined ? data["fields"] : undefined;
        }
    }
    static fromJS(data) {
        return new Error(data);
    }
    toJS(data) {
        data = data === undefined ? {} : data;
        data["code"] = this.code !== undefined ? this.code : undefined;
        data["message"] = this.message !== undefined ? this.message : undefined;
        data["fields"] = this.fields !== undefined ? this.fields : undefined;
        return data;
    }
    toJSON() {
        return JSON.stringify(this.toJS());
    }
    clone() {
        const json = this.toJSON();
        return new Error(JSON.parse(json));
    }
}
exports.Error = Error;
class SwaggerException extends Error {
    constructor(message, status, response, result) {
        super();
        this.message = message;
        this.status = status;
        this.response = response;
        this.result = result;
    }
}
exports.SwaggerException = SwaggerException;
//# sourceMappingURL=serviceClientsUberFetch.js.map