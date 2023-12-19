const BlogModel = require("../models/blog");

const post = async (req, res) => {
  const { title, description, category } = req.body;
  try {
    const postdata = await BlogModel.create({ title, description, category });
    res.json({
      message: "post created successfully",
      id: postdata._id,
      status: 200,
    });
  } catch (error) {
    res.json({ message: "post creation failed", status: 201 });
    console.log(error);
  }
};

const allBlogs = async (req, res) => {
  try {
    const blogs = await BlogModel.find();
    res.json({ blogs, status: 200 });
  } catch (error) {
    res.json({ message: "blogs fetch failed", status: 201 });
    console.log(error);
  }
};

const blog = async (req, res) => {
  const id = req.params.id;
  try {
    const blog = await BlogModel.find({ _id: id });
    res.json({ blog, status: 200 });
    console.log(id);
  } catch (error) {
    res.json({ message: "blog fetch failed", status: 201 });
    console.log(error);
  }
};

const editPost = async (req, res) => {
  const { title, description, category } = req.body;
  const id = req.params.id;
  try {
    await BlogModel.updateOne({ _id: id }, { title, description, category });
    res.json({
      message: "post updated successfully",
      id: id,
      status: 200,
    });
  } catch (error) {
    res.json({ message: "post updation failed", status: 201 });
    console.log(error);
  }
};

module.exports = { post, allBlogs, blog, editPost };
