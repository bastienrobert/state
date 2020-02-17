<h1 align="center">State</h1>

<h4 align="center">State management for all engines</h4>

<blockquote align="center">
  <em>Very fast cross-platform state management using bitwise operators.</em><br>
  <em>Fast & <b>374B</b> gzipped (because size matters)</em>
</blockquote>

<p align="center">
  <a aria-label="current github tag" href="https://github.com/bastienrobert/state/tags">
    <img alt="" src="https://img.shields.io/github/tag/bastienrobert/state.svg">
  </a>
  <a aria-label="install size" href="https://bundlephobia.com/result?p=@bastienrobert/state">
    <img alt="" src="https://badgen.net/bundlephobia/minzip/@bastienrobert/state">
  </a>
  <a aria-label="maintainability" href="https://codeclimate.com/github/bastienrobert/state/maintainability">
    <img alt="" src="https://api.codeclimate.com/v1/badges/f3da7bb1259957bbac24/maintainability">
  </a>
  <a aria-label="coverage status" href="https://coveralls.io/github/bastienrobert/state">
    <img alt="" src="https://coveralls.io/repos/github/bastienrobert/state/badge.svg">
  </a>
  <a aria-label="build status" href="https://travis-ci.org/bastienrobert/state">
    <img alt="" src="https://travis-ci.org/bastienrobert/state.svg?branch=master">
  </a>
  <a aria-label="license" href="https://github.com/bastienrobert/state/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/bastienrobert/state.svg" alt="">
  </a>
</p>

## Install

```
npm install @bastienrobert/state
```

## Usage

```
import StateManager from '@bastienrobert/state'

const state = new StateManager(['STATE1', 'STATE2', 'STATE3'])
state.add('STATE1')
state.remove('STATE1')
state.add(['STATE1', 'STATE2'])
state.remove(['STATE1', 'STATE2'])

state.has('STATE1')
state.has(['STATE1', 'STATE2'])

state.get()
```

## API

See the [Documentation](http://bastienrobert.github.io/state).

## Contributions

Inspired by https://gist.github.com/bloodyowl/5729489.
