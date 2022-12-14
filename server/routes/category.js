const { Router } = require("express");
const categoryRoute = Router();
const { CategoryController } = require("../controllers");

categoryRoute.get("/", CategoryController.getCategories);
categoryRoute.post("/add", CategoryController.add);
categoryRoute.post("/edit/:id", CategoryController.edit);
categoryRoute.get("/delete/:id", CategoryController.delete);
categoryRoute.get("/:id", CategoryController.getCategoryInformation);

categoryRoute.put("/edit/:id", CategoryController.edit);
categoryRoute.delete("/delete/:id", CategoryController.delete);

module.exports = categoryRoute;
