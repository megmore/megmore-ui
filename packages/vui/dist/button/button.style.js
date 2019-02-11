import styled from 'vue-styled-components';
export default styled.div `
// selection
  --m-button-size-xs: 2rem;
  --m-button-size-sm: 2.5rem;
  --m-button-size-md: 3rem;
  --m-button-size-lg: 3.5rem;
  --m-button-size-xl: 4rem;

  // default
  --m-button-color: var(--m-color-primary);
  --m-button-hover-color: var(--m-color-primary);
  --m-button-font-color: var(--m-bg-color);
  --m-button-elevation: var(--m-elevation-2);
  --m-button-shape: var(--m-shape-corner);
  --m-button-size: var(--m-button-size-md);
  --m-button-border-size: .2rem;
  
    outline: none;
  background-color: var(--m-button-color);
  color: var(--m-button-font-color);
  min-height: var(--m-button-size);
  height: var(--m-button-size);
  min-width: var(--m-button-size);
  //margin: .5em;
  border-radius: var(--m-button-shape);
  box-shadow: var(--m-button-elevation);
  border: none;
  padding: var(--m-button-border-size);
  display: inline-flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  user-select: none;
  box-sizing: border-box;
  position: relative;
  line-height: 1;
  transition: all ease .3s;
  //> * {
  //  margin: 0 calc(var(--m-button-size) / 2);
  //}
  > * {
    vertical-align: middle;
  }
    // hover
  &:hover {
    background-color: var(--m-button-hover-color);
    border-color: var(--m-button-hover-color);
  }

  // variety
  &.m-variety-outline {
    background-color: var(--m-bg-color-main);
    //border-color: var(--m-button-color);
    color: var(--m-button-color);
    border: var(--m-button-border-size) solid var(--m-button-color);
    padding: 0;
    &:hover {
      //color: var(--m-button-hover-color);
      //border-color: var(--m-button-hover-color);
      //background-color: var(--m-button-hover-color);
      color: var(--m-button-color);
    }
  }
  &.m-variety-flat {
    background-color: var(--m-bg-color);
    color: var(--m-button-color);
  }

  // shape
  &.m-shape-circle {
    border-radius: var(--m-button-size);
  }
  &.m-shape-round {
    border-radius: var(--m-shape-round);
  }
  &.m-shape-square {
    border-radius: var(--m-shape-square);
  }
  // block
  &.m--block {
    width: 100%;
    display: flex;
  }
`;
//# sourceMappingURL=button.style.js.map