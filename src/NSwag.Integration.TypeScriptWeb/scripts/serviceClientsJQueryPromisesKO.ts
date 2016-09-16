﻿//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v5.6.6103.16540 (NJsonSchema v4.9.6102.40549) (http://NSwag.org)
// </auto-generated>
//----------------------

export class PersonsClient {
    baseUrl: string = undefined; 
    beforeSend: any = undefined; 

    constructor(baseUrl?: string) {
        this.baseUrl = baseUrl !== undefined ? baseUrl : "http://localhost:13452"; 
    }

    getAll(): Promise<Person[]> {
        return new Promise<Person[]>((resolve, reject) => {
            this.getAllWithCallbacks((result) => resolve(result), (exception, reason) => reject(exception));
        });
    }
    
    private getAllWithCallbacks(onSuccess?: (result: Person[]) => void, onFail?: (exception: string, reason: string) => void) {
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
        }).done((data, textStatus, xhr) => {
            this.processGetAllWithCallbacks(url, xhr, onSuccess, onFail);
        }).fail((xhr) => {
            this.processGetAllWithCallbacks(url, xhr, onSuccess, onFail);
        });
    }

    private processGetAllWithCallbacks(url: string, xhr: any, onSuccess?: any, onFail?: any) {
        try {
            var result = this.processGetAll(xhr);
            if (onSuccess !== undefined)
                onSuccess(result);
        } catch (e) {
            if (onFail !== undefined)
                onFail(e, "http_service_exception");
        }
    }

    private processGetAll(xhr: any) {
        var data = xhr.responseText; 
        var status = xhr.status.toString(); 

        if (status === "200") {
            var result200: Person[] = null; 
            if (data !== undefined && data !== null && data !== "") {
                var resultData200 = data === "" ? null : jQuery.parseJSON(data);
                if (resultData200 && resultData200.constructor === Array) {
                    result200 = [];
                    for (let item of resultData200)
                        result200.push(Person.fromJS(item));
                }
            }
            return result200;
        }
        else
        {
            throw new Error("error_no_callback_for_the_received_http_status");
        }
    }

    add(person: Person): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this.addWithCallbacks(person, (result) => resolve(result), (exception, reason) => reject(exception));
        });
    }
    
    private addWithCallbacks(person: Person, onSuccess?: (result: void) => void, onFail?: (exception: string, reason: string) => void) {
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
        }).done((data, textStatus, xhr) => {
            this.processAddWithCallbacks(url, xhr, onSuccess, onFail);
        }).fail((xhr) => {
            this.processAddWithCallbacks(url, xhr, onSuccess, onFail);
        });
    }

    private processAddWithCallbacks(url: string, xhr: any, onSuccess?: any, onFail?: any) {
        try {
            var result = this.processAdd(xhr);
            if (onSuccess !== undefined)
                onSuccess(result);
        } catch (e) {
            if (onFail !== undefined)
                onFail(e, "http_service_exception");
        }
    }

    private processAdd(xhr: any) {
        var data = xhr.responseText; 
        var status = xhr.status.toString(); 

        if (status === "204") {
            var result204: any = undefined; 
            return result204;
        }
        else
        {
            throw new Error("error_no_callback_for_the_received_http_status");
        }
    }

    find(gender: Gender): Promise<Person[]> {
        return new Promise<Person[]>((resolve, reject) => {
            this.findWithCallbacks(gender, (result) => resolve(result), (exception, reason) => reject(exception));
        });
    }
    
    private findWithCallbacks(gender: Gender, onSuccess?: (result: Person[]) => void, onFail?: (exception: string, reason: string) => void) {
        var url = this.baseUrl + "/api/Persons/find/{gender}"; 

        if (gender === undefined || gender === null)
            throw new Error("The parameter 'gender' must be defined.");
        url = url.replace("{gender}", encodeURIComponent("" + gender)); 

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
        }).done((data, textStatus, xhr) => {
            this.processFindWithCallbacks(url, xhr, onSuccess, onFail);
        }).fail((xhr) => {
            this.processFindWithCallbacks(url, xhr, onSuccess, onFail);
        });
    }

    private processFindWithCallbacks(url: string, xhr: any, onSuccess?: any, onFail?: any) {
        try {
            var result = this.processFind(xhr);
            if (onSuccess !== undefined)
                onSuccess(result);
        } catch (e) {
            if (onFail !== undefined)
                onFail(e, "http_service_exception");
        }
    }

    private processFind(xhr: any) {
        var data = xhr.responseText; 
        var status = xhr.status.toString(); 

        if (status === "200") {
            var result200: Person[] = null; 
            if (data !== undefined && data !== null && data !== "") {
                var resultData200 = data === "" ? null : jQuery.parseJSON(data);
                if (resultData200 && resultData200.constructor === Array) {
                    result200 = [];
                    for (let item of resultData200)
                        result200.push(Person.fromJS(item));
                }
            }
            return result200;
        }
        else
        {
            throw new Error("error_no_callback_for_the_received_http_status");
        }
    }

    find2(gender: Gender): Promise<Person[]> {
        return new Promise<Person[]>((resolve, reject) => {
            this.find2WithCallbacks(gender, (result) => resolve(result), (exception, reason) => reject(exception));
        });
    }
    
    private find2WithCallbacks(gender: Gender, onSuccess?: (result: Person[]) => void, onFail?: (exception: string, reason: string) => void) {
        var url = this.baseUrl + "/api/Persons/find2?"; 

        if (gender === undefined)
            throw new Error("The parameter 'gender' must be defined.");
        else
            url += "gender=" + encodeURIComponent("" + gender) + "&"; 

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
        }).done((data, textStatus, xhr) => {
            this.processFind2WithCallbacks(url, xhr, onSuccess, onFail);
        }).fail((xhr) => {
            this.processFind2WithCallbacks(url, xhr, onSuccess, onFail);
        });
    }

    private processFind2WithCallbacks(url: string, xhr: any, onSuccess?: any, onFail?: any) {
        try {
            var result = this.processFind2(xhr);
            if (onSuccess !== undefined)
                onSuccess(result);
        } catch (e) {
            if (onFail !== undefined)
                onFail(e, "http_service_exception");
        }
    }

    private processFind2(xhr: any) {
        var data = xhr.responseText; 
        var status = xhr.status.toString(); 

        if (status === "200") {
            var result200: Person[] = null; 
            if (data !== undefined && data !== null && data !== "") {
                var resultData200 = data === "" ? null : jQuery.parseJSON(data);
                if (resultData200 && resultData200.constructor === Array) {
                    result200 = [];
                    for (let item of resultData200)
                        result200.push(Person.fromJS(item));
                }
            }
            return result200;
        }
        else
        {
            throw new Error("error_no_callback_for_the_received_http_status");
        }
    }

    get(id: string): Promise<Person> {
        return new Promise<Person>((resolve, reject) => {
            this.getWithCallbacks(id, (result) => resolve(result), (exception, reason) => reject(exception));
        });
    }
    
    private getWithCallbacks(id: string, onSuccess?: (result: Person) => void, onFail?: (exception: PersonNotFoundException | string, reason: string) => void) {
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
        }).done((data, textStatus, xhr) => {
            this.processGetWithCallbacks(url, xhr, onSuccess, onFail);
        }).fail((xhr) => {
            this.processGetWithCallbacks(url, xhr, onSuccess, onFail);
        });
    }

    private processGetWithCallbacks(url: string, xhr: any, onSuccess?: any, onFail?: any) {
        try {
            var result = this.processGet(xhr);
            if (onSuccess !== undefined)
                onSuccess(result);
        } catch (e) {
            if (onFail !== undefined)
                onFail(e, "http_service_exception");
        }
    }

    private processGet(xhr: any) {
        var data = xhr.responseText; 
        var status = xhr.status.toString(); 

        if (status === "200") {
            var result200: Person = null; 
            if (data !== undefined && data !== null && data !== "") {
                var resultData200 = data === "" ? null : jQuery.parseJSON(data);
                result200 = resultData200 ? Person.fromJS(resultData200) : new Person();
            }
            return result200;
        }
        else
        if (status === "500") {
            var result500: PersonNotFoundException = null; 
            if (data !== undefined && data !== null && data !== "") {
                var resultData500 = data === "" ? null : jQuery.parseJSON(data);
                result500 = resultData500 ? PersonNotFoundException.fromJS(resultData500) : new PersonNotFoundException();
            }
            throw result500;
        }
        else
        {
            throw new Error("error_no_callback_for_the_received_http_status");
        }
    }

    delete(id: string): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this.deleteWithCallbacks(id, (result) => resolve(result), (exception, reason) => reject(exception));
        });
    }
    
    private deleteWithCallbacks(id: string, onSuccess?: (result: void) => void, onFail?: (exception: string, reason: string) => void) {
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
        }).done((data, textStatus, xhr) => {
            this.processDeleteWithCallbacks(url, xhr, onSuccess, onFail);
        }).fail((xhr) => {
            this.processDeleteWithCallbacks(url, xhr, onSuccess, onFail);
        });
    }

    private processDeleteWithCallbacks(url: string, xhr: any, onSuccess?: any, onFail?: any) {
        try {
            var result = this.processDelete(xhr);
            if (onSuccess !== undefined)
                onSuccess(result);
        } catch (e) {
            if (onFail !== undefined)
                onFail(e, "http_service_exception");
        }
    }

    private processDelete(xhr: any) {
        var data = xhr.responseText; 
        var status = xhr.status.toString(); 

        if (status === "204") {
            var result204: any = undefined; 
            return result204;
        }
        else
        {
            throw new Error("error_no_callback_for_the_received_http_status");
        }
    }

    /**
     * Gets the name of a person.
     * @id The person ID.
     * @return The person's name.
     */
    getName(id: string): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            this.getNameWithCallbacks(id, (result) => resolve(result), (exception, reason) => reject(exception));
        });
    }
    
    private getNameWithCallbacks(id: string, onSuccess?: (result: string) => void, onFail?: (exception: PersonNotFoundException | string, reason: string) => void) {
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
        }).done((data, textStatus, xhr) => {
            this.processGetNameWithCallbacks(url, xhr, onSuccess, onFail);
        }).fail((xhr) => {
            this.processGetNameWithCallbacks(url, xhr, onSuccess, onFail);
        });
    }

    private processGetNameWithCallbacks(url: string, xhr: any, onSuccess?: any, onFail?: any) {
        try {
            var result = this.processGetName(xhr);
            if (onSuccess !== undefined)
                onSuccess(result);
        } catch (e) {
            if (onFail !== undefined)
                onFail(e, "http_service_exception");
        }
    }

    private processGetName(xhr: any) {
        var data = xhr.responseText; 
        var status = xhr.status.toString(); 

        if (status === "200") {
            var result200: string = null; 
            if (data !== undefined && data !== null && data !== "") {
                var resultData200 = data === "" ? null : jQuery.parseJSON(data);
                result200 = resultData200 !== undefined ? resultData200 : null;
            }
            return result200;
        }
        else
        if (status === "500") {
            var result500: PersonNotFoundException = null; 
            if (data !== undefined && data !== null && data !== "") {
                var resultData500 = data === "" ? null : jQuery.parseJSON(data);
                result500 = resultData500 ? PersonNotFoundException.fromJS(resultData500) : new PersonNotFoundException();
            }
            throw result500;
        }
        else
        {
            throw new Error("error_no_callback_for_the_received_http_status");
        }
    }
}

