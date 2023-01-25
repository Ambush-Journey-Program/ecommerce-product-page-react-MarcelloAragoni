import { useState } from 'react';
import { SliderData } from '../../utilities/sliderData';

import Image from './Image';
import Button from '../button/';
import * as S from './style.js';

export default function Gallery({ isOpen = false }: any) {
  const [current, setCurrent] = useState(0);
  const [overlay, setOverlay] = useState(isOpen);

  const length = Object.keys(SliderData).length;

  function handleButtonLeftClick() {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  function handleButtonRightClick() {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  function handleChangeCurrent(index: any) {
    setCurrent(index);
  }

  function handleChangeOverlay() {
    setOverlay(!overlay);
  }

  return (
    <>
      <S.Gallery>
        <Button className="leftButton" onClick={handleButtonLeftClick} icon="previous" />
        {SliderData.map((slider, index) => {
          return (
            <div className={index === current ? 'slideActive' : 'slide'} key={index}>
              {index === current && (
                <Image
                  onClick={handleChangeOverlay}
                  src={slider.image}
                  alt={slider.description}
                  className="gallery__image"
                />
              )}
            </div>
          );
        })}
        <ul>
          {SliderData.map((slider, index) => (
            <li onClick={() => handleChangeCurrent(index)} key={index}>
              <Image src={slider.thumbnail} alt={slider.description} />
            </li>
          ))}
        </ul>
        <Button className="rightButton" onClick={handleButtonRightClick} icon="next" />
      </S.Gallery>

      <S.GalleryOverlay overlay={overlay}>
        <div>
          <Button className="leftButton" onClick={handleButtonLeftClick} icon="previous" />
          {SliderData.map((slider, index) => {
            return (
              <div className={index === current ? 'slideActive' : 'slide'} key={index}>
                {index === current && (
                  <Image
                    onClick={handleChangeOverlay}
                    src={slider.image}
                    alt={slider.description}
                  />
                )}
              </div>
            );
          })}
          <ul>
            {SliderData.map((slider, index) => (
              <li onClick={() => handleChangeCurrent(index)} key={index}>
                <Image src={slider.thumbnail} alt={slider.description} />
              </li>
            ))}
          </ul>
          <Button className="rightButton" onClick={handleButtonRightClick} icon="next" />
        </div>
      </S.GalleryOverlay>
    </>
  );
}
