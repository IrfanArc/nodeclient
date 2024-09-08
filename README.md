This is a simple client app written in Node.js using express framework. It calls the nodeserver app and fetches the file in an http response and stores it in /clientdata.  
Dockerfile and Docker-compose files are part of this repository.

Heres a sample use of this app:
irfan@irfan-4180b39:~/Desktop/dice/project/git/nodeserver/server/express-checksum$ curl -v -X GET http://localhost:3001/generate-file
Note: Unnecessary use of -X or --request, GET is already inferred.
*   Trying 127.0.0.1:3001...
* Connected to localhost (127.0.0.1) port 3001 (#0)
> GET /generate-file HTTP/1.1
> Host: localhost:3001
> User-Agent: curl/7.81.0
> Accept: */*
> 
* Mark bundle as not supporting multiuse
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Content-Type: application/json; charset=utf-8
< Content-Length: 1558
< ETag: W/"616-1i0sccA+v1foXSGKoObHl9m9IyM"
< Date: Sun, 08 Sep 2024 12:08:31 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
< 
{"message":"File received and saved successfully!","checksum":"9d5dc93d7c83c93ca766a31975867564a0c349c9999f8499648ad735464ff765","filePath":"/clientdata/received_file.txt","fileContents":"N1UCdPByOQt5wKSGl88jmihF+P+1ltlH6egNp1wUNPlI1EZ4jhAVlkISkJdYX0rzZ1/+rIXqDrrTixD97oVlsskPJOdIvTeaLxnHTFz11ROQPXWxDlfRN16PVILq2yYUBiHOFGCibgpVROhZZhNopLodrA89yK1Fnd7Ay0OtoM+VUakDQbtrtC+Ey7Lh8SriGOYUF+TuaoZntRaS46eFYzVsBymOajy7MwicMoHfHDIlwgRnt8feI9z80HO91DE4pPJK+A0k/DMRPCEVwFytDqKfIuRmCSwg/av7hherBGUGIzLwM1PHxf7sPvXNp8Sa6ORAOYwiss77wfI9UX7+/IK7m3OJqqf0gt+sx65oMRjVBd/2LsE7BW72d/jvg/TzaJIZS08stwXNRYxoPynm+xNh2Yp4zdf9LgG8otfbWadiHG30dg5zerHrCjdvlkBZ+z3ZafyVWkNILyHwOnEvR5CZ1JagdBhYJWJkn+EyGx6WMFaHtfYjCo3iWTP+8q52VPgQNveBAX3Yr4CaCUQIH0fQXIMDkScS9T/6XBYl1T8fqWo8wqM3rd3byU4Q7+aobPGGEQr0tYrFO+6jGuHCWC6zgkAXUwaA3TAS2loPXB8GArAegm5ZwzIT+8ylvaFl6PlzWf/diMU4KQRFRg4twYHdbDJBkAJcsMEbG7U8bGCgeVJ04HXnoPn7qfM8lPJO7ci4fTpEpxPSELSz4Zx+u8rkPFFV1OnD/lDPwgNg8reqfcRslEmuiduRHyqayPNkpoTIKd+zkgv9372yRQOFz7hpMxiVIRBkMa/oi+nB3aEsAXMF3ooIXWj1j3A8rrx3l2/i* Connection #0 to host localhost left intact
4EEy15A7sSWsMVZfCAbE7xHP6B2BobQm1XIto55q28SRyUgVPGxd5AEaTxLan1vcQhr6A1cUvSA2B7D5L1IZJlRSDa2xJK8u1QmCWy/nrchjrhQnA6AkhW9CA7AjV5TQahEaKbe8AJcLv0VADazFM83Md5tiQH6l+VNqWijW5xWRJDQaLRWq4RWELTJpsBmYdBmvNS703CijHTaBs6A//cY+l+xGzHm3NSYhlGr4GTLqfNJH6B2tkClL/oWesHcTjCgWRDKk5vCDhIgk5Qn0Pd3jr37EPgKq2hjLwnWCDRzg5Tk+HrQYXwuRkCY2cGsdGlZnX0E/ek6BNFe1OrMjHyL2DV/ks+I1x58T2Pe1IVDFKn3bemv7H4PHaHPt/AaSD4vISikrFZ7KeXQOZFnYZ8RgajNU32O7fMz14Pnxj7c1zcpk7OCYF5b3cliM2rUHdE7X0sZRPuHxKkSv5+a07tkU8DaQySS1lc3/UFH6F9Z+URo6Awp8b0OgXPXqjoMPRD53QZlnji4o2vOGiA=="}irfan@irfan-4180b39:~/Desktop/dice/project/git/nodeserver/server/express-checksum$                                                                                
