import React from "react";
import Button from "../Button/Button";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import ButtonsGroup from "../ButtonsGroup/ButtonsGroup";
import styles from "./Main.module.scss";
const Main = () => {
  console.log(styles);
  return (
    <main className={styles.main}>
      <h1 className={styles.main__title}>Buttons</h1>
      <div className={styles.buttonWrapper}>
        <ButtonsGroup>
          <ButtonGroup text="<Button />">
            <Button>Default</Button>
          </ButtonGroup>
          <ButtonGroup text="&:hover, &:focus" hover>
            <Button>Default</Button>
          </ButtonGroup>
        </ButtonsGroup>

        <ButtonsGroup>
          <ButtonGroup text="<Button variant=”outline” />">
            <Button variant="outline">Default</Button>
          </ButtonGroup>
          <ButtonGroup text="&:hover, &:focus" hover>
            <Button variant="outline">Default</Button>
          </ButtonGroup>
        </ButtonsGroup>

        <ButtonsGroup>
          <ButtonGroup text="<Button variant=”text” />">
            <Button variant="text">Default</Button>
          </ButtonGroup>
          <ButtonGroup text="&:hover, &:focus" hover>
            <Button variant="text">Default</Button>
          </ButtonGroup>
        </ButtonsGroup>

        <ButtonsGroup>
          <ButtonGroup text="<Button disableShadow />">
            <Button disableShadow>Default</Button>
          </ButtonGroup>
        </ButtonsGroup>

        <ButtonsGroup>
          <ButtonGroup text="<Button disabled />">
            <Button disabled>Default</Button>
          </ButtonGroup>
          <ButtonGroup text="<Button variant=”text” disabled disableShadow />">
            <Button variant="text" disabled disableShadow>
              Default
            </Button>
          </ButtonGroup>
        </ButtonsGroup>

        <ButtonsGroup>
          <ButtonGroup text="<Button startIcon=”local_grocery_store” />">
            <Button startIcon="local_grocery_store">Default</Button>
          </ButtonGroup>
          <ButtonGroup text="<Button endIcon=”local_grocery_store” />">
            <Button endIcon="local_grocery_store">Default</Button>
          </ButtonGroup>
        </ButtonsGroup>

        <ButtonsGroup>
          <ButtonGroup text="<Button size=”sm” />">
            <Button size="sm">Default</Button>
          </ButtonGroup>
          <ButtonGroup text="<Button size=”md” />">
            <Button size="md">Default</Button>
          </ButtonGroup>
          <ButtonGroup text="<Button size=”lg” />">
            <Button size="lg">Default</Button>
          </ButtonGroup>
        </ButtonsGroup>

        <ButtonsGroup>
          <ButtonGroup text="<Button color=”default” />">
            <Button color="default">Default</Button>
          </ButtonGroup>
          <ButtonGroup text="<Button color=”primary” />">
            <Button color="primary">Default</Button>
          </ButtonGroup>
          <ButtonGroup text="<Button color=”secondary” />">
            <Button color="secondary">Default</Button>
          </ButtonGroup>
          <ButtonGroup text="<Button color=”danger” />">
            <Button color="danger">Default</Button>
          </ButtonGroup>
        </ButtonsGroup>

        <ButtonsGroup>
          <ButtonGroup text="&:hover, &:focus" hover>
            <Button color="default">Default</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button color="primary">Default</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button color="secondary">Default</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button color="danger">Default</Button>
          </ButtonGroup>
        </ButtonsGroup>
      </div>

      <p className={styles.main__helperText}>
        Icons: https://material.io/resources/icons/?style=round
      </p>

      <p className={styles.main__creator}>
        created by <span className={styles.main__username}>emretfn</span> -
        devChallenges.io
      </p>
    </main>
  );
};

export default Main;
