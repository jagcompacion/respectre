import React from 'react';
import 'spectre.css/dist/spectre.css';
import 'spectre.css/dist/spectre-icons.css';
import { storiesOf } from '@storybook/react';
import {
  Img,
  Figure,
  FigureCaption,
  Video,
} from '../ui/elements';
import { Container, Cols, Col } from '../ui/layout';

storiesOf('Elements/ Media', module)
  .add('default', () => (
    <Container className="p-2">
      <Cols>
        <Col column size="12">
          <Img src="https://picturepan2.github.io/spectre/img/osx-el-capitan.jpg" style={{ width: '100%' }} />
        </Col>
        <Col column size="6">
          <Figure>
            <Img src="https://picturepan2.github.io/spectre/img/osx-yosemite.jpg" type="contain" style={{ height: '10rem', width: '100%' }} />
            <FigureCaption>
              img-fit-container
            </FigureCaption>
          </Figure>
        </Col>
        <Col column size="6">
          <Figure>
            <Img src="https://picturepan2.github.io/spectre/img/osx-yosemite-2.jpg" type="cover" style={{ height: '10rem', width: '100%' }} />
            <FigureCaption>
              img-fit-cover
            </FigureCaption>
          </Figure>
        </Col>
      </Cols>
    </Container>
  ))
  .add('figure', () => (
    <Container className="p-2">
      <Figure>
        <Img src="https://picturepan2.github.io/spectre/img/osx-yosemite-2.jpg" style={{ width: '100%' }} />
        <FigureCaption className="text-center">
          macOS Yosemite wallpaper
        </FigureCaption>
      </Figure>
    </Container>
  ))
  .add('video', () => (
    <Container className="p-2">
      <Video>
        <iframe title="raphsody" src="https://www.youtube.com/embed/tgbNymZ7vqY" height="400" frameBorder="0" allowFullscreen />
      </Video>
    </Container>
  ));
