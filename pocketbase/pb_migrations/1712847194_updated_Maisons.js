/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("spl5e6nmetr4sa9")

  // remove
  collection.schema.removeField("u0nkmnul")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1l7s9odv",
    "name": "Images",
    "type": "url",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("spl5e6nmetr4sa9")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "u0nkmnul",
    "name": "Images",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  // remove
  collection.schema.removeField("1l7s9odv")

  return dao.saveCollection(collection)
})
