/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 * <p>
 * http://www.apache.org/licenses/LICENSE-2.0
 * <p>
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams, QueryEncoder } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Cookie } from 'ng2-cookies';

import { HttpUtils } from '../app/shared/utils/http.util';

import { ApiConfig } from '../config/api.config';

import { LoginParamModel } from '../app/shared/model/param/login.patam.model';
import { UserModel } from '../app/shared/model/user/user.model';
import { CommonResultModel } from '../app/shared/model/result/result.model';
import { CommonConfig } from '../config/common.config';

/**
 * 用户服务
 */
@Injectable()
export class UserService {

    constructor(
        private http: Http,
        private options: RequestOptions,
        private router: Router) {
    }

    /**
     * 登录
     */
    login(param: LoginParamModel) {
        console.log(`用户 ${param.username} 正在登录...`);
        const params = HttpUtils.getParams();
        params.append('username', param.username);
        params.append('password', param.password);
        params.append('grant_type', CommonConfig.AUTH_GRANT_TYPE);
        params.append('client_id', CommonConfig.AUTH_CLIENT_ID);
        const options = HttpUtils.getDefaultRequestOptionsByClient();
        options.params = params;
        return this.http.post(ApiConfig.AUTHORIZATION_API, param.toJson(), options)
            .map(res => res.json())
            .subscribe(
            data => {
                this.saveToken(data);
                return true;
            },
            err => {
                alert('Invalid Credentials');
                return false;
            });
    }

    saveToken(token) {
        const expireDate = new Date().getTime() + (1000 * token.expires_in);
        Cookie.set(CommonConfig.AUTH_TOKEN, token.access_token, expireDate);
        this.router.navigate(['/']);
    }

}