﻿//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v6.3.6122.18409 (NJsonSchema v4.23.6120.19206) (http://NSwag.org)
// </auto-generated>
//----------------------

export class GeoClient {
    baseUrl: string = undefined; 
    beforeSend: any = undefined; 

    constructor(baseUrl?: string) {
        this.baseUrl = baseUrl !== undefined ? baseUrl : "http://localhost:13452"; 
    }

    fromBodyTest(location: GeoPoint, onSuccess?: () => void, onFail?: (exception: string, reason: string) => void) {
        let url_ = this.baseUrl + "/api/Geo/FromBodyTest"; 

        const content_ = JSON.stringify(location ? location.toJS() : null);

        jQuery.ajax({
            url: url_,
            beforeSend: this.beforeSend,
            type: "post",
            data: content_,
            dataType: "text",
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        }).done((data, textStatus, xhr) => {
            this.processFromBodyTestWithCallbacks(url_, xhr, onSuccess, onFail);
        }).fail((xhr) => {
            this.processFromBodyTestWithCallbacks(url_, xhr, onSuccess, onFail);
        });
    }

    private processFromBodyTestWithCallbacks(url: string, xhr: any, onSuccess?: any, onFail?: any) {
        try {
            let result = this.processFromBodyTest(xhr);
            if (onSuccess !== undefined)
                onSuccess(result);
        } catch (e) {
            if (onFail !== undefined)
                onFail(e, "http_service_exception");
        }
    }

    private processFromBodyTest(xhr: any) {
        const data = xhr.responseText; 
        const status = xhr.status.toString(); 

        if (status === "204") {
            let result204: any = undefined; 
            return result204;
        }
        else
        {
            throw new Error("error_no_callback_for_the_received_http_status");
        }
    }

    fromUriTest(latitude: number, longitude: number, onSuccess?: () => void, onFail?: (exception: string, reason: string) => void) {
        let url_ = this.baseUrl + "/api/Geo/FromUriTest?"; 

        if (latitude === null)
            throw new Error("The parameter 'latitude' cannot be null.");
        else if (latitude !== undefined)
            url_ += "Latitude=" + encodeURIComponent("" + latitude) + "&"; 
        if (longitude === null)
            throw new Error("The parameter 'longitude' cannot be null.");
        else if (longitude !== undefined)
            url_ += "Longitude=" + encodeURIComponent("" + longitude) + "&"; 

        const content_ = "";

        jQuery.ajax({
            url: url_,
            beforeSend: this.beforeSend,
            type: "post",
            data: content_,
            dataType: "text",
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        }).done((data, textStatus, xhr) => {
            this.processFromUriTestWithCallbacks(url_, xhr, onSuccess, onFail);
        }).fail((xhr) => {
            this.processFromUriTestWithCallbacks(url_, xhr, onSuccess, onFail);
        });
    }

    private processFromUriTestWithCallbacks(url: string, xhr: any, onSuccess?: any, onFail?: any) {
        try {
            let result = this.processFromUriTest(xhr);
            if (onSuccess !== undefined)
                onSuccess(result);
        } catch (e) {
            if (onFail !== undefined)
                onFail(e, "http_service_exception");
        }
    }

    private processFromUriTest(xhr: any) {
        const data = xhr.responseText; 
        const status = xhr.status.toString(); 

        if (status === "204") {
            let result204: any = undefined; 
            return result204;
        }
        else
        {
            throw new Error("error_no_callback_for_the_received_http_status");
        }
    }

    addPolygon(points: GeoPoint[], onSuccess?: () => void, onFail?: (exception: string, reason: string) => void) {
        let url_ = this.baseUrl + "/api/Geo/AddPolygon"; 

        let contentData_: any = [];
        if (points) {
            for (let item of points)
                contentData_.push(item.toJS());
        }
        const content_ = JSON.stringify(points ? contentData_ : null);

        jQuery.ajax({
            url: url_,
            beforeSend: this.beforeSend,
            type: "post",
            data: content_,
            dataType: "text",
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        }).done((data, textStatus, xhr) => {
            this.processAddPolygonWithCallbacks(url_, xhr, onSuccess, onFail);
        }).fail((xhr) => {
            this.processAddPolygonWithCallbacks(url_, xhr, onSuccess, onFail);
        });
    }

