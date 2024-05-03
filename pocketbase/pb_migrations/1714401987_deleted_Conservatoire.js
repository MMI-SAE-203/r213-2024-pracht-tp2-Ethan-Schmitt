/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("0j5u9cybas02i7w");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "0j5u9cybas02i7w",
    "created": "2024-04-29 14:25:24.331Z",
    "updated": "2024-04-29 14:30:46.764Z",
    "name": "Conservatoire",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ghfkborm",
        "name": "field",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "vqzhpilk",
        "name": "field2",
        "type": "editor",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "convertUrls": false
        }
      },
      {
        "system": false,
        "id": "jtnwoo8n",
        "name": "field3",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "s8ne7a23",
        "name": "field4",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "xrqhvujd",
        "name": "field5",
        "type": "email",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
