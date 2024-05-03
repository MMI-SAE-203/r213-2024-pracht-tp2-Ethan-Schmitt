/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("llbfjbxg4fzauch");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "llbfjbxg4fzauch",
    "created": "2024-04-29 14:47:31.035Z",
    "updated": "2024-04-29 14:47:31.035Z",
    "name": "artistes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "onosfsx7",
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
        "id": "s110llql",
        "name": "field2",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
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
