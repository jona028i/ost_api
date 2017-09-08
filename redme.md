# OsteAPI Dokumentation

## Resurser

**Get /cheeses**

Resursen representere alle oste i kartoteket.  
Resursen er formateret på følgende måde:

```JSON
[{
    "navn": string,
    "pris": number,
    "type": string,
    "antal": number,
    "varenr": number,
    "beskrivelse": {
        "farve": string,
        "smag": string,
        "billede": string,
        "land": string,
        "producent": string
    }
},{
    ...
}]
```

**GET /cheeses/\<varenummer>**

Resursen representere en enkelt ost i kartoteket.

```JSON
{
    "navn": string,
    "pris": number,
    "type": string,
    "antal": number,
    "varenr": number,
    "beskrivelse": {
        "farve": string,
        "smag": string,
        "billede": string,
        "land": string,
        "producent": string
    }
}
```

**POST /login**

Resursen varetager log-in informationer og returnere et AccessToken.  
Resuresns requset body er formateret på følgende måde:

```JSON
{
    "username" : string,
    "password" : string
}
```

Resursens response er formateret på følgende måde:

```JSON
{
    "AccessToken" : string
}
```

AccessToken er en 512 bit HEX streng, genereret med randomBytes.