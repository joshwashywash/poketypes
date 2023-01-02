## todos

1. some kind of circular interpolation
2. work with polar coordinates up until they're needed in the svg - there's duplicated calculation `Math.cos` and `Math.sin`.
3. in order to get reactivity from tweakpane, the interpolation object has to assigned to itself when the `on change` callback. it's just a little funky. might be more elegant with a store or something else
