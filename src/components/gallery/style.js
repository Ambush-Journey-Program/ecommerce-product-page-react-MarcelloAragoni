import styled, { css } from 'styled-components';

const OverlayOn = css`
  display: flex;
`;

export const GalleryOverlay = styled.div`
  display: none;
  position: absolute;
  width: 445px;
  height: 445px;
  background: rgba(0, 0, 0, 0.7);
  top: 0;
  left: 0;
  text-align: center;
  z-index: 999;

  .slide {
    display: none;
  }

  .slideActive {
    grid-area: image;
    display: block;
  }

  img {
    margin-top: 5%;
    width: 600px;
  }

  ul {
    grid-area: thumb;
    padding: 0;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 600px;
    grid-column-gap: 10px;

    li {
      list-style: none;

      img {
        width: 100% !important;
      }
    }
  }

  button {
    z-index: 999;
    border-radius: 25px;
    top: 222.5px;
  }

  .leftButton {
    grid-area: buttonLeft;
  }

  .rightButton {
    grid-area: buttonRight;
  }

  div {
    place-content: center;
    display: grid;
    grid-template-areas:
      '... image image ...'
      'buttonLeft image image buttonRight'
      '... thumb thumb ...';
    grid-template-columns: 55px 300px 300px 55px;
    grid-template-rows: 200px 40px 150px;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    grid-row-gap: 200px;
    grid-column-gap: 16px;
  }

  ${({ overlay }) => overlay && OverlayOn}
`;

export const Gallery = styled.div`
  flex: 1;
  width: 445px;
  margin: 0 auto;
  text-align: -webkit-center;
  position: relative;
  height: 445px;

  .slide {
    display: none;
  }

  .slideActive {
    display: block;
  }

  .gallery__image {
    width: 100%;
    height: 100%;
  }

  ul {
    padding: 0;
    margin-top: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 100%;
    grid-column-gap: 10px;

    li {
      list-style: none;

      img {
        width: 100% !important;
      }
    }
  }

  button {
    z-index: 999;
    position: absolute;
    border-radius: 25px;
    top: 222.5px;
  }

  .rightButton {
    right: 0;
  }

  div {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 15px;
  }
`;
