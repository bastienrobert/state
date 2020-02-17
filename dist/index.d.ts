export declare type State = string;
export default class StateManager {
    protected _current: number;
    constructor(states: State[]);
    protected _format(state: State | State[]): number;
    /**
     * add a new state or list of states
     * @param state
     */
    add(state: State | State[]): ThisType<State>;
    /**
     * remove a new state or list of states
     * @param state
     */
    remove(state: State | State[]): ThisType<State>;
    /**
     * get current states
     */
    get(): string[];
    /**
     * clean and force a state
     */
    set(state: State): ThisType<State>;
    /**
     * check if a state or an array of states has been added
     * @param state
     */
    has(state: State | State[]): boolean;
    /**
     * clean the current state
     */
    reset(): ThisType<State>;
}
