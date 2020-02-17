export type State = string;

/**
 * @todo
 * - state start by 2 because of ref start at 1 on constructor
 * - on get method, weird things are done with any forced type
 */

export default class StateManager {
  protected _current: number = 0;

  constructor(states: State[]) {
    for (let i = 0, ref = 1, l = states.length; l--; i++)
      this[states[i]] = ref <<= 1;
  }

  /**
   * add a new state or list of states
   * @param state
   */
  public add(state: State | State[]): ThisType<State> {
    let ref = 0;
    if ((state = [].concat(state))) {
      for (let l = state.length; l--; ) {
        if (!(state[l] in this)) throw "State " + state + " doesn't exist";
        ref |= this[state[l]];
      }
    }
    this._current |= ref;
    return this;
  }

  /**
   * remove a new state or list of states
   * @param state
   */
  public remove(state: State | State[]): ThisType<State> {
    let ref = 0;

    if ((state = [].concat(state))) {
      for (let l = state.length; l--; ) {
        if (!(state[l] in this)) throw "State " + state + " doesn't exist";
        ref |= this[state[l]];
      }
    }
    this._current &= ~ref;
    return this;
  }

  /**
   * get current states
   */
  public get(): string[] {
    let res = [];

    for (let i in this) {
      if (!Object.hasOwnProperty.call(this, i) || i === "_current") continue;
      if (this._current & (this[i] as any)) res.push(i);
    }
    return res;
  }

  /**
   * clean and force a state
   */
  public set(state: State): ThisType<State> {
    if (!(state in this)) throw "State " + state + " doesn't exist";
    this._current = this[state];
    return this;
  }

  /**
   * check if a state or an array of states has been added
   * @param state
   */
  public has(state: State | State[]): boolean {
    let ref = 0;

    if ((state = [].concat(state))) {
      for (let l = state.length; l--; ) {
        if (!(state[l] in this)) throw "State " + state + " doesn't exist";
        ref |= this[state[l]];
      }
    }
    return (this._current & ref) === ref;
  }

  /**
   * clean the current state
   */
  public reset(): ThisType<State> {
    this._current = 0;
    return this;
  }
}
