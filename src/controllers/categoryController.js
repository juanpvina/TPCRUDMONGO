import Category from "../models/categoryModel.js";

export const getAll =async (req, res)=>{
    try{
        const categories = await Category.find();
        if (categories.length === 0) {
          return res.status(404).json({ message: "No hay categorias"});
        }
        res.status(200).json(categories);
    }catch (error){
        res.status(500).json({messaje: "Internal server error", error});
    }
};
export const create = async (req, res) => {
    try {
      const categoryData = new Category(req.body);
      const { name } = categoryData;
      const categoryExist = await Category.findOne({ name });
      if (categoryExist) {
        return res.status(400).json({ message: `La categoria ${name} ya existe` });
      }
      const savedCategory = await categoryData.save();
      res.status(200).json(savedCategory);
    } catch (error) {
      res.status(500).json({ message: "internal server error", error });
    }
  };

  export const update = async (req, res) => {
    try {
      const id = req.params.id;
      const categoryExist = await Category.findOne({ _id: id });
      if (!categoryExist) {
        return res.status(404).json({ message: "No se encontro la categoria" });
      }
      const updateCategory = await Category.findByIdAndUpdate({ _id: id }, req.body, {
        new: true,
      });
      res.status(201).json({ message: 'Categoria actualizada!', updateCategory});
    } catch (error) {
      res.status(500).json({ error: "internal server error" });
    }
  };
  
  export const deleteCategory = async (req, res) => {
    try {
      const _id = req.params.id;
      const categoryExist = await Category.findOne({ _id });
      if (!categoryExist) {
        return res.status(404).json({ message: "No se encontro la categoria" });
      }
      await Category.findByIdAndDelete(_id);
      res.status(201).json({ message: "Categoria borrada" });
    } catch (error) {
      res.status(500).json({ error: "internal server error" });
    }
  };
  