    private processAddPolygonWithCallbacks(url: string, xhr: any, onSuccess?: any, onFail?: any) {
        try {
            let result = this.processAddPolygon(xhr);
            if (onSuccess !== undefined)
                onSuccess(result);
        } catch (e) {
            if (onFail !== undefined)
                onFail(e, "http_service_exception");
        }
    }

    private processAddPolygon(xhr: any) {
        const data = xhr.responseText; 
        const status = xhr.status.toString(); 

        if (status === "204") {
            let result204: any = undefined; 
            return result204;
        }
        else
        {
            throw new Error("error_no_callback_for_the_received_http_status");
        }
    }

    refresh(onSuccess?: () => void, onFail?: (exception: string, reason: string) => void) {
        let url_ = this.baseUrl + "/api/Geo/Refresh"; 

        const content_ = "";

        jQuery.ajax({
            url: url_,
            beforeSend: this.beforeSend,
            type: "post",
            data: content_,
            dataType: "text",
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        }).done((data, textStatus, xhr) => {
            this.processRefreshWithCallbacks(url_, xhr, onSuccess, onFail);
        }).fail((xhr) => {
            this.processRefreshWithCallbacks(url_, xhr, onSuccess, onFail);
        });
    }

    private processRefreshWithCallbacks(url: string, xhr: any, onSuccess?: any, onFail?: any) {
        try {
            let result = this.processRefresh(xhr);
            if (onSuccess !== undefined)
                onSuccess(result);
        } catch (e) {
            if (onFail !== undefined)
                onFail(e, "http_service_exception");
        }
    }

    private processRefresh(xhr: any) {
        const data = xhr.responseText; 
        const status = xhr.status.toString(); 

        if (status === "204") {
            let result204: any = undefined; 
            return result204;
        }
        else
        {
            throw new Error("error_no_callback_for_the_received_http_status");
        }
    }

    uploadFile(file: FileParameter, onSuccess?: (result: boolean) => void, onFail?: (exception: string, reason: string) => void) {
        let url_ = this.baseUrl + "/api/Geo/UploadFile"; 

        const content_ = new FormData();
        if (file !== null)
            content_.append("file", file.data, file.fileName ? file.fileName : "file");

        jQuery.ajax({
            url: url_,
            beforeSend: this.beforeSend,
            type: "post",
            data: content_,
            mimeType: "multipart/form-data",
            contentType: false,
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        }).done((data, textStatus, xhr) => {
            this.processUploadFileWithCallbacks(url_, xhr, onSuccess, onFail);
        }).fail((xhr) => {
            this.processUploadFileWithCallbacks(url_, xhr, onSuccess, onFail);
        });
    }

    private processUploadFileWithCallbacks(url: string, xhr: any, onSuccess?: any, onFail?: any) {
        try {
            let result = this.processUploadFile(xhr);
            if (onSuccess !== undefined)
                onSuccess(result);
        } catch (e) {
            if (onFail !== undefined)
                onFail(e, "http_service_exception");
        }
    }

    private processUploadFile(xhr: any) {
        const data = xhr.responseText; 
        const status = xhr.status.toString(); 

        if (status === "200") {
            let result200: boolean = null; 
            if (data !== undefined && data !== null && data !== "") {
                let resultData200 = data === "" ? null : jQuery.parseJSON(data);
                result200 = resultData200 !== undefined ? resultData200 : null;
            }
            return result200;
        }
        else
        {
            throw new Error("error_no_callback_for_the_received_http_status");
        }
    }

