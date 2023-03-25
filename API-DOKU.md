# API DOKU Vokabeltrainer
**RESTful API**

## create new WORDS (CREATE)

### Request
- Methode:        **POST**
- URL:            /vokabeltrainer
- Request-Body:   ```{
                    "text": *string*
                }```

### Response
- success:
- Response-Body:  ```{
                    "id": *number*,
                    "error": null
                }```

- server error:
- Response-Body:  ```{
                    "id": null
                    "error": *string*
                }```


## show WORDS (READ)

### Request
- Methode:        **GET**
- URL:            /vokabeltrainer

### Response
- success:
- Response-Body:  ```{
                    "todos": [
                        {"text": *string*, "id": *number*},
                        {"text": *string*, "id": *number*},
                        {"text": *string*, "id": *number*},
                        ...
                    ]
                }```

- server error:
- Response-Body:  ```{
                    "error": *string*
                }```


## update WORDS (UPDATE)

### Request
- Methode:        **PUT**
- URL:            /vokabeltrainer/update
- Request-Body:   ```{
                    "id": *number*,
                    "text": *string*
                }```

### Response
- success:
- Response-Body:  ```{
                    "id": *number*,
                    "text": *string*,
                    "error": null
                }```

- server error:
- Response-Body:  ```{
                    "id": null,
                    "text": null,
                    "error": *string*
                }```


## delete WORDS (DELETE)

### Request
- Methode:        **DELETE**
- URL:            /vokabeltrainer/delete
- Request-Body:   ```{
                    "id": *number*
                }```

### Response
- success:
- Response-Body:  ```{
                    "id": null
                    "error": *string*
                }```