export class GeoClient {
    baseUrl: string = undefined; 
    beforeSend: any = undefined; 

    constructor(baseUrl?: string) {
        this.baseUrl = baseUrl !== undefined ? baseUrl : "http://localhost:13452"; 
    }

    fromBodyTest(location: GeoPoint): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this.fromBodyTestWithCallbacks(location, (result) => resolve(result), (exception, reason) => reject(exception));
        });
    }
    
    private fromBodyTestWithCallbacks(location: GeoPoint, onSuccess?: (result: void) => void, onFail?: (exception: string, reason: string) => void) {
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
        }).done((data, textStatus, xhr) => {
            this.processFromBodyTestWithCallbacks(url, xhr, onSuccess, onFail);
        }).fail((xhr) => {
            this.processFromBodyTestWithCallbacks(url, xhr, onSuccess, onFail);
        });
    }

    private processFromBodyTestWithCallbacks(url: string, xhr: any, onSuccess?: any, onFail?: any) {
        try {
            var result = this.processFromBodyTest(xhr);
            if (onSuccess !== undefined)
                onSuccess(result);
        } catch (e) {
            if (onFail !== undefined)
                onFail(e, "http_service_exception");
        }
    }

    private processFromBodyTest(xhr: any) {
        var data = xhr.responseText; 
        var status = xhr.status.toString(); 

        if (status === "204") {
            var result204: any = undefined; 
            return result204;
        }
        else
        {
            throw new Error("error_no_callback_for_the_received_http_status");
        }
    }

    fromUriTest(latitude: number, longitude: number): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this.fromUriTestWithCallbacks(latitude, longitude, (result) => resolve(result), (exception, reason) => reject(exception));
        });
    }
    
    private fromUriTestWithCallbacks(latitude: number, longitude: number, onSuccess?: (result: void) => void, onFail?: (exception: string, reason: string) => void) {
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
        }).done((data, textStatus, xhr) => {
            this.processFromUriTestWithCallbacks(url, xhr, onSuccess, onFail);
        }).fail((xhr) => {
            this.processFromUriTestWithCallbacks(url, xhr, onSuccess, onFail);
        });
    }

    private processFromUriTestWithCallbacks(url: string, xhr: any, onSuccess?: any, onFail?: any) {
        try {
            var result = this.processFromUriTest(xhr);
            if (onSuccess !== undefined)
                onSuccess(result);
        } catch (e) {
            if (onFail !== undefined)
                onFail(e, "http_service_exception");
        }
    }

    private processFromUriTest(xhr: any) {
        var data = xhr.responseText; 
        var status = xhr.status.toString(); 

        if (status === "204") {
            var result204: any = undefined; 
            return result204;
        }
        else
        {
            throw new Error("error_no_callback_for_the_received_http_status");
        }
    }

    addPolygon(points: GeoPoint[]): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this.addPolygonWithCallbacks(points, (result) => resolve(result), (exception, reason) => reject(exception));
        });
    }
    
    private addPolygonWithCallbacks(points: GeoPoint[], onSuccess?: (result: void) => void, onFail?: (exception: string, reason: string) => void) {
        var url = this.baseUrl + "/api/Geo/AddPolygon"; 

        var contentData: any = [];
        if (points) {
            for (let item of points)
                contentData.push(item.toJS());
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
        }).done((data, textStatus, xhr) => {
            this.processAddPolygonWithCallbacks(url, xhr, onSuccess, onFail);
        }).fail((xhr) => {
            this.processAddPolygonWithCallbacks(url, xhr, onSuccess, onFail);
        });
    }

    private processAddPolygonWithCallbacks(url: string, xhr: any, onSuccess?: any, onFail?: any) {
        try {
            var result = this.processAddPolygon(xhr);
            if (onSuccess !== undefined)
                onSuccess(result);
        } catch (e) {
            if (onFail !== undefined)
                onFail(e, "http_service_exception");
        }
    }

    private processAddPolygon(xhr: any) {
        var data = xhr.responseText; 
        var status = xhr.status.toString(); 

        if (status === "204") {
            var result204: any = undefined; 
            return result204;
        }
        else
        {
            throw new Error("error_no_callback_for_the_received_http_status");
        }
    }

    refresh(): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this.refreshWithCallbacks((result) => resolve(result), (exception, reason) => reject(exception));
        });
    }
    
    private refreshWithCallbacks(onSuccess?: (result: void) => void, onFail?: (exception: string, reason: string) => void) {
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
        }).done((data, textStatus, xhr) => {
            this.processRefreshWithCallbacks(url, xhr, onSuccess, onFail);
        }).fail((xhr) => {
            this.processRefreshWithCallbacks(url, xhr, onSuccess, onFail);
        });
    }

    private processRefreshWithCallbacks(url: string, xhr: any, onSuccess?: any, onFail?: any) {
        try {
            var result = this.processRefresh(xhr);
            if (onSuccess !== undefined)
                onSuccess(result);
        } catch (e) {
            if (onFail !== undefined)
                onFail(e, "http_service_exception");
        }
    }

    private processRefresh(xhr: any) {
        var data = xhr.responseText; 
        var status = xhr.status.toString(); 

        if (status === "204") {
            var result204: any = undefined; 
            return result204;
        }
        else
        {
            throw new Error("error_no_callback_for_the_received_http_status");
        }
    }

    uploadFile(file: any): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this.uploadFileWithCallbacks(file, (result) => resolve(result), (exception, reason) => reject(exception));
        });
    }
    
    private uploadFileWithCallbacks(file: any, onSuccess?: (result: void) => void, onFail?: (exception: string, reason: string) => void) {
        var url = this.baseUrl + "/api/Geo/UploadFile"; 

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
        }).done((data, textStatus, xhr) => {
            this.processUploadFileWithCallbacks(url, xhr, onSuccess, onFail);
        }).fail((xhr) => {
            this.processUploadFileWithCallbacks(url, xhr, onSuccess, onFail);
        });
    }

    private processUploadFileWithCallbacks(url: string, xhr: any, onSuccess?: any, onFail?: any) {
        try {
            var result = this.processUploadFile(xhr);
            if (onSuccess !== undefined)
                onSuccess(result);
        } catch (e) {
            if (onFail !== undefined)
                onFail(e, "http_service_exception");
        }
    }

    private processUploadFile(xhr: any) {
        var data = xhr.responseText; 
        var status = xhr.status.toString(); 

        if (status === "204") {
            var result204: any = undefined; 
            return result204;
        }
        else
        {
            throw new Error("error_no_callback_for_the_received_http_status");
        }
    }

    uploadFiles(files: any[]): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this.uploadFilesWithCallbacks(files, (result) => resolve(result), (exception, reason) => reject(exception));
        });
    }
    
    private uploadFilesWithCallbacks(files: any[], onSuccess?: (result: void) => void, onFail?: (exception: string, reason: string) => void) {
        var url = this.baseUrl + "/api/Geo/UploadFiles"; 

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
        }).done((data, textStatus, xhr) => {
            this.processUploadFilesWithCallbacks(url, xhr, onSuccess, onFail);
        }).fail((xhr) => {
            this.processUploadFilesWithCallbacks(url, xhr, onSuccess, onFail);
        });
    }

    private processUploadFilesWithCallbacks(url: string, xhr: any, onSuccess?: any, onFail?: any) {
        try {
            var result = this.processUploadFiles(xhr);
            if (onSuccess !== undefined)
                onSuccess(result);
        } catch (e) {
            if (onFail !== undefined)
                onFail(e, "http_service_exception");
        }
    }

    private processUploadFiles(xhr: any) {
        var data = xhr.responseText; 
        var status = xhr.status.toString(); 

        if (status === "204") {
            var result204: any = undefined; 
            return result204;
        }
        else
        {
            throw new Error("error_no_callback_for_the_received_http_status");
        }
    }
}

