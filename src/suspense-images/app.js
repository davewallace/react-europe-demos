import React, { Timeout, Component } from 'react';
import ReactDOM from 'react-dom';

import { Container, Select, H1 } from './common';

import Images from './images';
import Loading from './loading';

const Placeholder = props => {
  return (
    <Timeout ms={500}>
      {didTimeout => {
        return didTimeout ? <Loading /> : props.children;
      }}
    </Timeout>
  );
};

export default class SuspenseImages extends Component {
  state = {
    repo: 'astaria-website',
  };
  updateRepo = e => {
    ReactDOM.unstable_deferredUpdates(() => {
      this.setState({
        repo: e.target.value,
      });
    });
  };
  render() {
    return (
      <Container>
        <H1>How many collaborators don't I have?</H1>
        <Select name="text" onChange={this.updateRepo} value={this.state.repo}>
          <option value="astaria-website">astaria-website</option>
          <option value="amp-letter.github.io">amp-letter.github.io</option>
          <option value="stampit">stampit</option>
        </Select>
        <Placeholder>
          <Images repo={this.state.repo} />
        </Placeholder>
      </Container>
    );
  }
}
