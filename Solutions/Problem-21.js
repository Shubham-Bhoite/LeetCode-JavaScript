/*  21.Memoize :

 Given a function fn, return a memoized version of that function.
 A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.*/


function memoize(fn) {
    const cache = new Map();
    let callCount = 0;

    return function (...args) {
        if (args[0] === "getCallCount") {
            return callCount;
        }
        const key = JSON.stringify(args);
        if (!cache.has(key)) {
            cache.set(key, fn(...args));
            callCount++;
        }
    return cache.get(key);
        
    };
}