export class Person {
    id = ko.observable<string>();
    /** Gets or sets the first name. */
    firstName = ko.observable<string>();
    /** Gets or sets the last name. */
    lastName = ko.observable<string>();
    gender = ko.observable<Gender>();
    dateOfBirth = ko.observable<Date>();
    weight = ko.observable<number>();
    height = ko.observable<number>();
    age = ko.observable<number>();
    address = ko.observable<Address>(new Address());
    children = ko.observableArray<Person>([]);
    skills = ko.observable<{ [key: string] : SkillLevelAsInteger; }>();
    protected discriminator = ko.observable<string>();

    constructor(data?: any) {
        this.discriminator("Person");
        if (data !== undefined) {
            var id_: string = null; 
            id_ = data["Id"] !== undefined ? data["Id"] : null;
            this.id(id_);

            var firstName_: string = null; 
            firstName_ = data["FirstName"] !== undefined ? data["FirstName"] : null;
            this.firstName(firstName_);

            var lastName_: string = null; 
            lastName_ = data["LastName"] !== undefined ? data["LastName"] : null;
            this.lastName(lastName_);

            var gender_: Gender = null; 
            gender_ = data["Gender"] !== undefined ? data["Gender"] : null;
            this.gender(gender_);

            var dateOfBirth_: Date = null; 
            dateOfBirth_ = data["DateOfBirth"] ? new Date(data["DateOfBirth"].toString()) : null;
            this.dateOfBirth(dateOfBirth_);

            var weight_: number = null; 
            weight_ = data["Weight"] !== undefined ? data["Weight"] : null;
            this.weight(weight_);

            var height_: number = null; 
            height_ = data["Height"] !== undefined ? data["Height"] : null;
            this.height(height_);

            var age_: number = null; 
            age_ = data["Age"] !== undefined ? data["Age"] : null;
            this.age(age_);

            var address_: Address = null; 
            address_ = data["Address"] ? Address.fromJS(data["Address"]) : new Address();
            this.address(address_);

            var children_: Person[] = null; 
            if (data["Children"] && data["Children"].constructor === Array) {
                children_ = [];
                for (let item of data["Children"])
                    children_.push(Person.fromJS(item));
            }
            this.children(children_);

            var skills_: { [key: string] : SkillLevelAsInteger; } = null; 
            if (data["Skills"]) {
                skills_ = {};
                for (let key in data["Skills"]) {
                    if (data["Skills"].hasOwnProperty(key))
                        skills_[key] = data["Skills"][key] !== undefined ? data["Skills"][key] : null;
                }
            }
            this.skills(skills_);

            var discriminator_: string = null; 
            discriminator_ = data["discriminator"] !== undefined ? data["discriminator"] : null;
            this.discriminator(discriminator_);

        }
    }

