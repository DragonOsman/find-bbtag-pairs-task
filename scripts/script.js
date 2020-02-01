"use strict";

const str1 = "..[url]http://google.com[/url]..";
const str2 = "..[url][b]http://google.com[/b][/url].";
const regex = /\[(b|url|quote)\].*?\[\/\1\]/gsi;
alert(str1.match(regex));
alert(str2.match(regex));
