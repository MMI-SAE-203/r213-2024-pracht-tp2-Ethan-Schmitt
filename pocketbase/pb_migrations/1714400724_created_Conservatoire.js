/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "0j5u9cybas02i7w",
    "created": "2024-04-29 14:25:24.331Z",
    "updated": "2024-04-29 14:25:24.331Z",
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
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("0j5u9cybas02i7w");

  return dao.deleteCollection(collection);
})