    static fromJS(data: any): Person {
        if (data["discriminator"] === "Teacher")
            return new Teacher(data);
        return new Person(data);
    }

    toJS(data?: any) {
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
            for (let item of children_)
                data["Children"].push(item.toJS());
        }

        var skills_ = this.skills(); 
        if (skills_) {
            data["Skills"] = {};
            for (let key in skills_) {
                if (skills_.hasOwnProperty(key))
                    data["Skills"][key] = skills_[key] !== undefined ? skills_[key] : null;
            }
        }

        var discriminator_ = this.discriminator(); 
        data["discriminator"] = discriminator_ !== undefined ? discriminator_ : null;

        return data; 
    }

    toJSON() {
        return JSON.stringify(this.toJS());
    }

    clone() {
        var json = this.toJSON();
        return new Person(JSON.parse(json));
    }
}

export class Teacher extends Person {
    course = ko.observable<string>();

    constructor(data?: any) {
        super(data);
        this.discriminator("Teacher");
        if (data !== undefined) {
            var course_: string = null; 
            course_ = data["Course"] !== undefined ? data["Course"] : null;
            this.course(course_);

        }
    }

    static fromJS(data: any): Teacher {
        return new Teacher(data);
    }

    toJS(data?: any) {
        data = data === undefined ? {} : data;
        var course_ = this.course(); 
        data["Course"] = course_ !== undefined ? course_ : null;

        super.toJS(data);
        return data; 
    }

