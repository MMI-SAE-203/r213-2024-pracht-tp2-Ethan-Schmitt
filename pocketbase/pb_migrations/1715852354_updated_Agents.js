/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9egi3f9s5dn5o9r")

  collection.name = "Agent"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9egi3f9s5dn5o9r")

  collection.name = "Agents"

  return dao.saveCollection(collection)
})
