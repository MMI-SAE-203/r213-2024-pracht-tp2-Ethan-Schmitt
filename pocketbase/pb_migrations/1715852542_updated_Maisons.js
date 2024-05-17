/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("spl5e6nmetr4sa9")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wgge0ldg",
    "name": "Agent",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "9egi3f9s5dn5o9r",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("spl5e6nmetr4sa9")

  // remove
  collection.schema.removeField("wgge0ldg")

  return dao.saveCollection(collection)
})