    toJSON() {
        return JSON.stringify(this.toJS());
    }

    clone() {
        var json = this.toJSON();
        return new Teacher(JSON.parse(json));
    }
}

export enum Gender {
    Male = <any>"Male", 
    Female = <any>"Female", 
}

export class Address {
    isPrimary = ko.observable<boolean>();
    city = ko.observable<string>();

    constructor(data?: any) {
        if (data !== undefined) {
            var isPrimary_: boolean = null; 
            isPrimary_ = data["IsPrimary"] !== undefined ? data["IsPrimary"] : null;
            this.isPrimary(isPrimary_);

            var city_: string = null; 
            city_ = data["City"] !== undefined ? data["City"] : null;
            this.city(city_);

        }
    }

    static fromJS(data: any): Address {
        return new Address(data);
    }

    toJS(data?: any) {
        data = data === undefined ? {} : data;
        var isPrimary_ = this.isPrimary(); 
        data["IsPrimary"] = isPrimary_ !== undefined ? isPrimary_ : null;

        var city_ = this.city(); 
        data["City"] = city_ !== undefined ? city_ : null;

        return data; 
    }

    toJSON() {
        return JSON.stringify(this.toJS());
    }

    clone() {
        var json = this.toJSON();
        return new Address(JSON.parse(json));
    }
}

