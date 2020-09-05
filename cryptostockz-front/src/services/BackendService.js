import config from '../config';
import axios from 'axios';

export const GetUserInfo = (token, username) => {
    var options = {
        method: 'get',
        url: config.baseUrl + '/account/' + username,
        headers: {
            'x-access-token': token
        }
    };

    return new Promise((resolve, reject) => {
        axios(options)
            .then(function (response) {
                resolve(response);
            })
            .catch(function (error) {
                reject(error);
            });
    });
};


export const GetProductInfo = (token, productId) => {
    var options = {
        method: 'get',
        url: config.baseUrl + '/product/' + productId,
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': token
        }
    };

    return new Promise((resolve, reject) => {
        axios(options)
            .then(function (response) {
                resolve(response);
            })
            .catch(function (error) {
                reject(error);
            });
    });
};

export const GetUserProducts = (token) => {
    var options = {
        method: 'get',
        url: config.baseUrl + '/product',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': token
        }
    };

    return new Promise((resolve, reject) => {
        axios(options)
            .then(function (response) {
                resolve(response);
            })
            .catch(function (error) {
                reject(error);
            });
    });

};

export const CreateNewProduct = (token, name, ean, sku, manufacturer) => {
    var data = JSON.stringify(
        [
            {
                "name": name,
                "ean": ean,
                "sku": sku,
                "manufacturer": manufacturer
            }
        ]);

    var options = {
        method: 'post',
        url: config.baseUrl + '/base/product',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': token
        },
        data: data
    };

    return new Promise((resolve, reject) => {
        axios(options)
            .then(function (response) {
                resolve(response);
            })
            .catch(function (error) {
                reject(error);
            });
    });
}

export const GetPendingProducts = (token) => {
    var options = {
        method: 'get',
        url: config.baseUrl + '/base/product/pending',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': token
        }
    };

    return new Promise((resolve, reject) => {
        axios(options)
            .then(function (response) {
                resolve(response);
            })
            .catch(function (error) {
                reject(error);
            });
    });

};

export const GetManufacturers = (token) => {
    var options = {
        method: 'get',
        url: config.baseUrl + '/manufacturers', // Cambiar esta peticion
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': token
        }
      };
    return new Promise((resolve, reject) => {
        axios(options)
            .then(function (response) {
                resolve(response);
            })
            .catch(function (error) {
                reject(error);
            });
    });
};

export const SigninUser = (username,password) => {
    var payload={
        "username":username,
        "password":password
    }

    var options = {
        method: 'post',
        url: config.baseUrl+'/signin',
        headers: {
            'Content-Type': 'application/json'
        },
        data : payload
    };


    return new Promise((resolve, reject) => {
        axios(options)
            .then(function (response) {
                resolve(response);
            })
            .catch(function (error) {
                reject(error);
            });
    });
};

export const SignUpUser = (username, email, password, name, account) => {
    var payload = {
        "username": username,
        "email": email,
        "password": password,
        "name": name,
        "roles": ["user"],
        "metamaskAccount": account
    }
    var options = {
        method: 'post',
        url: config.baseUrl + '/signup',
        headers: {
            'Content-Type': 'application/json'
        },
        data: payload
    };

    return new Promise((resolve, reject) => {
        axios(options)
            .then(function (response) {
                resolve(response);
            })
            .catch(function (error) {
                reject(error);
            });
    });
};