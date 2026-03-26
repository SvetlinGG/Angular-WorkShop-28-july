interface User {
    "themes": ["5fa64a9f2183ce1728ff371a"],
    "posts": ["5fa64a9f2183ce1728ff371b"],
    "_id": "5fa64a072183ce1728ff3719",
    "tel": "+359885885885",
    "email": "david@gmail.com",
    "username": "David",
    "password": "$2b$05$P7mXZNv.Hy1BXyxp.clQL.o/P5xdtrwbK9tw4UhWH73hf/LNDu0j2",
    "created_at": "2020-11-07T07:17:27.217Z",
    "updatedAt": "2020-11-07T07:20:00.055Z",
    "__v": 0
  };

export interface Theme {
        "subscribers": string[];
        "posts": string[];
        "_id": string;
        "themeName": string;
        "userId": User;
        "created_at": string;
        "updatedAt": string;
        "__v": number;
      }