export enum SkillLevelAsInteger {
    Low = 0, 
    Medium = 1, 
    Height = 2, 
}

export class Exception {
    message = ko.observable<string>();
    innerException = ko.observable<Exception>(new Exception());
    stackTrace = ko.observable<string>();
    source = ko.observable<string>();

    constructor(data?: any) {
        if (data !== undefined) {
            var message_: string = null; 
            message_ = data["Message"] !== undefined ? data["Message"] : null;
            this.message(message_);

            var innerException_: Exception = null; 
            innerException_ = data["InnerException"] ? Exception.fromJS(data["InnerException"]) : new Exception();
            this.innerException(innerException_);

            var stackTrace_: string = null; 
            stackTrace_ = data["StackTrace"] !== undefined ? data["StackTrace"] : null;
            this.stackTrace(stackTrace_);

            var source_: string = null; 
            source_ = data["Source"] !== undefined ? data["Source"] : null;
            this.source(source_);

        }
    }

    static fromJS(data: any): Exception {
        return new Exception(data);
    }

    toJS(data?: any) {
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
    }

    toJSON() {
        return JSON.stringify(this.toJS());
    }

    clone() {
        var json = this.toJSON();
        return new Exception(JSON.parse(json));
    }
}

export class PersonNotFoundException extends Exception {
    id = ko.observable<string>();

