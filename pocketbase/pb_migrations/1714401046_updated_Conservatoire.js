/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0j5u9cybas02i7w")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "s8ne7a23",
    "name": "field4",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0j5u9cybas02i7w")

  // remove
  collection.schema.removeField("vqzhpilk")

  // remove
  collection.schema.removeField("jtnwoo8n")

  // remove
  collection.schema.removeField("s8ne7a23")

  // remove
  collection.schema.removeField("xrqhvujd")

  return dao.saveCollection(collection)
})
