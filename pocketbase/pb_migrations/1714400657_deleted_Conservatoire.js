/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("bv301w7b5tj7yld");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "bv301w7b5tj7yld",
    "created": "2024-04-29 14:22:22.797Z",
    "updated": "2024-04-29 14:22:22.797Z",
    "name": "Conservatoire",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "0j04mtjj",
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
})