    uploadFiles(files: FileParameter[], onSuccess?: () => void, onFail?: (exception: string, reason: string) => void) {
        let url_ = this.baseUrl + "/api/Geo/UploadFiles"; 

        const content_ = new FormData();
        if (files !== null)
            files.forEach(item_ => content_.append("files", item_.data, item_.fileName ? item_.fileName : "files") );

        jQuery.ajax({
            url: url_,
            beforeSend: this.beforeSend,
            type: "post",
            data: content_,
            mimeType: "multipart/form-data",
            contentType: false,
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        }).done((data, textStatus, xhr) => {
            this.processUploadFilesWithCallbacks(url_, xhr, onSuccess, onFail);
        }).fail((xhr) => {
            this.processUploadFilesWithCallbacks(url_, xhr, onSuccess, onFail);
        });
    }

    private processUploadFilesWithCallbacks(url: string, xhr: any, onSuccess?: any, onFail?: any) {
        try {
            let result = this.processUploadFiles(xhr);
            if (onSuccess !== undefined)
                onSuccess(result);
        } catch (e) {
            if (onFail !== undefined)
                onFail(e, "http_service_exception");
        }
    }

    private processUploadFiles(xhr: any) {
        const data = xhr.responseText; 
        const status = xhr.status.toString(); 

        if (status === "204") {
            let result204: any = undefined; 
            return result204;
        }
        else
        {
            throw new Error("error_no_callback_for_the_received_http_status");
        }
    }

    saveItems(request: GenericRequestOfAddressAndPerson, onSuccess?: () => void, onFail?: (exception: Exception | string, reason: string) => void) {
        let url_ = this.baseUrl + "/api/Geo/SaveItems"; 

        const content_ = JSON.stringify(request ? request.toJS() : null);

        jQuery.ajax({
            url: url_,
            beforeSend: this.beforeSend,
            type: "post",
            data: content_,
            dataType: "text",
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        }).done((data, textStatus, xhr) => {
            this.processSaveItemsWithCallbacks(url_, xhr, onSuccess, onFail);
        }).fail((xhr) => {
            this.processSaveItemsWithCallbacks(url_, xhr, onSuccess, onFail);
        });
    }

    private processSaveItemsWithCallbacks(url: string, xhr: any, onSuccess?: any, onFail?: any) {
        try {
            let result = this.processSaveItems(xhr);
            if (onSuccess !== undefined)
                onSuccess(result);
        } catch (e) {
            if (onFail !== undefined)
                onFail(e, "http_service_exception");
        }
    }

    private processSaveItems(xhr: any) {
        const data = xhr.responseText; 
        const status = xhr.status.toString(); 

        if (status === "204") {
            let result204: any = undefined; 
            return result204;
        }
        else
        if (status === "450") {
            let result450: Exception = null; 
            if (data !== undefined && data !== null && data !== "") {
                let resultData450 = data === "" ? null : jQuery.parseJSON(data);
                result450 = resultData450 ? Exception.fromJS(resultData450) : null;
            }
            throw result450;
        }
        else
        {
            throw new Error("error_no_callback_for_the_received_http_status");
        }
    }

    getUploadedFile(id: number, onSuccess?: (result: any) => void, onFail?: (exception: string, reason: string) => void) {
        let url_ = this.baseUrl + "/api/Geo/GetUploadedFile/{id}"; 

        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id)); 

        const content_ = "";

        jQuery.ajax({
            url: url_,
            beforeSend: this.beforeSend,
            type: "get",
            data: content_,
            dataType: "text",
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        }).done((data, textStatus, xhr) => {
            this.processGetUploadedFileWithCallbacks(url_, xhr, onSuccess, onFail);
        }).fail((xhr) => {
            this.processGetUploadedFileWithCallbacks(url_, xhr, onSuccess, onFail);
        });
    }

    private processGetUploadedFileWithCallbacks(url: string, xhr: any, onSuccess?: any, onFail?: any) {
        try {
            let result = this.processGetUploadedFile(xhr);
            if (onSuccess !== undefined)
                onSuccess(result);
        } catch (e) {
            if (onFail !== undefined)
                onFail(e, "http_service_exception");
        }
    }

    private processGetUploadedFile(xhr: any) {
        const data = xhr.responseText; 
        const status = xhr.status.toString(); 

        if (status === "200") {
            let result200: any = null; 
            if (data !== undefined && data !== null && data !== "") {
                result200 = data;
            }
            return result200;
        }
        else
        {
            throw new Error("error_no_callback_for_the_received_http_status");
        }
    }
}

