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
export class ApiConfig {

    public static AUTHORIZATION_API = '/oauth/token';

    private static V1_API_ROOT = '/api/v1/';

    public static API_USER_INFO = '/user/info/';
    public static API_USER_UPDATE = '/user/update';
    public static API_TOP_USER_BY_ACTIVE = '/user/top';
    public static API_USER_FOLLOW = '/user/follow';
    public static API_USER_REGISTER = '/user/register';
    public static API_USER_UNFOLLOW = '/user/unfollow';
    public static API_USER_FOLLOWS = '/user/follows/';
    public static API_USER_FOLLOW_CHECK = '/user/follows/check';
    public static API_USER_FOLLOW_COUNT = '/user/follows/count';

    public static API_ARTICLE_LIST = '/article/list';
    public static API_ARTICLE_SAVE = '/article/create';
    public static API_ARTICLE_INFO = '/article/info/';
    public static API_ARTICLE_UPDATE = '/article/update';
    public static API_ARTICLE_DELETE = '/article/delete/';
    public static API_ARTICLE_TOP_BY_USER = '/article/top/by/user';
    public static API_ARTICLE_FABULOUS = '/article/fabulous';
    public static API_ARTICLE_FABULOUS_CHECK = '/article/fabulous/check';
    public static API_ARTICLE_FABULOUS_COUNT = '/article/fabulous/count';
    public static API_ARTICLE_UNFABULOUS = '/article/unfabulous/';
    public static API_ARTICLE_VIEW = '/article/view';
    public static API_ARTICLE_VIEW_COUNT = '/article/view/count';
    public static API_ARTICLE_FOR_MY = '/article/my';

    public static API_ARTICLE_TYPE_LIST = '/article/type/list';

    public static API_ARTICLE_TAG_LIST = '/article/tag/list';

    public static API_REMIND_LIST_BY_USER = '/remind/list/user';
    public static API_REMIND_INFO = '/remind/info/';
    public static API_REMIND_READ = '/remind/read/';

    public static API_SPACE_LIST = '/space/list';
    public static API_SPACE_CREATE = '/space/create';
    public static API_SPACE_LIST_PUBLIC_USER = '/space/list/public/user';
    public static API_SPACE_LIST_USER = '/space/list/user';
    public static API_SPACE_ARTICLE = '/space/article';
    public static API_SPACE_INFO_CODE = '/space/info/code/';
    public static API_SPACE_INFO = '/space/info/';

    public static API_COMMENT_CREATE = '/comment/create';
    public static API_COMMENT_LIST = '/comment/list';

}
