const blogController = require("../controllers/blog");
const router = require("express").Router();

router.post("/post", blogController.post);
router.get("/allblogs", blogController.allBlogs);
router.get("/blog/:id", blogController.blog);
router.put("/editpost/:id", blogController.editPost);

module.exports = router;