    constructor(data?: any) {
        super(data);
        if (data !== undefined) {
            var id_: string = null; 
            id_ = data["id"] !== undefined ? data["id"] : null;
            this.id(id_);

        }
    }

    static fromJS(data: any): PersonNotFoundException {
        return new PersonNotFoundException(data);
    }

    toJS(data?: any) {
        data = data === undefined ? {} : data;
        var id_ = this.id(); 
        data["id"] = id_ !== undefined ? id_ : null;

        super.toJS(data);
        return data; 
    }

    toJSON() {
        return JSON.stringify(this.toJS());
    }

    clone() {
        var json = this.toJSON();
        return new PersonNotFoundException(JSON.parse(json));
    }
}

export class GeoPoint {
    latitude = ko.observable<number>();
    longitude = ko.observable<number>();

    constructor(data?: any) {
        if (data !== undefined) {
            var latitude_: number = null; 
            latitude_ = data["Latitude"] !== undefined ? data["Latitude"] : null;
            this.latitude(latitude_);

            var longitude_: number = null; 
            longitude_ = data["Longitude"] !== undefined ? data["Longitude"] : null;
            this.longitude(longitude_);

        }
    }

    static fromJS(data: any): GeoPoint {
        return new GeoPoint(data);
    }

    toJS(data?: any) {
        data = data === undefined ? {} : data;
        var latitude_ = this.latitude(); 
        data["Latitude"] = latitude_ !== undefined ? latitude_ : null;

        var longitude_ = this.longitude(); 
        data["Longitude"] = longitude_ !== undefined ? longitude_ : null;

        return data; 
    }

    toJSON() {
        return JSON.stringify(this.toJS());
    }

    clone() {
        var json = this.toJSON();
        return new GeoPoint(JSON.parse(json));
    }
}