import React from "react";
import { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectShoppingList } from "redux/shoppingList/selectors";
import {
  fetchShoppingList,
  updateShoppingList,
} from "redux/shoppingList/operation";
import Container from "../Container";
import {
  SectionIngredients,
  TitleWrap,
  Title,
  TitleTextWrap,
  TitleText,
  IngedientsList,
  IngedientsItem,
  Wrap,
  IngedientsImg,
  IngedientsTitle,
  IngedientsMeasure,
  IngedientsCheck,
  CheckBoxWrap,
  CheckBoxLabel,
  CheckMarkIcon,
} from "./RecipeIngredientsList.styled";
import DefaultIngredientsImg from "images/skeleton/ingredient-img.svg";

const RecipeIngredientsList = ({ ingredients }) => {
  const [selectedIngredientIds, setSelectedIngredientIds] = useState([]);
  const shoppingList = useSelector(selectShoppingList);
  const ids = useMemo(
    () => shoppingList.map((item) => item._id),
    [shoppingList]
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchShoppingList());
  }, [dispatch]);

  useEffect(() => {
    setSelectedIngredientIds(ids);
  }, [ids]);

  const handleInputChange = (evt) => {
    const { id, checked } = evt.target;
    setSelectedIngredientIds((prevSelectedIds) => {
      if (checked) {
        return [...prevSelectedIds, id];
      } else {
        return prevSelectedIds.filter((selectedId) => selectedId !== id);
      }
    });

    const currentIngredient = ingredients.find((item) => item._id === id);
    const { measure, _id } = currentIngredient;
    const credentials = { measure: measure, ingredientId: _id };
    dispatch(updateShoppingList(credentials));
  };

  return (
    <SectionIngredients>
      <Container>
        <TitleWrap>
          <Title children="Ingedients" />
          <TitleTextWrap>
            <TitleText>Number</TitleText>
            <TitleText>Add to list</TitleText>
          </TitleTextWrap>
        </TitleWrap>
        <IngedientsList>
          {ingredients &&
            ingredients.map(({ image, _id, measure, name }) => {
              return (
                <IngedientsItem key={_id}>
                  <Wrap>
                    {
                      <IngedientsImg
                        src={image ? image : DefaultIngredientsImg}
                        alt="Ingredient"
                      />
                    }
                    <IngedientsTitle>{name}</IngedientsTitle>
                  </Wrap>
                  <Wrap>
                    <IngedientsMeasure>{measure}</IngedientsMeasure>
                    <CheckBoxLabel htmlFor={_id}>
                      <IngedientsCheck
                        type="checkbox"
                        checked={selectedIngredientIds.includes(_id)}
                        id={_id}
                        value={_id}
                        onChange={handleInputChange}
                      />
                      <CheckBoxWrap>
                        <CheckMarkIcon />
                      </CheckBoxWrap>
                    </CheckBoxLabel>
                  </Wrap>
                </IngedientsItem>
              );
            })}
        </IngedientsList>
      </Container>
    </SectionIngredients>
  );
};

export default RecipeIngredientsList;