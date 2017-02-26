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
     * Add a new pet to the store
     * @body Pet object that needs to be added to the store
     */
    addPet(body) {
        let url_ = this.baseUrl + "/pet";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body ? body.toJS() : null);
        let options_ = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
                "Accept": "application/json; charset=UTF-8"
            }
        };
        return this.http.fetch(url_, options_).then((response) => {
            return this.processAddPet(response);
        });
    }
    processAddPet(response) {
        return response.text().then((responseText) => {
            const status = response.status;
            if (status === 405) {
                this.throwException("A server error occurred.", status, responseText);
            }
            else if (status !== 200 && status !== 204) {
                this.throwException("An unexpected server error occurred.", status, responseText);
            }
            return null;
        });
    }
    /**
     * Update an existing pet
     * @body Pet object that needs to be added to the store
     */
    updatePet(body) {
        let url_ = this.baseUrl + "/pet";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body ? body.toJS() : null);
        let options_ = {
            body: content_,
            method: "PUT",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
                "Accept": "application/json; charset=UTF-8"
            }
        };
        return this.http.fetch(url_, options_).then((response) => {
            return this.processUpdatePet(response);
        });
    }
    processUpdatePet(response) {
        return response.text().then((responseText) => {
            const status = response.status;
            if (status === 400) {
                this.throwException("A server error occurred.", status, responseText);
            }
            else if (status === 404) {
                this.throwException("A server error occurred.", status, responseText);
            }
            else if (status === 405) {
                this.throwException("A server error occurred.", status, responseText);
            }
            else if (status !== 200 && status !== 204) {
                this.throwException("An unexpected server error occurred.", status, responseText);
            }
            return null;
        });
    }
    /**
     * Finds Pets by status
     * @status Status values that need to be considered for filter
     * @return successful operation
     */
    findPetsByStatus(status) {
        let url_ = this.baseUrl + "/pet/findByStatus?";
        if (status === undefined || status === null)
            throw new Error("The parameter 'status' must be defined and cannot be null.");
        else
            status.forEach(item => { url_ += "status=" + encodeURIComponent("" + item) + "&"; });
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "GET",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
                "Accept": "application/json; charset=UTF-8"
            }
        };
        return this.http.fetch(url_, options_).then((response) => {
            return this.processFindPetsByStatus(response);
        });
    }
    processFindPetsByStatus(response) {
        return response.text().then((responseText) => {
            const status = response.status;
            if (status === 200) {
                let result200 = null;
                let resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
                if (resultData200 && resultData200.constructor === Array) {
                    result200 = [];
                    for (let item of resultData200)
                        result200.push(Pet.fromJS(item));
                }
                return result200;
            }
            else if (status === 400) {
                this.throwException("A server error occurred.", status, responseText);
            }
            else if (status !== 200 && status !== 204) {
                this.throwException("An unexpected server error occurred.", status, responseText);
            }
            return null;
        });
    }
    /**
     * Finds Pets by tags
     * @tags Tags to filter by
     * @return successful operation
     * @deprecated
     */
    findPetsByTags(tags) {
        let url_ = this.baseUrl + "/pet/findByTags?";
        if (tags === undefined || tags === null)
            throw new Error("The parameter 'tags' must be defined and cannot be null.");
        else
            tags.forEach(item => { url_ += "tags=" + encodeURIComponent("" + item) + "&"; });
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "GET",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
                "Accept": "application/json; charset=UTF-8"
            }
        };
        return this.http.fetch(url_, options_).then((response) => {
            return this.processFindPetsByTags(response);
        });
    }
    processFindPetsByTags(response) {
        return response.text().then((responseText) => {
            const status = response.status;
            if (status === 200) {
                let result200 = null;
                let resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
                if (resultData200 && resultData200.constructor === Array) {
                    result200 = [];
                    for (let item of resultData200)
                        result200.push(Pet.fromJS(item));
                }
                return result200;
            }
            else if (status === 400) {
                this.throwException("A server error occurred.", status, responseText);
            }
            else if (status !== 200 && status !== 204) {
                this.throwException("An unexpected server error occurred.", status, responseText);
            }
            return null;
        });
    }
    /**
     * Find pet by ID
     * @petId ID of pet to return
     * @return successful operation
     */
    getPetById(petId) {
        let url_ = this.baseUrl + "/pet/{petId}";
        if (petId === undefined || petId === null)
            throw new Error("The parameter 'petId' must be defined.");
        url_ = url_.replace("{petId}", encodeURIComponent("" + petId));
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "GET",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
                "Accept": "application/json; charset=UTF-8"
            }
        };
        return this.http.fetch(url_, options_).then((response) => {
            return this.processGetPetById(response);
        });
    }
    processGetPetById(response) {
        return response.text().then((responseText) => {
            const status = response.status;
            if (status === 200) {
                let result200 = null;
                let resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
                result200 = resultData200 ? Pet.fromJS(resultData200) : new Pet();
                return result200;
            }
            else if (status === 400) {
                this.throwException("A server error occurred.", status, responseText);
            }
            else if (status === 404) {
                this.throwException("A server error occurred.", status, responseText);
            }
            else if (status !== 200 && status !== 204) {
                this.throwException("An unexpected server error occurred.", status, responseText);
            }
            return null;
        });
    }
    /**
     * Updates a pet in the store with form data
     * @petId ID of pet that needs to be updated
     * @name Updated name of the pet
     * @status Updated status of the pet
     */
    updatePetWithForm(petId, name, status) {
        let url_ = this.baseUrl + "/pet/{petId}";
        if (petId === undefined || petId === null)
            throw new Error("The parameter 'petId' must be defined.");
        url_ = url_.replace("{petId}", encodeURIComponent("" + petId));
        url_ = url_.replace(/[?&]$/, "");
        const content_ = new FormData();
        if (name !== null)
            content_.append("name", name.toString());
        if (status !== null)
            content_.append("status", status.toString());
        let options_ = {
            body: content_,
            method: "POST",
            headers: {
                "Accept": "application/json; charset=UTF-8"
            }
        };
        return this.http.fetch(url_, options_).then((response) => {
            return this.processUpdatePetWithForm(response);
        });
    }
    processUpdatePetWithForm(response) {
        return response.text().then((responseText) => {
            const status = response.status;
            if (status === 405) {
                this.throwException("A server error occurred.", status, responseText);
            }
            else if (status !== 200 && status !== 204) {
                this.throwException("An unexpected server error occurred.", status, responseText);
            }
            return null;
        });
    }
    /**
     * Deletes a pet
     * @petId Pet id to delete
     */
    deletePet(api_key, petId) {
        let url_ = this.baseUrl + "/pet/{petId}";
        if (petId === undefined || petId === null)
            throw new Error("The parameter 'petId' must be defined.");
        url_ = url_.replace("{petId}", encodeURIComponent("" + petId));
        url_ = url_.replace(/[?&]$/, "");
        const content_ = "";
        let options_ = {
            body: content_,
            method: "DELETE",
            headers: {
                "api_key": api_key,
                "Content-Type": "application/json; charset=UTF-8",
                "Accept": "application/json; charset=UTF-8"
            }
        };
        return this.http.fetch(url_, options_).then((response) => {
            return this.processDeletePet(response);
        });
    }
    processDeletePet(response) {
        return response.text().then((responseText) => {
            const status = response.status;
            if (status === 400) {
                this.throwException("A server error occurred.", status, responseText);
            }
            else if (status === 404) {
                this.throwException("A server error occurred.", status, responseText);
            }
            else if (status !== 200 && status !== 204) {
                this.throwException("An unexpected server error occurred.", status, responseText);
            }
            return null;
        });
    }
    /**
     * uploads an image
     * @petId ID of pet to update
     * @additionalMetadata Additional data to pass to server
     * @file file to upload
     * @return successful operation
     */
    uploadFile(petId, additionalMetadata, file) {
        let url_ = this.baseUrl + "/pet/{petId}/uploadImage";
        if (petId === undefined || petId === null)
            throw new Error("The parameter 'petId' must be defined.");
        url_ = url_.replace("{petId}", encodeURIComponent("" + petId));
        url_ = url_.replace(/[?&]$/, "");
        const content_ = new FormData();
        if (additionalMetadata !== null)
            content_.append("additionalMetadata", additionalMetadata.toString());
        if (file !== null)
            content_.append("file", file.data, file.fileName ? file.fileName : "file");
        let options_ = {
            body: content_,
            method: "POST",
            headers: {
                "Accept": "application/json; charset=UTF-8"
            }
        };
        return this.http.fetch(url_, options_).then((response) => {
            return this.processUploadFile(response);
        });
    }
    processUploadFile(response) {
        return response.text().then((responseText) => {
            const status = response.status;
            if (status === 200) {
                let result200 = null;
                let resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
                result200 = resultData200 ? ApiResponse.fromJS(resultData200) : new ApiResponse();
                return result200;
            }
            else if (status !== 200 && status !== 204) {
                this.throwException("An unexpected server error occurred.", status, responseText);
            }
            return null;
        });
    }
    /**
     * Returns pet inventories by status
     * @return successful operation
     */
    getInventory() {
        let url_ = this.baseUrl + "/store/inventory";
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "GET",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
                "Accept": "application/json; charset=UTF-8"
            }
        };
        return this.http.fetch(url_, options_).then((response) => {
            return this.processGetInventory(response);
        });
    }
    processGetInventory(response) {
        return response.text().then((responseText) => {
            const status = response.status;
            if (status === 200) {
                let result200 = null;
                let resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
                if (resultData200) {
                    result200 = {};
                    for (let key in resultData200) {
                        if (resultData200.hasOwnProperty(key))
                            result200[key] = resultData200[key] !== undefined ? resultData200[key] : {};
                    }
                }
                return result200;
            }
            else if (status !== 200 && status !== 204) {
                this.throwException("An unexpected server error occurred.", status, responseText);
            }
            return null;
        });
    }
    /**
     * Place an order for a pet
     * @body order placed for purchasing the pet
     * @return successful operation
     */
    placeOrder(body) {
        let url_ = this.baseUrl + "/store/order";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body ? body.toJS() : null);
        let options_ = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
                "Accept": "application/json; charset=UTF-8"
            }
        };
        return this.http.fetch(url_, options_).then((response) => {
            return this.processPlaceOrder(response);
        });
    }
    processPlaceOrder(response) {
        return response.text().then((responseText) => {
            const status = response.status;
            if (status === 200) {
                let result200 = null;
                let resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
                result200 = resultData200 ? Order.fromJS(resultData200) : new Order();
                return result200;
            }
            else if (status === 400) {
                this.throwException("A server error occurred.", status, responseText);
            }
            else if (status !== 200 && status !== 204) {
                this.throwException("An unexpected server error occurred.", status, responseText);
            }
            return null;
        });
    }
    /**
     * Find purchase order by ID
     * @orderId ID of pet that needs to be fetched
     * @return successful operation
     */
    getOrderById(orderId) {
        let url_ = this.baseUrl + "/store/order/{orderId}";
        if (orderId === undefined || orderId === null)
            throw new Error("The parameter 'orderId' must be defined.");
        url_ = url_.replace("{orderId}", encodeURIComponent("" + orderId));
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "GET",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
                "Accept": "application/json; charset=UTF-8"
            }
        };
        return this.http.fetch(url_, options_).then((response) => {
            return this.processGetOrderById(response);
        });
    }
    processGetOrderById(response) {
        return response.text().then((responseText) => {
            const status = response.status;
            if (status === 200) {
                let result200 = null;
                let resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
                result200 = resultData200 ? Order.fromJS(resultData200) : new Order();
                return result200;
            }
            else if (status === 400) {
                this.throwException("A server error occurred.", status, responseText);
            }
            else if (status === 404) {
                this.throwException("A server error occurred.", status, responseText);
            }
            else if (status !== 200 && status !== 204) {
                this.throwException("An unexpected server error occurred.", status, responseText);
            }
            return null;
        });
    }
    /**
     * Delete purchase order by ID
     * @orderId ID of the order that needs to be deleted
     */
    deleteOrder(orderId) {
        let url_ = this.baseUrl + "/store/order/{orderId}";
        if (orderId === undefined || orderId === null)
            throw new Error("The parameter 'orderId' must be defined.");
        url_ = url_.replace("{orderId}", encodeURIComponent("" + orderId));
        url_ = url_.replace(/[?&]$/, "");
        const content_ = "";
        let options_ = {
            body: content_,
            method: "DELETE",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
                "Accept": "application/json; charset=UTF-8"
            }
        };
        return this.http.fetch(url_, options_).then((response) => {
            return this.processDeleteOrder(response);
        });
    }
    processDeleteOrder(response) {
        return response.text().then((responseText) => {
            const status = response.status;
            if (status === 400) {
                this.throwException("A server error occurred.", status, responseText);
            }
            else if (status === 404) {
                this.throwException("A server error occurred.", status, responseText);
            }
            else if (status !== 200 && status !== 204) {
                this.throwException("An unexpected server error occurred.", status, responseText);
            }
            return null;
        });
    }
    /**
     * Create user
     * @body Created user object
     * @return successful operation
     */
    createUser(body) {
        let url_ = this.baseUrl + "/user";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body ? body.toJS() : null);
        let options_ = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
                "Accept": "application/json; charset=UTF-8"
            }
        };
        return this.http.fetch(url_, options_).then((response) => {
            return this.processCreateUser(response);
        });
    }
    processCreateUser(response) {
        return response.text().then((responseText) => {
            const status = response.status;
            {
                return null;
            }
        });
    }
    /**
     * Creates list of users with given input array
     * @body List of user object
     * @return successful operation
     */
    createUsersWithArrayInput(body) {
        let url_ = this.baseUrl + "/user/createWithArray";
        url_ = url_.replace(/[?&]$/, "");
        let contentData_ = [];
        if (body) {
            for (let item of body)
                contentData_.push(item.toJS());
        }
        const content_ = JSON.stringify(body ? contentData_ : null);
        let options_ = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
                "Accept": "application/json; charset=UTF-8"
            }
        };
        return this.http.fetch(url_, options_).then((response) => {
            return this.processCreateUsersWithArrayInput(response);
        });
    }
    processCreateUsersWithArrayInput(response) {
        return response.text().then((responseText) => {
            const status = response.status;
            {
                return null;
            }
        });
    }
    /**
     * Creates list of users with given input array
     * @body List of user object
     * @return successful operation
     */
    createUsersWithListInput(body) {
        let url_ = this.baseUrl + "/user/createWithList";
        url_ = url_.replace(/[?&]$/, "");
        let contentData_ = [];
        if (body) {
            for (let item of body)
                contentData_.push(item.toJS());
        }
        const content_ = JSON.stringify(body ? contentData_ : null);
        let options_ = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
                "Accept": "application/json; charset=UTF-8"
            }
        };
        return this.http.fetch(url_, options_).then((response) => {
            return this.processCreateUsersWithListInput(response);
        });
    }
    processCreateUsersWithListInput(response) {
        return response.text().then((responseText) => {
            const status = response.status;
            {
                return null;
            }
        });
    }
    /**
     * Logs user into the system
     * @username The user name for login
     * @password The password for login in clear text
     * @return successful operation
     */
    loginUser(username, password) {
        let url_ = this.baseUrl + "/user/login?";
        if (username === undefined || username === null)
            throw new Error("The parameter 'username' must be defined and cannot be null.");
        else
            url_ += "username=" + encodeURIComponent("" + username) + "&";
        if (password === undefined || password === null)
            throw new Error("The parameter 'password' must be defined and cannot be null.");
        else
            url_ += "password=" + encodeURIComponent("" + password) + "&";
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "GET",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
                "Accept": "application/json; charset=UTF-8"
            }
        };
        return this.http.fetch(url_, options_).then((response) => {
            return this.processLoginUser(response);
        });
    }
    processLoginUser(response) {
        return response.text().then((responseText) => {
            const status = response.status;
            if (status === 200) {
                let result200 = null;
                let resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : null;
                return result200;
            }
            else if (status === 400) {
                this.throwException("A server error occurred.", status, responseText);
            }
            else if (status !== 200 && status !== 204) {
                this.throwException("An unexpected server error occurred.", status, responseText);
            }
            return null;
        });
    }
    /**
     * Logs out current logged in user session
     * @return successful operation
     */
    logoutUser() {
        let url_ = this.baseUrl + "/user/logout";
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "GET",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
                "Accept": "application/json; charset=UTF-8"
            }
        };
        return this.http.fetch(url_, options_).then((response) => {
            return this.processLogoutUser(response);
        });
    }
    processLogoutUser(response) {
        return response.text().then((responseText) => {
            const status = response.status;
            {
                return null;
            }
        });
    }
    /**
     * Get user by user name
     * @username The name that needs to be fetched. Use user1 for testing.
     * @return successful operation
     */
    getUserByName(username) {
        let url_ = this.baseUrl + "/user/{username}";
        if (username === undefined || username === null)
            throw new Error("The parameter 'username' must be defined.");
        url_ = url_.replace("{username}", encodeURIComponent("" + username));
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "GET",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
                "Accept": "application/json; charset=UTF-8"
            }
        };
        return this.http.fetch(url_, options_).then((response) => {
            return this.processGetUserByName(response);
        });
    }
    processGetUserByName(response) {
        return response.text().then((responseText) => {
            const status = response.status;
            if (status === 200) {
                let result200 = null;
                let resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
                result200 = resultData200 ? User.fromJS(resultData200) : new User();
                return result200;
            }
            else if (status === 400) {
                this.throwException("A server error occurred.", status, responseText);
            }
            else if (status === 404) {
                this.throwException("A server error occurred.", status, responseText);
            }
            else if (status !== 200 && status !== 204) {
                this.throwException("An unexpected server error occurred.", status, responseText);
            }
            return null;
        });
    }
    /**
     * Updated user
     * @username name that need to be updated
     * @body Updated user object
     */
    updateUser(username, body) {
        let url_ = this.baseUrl + "/user/{username}";
        if (username === undefined || username === null)
            throw new Error("The parameter 'username' must be defined.");
        url_ = url_.replace("{username}", encodeURIComponent("" + username));
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body ? body.toJS() : null);
        let options_ = {
            body: content_,
            method: "PUT",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
                "Accept": "application/json; charset=UTF-8"
            }
        };
        return this.http.fetch(url_, options_).then((response) => {
            return this.processUpdateUser(response);
        });
    }
    processUpdateUser(response) {
        return response.text().then((responseText) => {
            const status = response.status;
            if (status === 400) {
                this.throwException("A server error occurred.", status, responseText);
            }
            else if (status === 404) {
                this.throwException("A server error occurred.", status, responseText);
            }
            else if (status !== 200 && status !== 204) {
                this.throwException("An unexpected server error occurred.", status, responseText);
            }
            return null;
        });
    }
    /**
     * Delete user
     * @username The name that needs to be deleted
     */
    deleteUser(username) {
        let url_ = this.baseUrl + "/user/{username}";
        if (username === undefined || username === null)
            throw new Error("The parameter 'username' must be defined.");
        url_ = url_.replace("{username}", encodeURIComponent("" + username));
        url_ = url_.replace(/[?&]$/, "");
        const content_ = "";
        let options_ = {
            body: content_,
            method: "DELETE",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
                "Accept": "application/json; charset=UTF-8"
            }
        };
        return this.http.fetch(url_, options_).then((response) => {
            return this.processDeleteUser(response);
        });
    }
    processDeleteUser(response) {
        return response.text().then((responseText) => {
            const status = response.status;
            if (status === 400) {
                this.throwException("A server error occurred.", status, responseText);
            }
            else if (status === 404) {
                this.throwException("A server error occurred.", status, responseText);
            }
            else if (status !== 200 && status !== 204) {
                this.throwException("An unexpected server error occurred.", status, responseText);
            }
            return null;
        });
    }
    throwException(message, status, response, result) {
        if (result !== null && result !== undefined)
            throw result;
        else
            throw new SwaggerException(message, status, response, null);
    }
}
exports.Client = Client;
class Order {
    constructor(data) {
        this.complete = false;
        if (data !== undefined) {
            this.id = data["id"] !== undefined ? data["id"] : undefined;
            this.petId = data["petId"] !== undefined ? data["petId"] : undefined;
            this.quantity = data["quantity"] !== undefined ? data["quantity"] : undefined;
            this.shipDate = data["shipDate"] ? new Date(data["shipDate"].toString()) : undefined;
            this.status = data["status"] !== undefined ? data["status"] : undefined;
            this.complete = data["complete"] !== undefined ? data["complete"] : false;
        }
    }
    static fromJS(data) {
        return new Order(data);
    }
    toJS(data) {
        data = data === undefined ? {} : data;
        data["id"] = this.id !== undefined ? this.id : undefined;
        data["petId"] = this.petId !== undefined ? this.petId : undefined;
        data["quantity"] = this.quantity !== undefined ? this.quantity : undefined;
        data["shipDate"] = this.shipDate ? this.shipDate.toISOString() : undefined;
        data["status"] = this.status !== undefined ? this.status : undefined;
        data["complete"] = this.complete !== undefined ? this.complete : false;
        return data;
    }
    toJSON() {
        return JSON.stringify(this.toJS());
    }
    clone() {
        const json = this.toJSON();
        return new Order(JSON.parse(json));
    }
}
exports.Order = Order;
class Category {
    constructor(data) {
        if (data !== undefined) {
            this.id = data["id"] !== undefined ? data["id"] : undefined;
            this.name = data["name"] !== undefined ? data["name"] : undefined;
        }
    }
    static fromJS(data) {
        return new Category(data);
    }
    toJS(data) {
        data = data === undefined ? {} : data;
        data["id"] = this.id !== undefined ? this.id : undefined;
        data["name"] = this.name !== undefined ? this.name : undefined;
        return data;
    }
    toJSON() {
        return JSON.stringify(this.toJS());
    }
    clone() {
        const json = this.toJSON();
        return new Category(JSON.parse(json));
    }
}
exports.Category = Category;
class User {
    constructor(data) {
        if (data !== undefined) {
            this.id = data["id"] !== undefined ? data["id"] : undefined;
            this.username = data["username"] !== undefined ? data["username"] : undefined;
            this.firstName = data["firstName"] !== undefined ? data["firstName"] : undefined;
            this.lastName = data["lastName"] !== undefined ? data["lastName"] : undefined;
            this.email = data["email"] !== undefined ? data["email"] : undefined;
            this.password = data["password"] !== undefined ? data["password"] : undefined;
            this.phone = data["phone"] !== undefined ? data["phone"] : undefined;
            this.userStatus = data["userStatus"] !== undefined ? data["userStatus"] : undefined;
        }
    }
    static fromJS(data) {
        return new User(data);
    }
    toJS(data) {
        data = data === undefined ? {} : data;
        data["id"] = this.id !== undefined ? this.id : undefined;
        data["username"] = this.username !== undefined ? this.username : undefined;
        data["firstName"] = this.firstName !== undefined ? this.firstName : undefined;
        data["lastName"] = this.lastName !== undefined ? this.lastName : undefined;
        data["email"] = this.email !== undefined ? this.email : undefined;
        data["password"] = this.password !== undefined ? this.password : undefined;
        data["phone"] = this.phone !== undefined ? this.phone : undefined;
        data["userStatus"] = this.userStatus !== undefined ? this.userStatus : undefined;
        return data;
    }
    toJSON() {
        return JSON.stringify(this.toJS());
    }
    clone() {
        const json = this.toJSON();
        return new User(JSON.parse(json));
    }
}
exports.User = User;
class Tag {
    constructor(data) {
        if (data !== undefined) {
            this.id = data["id"] !== undefined ? data["id"] : undefined;
            this.name = data["name"] !== undefined ? data["name"] : undefined;
        }
    }
    static fromJS(data) {
        return new Tag(data);
    }
    toJS(data) {
        data = data === undefined ? {} : data;
        data["id"] = this.id !== undefined ? this.id : undefined;
        data["name"] = this.name !== undefined ? this.name : undefined;
        return data;
    }
    toJSON() {
        return JSON.stringify(this.toJS());
    }
    clone() {
        const json = this.toJSON();
        return new Tag(JSON.parse(json));
    }
}
exports.Tag = Tag;
class Pet {
    constructor(data) {
        this.photoUrls = [];
        if (data !== undefined) {
            this.id = data["id"] !== undefined ? data["id"] : undefined;
            this.category = data["category"] ? Category.fromJS(data["category"]) : undefined;
            this.name = data["name"] !== undefined ? data["name"] : undefined;
            if (data["photoUrls"] && data["photoUrls"].constructor === Array) {
                this.photoUrls = [];
                for (let item of data["photoUrls"])
                    this.photoUrls.push(item);
            }
            if (data["tags"] && data["tags"].constructor === Array) {
                this.tags = [];
                for (let item of data["tags"])
                    this.tags.push(Tag.fromJS(item));
            }
            this.status = data["status"] !== undefined ? data["status"] : undefined;
        }
    }
    static fromJS(data) {
        return new Pet(data);
    }
    toJS(data) {
        data = data === undefined ? {} : data;
        data["id"] = this.id !== undefined ? this.id : undefined;
        data["category"] = this.category ? this.category.toJS() : undefined;
        data["name"] = this.name !== undefined ? this.name : undefined;
        if (this.photoUrls && this.photoUrls.constructor === Array) {
            data["photoUrls"] = [];
            for (let item of this.photoUrls)
                data["photoUrls"].push(item);
        }
        if (this.tags && this.tags.constructor === Array) {
            data["tags"] = [];
            for (let item of this.tags)
                data["tags"].push(item.toJS());
        }
        data["status"] = this.status !== undefined ? this.status : undefined;
        return data;
    }
    toJSON() {
        return JSON.stringify(this.toJS());
    }
    clone() {
        const json = this.toJSON();
        return new Pet(JSON.parse(json));
    }
}
exports.Pet = Pet;
class ApiResponse {
    constructor(data) {
        if (data !== undefined) {
            this.code = data["code"] !== undefined ? data["code"] : undefined;
            this.type = data["type"] !== undefined ? data["type"] : undefined;
            this.message = data["message"] !== undefined ? data["message"] : undefined;
        }
    }
    static fromJS(data) {
        return new ApiResponse(data);
    }
    toJS(data) {
        data = data === undefined ? {} : data;
        data["code"] = this.code !== undefined ? this.code : undefined;
        data["type"] = this.type !== undefined ? this.type : undefined;
        data["message"] = this.message !== undefined ? this.message : undefined;
        return data;
    }
    toJSON() {
        return JSON.stringify(this.toJS());
    }
    clone() {
        const json = this.toJSON();
        return new ApiResponse(JSON.parse(json));
    }
}
exports.ApiResponse = ApiResponse;
var Status;
(function (Status) {
    Status[Status["Available"] = "available"] = "Available";
    Status[Status["Pending"] = "pending"] = "Pending";
    Status[Status["Sold"] = "sold"] = "Sold";
})(Status = exports.Status || (exports.Status = {}));
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["Placed"] = "placed"] = "Placed";
    OrderStatus[OrderStatus["Approved"] = "approved"] = "Approved";
    OrderStatus[OrderStatus["Delivered"] = "delivered"] = "Delivered";
})(OrderStatus = exports.OrderStatus || (exports.OrderStatus = {}));
var PetStatus;
(function (PetStatus) {
    PetStatus[PetStatus["Available"] = "available"] = "Available";
    PetStatus[PetStatus["Pending"] = "pending"] = "Pending";
    PetStatus[PetStatus["Sold"] = "sold"] = "Sold";
})(PetStatus = exports.PetStatus || (exports.PetStatus = {}));
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
//# sourceMappingURL=serviceClientsPetStoreFetch.js.map