export class PersonsClient {
    baseUrl: string = undefined; 
    beforeSend: any = undefined; 

    constructor(baseUrl?: string) {
        this.baseUrl = baseUrl !== undefined ? baseUrl : "http://localhost:13452"; 
    }

    getAll(onSuccess?: (result: Person[]) => void, onFail?: (exception: string, reason: string) => void) {
        let url_ = this.baseUrl + "/api/Persons"; 

        const content_ = "";

        jQuery.ajax({
            url: url_,
            beforeSend: this.beforeSend,
            type: "get",
            data: content_,
            dataType: "text",
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        }).done((data, textStatus, xhr) => {
            this.processGetAllWithCallbacks(url_, xhr, onSuccess, onFail);
        }).fail((xhr) => {
            this.processGetAllWithCallbacks(url_, xhr, onSuccess, onFail);
        });
    }

    private processGetAllWithCallbacks(url: string, xhr: any, onSuccess?: any, onFail?: any) {
        try {
            let result = this.processGetAll(xhr);
            if (onSuccess !== undefined)
                onSuccess(result);
        } catch (e) {
            if (onFail !== undefined)
                onFail(e, "http_service_exception");
        }
    }

    private processGetAll(xhr: any) {
        const data = xhr.responseText; 
        const status = xhr.status.toString(); 

        if (status === "200") {
            let result200: Person[] = null; 
            if (data !== undefined && data !== null && data !== "") {
                let resultData200 = data === "" ? null : jQuery.parseJSON(data);
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

    add(person: Person, onSuccess?: () => void, onFail?: (exception: string, reason: string) => void) {
        let url_ = this.baseUrl + "/api/Persons"; 

        const content_ = JSON.stringify(person ? person.toJS() : null);

        jQuery.ajax({
            url: url_,
            beforeSend: this.beforeSend,
            type: "post",
            data: content_,
            dataType: "text",
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        }).done((data, textStatus, xhr) => {
            this.processAddWithCallbacks(url_, xhr, onSuccess, onFail);
        }).fail((xhr) => {
            this.processAddWithCallbacks(url_, xhr, onSuccess, onFail);
        });
    }

    private processAddWithCallbacks(url: string, xhr: any, onSuccess?: any, onFail?: any) {
        try {
            let result = this.processAdd(xhr);
            if (onSuccess !== undefined)
                onSuccess(result);
        } catch (e) {
            if (onFail !== undefined)
                onFail(e, "http_service_exception");
        }
    }

    private processAdd(xhr: any) {
        const data = xhr.responseText; 
        const status = xhr.status.toString(); 

        if (status === "204") {
            let result204: any = undefined; 
            return result204;
        }
        else
        {
            throw new Error("error_no_callback_for_the_received_http_status");
        }
    }

    find(gender: Gender, onSuccess?: (result: Person[]) => void, onFail?: (exception: string, reason: string) => void) {
        let url_ = this.baseUrl + "/api/Persons/find/{gender}"; 

        if (gender === undefined || gender === null)
            throw new Error("The parameter 'gender' must be defined.");
        url_ = url_.replace("{gender}", encodeURIComponent("" + gender)); 

        const content_ = "";

        jQuery.ajax({
            url: url_,
            beforeSend: this.beforeSend,
            type: "post",
            data: content_,
            dataType: "text",
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        }).done((data, textStatus, xhr) => {
            this.processFindWithCallbacks(url_, xhr, onSuccess, onFail);
        }).fail((xhr) => {
            this.processFindWithCallbacks(url_, xhr, onSuccess, onFail);
        });
    }

    private processFindWithCallbacks(url: string, xhr: any, onSuccess?: any, onFail?: any) {
        try {
            let result = this.processFind(xhr);
            if (onSuccess !== undefined)
                onSuccess(result);
        } catch (e) {
            if (onFail !== undefined)
                onFail(e, "http_service_exception");
        }
    }

    private processFind(xhr: any) {
        const data = xhr.responseText; 
        const status = xhr.status.toString(); 

        if (status === "200") {
            let result200: Person[] = null; 
            if (data !== undefined && data !== null && data !== "") {
                let resultData200 = data === "" ? null : jQuery.parseJSON(data);
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

    find2(gender: Gender, onSuccess?: (result: Person[]) => void, onFail?: (exception: string, reason: string) => void) {
        let url_ = this.baseUrl + "/api/Persons/find2?"; 

        if (gender === undefined)
            throw new Error("The parameter 'gender' must be defined.");
        else
            url_ += "gender=" + encodeURIComponent("" + gender) + "&"; 

        const content_ = "";

        jQuery.ajax({
            url: url_,
            beforeSend: this.beforeSend,
            type: "post",
            data: content_,
            dataType: "text",
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        }).done((data, textStatus, xhr) => {
            this.processFind2WithCallbacks(url_, xhr, onSuccess, onFail);
        }).fail((xhr) => {
            this.processFind2WithCallbacks(url_, xhr, onSuccess, onFail);
        });
    }

    private processFind2WithCallbacks(url: string, xhr: any, onSuccess?: any, onFail?: any) {
        try {
            let result = this.processFind2(xhr);
            if (onSuccess !== undefined)
                onSuccess(result);
        } catch (e) {
            if (onFail !== undefined)
                onFail(e, "http_service_exception");
        }
    }

    private processFind2(xhr: any) {
        const data = xhr.responseText; 
        const status = xhr.status.toString(); 

        if (status === "200") {
            let result200: Person[] = null; 
            if (data !== undefined && data !== null && data !== "") {
                let resultData200 = data === "" ? null : jQuery.parseJSON(data);
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

    get(id: string, onSuccess?: (result: Person) => void, onFail?: (exception: PersonNotFoundException | string, reason: string) => void) {
        let url_ = this.baseUrl + "/api/Persons/{id}"; 

        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id)); 

        const content_ = "";

        jQuery.ajax({
            url: url_,
            beforeSend: this.beforeSend,
            type: "get",
            data: content_,
            dataType: "text",
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        }).done((data, textStatus, xhr) => {
            this.processGetWithCallbacks(url_, xhr, onSuccess, onFail);
        }).fail((xhr) => {
            this.processGetWithCallbacks(url_, xhr, onSuccess, onFail);
        });
    }

    private processGetWithCallbacks(url: string, xhr: any, onSuccess?: any, onFail?: any) {
        try {
            let result = this.processGet(xhr);
            if (onSuccess !== undefined)
                onSuccess(result);
        } catch (e) {
            if (onFail !== undefined)
                onFail(e, "http_service_exception");
        }
    }

    private processGet(xhr: any) {
        const data = xhr.responseText; 
        const status = xhr.status.toString(); 

        if (status === "200") {
            let result200: Person = null; 
            if (data !== undefined && data !== null && data !== "") {
                let resultData200 = data === "" ? null : jQuery.parseJSON(data);
                result200 = resultData200 ? Person.fromJS(resultData200) : null;
            }
            return result200;
        }
        else
        if (status === "500") {
            let result500: PersonNotFoundException = null; 
            if (data !== undefined && data !== null && data !== "") {
                let resultData500 = data === "" ? null : jQuery.parseJSON(data);
                result500 = resultData500 ? PersonNotFoundException.fromJS(resultData500) : null;
            }
            throw result500;
        }
        else
        {
            throw new Error("error_no_callback_for_the_received_http_status");
        }
    }

    delete(id: string, onSuccess?: () => void, onFail?: (exception: string, reason: string) => void) {
        let url_ = this.baseUrl + "/api/Persons/{id}"; 

        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id)); 

        const content_ = "";

        jQuery.ajax({
            url: url_,
            beforeSend: this.beforeSend,
            type: "delete",
            data: content_,
            dataType: "text",
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        }).done((data, textStatus, xhr) => {
            this.processDeleteWithCallbacks(url_, xhr, onSuccess, onFail);
        }).fail((xhr) => {
            this.processDeleteWithCallbacks(url_, xhr, onSuccess, onFail);
        });
    }

    private processDeleteWithCallbacks(url: string, xhr: any, onSuccess?: any, onFail?: any) {
        try {
            let result = this.processDelete(xhr);
            if (onSuccess !== undefined)
                onSuccess(result);
        } catch (e) {
            if (onFail !== undefined)
                onFail(e, "http_service_exception");
        }
    }

    private processDelete(xhr: any) {
        const data = xhr.responseText; 
        const status = xhr.status.toString(); 

        if (status === "204") {
            let result204: any = undefined; 
            return result204;
        }
        else
        {
            throw new Error("error_no_callback_for_the_received_http_status");
        }
    }

    throw(id: string, onSuccess?: (result: Person) => void, onFail?: (exception: PersonNotFoundException | string, reason: string) => void) {
        let url_ = this.baseUrl + "/api/Persons/Throw?"; 

        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined and cannot be null.");
        else
            url_ += "id=" + encodeURIComponent("" + id) + "&"; 

        const content_ = "";

        jQuery.ajax({
            url: url_,
            beforeSend: this.beforeSend,
            type: "post",
            data: content_,
            dataType: "text",
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        }).done((data, textStatus, xhr) => {
            this.processThrowWithCallbacks(url_, xhr, onSuccess, onFail);
        }).fail((xhr) => {
            this.processThrowWithCallbacks(url_, xhr, onSuccess, onFail);
        });
    }

    private processThrowWithCallbacks(url: string, xhr: any, onSuccess?: any, onFail?: any) {
        try {
            let result = this.processThrow(xhr);
            if (onSuccess !== undefined)
                onSuccess(result);
        } catch (e) {
            if (onFail !== undefined)
                onFail(e, "http_service_exception");
        }
    }

    private processThrow(xhr: any) {
        const data = xhr.responseText; 
        const status = xhr.status.toString(); 

        if (status === "200") {
            let result200: Person = null; 
            if (data !== undefined && data !== null && data !== "") {
                let resultData200 = data === "" ? null : jQuery.parseJSON(data);
                result200 = resultData200 ? Person.fromJS(resultData200) : null;
            }
            return result200;
        }
        else
        if (status === "500") {
            let result500: PersonNotFoundException = null; 
            if (data !== undefined && data !== null && data !== "") {
                let resultData500 = data === "" ? null : jQuery.parseJSON(data);
                result500 = resultData500 ? PersonNotFoundException.fromJS(resultData500) : null;
            }
            throw result500;
        }
        else
        {
            throw new Error("error_no_callback_for_the_received_http_status");
        }
    }

    getName(id: string, onSuccess?: (result: string) => void, onFail?: (exception: PersonNotFoundException | string, reason: string) => void) {
        let url_ = this.baseUrl + "/api/Persons/{id}/Name"; 

        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id)); 

        const content_ = "";

        jQuery.ajax({
            url: url_,
            beforeSend: this.beforeSend,
            type: "get",
            data: content_,
            dataType: "text",
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        }).done((data, textStatus, xhr) => {
            this.processGetNameWithCallbacks(url_, xhr, onSuccess, onFail);
        }).fail((xhr) => {
            this.processGetNameWithCallbacks(url_, xhr, onSuccess, onFail);
        });
    }

    private processGetNameWithCallbacks(url: string, xhr: any, onSuccess?: any, onFail?: any) {
        try {
            let result = this.processGetName(xhr);
            if (onSuccess !== undefined)
                onSuccess(result);
        } catch (e) {
            if (onFail !== undefined)
                onFail(e, "http_service_exception");
        }
    }

    private processGetName(xhr: any) {
        const data = xhr.responseText; 
        const status = xhr.status.toString(); 

        if (status === "200") {
            let result200: string = null; 
            if (data !== undefined && data !== null && data !== "") {
                let resultData200 = data === "" ? null : jQuery.parseJSON(data);
                result200 = resultData200 !== undefined ? resultData200 : null;
            }
            return result200;
        }
        else
        if (status === "500") {
            let result500: PersonNotFoundException = null; 
            if (data !== undefined && data !== null && data !== "") {
                let resultData500 = data === "" ? null : jQuery.parseJSON(data);
                result500 = resultData500 ? PersonNotFoundException.fromJS(resultData500) : null;
            }
            throw result500;
        }
        else
        {
            throw new Error("error_no_callback_for_the_received_http_status");
        }
    }
}

export class Person { 
    id: string; 
    firstName: string; 
    lastName: string; 
    gender: Gender; 
    dateOfBirth: Date; 
    weight: number; 
    height: number; 
    age: number; 
    averageSleepTime: string; 
    address: Address = new Address(); 
    children: Person[] = []; 
    skills: { [key: string] : SkillLevelAsInteger; };
    protected _discriminator: string;

    constructor(data?: any) {
        this._discriminator = "Person";
        if (data !== undefined) {
            this.id = data["Id"] !== undefined ? data["Id"] : null;
            this.firstName = data["FirstName"] !== undefined ? data["FirstName"] : null;
            this.lastName = data["LastName"] !== undefined ? data["LastName"] : null;
            this.gender = data["Gender"] !== undefined ? data["Gender"] : null;
            this.dateOfBirth = data["DateOfBirth"] ? new Date(data["DateOfBirth"].toString()) : null;
            this.weight = data["Weight"] !== undefined ? data["Weight"] : null;
            this.height = data["Height"] !== undefined ? data["Height"] : null;
            this.age = data["Age"] !== undefined ? data["Age"] : null;
            this.averageSleepTime = data["AverageSleepTime"] !== undefined ? data["AverageSleepTime"] : null;
            this.address = data["Address"] ? Address.fromJS(data["Address"]) : new Address();
            if (data["Children"] && data["Children"].constructor === Array) {
                this.children = [];
                for (let item of data["Children"])
                    this.children.push(Person.fromJS(item));
            }
            if (data["Skills"]) {
                this.skills = {};
                for (let key in data["Skills"]) {
                    if (data["Skills"].hasOwnProperty(key))
                        this.skills[key] = data["Skills"][key] !== undefined ? data["Skills"][key] : null;
                }
            }
        }
    }

    static fromJS(data: any): Person {
        if (data["discriminator"] === "Teacher")
            return new Teacher(data);
        return new Person(data);
    }

    toJS(data?: any) {
        data = data === undefined ? {} : data;
        data["discriminator"] = this._discriminator; 
        data["Id"] = this.id !== undefined ? this.id : null;
        data["FirstName"] = this.firstName !== undefined ? this.firstName : null;
        data["LastName"] = this.lastName !== undefined ? this.lastName : null;
        data["Gender"] = this.gender !== undefined ? this.gender : null;
        data["DateOfBirth"] = this.dateOfBirth ? this.dateOfBirth.toISOString() : null;
        data["Weight"] = this.weight !== undefined ? this.weight : null;
        data["Height"] = this.height !== undefined ? this.height : null;
        data["Age"] = this.age !== undefined ? this.age : null;
        data["AverageSleepTime"] = this.averageSleepTime !== undefined ? this.averageSleepTime : null;
        data["Address"] = this.address ? this.address.toJS() : null;
        if (this.children && this.children.constructor === Array) {
            data["Children"] = [];
            for (let item of this.children)
                data["Children"].push(item.toJS());
        }
        if (this.skills) {
            data["Skills"] = {};
            for (let key in this.skills) {
                if (this.skills.hasOwnProperty(key))
                    data["Skills"][key] = this.skills[key] !== undefined ? this.skills[key] : null;
            }
        }
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
    course: string;

    constructor(data?: any) {
        super(data);
        this._discriminator = "Teacher";
        if (data !== undefined) {
            this.course = data["Course"] !== undefined ? data["Course"] : null;
        }
    }

    static fromJS(data: any): Teacher {
        return new Teacher(data);
    }

    toJS(data?: any) {
        data = data === undefined ? {} : data;
        data["Course"] = this.course !== undefined ? this.course : null;
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

export class GeoPoint { 
    latitude: number; 
    longitude: number;

    constructor(data?: any) {
        if (data !== undefined) {
            this.latitude = data["Latitude"] !== undefined ? data["Latitude"] : null;
            this.longitude = data["Longitude"] !== undefined ? data["Longitude"] : null;
        }
    }

    static fromJS(data: any): GeoPoint {
        return new GeoPoint(data);
    }

    toJS(data?: any) {
        data = data === undefined ? {} : data;
        data["Latitude"] = this.latitude !== undefined ? this.latitude : null;
        data["Longitude"] = this.longitude !== undefined ? this.longitude : null;
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

export class GenericRequestOfAddressAndPerson { 
    item1: Address; 
    item2: Person;

    constructor(data?: any) {
        if (data !== undefined) {
            this.item1 = data["Item1"] ? Address.fromJS(data["Item1"]) : null;
            this.item2 = data["Item2"] ? Person.fromJS(data["Item2"]) : null;
        }
    }

    static fromJS(data: any): GenericRequestOfAddressAndPerson {
        return new GenericRequestOfAddressAndPerson(data);
    }

    toJS(data?: any) {
        data = data === undefined ? {} : data;
        data["Item1"] = this.item1 ? this.item1.toJS() : null;
        data["Item2"] = this.item2 ? this.item2.toJS() : null;
        return data; 
    }

    toJSON() {
        return JSON.stringify(this.toJS());
    }

    clone() {
        var json = this.toJSON();
        return new GenericRequestOfAddressAndPerson(JSON.parse(json));
    }
}

export class Address { 
    isPrimary: boolean; 
    city: string;

    constructor(data?: any) {
        if (data !== undefined) {
            this.isPrimary = data["IsPrimary"] !== undefined ? data["IsPrimary"] : null;
            this.city = data["City"] !== undefined ? data["City"] : null;
        }
    }

    static fromJS(data: any): Address {
        return new Address(data);
    }

    toJS(data?: any) {
        data = data === undefined ? {} : data;
        data["IsPrimary"] = this.isPrimary !== undefined ? this.isPrimary : null;
        data["City"] = this.city !== undefined ? this.city : null;
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

export enum Gender {
    Male = <any>"Male", 
    Female = <any>"Female", 
}

export enum SkillLevelAsInteger {
    Low = 0, 
    Medium = 1, 
    Height = 2, 
}

export class Exception { 
    message: string; 
    innerException: Exception; 
    stackTrace: string; 
    source: string;

    constructor(data?: any) {
        if (data !== undefined) {
            this.message = data["Message"] !== undefined ? data["Message"] : null;
            this.innerException = data["InnerException"] ? Exception.fromJS(data["InnerException"]) : null;
            this.stackTrace = data["StackTrace"] !== undefined ? data["StackTrace"] : null;
            this.source = data["Source"] !== undefined ? data["Source"] : null;
        }
    }

    static fromJS(data: any): Exception {
        return new Exception(data);
    }

    toJS(data?: any) {
        data = data === undefined ? {} : data;
        data["Message"] = this.message !== undefined ? this.message : null;
        data["InnerException"] = this.innerException ? this.innerException.toJS() : null;
        data["StackTrace"] = this.stackTrace !== undefined ? this.stackTrace : null;
        data["Source"] = this.source !== undefined ? this.source : null;
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
    id: string;

    constructor(data?: any) {
        super(data);
        if (data !== undefined) {
            this.id = data["id"] !== undefined ? data["id"] : null;
        }
    }

    static fromJS(data: any): PersonNotFoundException {
        return new PersonNotFoundException(data);
    }

    toJS(data?: any) {
        data = data === undefined ? {} : data;
        data["id"] = this.id !== undefined ? this.id : null;
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

export interface FileParameter
{
    data: any;
    fileName: string;
}