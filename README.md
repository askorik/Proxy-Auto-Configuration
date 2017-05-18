Repository contains simple PAC ([Proxy Auto-Configuration](https://developer.mozilla.org/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_(PAC)_file)) file that can be used to increase web page loading speed for sites that embeding services (social network widgets, APIs, stat counters etc) that are forbidden in your country. In this case such pages could take minutes to load. 

To avoid this you can define `blockedDomains`. Any request to this domains or sub domains will be rejected by redirecting to localhost. 

- [How do I configure Mozilla Firefox to use a PAC file?](https://support.zscaler.com/hc/en-us/articles/207810986-How-do-I-configure-Mozilla-Firefox-to-use-a-PAC-file-)
- [How do I configure Google Chrome to use a PAC file?](https://support.zscaler.com/hc/en-us/articles/207805896-How-do-I-configure-Google-Chrome-to-use-a-PAC-file-)
