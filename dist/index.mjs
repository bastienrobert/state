var StateManager = /** @class */ (function () {
    function StateManager(states) {
        this._current = 0;
        for (var i = 0, ref = 1, l = states.length; l--; i++)
            this[states[i]] = ref <<= 1;
    }
    StateManager.prototype._format = function (state) {
        var ref = 0;
        if ((state = [].concat(state))) {
            for (var l = state.length; l--;) {
                if (!(state[l] in this))
                    throw 'State ' + state + " doesn't exist";
                ref |= this[state[l]];
            }
        }
        return ref;
    };
    /**
     * add a new state or list of states
     * @param state
     */
    StateManager.prototype.add = function (state) {
        var res = this._format(state);
        this._current |= res;
        return this;
    };
    /**
     * remove a new state or list of states
     * @param state
     */
    StateManager.prototype.remove = function (state) {
        var res = this._format(state);
        this._current &= ~res;
        return this;
    };
    /**
     * get current states
     */
    StateManager.prototype.get = function () {
        var res = [];
        for (var i in this) {
            if (!Object.hasOwnProperty.call(this, i) || i === '_current')
                continue;
            if (this._current & this[i])
                res.push(i);
        }
        return res;
    };
    /**
     * clean and force a state
     */
    StateManager.prototype.set = function (state) {
        if (!(state in this))
            throw 'State ' + state + " doesn't exist";
        this._current = this[state];
        return this;
    };
    /**
     * check if a state or an array of states has been added
     * @param state
     */
    StateManager.prototype.has = function (state) {
        var res = this._format(state);
        return (this._current & res) === res;
    };
    /**
     * clean the current state
     */
    StateManager.prototype.reset = function () {
        this._current = 0;
        return this;
    };
    return StateManager;
}());

export default StateManager;
