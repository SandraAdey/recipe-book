"use client";
import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { storage } from "../../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db } from "../../../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { getDoc, doc, updateDoc } from "firebase/firestore";

export default function RecipeDetails({ params }) {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [file, setFile] = useState(null);

  useEffect(() => {
    const getRecipeDetails = async () => {
      const recipe = await getDoc(doc(db, "recipes", params.id));
      const data = recipe.data();
      setTitle(data.title);
      setIngredients(data.ingredients);
      setInstructions(data.instructions);
    };
    getRecipeDetails();
  }, [params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const recipe = doc(db, "recipes", params.id);
    await updateDoc(recipe, {
      title: title,
      ingredients: ingredients,
      instructions: instructions,
    });

    // Navigate using window.location
    window.location.href = "/";
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "80vh" }}
    >
      <Form onSubmit={handleSubmit}>
        <h1 className="mb-3 text-center">View/Update Recipe</h1>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            as="textarea"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="Ingredients"
            rows={5}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            as="textarea"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            placeholder="Instructions"
            rows={5}
            required
          />
        </Form.Group>

        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
