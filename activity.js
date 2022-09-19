/* 1 */
{
    "_id" : ObjectId("63281281e266fa8f54a4aac7"),
    "name" : "HTML Basics",
    "price" : 20000,
    "isActive" : false,
    "instructor" : "Sir Alvin"
}

/* 2 */
{
    "_id" : ObjectId("63281281e266fa8f54a4aaca"),
    "name" : "CSS 101 + Flexbox",
    "price" : 21000,
    "isActive" : true,
    "instructor" : "Sir Alvin"
}

/* 3 */
{
    "_id" : ObjectId("63281283e266fa8f54a4aad0"),
    "name" : "Git 101, IDE and CLI",
    "price" : 19000,
    "isActive" : false,
    "instructor" : "Ma'am Tine"
}

//db.courses.find({$and:[{"instructor":{$eq:"Sir Alvin"}},{"price":{$gte: 20000}}]})

//db.courses.find({$and:[{"instructor":{$eq:"Ma'am Tine"}},{"isActive":{$eq: false}}]})

//db.courses.find({$and:[{"name":{$eq: 'R' }},{"price":{$lte: 25000}}]})