const express = require("express");

const db = require("../data/db");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const posts = await db.find();

    res.status(200).json(posts);
  } catch (error) {
    res
      .status(500)
      .json({ error: "The posts information could not be retrieved." });
  }
});

router.get("/:id", async (req, res) => {});

router.post("/", async (req, res) => {});

router.delete("/:id", async (req, res) => {});

router.put("/:id", async (req, res) => {});

module.exports = router;
